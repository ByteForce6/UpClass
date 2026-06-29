import { useState, useEffect, useCallback } from "react";
import { executeQuery } from "firebase/data-connect";
import { dataConnect } from "../../firebase";
import {
  listCursosRef,
  listarEstudiantesRef,
  listInstructorsRef,
  listReportesEstadisticasRef,
  type ListCursosData,
  type ListInstructorsData,
  type ListarEstudiantesData,
  type ListReportesEstadisticasData,
} from "../dataconnect-generated";

// ─── Tipos exportados ─────────────────────────────────────────────────────────

export interface CursoStat {
  cursoId: number;
  nombre: string;
  categoria: string;
  estado: string | null;
  instructorNombre: string;
  totalInscritos: number;
  totalBajas: number;
  porcentajeAsistencia: number;
  calificacionPromedio: number | null;
  ingresosGenerados: number | null;
  fechaActualizacion: string;
}

export interface KPIs {
  totalEstudiantes: number;
  totalInstructores: number;
  totalCursos: number;
  cursosActivos: number;
  asistenciaPromedio: number;
  ingresosTotal: number;
  totalInscritos: number;
  totalBajas: number;
}

export interface BarDatum  { name: string; fullName: string; Inscritos: number; Bajas: number }
export interface LineDatum { periodo: string; Asistencia: number }
export interface PieDatum  { name: string; value: number }
export interface AreaDatum { name: string; fullName: string; Ingresos: number }

export interface EstadisticasData {
  kpis:     KPIs;
  barData:  BarDatum[];
  lineData: LineDatum[];
  pieData:  PieDatum[];
  areaData: AreaDatum[];
  tabla:    CursoStat[];
  periodos: string[];
}

// ─── Tipos internos del SDK ───────────────────────────────────────────────────

type CursoRow      = ListCursosData["cursos"][number];
type InstructorRow = ListInstructorsData["instructors"][number];
type EstudianteRow = ListarEstudiantesData["estudiantes"][number];
type ReporteRow    = ListReportesEstadisticasData["reporteEstadisticas"][number];

// ─── Helper ───────────────────────────────────────────────────────────────────

function trunc(s: string, n = 15) {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useEstadisticas(periodo: string) {
  const [data,       setData]       = useState<EstadisticasData | null>(null);
  const [loading,    setLoading]    = useState(true);
  const [error,      setError]      = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // ── Queries reales ──────────────────────────────────────────────────────
      const [cursosRes, estudiantesRes, instructoresRes, reportesRes] = await Promise.all([
        executeQuery(listCursosRef(dataConnect)),
        executeQuery(listarEstudiantesRef(dataConnect)),
        executeQuery(listInstructorsRef(dataConnect)),
        executeQuery(listReportesEstadisticasRef(dataConnect)),
      ]);

      const cursos:       CursoRow[]      = cursosRes.data?.cursos                        ?? [];
      const estudiantes:  EstudianteRow[] = estudiantesRes.data?.estudiantes              ?? [];
      const instructores: InstructorRow[] = instructoresRes.data?.instructors             ?? [];
      const reportesBD:   ReporteRow[]    = reportesRes.data?.reporteEstadisticas         ?? [];

      // ── Filtra por periodo ──────────────────────────────────────────────────
      const filtrados = reportesBD.filter((r) => r.periodoAnio === periodo);

      // ── Mapa instructorId → nombre ──────────────────────────────────────────
      const instructorMap = new Map<number, string>();
      instructores.forEach((inst) => {
        instructorMap.set(inst.instructorId, inst.usuario.nombreCompleto);
      });

      // ── Tabla ───────────────────────────────────────────────────────────────
      const tabla: CursoStat[] = filtrados.map((r) => {
        const cursoBD = cursos.find((c) => c.cursoId === r.curso.cursoId);
        return {
          cursoId:              r.curso.cursoId,
          nombre:               r.curso.nombre,
          categoria:            r.curso.categoria ?? "Sin categoría",
          estado:               cursoBD?.estado ?? null,
          instructorNombre:     cursoBD?.instructor
                                  ? instructorMap.get(cursoBD.instructor.instructorId) ?? "Sin asignar"
                                  : "Sin asignar",
          totalInscritos:       r.totalInscritos,
          totalBajas:           r.totalBajas,
          porcentajeAsistencia: r.porcentajeAsistencia,
          calificacionPromedio: r.calificacionPromedio ?? null,
          ingresosGenerados:    r.ingresosGenerados    ?? null,
          fechaActualizacion:   r.fechaActualizacion,
        };
      });

      // ── KPIs ────────────────────────────────────────────────────────────────
      const kpis: KPIs = {
        totalEstudiantes:   estudiantes.length,
        totalInstructores:  instructores.length,
        totalCursos:        cursos.length,
        // estado es string | null | undefined en el tipo del SDK
        cursosActivos:      cursos.filter((c) => c.estado === "activo").length,
        asistenciaPromedio: filtrados.length
          ? Math.round(filtrados.reduce((s, r) => s + r.porcentajeAsistencia, 0) / filtrados.length)
          : 0,
        ingresosTotal:  filtrados.reduce((s, r) => s + (r.ingresosGenerados  ?? 0), 0),
        totalInscritos: filtrados.reduce((s, r) => s + r.totalInscritos,  0),
        totalBajas:     filtrados.reduce((s, r) => s + r.totalBajas,      0),
      };

      // ── Series para gráficas ────────────────────────────────────────────────
      const barData: BarDatum[] = tabla.map((r) => ({
        name: trunc(r.nombre), fullName: r.nombre,
        Inscritos: r.totalInscritos, Bajas: r.totalBajas,
      }));

      const periodos = [...new Set(reportesBD.map((r) => r.periodoAnio))].sort();
      const lineData: LineDatum[] = periodos.map((p) => {
        const rows = reportesBD.filter((r) => r.periodoAnio === p);
        return {
          periodo: p,
          Asistencia: rows.length
            ? Math.round(rows.reduce((s, r) => s + r.porcentajeAsistencia, 0) / rows.length)
            : 0,
        };
      });

      const catMap: Record<string, number> = {};
      filtrados.forEach((r) => {
        const cat = r.curso.categoria ?? "Sin categoría";
        catMap[cat] = (catMap[cat] ?? 0) + r.totalInscritos;
      });
      const pieData: PieDatum[] = Object.entries(catMap).map(([name, value]) => ({ name, value }));

      const areaData: AreaDatum[] = tabla.map((r) => ({
        name: trunc(r.nombre), fullName: r.nombre,
        Ingresos: r.ingresosGenerados ?? 0,
      }));

      setData({ kpis, barData, lineData, pieData, areaData, tabla, periodos });
      setLastUpdate(new Date());

    } catch (err) {
      console.error("[useEstadisticas]", err);
      setError("No se pudieron cargar las estadísticas. Verifica tu conexión con Firebase.");
    } finally {
      setLoading(false);
    }
  }, [periodo]);

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, 30_000);
    return () => clearInterval(id);
  }, [fetchData]);

  // ── Exportar Excel ──────────────────────────────────────────────────────────
  const exportExcel = useCallback(async () => {
    if (!data) return;
    const { utils, writeFile } = await import("xlsx");

    const rows = data.tabla.map((r) => ({
      "Curso":           r.nombre,
      "Categoría":       r.categoria,
      "Instructor":      r.instructorNombre,
      "Estado":          r.estado ?? "—",
      "Total inscritos": r.totalInscritos,
      "Total bajas":     r.totalBajas,
      "% Asistencia":    r.porcentajeAsistencia,
      "Calif. promedio": r.calificacionPromedio ?? "—",
      "Ingresos (MXN)":  r.ingresosGenerados ?? 0,
      "Actualización":   r.fechaActualizacion,
    }));

    const ws1 = utils.json_to_sheet(rows);
    ws1["!cols"] = Object.keys(rows[0]).map((k) => ({ wch: Math.max(k.length + 2, 16) }));

    const kpiRows = [
      { "Métrica": "Total estudiantes",    "Valor": data.kpis.totalEstudiantes   },
      { "Métrica": "Total instructores",   "Valor": data.kpis.totalInstructores  },
      { "Métrica": "Total cursos",         "Valor": data.kpis.totalCursos        },
      { "Métrica": "Cursos activos",       "Valor": data.kpis.cursosActivos      },
      { "Métrica": "Asistencia promedio",  "Valor": `${data.kpis.asistenciaPromedio}%` },
      { "Métrica": "Ingresos totales MXN", "Valor": data.kpis.ingresosTotal      },
      { "Métrica": "Total inscritos",      "Valor": data.kpis.totalInscritos     },
      { "Métrica": "Total bajas",          "Valor": data.kpis.totalBajas         },
    ];
    const ws2 = utils.json_to_sheet(kpiRows);
    ws2["!cols"] = [{ wch: 24 }, { wch: 16 }];

    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws1, "Detalle por curso");
    utils.book_append_sheet(wb, ws2, "KPIs");
    writeFile(wb, `UpClass_Estadisticas_${periodo}.xlsx`);
  }, [data, periodo]);

  // ── Exportar PDF ────────────────────────────────────────────────────────────
  const exportPDF = useCallback(async (reportRef: React.RefObject<HTMLDivElement | null>) => {
    if (!reportRef.current) return;
    const { default: jsPDF }       = await import("jspdf");
    const { default: html2canvas } = await import("html2canvas");

    const canvas  = await html2canvas(reportRef.current, { scale: 2, useCORS: true, backgroundColor: "#F8FAFC" });
    const imgData = canvas.toDataURL("image/png");
    const pdf     = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const pdfW    = pdf.internal.pageSize.getWidth();
    const pdfH    = pdf.internal.pageSize.getHeight();
    const imgH    = (canvas.height * pdfW) / canvas.width;

    pdf.setFillColor(55, 138, 221);
    pdf.rect(0, 0, pdfW, 18, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(13); pdf.setFont("helvetica", "bold");
    pdf.text("UpClass – Reporte de Estadísticas", 10, 12);
    pdf.setFontSize(9);  pdf.setFont("helvetica", "normal");
    pdf.text(
      `Periodo: ${periodo}   ·   Generado: ${new Date().toLocaleDateString("es-MX")}`,
      pdfW - 10, 12, { align: "right" }
    );

    const contentStart = 22;
    const pageContent  = pdfH - contentStart - 8;

    if (imgH <= pageContent) {
      pdf.addImage(imgData, "PNG", 0, contentStart, pdfW, imgH);
    } else {
      const scale   = pdfW / canvas.width;
      const slicePx = pageContent / scale;
      let sourceY = 0; let firstPage = true;
      while (sourceY < canvas.height) {
        const sliceH = Math.min(canvas.height - sourceY, slicePx);
        const sc = document.createElement("canvas");
        sc.width = canvas.width; sc.height = sliceH;
        sc.getContext("2d")!.drawImage(canvas, 0, sourceY, canvas.width, sliceH, 0, 0, canvas.width, sliceH);
        if (!firstPage) pdf.addPage();
        pdf.addImage(sc.toDataURL("image/png"), "PNG", 0, firstPage ? contentStart : 8, pdfW, sliceH * scale);
        sourceY += sliceH; firstPage = false;
      }
    }
    pdf.save(`UpClass_Estadisticas_${periodo}.pdf`);
  }, [periodo]);

  return { data, loading, error, lastUpdate, refresh: fetchData, exportExcel, exportPDF };
}
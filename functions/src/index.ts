/**
 * functions/src/index.ts
 * Cloud Function programada — genera ReporteEstadistica cada 24 horas
 * leyendo datos reales de Inscripcion y Asistencia en Data Connect.
 *
 * Disparo: todos los días a las 2:00 AM hora de Ciudad de México
 */

import { onSchedule } from "firebase-functions/v2/scheduler";
import { logger } from "firebase-functions/v2";
import { initializeApp } from "firebase-admin/app";


initializeApp();

// ─── Configuración ────────────────────────────────────────────────────────────

const PROJECT_ID  = "upclass-78c13";
const LOCATION    = "us-east4";
const SERVICE_ID  = "upclass-78c13-service";
const CONNECTOR   = "example";

const DATA_CONNECT_URL =
  `https://firebasedataconnect.googleapis.com/v1/projects/${PROJECT_ID}` +
  `/locations/${LOCATION}/services/${SERVICE_ID}/connectors/${CONNECTOR}:executeQuery`;

const DATA_CONNECT_MUTATION_URL =
  `https://firebasedataconnect.googleapis.com/v1/projects/${PROJECT_ID}` +
  `/locations/${LOCATION}/services/${SERVICE_ID}/connectors/${CONNECTOR}:executeMutation`;

// ─── Helper: obtener token de acceso del servidor ─────────────────────────────

async function getAccessToken(): Promise<string> {
  const { GoogleAuth } = await import("google-auth-library");
  const auth = new GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });
  const client = await auth.getClient();
  const token  = await client.getAccessToken();
  return token.token ?? "";
}

// ─── Helper: ejecutar query GraphQL ──────────────────────────────────────────

async function gqlQuery<T>(
  token: string,
  operationName: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const res = await fetch(DATA_CONNECT_URL, {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ operationName, variables }),
  });
  const json = await res.json() as { data: T; errors?: unknown[] };
  if (json.errors?.length) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

// ─── Helper: ejecutar mutation GraphQL ───────────────────────────────────────

async function gqlMutation(
  token: string,
  operationName: string,
  variables: Record<string, unknown> = {}
): Promise<void> {
  const res = await fetch(DATA_CONNECT_MUTATION_URL, {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ operationName, variables }),
  });
  const json = await res.json() as { errors?: unknown[] };
  if (json.errors?.length) throw new Error(JSON.stringify(json.errors));
}

// ─── Tipos de respuesta de las queries ───────────────────────────────────────

interface CursoData {
  id: string;
  cursoId: number;
  nombre: string;
  categoria: string | null;
}

interface InscripcionData {
  inscripcionId: string;
  estadoInscripcion: string;
  fechaInscripcion: string;
  horario: {
    curso: { cursoId: number };
  };
}

interface AsistenciaData {
  asistenciaId: number;
  estadoAsistencia: string;
  materiaId: number;
}

interface ReporteExistente {
  id: string;
  reporteId: number;
  periodoAnio: string;
  curso: { cursoId: number };
}

// ─── Helper: calcular periodo actual (ej: "2026-Q2") ─────────────────────────

function getPeriodoActual(): string {
  const now = new Date();
  const anio = now.getFullYear();
  const mes  = now.getMonth() + 1; // 1-12
  const q    = mes <= 3 ? "Q1" : mes <= 6 ? "Q2" : mes <= 9 ? "Q3" : "Q4";
  return `${anio}-${q}`;
}

// ─── Helper: obtener el inicio del trimestre actual ───────────────────────────

function getInicioTrimestre(): Date {
  const now = new Date();
  const mes = now.getMonth(); // 0-11
  const q   = Math.floor(mes / 3); // 0,1,2,3
  return new Date(now.getFullYear(), q * 3, 1);
}

// ─── Función principal ────────────────────────────────────────────────────────

export const generarReporteDiario = onSchedule(
  {
    schedule:  "0 2 * * *",   // Todos los días a las 2:00 AM
    timeZone:  "America/Mexico_City",
    region:    "us-central1",
    memory:    "256MiB",
    timeoutSeconds: 120,
  },
  async () => {
    logger.info("▶ Iniciando generación de reportes de estadísticas...");

    try {
      const token   = await getAccessToken();
      const periodo = getPeriodoActual();
      const inicioTrimestre = getInicioTrimestre();

      logger.info(`Periodo calculado: ${periodo}`);

      // ── 1. Obtener todos los cursos ────────────────────────────────────────
      const cursosData = await gqlQuery<{ cursos: CursoData[] }>(
        token, "ListCursos"
      );
      const cursos = cursosData.cursos;
      logger.info(`Cursos encontrados: ${cursos.length}`);

      if (cursos.length === 0) {
        logger.warn("No hay cursos, abortando.");
        return;
      }

      // ── 2. Obtener todas las inscripciones del trimestre actual ────────────
      const inscripcionesData = await gqlQuery<{ inscripcions: InscripcionData[] }>(
        token, "ListInscripciones"
      );
      const todasInscripciones = inscripcionesData.inscripcions.filter((i) => {
        const fecha = new Date(i.fechaInscripcion);
        return fecha >= inicioTrimestre;
      });

      // ── 3. Obtener todas las asistencias del trimestre ─────────────────────
      const asistenciasData = await gqlQuery<{ asistencias: AsistenciaData[] }>(
        token, "ListAsistencias"
      );
      const todasAsistencias = asistenciasData.asistencias;

      // ── 4. Obtener reportes ya existentes para este periodo ────────────────
      const reportesData = await gqlQuery<{ reporteEstadisticas: ReporteExistente[] }>(
        token, "ListReportesPorPeriodo", { periodo }
      );
      const reportesExistentes = reportesData.reporteEstadisticas;

      // ── 5. Calcular y upsert reporte por cada curso ────────────────────────
      let creados = 0;
      let actualizados = 0;

      // Necesitamos un reporteId único — usamos el máximo existente + 1
      const maxReporteId = reportesExistentes.length > 0
        ? Math.max(...reportesExistentes.map((r) => r.reporteId))
        : 0;
      let nextReporteId = maxReporteId + 1;

      for (const curso of cursos) {
        // Inscripciones activas de este curso en el periodo
        const inscripcionesCurso = todasInscripciones.filter(
          (i) => i.horario.curso.cursoId === curso.cursoId
        );
        const totalInscritos = inscripcionesCurso.filter(
          (i) => i.estadoInscripcion === "activa"
        ).length;
        const totalBajas = inscripcionesCurso.filter(
          (i) => i.estadoInscripcion === "baja"
        ).length;

        // Asistencias de este curso (usando materiaId = cursoId como proxy)
        const asistenciasCurso = todasAsistencias.filter(
          (a) => a.materiaId === curso.cursoId
        );
        const presentes = asistenciasCurso.filter(
          (a) => a.estadoAsistencia === "presente"
        ).length;
        const porcentajeAsistencia = asistenciasCurso.length > 0
          ? Math.round((presentes / asistenciasCurso.length) * 100 * 10) / 10
          : 0;

        // Buscar si ya existe un reporte para este curso + periodo
        const reporteExistente = reportesExistentes.find(
          (r) => r.curso.cursoId === curso.cursoId
        );

        if (reporteExistente) {
          // Actualizar reporte existente
          await gqlMutation(token, "UpdateReporteEstadistica", {
            reporteInternalId:    reporteExistente.id,
            totalInscritos,
            totalBajas,
            porcentajeAsistencia,
            calificacionPromedio: null,
            ingresosGenerados:    null,
          });
          actualizados++;
          logger.info(`✓ Actualizado: ${curso.nombre} (${periodo})`);
        } else {
          // Crear nuevo reporte
          await gqlMutation(token, "CreateReporteEstadistica", {
            reporteId:            nextReporteId++,
            cursoInternalId:      curso.id,
            periodoAnio:          periodo,
            totalInscritos,
            totalBajas,
            porcentajeAsistencia,
            calificacionPromedio: null,
            ingresosGenerados:    null,
          });
          creados++;
          logger.info(`✓ Creado: ${curso.nombre} (${periodo})`);
        }
      }

      logger.info(`✅ Reportes generados — Creados: ${creados}, Actualizados: ${actualizados}`);

    } catch (err) {
      logger.error("❌ Error generando reportes:", err);
      throw err;
    }
  }
);
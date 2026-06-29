/**
 * EstadisticasView.tsx
 * Vista de estadísticas — consume useEstadisticas (toda la lógica está ahí).
 *
 * Coloca este archivo en:  src/views/administrator/EstadisticasView.tsx
 * El hook en:              src/hooks/useEstadisticas.ts
 */

import { useRef, useState } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer,
} from "recharts";
import { useEstadisticas, type CursoStat } from "../../hooks/useEstadisticas";

// ─── Paleta design-system UpClass ─────────────────────────────────────────────

const UC = {
  blue:   "#378ADD",
  teal:   "#1D9E75",
  amber:  "#EF9F27",
  coral:  "#E05C5C",
  purple: "#7C5CBF",
  gray:   "#94A3B8",
  bg:     "#F8FAFC",
  border: "#E2E8F0",
  text:   "#1E293B",
  sub:    "#64748B",
};

const CAT_COLORS: Record<string, string> = {
  Bienestar: UC.teal,
  Idiomas:   UC.blue,
  Música:    UC.amber,
  Ciencias:  UC.coral,
  Arte:      UC.purple,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pctColor(v: number) {
  if (v >= 90) return UC.teal;
  if (v >= 75) return UC.amber;
  return UC.coral;
}

function fmtMXN(n: number | null) {
  if (n == null) return "—";
  return new Intl.NumberFormat("es-MX", {
    style: "currency", currency: "MXN", maximumFractionDigits: 0,
  }).format(n);
}

// ─── Subcomponentes puros (solo UI) ──────────────────────────────────────────

function KpiCard({ icon, label, value, sub, color }: {
  icon: string; label: string; value: string; sub: string; color: string;
}) {
  return (
    <div style={{
      background: "#fff", border: `1px solid ${UC.border}`, borderRadius: 12,
      padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: UC.sub, fontSize: 13, fontWeight: 500 }}>
        <i className={`ti ${icon}`} style={{ fontSize: 15, color }} aria-hidden="true" />
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: UC.text, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 12, color: UC.sub }}>{sub}</div>
    </div>
  );
}

function SectionCard({ title, children, style }: {
  title: string; children: React.ReactNode; style?: React.CSSProperties;
}) {
  return (
    <div style={{
      background: "#fff", border: `1px solid ${UC.border}`,
      borderRadius: 12, padding: "20px 24px", ...style,
    }}>
      <div style={{ fontWeight: 600, fontSize: 15, color: UC.text, marginBottom: 16 }}>{title}</div>
      {children}
    </div>
  );
}

function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#fff", border: `1px solid ${UC.border}`, borderRadius: 8,
      padding: "10px 14px", fontSize: 13, boxShadow: "0 4px 12px rgba(0,0,0,.08)",
    }}>
      <div style={{ fontWeight: 600, marginBottom: 6, color: UC.text }}>{label}</div>
      {payload.map((p) => (
        <div key={p.name} style={{ color: p.color, display: "flex", gap: 8 }}>
          <span style={{ color: UC.sub }}>{p.name}:</span>
          <span style={{ fontWeight: 600 }}>{p.value}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Skeleton de carga ────────────────────────────────────────────────────────

function Skeleton({ w = "100%", h = 20 }: { w?: string | number; h?: number }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: 6,
      background: "linear-gradient(90deg, #f0f4f8 25%, #e2e8f0 50%, #f0f4f8 75%)",
      backgroundSize: "200% 100%",
      animation: "uc-shimmer 1.4s infinite",
    }} />
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function EstadisticasView() {
  const reportRef = useRef<HTMLDivElement>(null);
  const [periodo, setPeriodo] = useState("2026-Q2");

  const { data, loading, error, lastUpdate, refresh, exportExcel, exportPDF } =
    useEstadisticas(periodo);

  const periodos = data?.periodos ?? [];

  // ── Estado: cargando ────────────────────────────────────────────────────────
  if (loading && !data) {
    return (
      <div style={{ padding: "0 0 40px" }}>
        <div style={{ marginBottom: 24 }}>
          <Skeleton h={28} w={240} />
          <div style={{ marginTop: 8 }}><Skeleton h={14} w={180} /></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
          {[0,1,2,3].map((i) => <Skeleton key={i} h={110} />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Skeleton h={280} />
          <Skeleton h={280} />
        </div>
        <style>{`@keyframes uc-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
      </div>
    );
  }

  // ── Estado: error ───────────────────────────────────────────────────────────
  if (error) {
    return (
      <div style={{
        margin: "40px auto", maxWidth: 480, textAlign: "center",
        background: "#fff", border: `1px solid ${UC.border}`, borderRadius: 12, padding: 32,
      }}>
        <i className="ti ti-alert-circle" style={{ fontSize: 40, color: UC.coral }} />
        <div style={{ marginTop: 16, fontWeight: 600, fontSize: 16, color: UC.text }}>{error}</div>
        <button onClick={refresh} style={{
          marginTop: 20, border: "none", borderRadius: 8, padding: "9px 20px",
          background: UC.blue, color: "#fff", fontWeight: 500, cursor: "pointer",
        }}>
          <i className="ti ti-refresh" /> Reintentar
        </button>
      </div>
    );
  }

  if (!data) return null;

  const { kpis, barData, lineData, pieData, areaData, tabla } = data;

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div style={{ padding: "0 0 40px" }}>
      <style>{`@keyframes uc-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>

      {/* ── Encabezado ────────────────────────────────────────────────────── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 12, marginBottom: 24,
      }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: UC.text }}>
            Estadísticas y reportes
          </h2>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: UC.sub }}>
            Actualizado: {lastUpdate.toLocaleTimeString("es-MX")}
            {loading && <span style={{ marginLeft: 8, color: UC.blue }}>↻ Actualizando…</span>}
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <select
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            style={{
              border: `1px solid ${UC.border}`, borderRadius: 8, padding: "7px 12px",
              fontSize: 13, color: UC.text, background: "#fff", cursor: "pointer",
            }}
          >
            {periodos.map((p: string) => <option key={p} value={p}>{p}</option>)}
          </select>

          <button onClick={refresh} style={{
            border: `1px solid ${UC.border}`, borderRadius: 8, padding: "7px 12px",
            fontSize: 13, color: UC.sub, background: "#fff", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <i className="ti ti-refresh" aria-hidden="true" /> Actualizar
          </button>

          <button onClick={exportExcel} style={{
            border: `1px solid ${UC.teal}`, borderRadius: 8, padding: "7px 14px",
            fontSize: 13, color: UC.teal, background: "#F0FDF8", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 6, fontWeight: 500,
          }}>
            <i className="ti ti-table-export" aria-hidden="true" /> Exportar Excel
          </button>

          <button onClick={() => exportPDF(reportRef)} style={{
            border: "none", borderRadius: 8, padding: "7px 14px",
            fontSize: 13, color: "#fff", background: UC.blue, cursor: "pointer",
            display: "flex", alignItems: "center", gap: 6, fontWeight: 500,
          }}>
            <i className="ti ti-file-type-pdf" aria-hidden="true" /> Exportar PDF
          </button>
        </div>
      </div>

      {/* ── Contenido capturado para PDF ─────────────────────────────────── */}
      <div ref={reportRef}>

        {/* ── KPIs ──────────────────────────────────────────────────────── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16, marginBottom: 24,
        }}>
          <KpiCard icon="ti-users"          color={UC.blue}   label="Total inscritos"     value={String(kpis.totalInscritos)}                       sub={`${kpis.totalBajas} baja${kpis.totalBajas !== 1 ? "s" : ""} en el periodo`} />
          <KpiCard icon="ti-calendar-check" color={UC.teal}   label="Asistencia promedio" value={`${kpis.asistenciaPromedio}%`}                     sub="Promedio de todos los cursos" />
          <KpiCard icon="ti-coin"           color={UC.amber}  label="Ingresos generados"  value={fmtMXN(kpis.ingresosTotal)}                        sub="Suma de cursos del periodo" />
          <KpiCard icon="ti-book"           color={UC.purple} label="Cursos activos"       value={String(kpis.cursosActivos || tabla.length)}        sub={`De ${kpis.totalCursos} cursos en total`} />
        </div>

        {/* ── Fila 1: Barras + Línea ────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>

          <SectionCard title="Inscritos y bajas por curso">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={barData} margin={{ top: 0, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={UC.border} vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: UC.sub }} />
                <YAxis tick={{ fontSize: 11, fill: UC.sub }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="Inscritos" fill={UC.blue}  radius={[4, 4, 0, 0]} />
                <Bar dataKey="Bajas"     fill={UC.coral} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </SectionCard>

          <SectionCard title="Tendencia de asistencia (histórico)">
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={lineData} margin={{ top: 0, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={UC.border} vertical={false} />
                <XAxis dataKey="periodo" tick={{ fontSize: 11, fill: UC.sub }} />
                <YAxis domain={[60, 100]} tick={{ fontSize: 11, fill: UC.sub }} unit="%" />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="Asistencia" stroke={UC.teal} strokeWidth={2.5}
                  dot={{ fill: UC.teal, r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </SectionCard>
        </div>

        {/* ── Fila 2: Pie + Área ────────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 16, marginBottom: 16 }}>

          <SectionCard title="Inscritos por categoría">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} dataKey="value"
                  label={({ name, percent }) => `${name} ${Math.round((percent ?? 0) * 100)}%`}
                  labelLine={false}>
                  {pieData.map((entry: { name: string; value: number }) => (
                    <Cell key={entry.name} fill={CAT_COLORS[entry.name] ?? UC.gray} />
                  ))}
                </Pie>
                <Tooltip formatter={(val) => [`${Number(val)} inscritos`, ""]} />
              </PieChart>
            </ResponsiveContainer>
          </SectionCard>

          <SectionCard title="Ingresos generados por curso (MXN)">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={areaData} margin={{ top: 0, right: 8, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradIngresos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={UC.purple} stopOpacity={0.25} />
                    <stop offset="95%" stopColor={UC.purple} stopOpacity={0}    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={UC.border} vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: UC.sub }} />
                <YAxis tick={{ fontSize: 11, fill: UC.sub }}
                  tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(v) => [fmtMXN(Number(v)), "Ingresos"]} />
                <Area type="monotone" dataKey="Ingresos" stroke={UC.purple} strokeWidth={2}
                  fill="url(#gradIngresos)" dot={{ fill: UC.purple, r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </SectionCard>
        </div>

        {/* ── Tabla detalle ─────────────────────────────────────────────── */}
        <div style={{
          background: "#fff", border: `1px solid ${UC.border}`,
          borderRadius: 12, overflow: "hidden",
        }}>
          <div style={{
            padding: "16px 24px", borderBottom: `1px solid ${UC.border}`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontWeight: 600, fontSize: 15, color: UC.text }}>
              Detalle por curso — {periodo}
            </span>
            <span style={{ fontSize: 12, color: UC.sub }}>{tabla.length} cursos</span>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: UC.bg }}>
                  {["Curso","Categoría","Instructor","Inscritos","Bajas","% Asistencia","Calif.","Ingresos","Actualiz."].map((h) => (
                    <th key={h} style={{
                      padding: "10px 16px", textAlign: "left", fontWeight: 600,
                      color: UC.sub, fontSize: 12, borderBottom: `1px solid ${UC.border}`,
                      whiteSpace: "nowrap",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tabla.map((r: CursoStat, i: number) => (
                  <tr key={`${r.cursoId}-${i}`} style={{ background: i % 2 === 0 ? "#fff" : UC.bg }}>
                    <td style={{ padding: "11px 16px", fontWeight: 500, color: UC.text }}>{r.nombre}</td>
                    <td style={{ padding: "11px 16px" }}>
                      <span style={{
                        display: "inline-block", padding: "2px 10px", borderRadius: 20,
                        fontSize: 11, fontWeight: 600,
                        background: (CAT_COLORS[r.categoria] ?? UC.gray) + "22",
                        color: CAT_COLORS[r.categoria] ?? UC.gray,
                      }}>{r.categoria}</span>
                    </td>
                    <td style={{ padding: "11px 16px", color: UC.sub, fontSize: 12 }}>{r.instructorNombre}</td>
                    <td style={{ padding: "11px 16px", color: UC.text, fontWeight: 500 }}>{r.totalInscritos}</td>
                    <td style={{ padding: "11px 16px", color: r.totalBajas > 2 ? UC.coral : UC.text }}>{r.totalBajas}</td>
                    <td style={{ padding: "11px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 60, height: 6, borderRadius: 3, background: UC.border, overflow: "hidden" }}>
                          <div style={{
                            width: `${r.porcentajeAsistencia}%`, height: "100%",
                            background: pctColor(r.porcentajeAsistencia), borderRadius: 3,
                          }} />
                        </div>
                        <span style={{ fontWeight: 600, color: pctColor(r.porcentajeAsistencia) }}>
                          {r.porcentajeAsistencia}%
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: "11px 16px", color: UC.text }}>
                      {r.calificacionPromedio != null ? (
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <i className="ti ti-star-filled" style={{ fontSize: 11, color: UC.amber }} />
                          {r.calificacionPromedio.toFixed(1)}
                        </span>
                      ) : "—"}
                    </td>
                    <td style={{ padding: "11px 16px", fontWeight: 500, color: UC.text }}>{fmtMXN(r.ingresosGenerados)}</td>
                    <td style={{ padding: "11px 16px", color: UC.sub, fontSize: 11 }}>
                      {new Date(r.fechaActualizacion ?? lastUpdate).toLocaleDateString("es-MX")}
                    </td>
                  </tr>
                ))}

                {tabla.length === 0 && (
                  <tr>
                    <td colSpan={9} style={{ padding: 40, textAlign: "center", color: UC.sub }}>
                      <i className="ti ti-chart-bar-off" style={{ fontSize: 32, display: "block", marginBottom: 8 }} />
                      No hay datos para el periodo {periodo}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>{/* fin reportRef */}
    </div>
  );
}
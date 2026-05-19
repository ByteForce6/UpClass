import { useState } from "react";

// ── Tipos ──────────────────────────────────────────────
interface Calificacion {
  materia: string;
  profesor: string;
  fecha: string;
  Promedio: number;
  maximo: number;
}

// ── Datos ──────────────────────────────────────────────
const CALIFICACIONES: Calificacion[] = [
  { materia: "Diseño UX/UI Avanzado",      profesor: "Arq. Laura Méndez", fecha: "12 May", Promedio: 9.5, maximo: 10 },
  { materia: "Fotografía Editorial",       profesor: "Mtro. Carlos Ruiz",  fecha: "15 Abr", Promedio: 8.8, maximo: 10 },
  { materia: "Marketing Digital & Growth", profesor: "Lic. Sofía Torres",  fecha: "10 Abr", Promedio: 8.5, maximo: 10 },
];

// ── Helpers ────────────────────────────────────────────
const PromedioColor = (n: number) => n >= 9 ? "#1a6b3c" : n >= 7.5 ? "#7a5c00" : "#9b1c1c";
const PromedioBg    = (n: number) => n >= 9 ? "#f0faf5" : n >= 7.5 ? "#fefce8" : "#fff5f5";

const promedio = (cals: Calificacion[]) => {
  const avg = cals.reduce((a, c) => a + (c.Promedio / c.maximo) * 10, 0) / cals.length;
  return Math.round(avg * 10) / 10;
};

function BadgeTipo({ tipo }: { tipo: string }) {
  const m: Record<string, { bg: string; color: string }> = {
    Proyecto:      { bg: "#f0f0f0", color: "#333" },
    Tarea:         { bg: "#f5f2ed", color: "#555" },
    Evaluación:    { bg: "#111",    color: "#fff" },
    Participación: { bg: "#e8ede8", color: "#2a5c2a" },
  };
  const s = m[tipo] || { bg: "#eee", color: "#333" };
  return (
    <span style={{
      fontFamily: "var(--ds)", fontSize: 10, fontWeight: 600,
      letterSpacing: ".08em", textTransform: "uppercase",
      background: s.bg, color: s.color,
      padding: "3px 9px", whiteSpace: "nowrap",
    }}>
      {tipo}
    </span>
  );
}

// ── Componente ─────────────────────────────────────────
export default function MisCalificaciones() {
  const [filtro, setFiltro] = useState("Todos");

  const materias  = ["Todos", ...Array.from(new Set(CALIFICACIONES.map(c => c.materia)))];
  const filtradas = filtro === "Todos" ? CALIFICACIONES : CALIFICACIONES.filter(c => c.materia === filtro);
  const prom      = promedio(filtradas);

  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Registro académico</p>
        <h2 className="uc-page-title">Calificaciones</h2>
      </div>

      <div className="uc-cal-summary">
        {[
          { val: `${prom}`,                                          label: "Promedio",        sub: "General",   dark: true  },
          { val: String(Math.max(...filtradas.map(c => c.Promedio))), label: "Mejor Promedio", sub: "Sobre 100", dark: false },
        ].map((s, i) => (
          <div key={i} className="uc-cal-sum-card" style={{ background: s.dark ? "#111" : "#fff" }}>
            <p style={{ fontFamily: "var(--dr)", fontSize: 34, fontWeight: 700, color: s.dark ? "#fff" : "#111", margin: "0 0 4px" }}>
              {s.val}
            </p>
            <p style={{ fontFamily: "var(--ds)", fontSize: 12, fontWeight: 600, color: s.dark ? "rgba(255,255,255,.7)" : "#555", margin: 0 }}>
              {s.label}
            </p>
            <p style={{ fontFamily: "var(--ds)", fontSize: 11, color: s.dark ? "rgba(255,255,255,.4)" : "#aaa", margin: 0 }}>
              {s.sub}
            </p>
          </div>
        ))}
      </div>

      <div className="uc-filters">
        {materias.map(c => (
          <button
            key={c}
            onClick={() => setFiltro(c)}
            className={`uc-filter-btn${filtro === c ? " active" : ""}`}
          >
            {c === "Todos" ? "Todos" : c.split(" ").slice(0, 2).join(" ")}
          </button>
        ))}
      </div>

      <div className="uc-cal-table-wrap">
        <div className="uc-table-header">
          {["Tipo", "Actividad", "Curso", "Fecha", "Promedio"].map(h => (
            <p key={h} style={{
              fontFamily: "var(--ds)", fontSize: 10, fontWeight: 600,
              letterSpacing: ".1em", textTransform: "uppercase",
              color: "rgba(255,255,255,.5)", margin: 0,
            }}>
              {h}
            </p>
          ))}
        </div>

        {filtradas.map((c, i) => (
          <div key={i} className="uc-table-row" style={{ background: i % 2 === 0 ? "#fff" : "#fafaf9" }}>
            <div className="uc-table-tipo">
              <BadgeTipo tipo="Evaluación" />
            </div>
            <p className="uc-table-act">{c.materia}</p>
            <p className="uc-table-curso" style={{ fontWeight: 500 }}>{c.materia}</p>
            <p className="uc-table-fecha">{c.fecha}</p>
            <div className="uc-Promedio-chip" style={{ background: PromedioBg(c.Promedio) }}>
              <p style={{
                fontFamily: "var(--dr)", fontSize: 18, fontWeight: 700,
                color: PromedioColor(c.Promedio), margin: 0, lineHeight: 1,
              }}>
                {c.Promedio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
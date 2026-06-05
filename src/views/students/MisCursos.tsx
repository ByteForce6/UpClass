import { useState } from "react";

// ── Tipos ──────────────────────────────────────────────
interface Curso {
  id: number;
  nombre: string;
  instructor: string;
  categoria: string;
  progreso: number;
  estado: "activo" | "completado" | "pendiente";
  calificacion?: number;
  sesiones: number;
  sesionesTotal: number;
  nextSession?: string;
}

// ── Datos ──────────────────────────────────────────────
const CURSOS: Curso[] = [
  { id:1, nombre:"Diseño UX/UI Avanzado",         instructor:"Arq. Laura Méndez", categoria:"Diseño",   progreso:72,  estado:"activo",    sesiones:13, sesionesTotal:18, nextSession:"Lun 09:00", calificacion:9.1 },
  { id:2, nombre:"Fotografía Editorial",           instructor:"Mtro. Carlos Ruiz", categoria:"Arte",     progreso:100, estado:"completado", sesiones:20, sesionesTotal:20, calificacion:8.8 },
  { id:3, nombre:"Marketing Digital & Growth",     instructor:"Lic. Sofía Torres", categoria:"Negocios", progreso:40,  estado:"activo",    sesiones:6,  sesionesTotal:15, nextSession:"Mié 11:00", calificacion:8.5 },
  { id:4, nombre:"Liderazgo y Gestión de Equipos", instructor:"Dr. Andrés Vega",   categoria:"Negocios", progreso:0,   estado:"pendiente", sesiones:0,  sesionesTotal:12, nextSession:"Inicia Jun 2" },
];

// ── Helpers ────────────────────────────────────────────
const PromedioColor = (n: number) => n >= 9 ? "#1a6b3c" : n >= 7.5 ? "#7a5c00" : "#9b1c1c";
const PromedioBg    = (n: number) => n >= 9 ? "#f0faf5" : n >= 7.5 ? "#fefce8" : "#fff5f5";
const progColor     = (p: number) => p === 100 ? "#1a6b3c" : p > 0 ? "#111" : "#bbb";

// ── Componente ─────────────────────────────────────────
export default function MisCursos() {
  const [filtro, setFiltro] = useState<"todos" | "activo" | "completado" | "pendiente">("todos");

  const filtrados = filtro === "todos" ? CURSOS : CURSOS.filter(c => c.estado === filtro);

  const eLabel: Record<string, string> = {
    activo:     "En curso",
    completado: "Completado",
    pendiente:  "Por iniciar",
  };
  const eStyle: Record<string, { bg: string; color: string }> = {
    activo:     { bg: "#111",    color: "#fff"     },
    completado: { bg: "#f0faf5", color: "#1a6b3c"  },
    pendiente:  { bg: "#f5f2ed", color: "#888"     },
  };

  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Mi formación</p>
        <h2 className="uc-page-title">Cursos inscritos</h2>
      </div>

      <div className="uc-filters">
        {(["todos", "activo", "completado", "pendiente"] as const).map(f => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`uc-filter-btn${filtro === f ? " active" : ""}`}
          >
            {f === "todos" ? "Todos" : eLabel[f]}
          </button>
        ))}
      </div>

      {filtrados.map(c => {
        const s = eStyle[c.estado];
        return (
          <div key={c.id} className="uc-curso-card">
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                <span className="uc-tag-cat">{c.categoria}</span>
                <span style={{
                  fontFamily: "var(--ds)", fontSize: 10, fontWeight: 600,
                  letterSpacing: ".07em", textTransform: "uppercase",
                  background: s.bg, color: s.color, padding: "3px 9px",
                }}>
                  {eLabel[c.estado]}
                </span>
              </div>

              <h3 className="uc-curso-title">{c.nombre}</h3>
              <p className="uc-curso-inst">{c.instructor}</p>

              {c.estado !== "pendiente" && (
                <div className="uc-progress-row" style={{ marginTop: 12 }}>
                  <div className="uc-progress-track">
                    <div className="uc-progress-fill" style={{ width: `${c.progreso}%`, background: progColor(c.progreso) }} />
                  </div>
                  <span className="uc-progress-label">{c.sesiones}/{c.sesionesTotal} · {c.progreso}%</span>
                </div>
              )}

              {c.estado === "pendiente" && c.nextSession && (
                <p style={{ fontFamily: "var(--ds)", fontSize: 12, color: "#aaa", margin: "8px 0 0" }}>
                  Inicio: <strong style={{ color: "#555" }}>{c.nextSession}</strong>
                </p>
              )}
            </div>

            <div className="uc-curso-side">
              {c.calificacion !== undefined ? (
                <div className="uc-Promedio-big" style={{ background: PromedioBg(c.calificacion) }}>
                  <p style={{ fontFamily: "var(--dr)", fontSize: 28, fontWeight: 700, color: PromedioColor(c.calificacion), margin: "0 0 2px", lineHeight: 1 }}>
                    {c.calificacion}
                  </p>
                  <p style={{ fontFamily: "var(--ds)", fontSize: 9, color: "#aaa", letterSpacing: ".06em", textTransform: "uppercase", margin: 0 }}>
                    Promedio
                  </p>
                </div>
              ) : (
                <div className="uc-Promedio-big" style={{ background: "#f5f2ed" }}>
                  <p style={{ fontFamily: "var(--ds)", fontSize: 11, color: "#ccc", margin: 0 }}>Sin calif.</p>
                </div>
              )}

              {c.estado === "activo"     && <button className="uc-action-btn uc-action-btn--solid">Ir al aula →</button>}
              {c.estado === "completado" && <button className="uc-action-btn uc-action-btn--outline">Ver constancia</button>}
              {c.estado === "pendiente"  && <button className="uc-action-btn uc-action-btn--disabled" disabled>Próximamente</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
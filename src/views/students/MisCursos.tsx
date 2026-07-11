/**
 * MisCursos.tsx
 * Lee inscripciones reales del estudiante logueado desde Firebase Data Connect.
 */

import { useState, useEffect } from "react";
import { executeQuery } from "firebase/data-connect";
import { dataConnect } from "../../../firebase";
import {
  getInscripcionesByEstudianteRef,
  type GetInscripcionesByEstudianteData,
} from "../../dataconnect-generated";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface CursoInscrito {
  inscripcionId:     string;
  estadoInscripcion: string;
  pagoEstado:        string | null;
  cursoId:           number;
  nombre:            string;
  categoria:         string;
  instructor:        string;
  horario:           string;
  cupoActual:        number;
  cupoMaximo:        number;
  urlImagen:         string | null;
}

type InscripcionRow = GetInscripcionesByEstudianteData["inscripcions"][number];

// ─── Helpers de estilo ────────────────────────────────────────────────────────

const PromedioBg = (n: number) =>
  n >= 9 ? "#f0faf5" : n >= 7.5 ? "#fefce8" : "#fff5f5";

const eLabel: Record<string, string> = {
  activa:     "En curso",
  completada: "Completado",
  baja:       "Baja",
  pendiente:  "Por iniciar",
};

const eStyle: Record<string, { bg: string; color: string }> = {
  activa:     { bg: "#111",    color: "#fff"    },
  completada: { bg: "#f0faf5", color: "#1a6b3c" },
  baja:       { bg: "#fff5f5", color: "#9b1c1c" },
  pendiente:  { bg: "#f5f2ed", color: "#888"    },
};

// ─── Componente ───────────────────────────────────────────────────────────────

export default function MisCursos() {
  const [cursos,  setCursos]  = useState<CursoInscrito[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);
  const [filtro,  setFiltro]  = useState<"todos" | "activa" | "completada" | "baja">("todos");

  useEffect(() => {
    const cargar = async () => {
      setLoading(true);
      setError(null);
      try {
        const savedUser = localStorage.getItem("user");
        if (!savedUser) throw new Error("No hay sesión activa");
        const user = JSON.parse(savedUser);
        const matricula: string = user.matricula ?? user.usuarioId ?? "";
        if (!matricula) throw new Error("No se encontró la matrícula del estudiante");

        const res = await executeQuery(
          getInscripcionesByEstudianteRef(dataConnect, { matricula })
        );

        const inscripciones: InscripcionRow[] = res.data?.inscripcions ?? [];

        const mapped: CursoInscrito[] = inscripciones.map((i: InscripcionRow) => {
          const curso   = i.horario.curso;
          const diaHora = `${i.horario.horaInicio ?? ""} - ${i.horario.horaFin ?? ""}`.trim();
          return {
            inscripcionId:     i.inscripcionId,
            estadoInscripcion: i.estadoInscripcion,
            pagoEstado:        i.pagoEstado ?? null,
            cursoId:           curso.cursoId,
            nombre:            curso.nombre,
            categoria:         curso.categoria ?? "Sin categoría",
            instructor:        curso.instructor?.usuario?.nombreCompleto ?? "Sin asignar",
            horario:           diaHora || "Sin horario",
            cupoActual:        i.horario.cupoActual,
            cupoMaximo:        i.horario.cupoMaximo,
            urlImagen:         curso.urlImagen ?? null,
          };
        });

        setCursos(mapped);
      } catch (err) {
        console.error("[MisCursos]", err);
        setError("No se pudieron cargar tus cursos. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    };
    cargar();
  }, []);

  // ── Estado: cargando ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="uc-stack-lg">
        <div className="uc-section-header">
          <p className="uc-kicker">Mi formación</p>
          <h2 className="uc-page-title">Cursos inscritos</h2>
        </div>
        {[1,2,3].map((i) => (
          <div key={i} style={{
            height: 120, borderRadius: 8, marginBottom: 12,
            background: "linear-gradient(90deg,#f0f4f8 25%,#e2e8f0 50%,#f0f4f8 75%)",
            backgroundSize: "200% 100%", animation: "uc-shimmer 1.4s infinite",
          }} />
        ))}
        <style>{`@keyframes uc-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
      </div>
    );
  }

  // ── Estado: error ───────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="uc-stack-lg">
        <div className="uc-section-header">
          <p className="uc-kicker">Mi formación</p>
          <h2 className="uc-page-title">Cursos inscritos</h2>
        </div>
        <div style={{
          padding: 32, textAlign: "center", border: "1px solid #e2e8f0",
          borderRadius: 12, background: "#fff",
        }}>
          <p style={{ color: "#9b1c1c", marginBottom: 16 }}>{error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              border: "none", borderRadius: 8, padding: "9px 20px",
              background: "#111", color: "#fff", cursor: "pointer",
            }}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  // ── Sin inscripciones ───────────────────────────────────────────────────────
  if (cursos.length === 0) {
    return (
      <div className="uc-stack-lg">
        <div className="uc-section-header">
          <p className="uc-kicker">Mi formación</p>
          <h2 className="uc-page-title">Cursos inscritos</h2>
        </div>
        <div style={{
          padding: 48, textAlign: "center", border: "1px solid #e2e8f0",
          borderRadius: 12, background: "#fff",
        }}>
          <p style={{ fontSize: 32, marginBottom: 12 }}>📚</p>
          <p style={{ fontWeight: 600, marginBottom: 8, color: "#111" }}>
            Aún no tienes cursos inscritos
          </p>
          <p style={{ color: "#888", fontSize: 13 }}>
            Explora el catálogo de cursos disponibles para inscribirte.
          </p>
        </div>
      </div>
    );
  }

  const filtrados = filtro === "todos"
    ? cursos
    : cursos.filter((c) => c.estadoInscripcion === filtro);

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Mi formación</p>
        <h2 className="uc-page-title">Cursos inscritos</h2>
      </div>

      <div className="uc-filters">
        {(["todos", "activa", "completada", "baja"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`uc-filter-btn${filtro === f ? " active" : ""}`}
          >
            {f === "todos" ? "Todos" : eLabel[f]}
          </button>
        ))}
      </div>

      {filtrados.length === 0 && (
        <p style={{ color: "#aaa", textAlign: "center", padding: 32 }}>
          No tienes cursos en este estado.
        </p>
      )}

      {filtrados.map((c) => {
        const s = eStyle[c.estadoInscripcion] ?? eStyle["pendiente"];
        return (
          <div key={c.inscripcionId} className="uc-curso-card">
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                <span className="uc-tag-cat">{c.categoria}</span>
                <span style={{
                  fontFamily: "var(--ds)", fontSize: 10, fontWeight: 600,
                  letterSpacing: ".07em", textTransform: "uppercase",
                  background: s.bg, color: s.color, padding: "3px 9px",
                }}>
                  {eLabel[c.estadoInscripcion] ?? c.estadoInscripcion}
                </span>
                {c.pagoEstado && c.pagoEstado !== "pagado" && (
                  <span style={{
                    fontFamily: "var(--ds)", fontSize: 10, fontWeight: 600,
                    letterSpacing: ".07em", textTransform: "uppercase",
                    background: "#fff8ed", color: "#7a3c00", padding: "3px 9px",
                  }}>
                    Pago: {c.pagoEstado}
                  </span>
                )}
              </div>

              <h3 className="uc-curso-title">{c.nombre}</h3>
              <p className="uc-curso-inst">{c.instructor}</p>

              <p style={{ fontFamily: "var(--ds)", fontSize: 12, color: "#888", margin: "6px 0 0" }}>
                ◷ {c.horario}
              </p>

              {c.estadoInscripcion === "activa" && (
                <div className="uc-progress-row" style={{ marginTop: 12 }}>
                  <div className="uc-progress-track">
                    <div
                      className="uc-progress-fill"
                      style={{
                        width: `${Math.round((c.cupoActual / c.cupoMaximo) * 100)}%`,
                        background: "#111",
                      }}
                    />
                  </div>
                  <span className="uc-progress-label">
                    {c.cupoActual}/{c.cupoMaximo} inscritos
                  </span>
                </div>
              )}
            </div>

            <div className="uc-curso-side">
              <div className="uc-Promedio-big" style={{ background: PromedioBg(0) }}>
                <p style={{ fontFamily: "var(--ds)", fontSize: 11, color: "#ccc", margin: 0 }}>
                  Sin calif.
                </p>
              </div>

              {c.estadoInscripcion === "activa" && (
                <button className="uc-action-btn uc-action-btn--solid">Ir al aula →</button>
              )}
              {c.estadoInscripcion === "completada" && (
                <button className="uc-action-btn uc-action-btn--outline">Ver constancia</button>
              )}
              {c.estadoInscripcion === "baja" && (
                <button className="uc-action-btn uc-action-btn--disabled" disabled>
                  Dado de baja
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
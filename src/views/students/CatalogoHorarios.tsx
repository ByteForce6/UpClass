// views/VistaCatalogoHorarios.tsx
// ─────────────────────────────────────────────────────────────
// Página: horarios de todos los cursos disponibles.
// Permite al alumno explorar qué días/horas tienen cada curso
// ANTES de inscribirse (distinto a VistaHorarios que muestra
// solo los cursos en los que ya está inscrito).
//
// Modos:
//   - Semana → grilla visual por día con bloques interactivos
//   - Lista  → tabla ordenada con barra de cupo
//
// Al hacer clic en un bloque/fila se abre un panel lateral
// con el detalle completo y botón de inscripción.
// ─────────────────────────────────────────────────────────────

// ✅ Correcto
import { useState } from "react";
import type { CursoCatalogo } from "../../Types/index";
import { CURSOS_CATALOGO, CATEGORIAS_CATALOGO, DIAS_SEMANA } from "../../Data/mockCatalogo";
import "../../Styles/catalogo.css";
// ─── Helpers puros ────────────────────────────────────────────

function cupoLibre(c: CursoCatalogo): number {
  return c.cupoTotal - c.cupoOcupado;
}

function getCupoStatus(c: CursoCatalogo) {
  const libre = cupoLibre(c);
  const pct   = libre / c.cupoTotal;
  if (libre === 0) return { label: "Lleno",              bg: "#fff5f5", color: "#9b1c1c" };
  if (pct <= 0.2)  return { label: `${libre} lugar${libre > 1 ? "es" : ""}`, bg: "#fff8ed", color: "#7a3c00" };
  return               { label: `${libre} lugares`,     bg: "#f0faf5", color: "#1a6b3c" };
}

// Cursos que tienen sesión un día específico
function cursosDelDia(dia: string, lista: CursoCatalogo[]): CursoCatalogo[] {
  return lista.filter((c) => c.dias.includes(dia));
}

// ─── Subcomponentes ───────────────────────────────────────────

// Bloque en la vista de semana
function BloqueCalendario({
  curso,
  seleccionado,
  onSelect,
}: {
  curso: CursoCatalogo;
  seleccionado: boolean;
  onSelect: (id: number) => void;
}) {
  const libre = cupoLibre(curso);
  const lleno = libre === 0;

  return (
    <div
      className={`cal-bloque${lleno ? " cal-bloque--lleno" : ""}`}
      onClick={() => !lleno && onSelect(curso.id)}
      style={{
        borderLeftColor: lleno ? "#e0dbd4" : curso.color,
        background: seleccionado ? `${curso.color}12` : "#fafaf9",
        outline: seleccionado ? `1px solid ${curso.color}` : "1px solid transparent",
      }}
    >
      <p className="cal-bloque-hora">{curso.horaInicio}–{curso.horaFin}</p>
      <p className="cal-bloque-nombre">
        {/* Mostramos solo las primeras 3 palabras para no desbordar */}
        {curso.nombre.split(" ").slice(0, 3).join(" ")}
      </p>
      <p className="cal-bloque-sala">{curso.sala}</p>
      <span
        className="cal-bloque-cupo"
        style={{ color: lleno ? "#ccc" : curso.color }}
      >
        {lleno ? "LLENO" : `${libre} lugares`}
      </span>
    </div>
  );
}

// Panel lateral de detalle al seleccionar un curso
function PanelDetalle({
  cursoId,
  onClose,
}: {
  cursoId: number;
  onClose: () => void;
}) {
  const c     = CURSOS_CATALOGO.find((x) => x.id === cursoId)!;
  const libre = cupoLibre(c);
  const st    = getCupoStatus(c);
  const pct   = (c.cupoOcupado / c.cupoTotal) * 100;

  return (
    <div className="cal-panel">
      <div className="cal-panel-top">
        <span className="cat-badge cat-badge--outline">{c.categoria}</span>
        <button className="cal-panel-close" onClick={onClose}>×</button>
      </div>

      <div>
        <h3 className="cal-panel-nombre">{c.nombre}</h3>
        <p className="cal-panel-instructor">{c.instructor}</p>
      </div>

      <div className="cal-panel-rows">
        {[
          { label: "Días",      val: c.dias.join(" · ") },
          { label: "Horario",   val: `${c.horaInicio}–${c.horaFin}` },
          { label: "Sala",      val: c.sala },
          { label: "Modalidad", val: c.modalidad },
          { label: "Duración",  val: c.duracion },
          { label: "Inicio",    val: c.inicio },
          { label: "Precio",    val: c.precio },
        ].map(({ label, val }) => (
          <div key={label} className="cal-panel-row">
            <span className="cal-panel-row-label">{label}</span>
            <span className="cal-panel-row-val">{val}</span>
          </div>
        ))}
      </div>

      {/* Barra de cupo */}
      <div>
        <div className="cat-cupo-header">
          <span className="cat-cupo-count">
            {c.cupoOcupado}/{c.cupoTotal} inscritos
          </span>
          <span
            className="cat-cupo-label"
            style={{ background: st.bg, color: st.color }}
          >
            {st.label}
          </span>
        </div>
        <div className="cat-progress-track">
          <div
            className="cat-progress-fill"
            style={{
              width: `${pct}%`,
              background: libre === 0 ? "#e53e3e" : c.color,
            }}
          />
        </div>
      </div>

      <button
        className={`cat-btn ${libre === 0 ? "cat-btn--disabled" : "cat-btn--primary"}`}
        disabled={libre === 0}
      >
        {libre === 0 ? "Lista de espera" : "Inscribirme →"}
      </button>
    </div>
  );
}

// Fila en vista lista
function FilaHorario({
  curso,
  seleccionado,
  onSelect,
}: {
  curso: CursoCatalogo;
  seleccionado: boolean;
  onSelect: (id: number) => void;
}) {
  const st  = getCupoStatus(curso);
  const pct = (curso.cupoOcupado / curso.cupoTotal) * 100;

  return (
    <div
      className={`cal-list-row${seleccionado ? " selected" : ""}`}
      onClick={() => onSelect(curso.id)}
    >
      <div>
        <p className="cal-list-dia">{curso.dias.join(" · ")}</p>
        <p className="cal-list-hora">{curso.horaInicio}–{curso.horaFin}</p>
      </div>

      <div>
        <p className="cal-list-nombre">{curso.nombre}</p>
        <p className="cal-list-instructor">{curso.instructor} · {curso.sala}</p>
      </div>

      {/* Mini barra de cupo */}
      <div>
        <div className="cat-cupo-header" style={{ marginBottom: 5 }}>
          <span className="cat-cupo-count">{curso.cupoOcupado}/{curso.cupoTotal}</span>
          <span
            className="cat-cupo-label"
            style={{ background: st.bg, color: st.color, fontSize: 10 }}
          >
            {st.label}
          </span>
        </div>
        <div className="cat-progress-track" style={{ height: 3 }}>
          <div
            className="cat-progress-fill"
            style={{ width: `${pct}%`, background: curso.color }}
          />
        </div>
      </div>

      <p className="cal-list-precio">{curso.precio}</p>
    </div>
  );
}

// ─── Vista principal ──────────────────────────────────────────

export default function VistaCatalogoHorarios() {
  const [categoria,    setCategoria]    = useState<string>("Todas");
  const [modoSemana,   setModoSemana]   = useState<boolean>(true);
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  // Alterna selección: clic en el mismo cierra el panel
  const handleSelect = (id: number) =>
    setSeleccionado((prev) => (prev === id ? null : id));

  const filtrados = CURSOS_CATALOGO.filter(
    (c) => categoria === "Todas" || c.categoria === categoria
  );

  return (
    <div className="cat-page">

      {/* Encabezado */}
      <div className="cat-header">
        <p className="cat-kicker">Oferta académica</p>
        <h2 className="cat-title">
          Horarios <em>disponibles</em>
        </h2>
        <p className="cat-subtitle-text">
          Ciclo Ene–Jun 2025 · Haz clic en un curso para ver el detalle e inscribirte
        </p>
      </div>

      {/* Stats rápidas */}
      <div className="cat-stats">
        {[
          { val: String(filtrados.length),                                   label: "Cursos",        sub: "en oferta" },
          { val: String(filtrados.reduce((a, c) => a + c.dias.length, 0)),   label: "Sesiones/sem.", sub: "en total" },
          { val: String(filtrados.filter((c) => cupoLibre(c) > 0).length),   label: "Con cupo",      sub: "disponible" },
        ].map((s) => (
          <div key={s.label} className="cat-stat-card">
            <p className="cat-stat-val">{s.val}</p>
            <p className="cat-stat-label">{s.label}</p>
            <p className="cat-stat-sub">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Barra de filtros */}
      <div className="cat-toolbar">
        <div className="cat-filters">
          {/* "Todas" es el valor neutro para esta vista */}
          {["Todas", ...CATEGORIAS_CATALOGO.filter((c) => c !== "Todos")].map((cat) => (
            <button
              key={cat}
              className={`cat-filter-btn${categoria === cat ? " active" : ""}`}
              onClick={() => {
                setCategoria(cat);
                setSeleccionado(null); // limpiar panel al cambiar filtro
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toggle semana / lista */}
        <div className="cat-toggle-vista">
          <button
            className={`cat-toggle-btn${modoSemana ? " active" : ""}`}
            onClick={() => setModoSemana(true)}
          >
            Semana
          </button>
          <button
            className={`cat-toggle-btn${!modoSemana ? " active" : ""}`}
            onClick={() => setModoSemana(false)}
          >
            Lista
          </button>
        </div>
      </div>

      {/* ── Modo semana ── */}
      {modoSemana && (
        <div className="cal-layout">
          {/* Grilla por día */}
          <div
            className="cal-grid"
            style={{ gridTemplateColumns: `repeat(${DIAS_SEMANA.length}, 1fr)` }}
          >
            {DIAS_SEMANA.map((dia) => {
              const bloques = cursosDelDia(dia, filtrados);
              return (
                <div key={dia} className="cal-day-col">
                  <div className="cal-day-header">
                    <p className="cal-day-name">{dia.slice(0, 3)}</p>
                  </div>
                  {bloques.length === 0 ? (
                    <p className="cal-empty" style={{ fontSize: 10, padding: "4px 0" }}>—</p>
                  ) : (
                    bloques.map((c) => (
                      <BloqueCalendario
                        key={c.id}
                        curso={c}
                        seleccionado={seleccionado === c.id}
                        onSelect={handleSelect}
                      />
                    ))
                  )}
                </div>
              );
            })}
          </div>

          {/* Panel de detalle lateral */}
          {seleccionado !== null && (
            <PanelDetalle
              cursoId={seleccionado}
              onClose={() => setSeleccionado(null)}
            />
          )}
        </div>
      )}

      {/* ── Modo lista ── */}
      {!modoSemana && (
        <div className="cal-layout">
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Cabecera de la tabla */}
            <div className="cal-list-header">
              {["Día / Hora", "Curso", "Cupo", "Precio"].map((h) => (
                <p key={h} className="cal-list-th">{h}</p>
              ))}
            </div>

            {filtrados.length === 0 ? (
              <p className="cat-empty">No hay cursos con los filtros seleccionados.</p>
            ) : (
              filtrados.map((c) => (
                <FilaHorario
                  key={c.id}
                  curso={c}
                  seleccionado={seleccionado === c.id}
                  onSelect={handleSelect}
                />
              ))
            )}
          </div>

          {/* Panel de detalle lateral también en modo lista */}
          {seleccionado !== null && (
            <PanelDetalle
              cursoId={seleccionado}
              onClose={() => setSeleccionado(null)}
            />
          )}
        </div>
      )}
    </div>
  );
}
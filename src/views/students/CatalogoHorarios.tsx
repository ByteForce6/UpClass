import { useState } from "react";
import type { CursoCatalogo } from "../../Types/index";
import {
  CURSOS_CATALOGO,
  CATEGORIAS_CATALOGO,
  DIAS_SEMANA,
} from "../../Data/mockCatalogo";
import "../../Styles/Catalogo.css";

// ─── Helpers ──────────────────────────────────────────────────

function cupoLibre(c: CursoCatalogo): number {
  return c.cupoTotal - c.cupoOcupado;
}

function getCupoStatus(c: CursoCatalogo) {
  const libre = cupoLibre(c);
  const pct   = libre / c.cupoTotal;
  if (libre === 0) return { label: "Lleno",   bg: "#fff5f5", color: "#9b1c1c", bar: "#e53e3e" };
  if (pct <= 0.2)  return { label: `${libre} lugar${libre > 1 ? "es" : ""}`, bg: "#fff8ed", color: "#7a3c00", bar: "#f59e0b" };
  return               { label: `${libre} lugares`, bg: "#f0faf5", color: "#1a6b3c", bar: "#22c55e" };
}

function cursosDelDia(dia: string, lista: CursoCatalogo[]): CursoCatalogo[] {
  return lista.filter((c) => c.dias.includes(dia));
}

// ─── Bloque en calendario ─────────────────────────────────────

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
  const st    = getCupoStatus(curso);

  return (
    <div
      className={`cal-bloque${lleno ? " cal-bloque--lleno" : ""}`}
      onClick={() => !lleno && onSelect(curso.id)}
      style={{
        borderLeftColor: lleno ? "#e0dbd4" : curso.color,
        background: seleccionado ? `${curso.color}10` : "#fff",
        outline: seleccionado ? `1px solid ${curso.color}40` : "1px solid transparent",
      }}
    >
      <p className="cal-bloque-hora">{curso.horaInicio}–{curso.horaFin}</p>
      <p className="cal-bloque-nombre">
        {curso.nombre.split(" ").slice(0, 3).join(" ")}
      </p>
      <p className="cal-bloque-sala">{curso.sala}</p>
      <span
        className="cal-bloque-cupo"
        style={{ color: lleno ? "#ccc" : st.color }}
      >
        {lleno ? "LLENO" : st.label}
      </span>
    </div>
  );
}

// ─── Panel lateral de detalle ─────────────────────────────────

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
        <span
          className="cat-badge cat-badge--outline"
          style={{ borderLeftColor: c.color, borderLeftWidth: 3 }}
        >
          {c.categoria}
        </span>
        <button className="cal-panel-close" onClick={onClose}>×</button>
      </div>

      <div>
        <h3 className="cal-panel-nombre">{c.nombre}</h3>
        <p className="cal-panel-instructor">{c.instructor}</p>
      </div>

      <hr className="cal-panel-divider" />

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

      <hr className="cal-panel-divider" />

      <div>
        <div className="cat-cupo-header">
          <span className="cat-cupo-count">{c.cupoOcupado}/{c.cupoTotal} inscritos</span>
          <span className="cat-cupo-label" style={{ background: st.bg, color: st.color }}>
            {st.label}
          </span>
        </div>
        <div className="cat-progress-track">
          <div
            className="cat-progress-fill"
            style={{ width: `${pct}%`, background: libre === 0 ? "#e53e3e" : c.color }}
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

// ─── Fila en vista lista ──────────────────────────────────────

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

      <div>
        <div className="cat-cupo-header" style={{ marginBottom: 6 }}>
          <span className="cat-cupo-count">{curso.cupoOcupado}/{curso.cupoTotal}</span>
          <span className="cat-cupo-label" style={{ background: st.bg, color: st.color, fontSize: 9 }}>
            {st.label}
          </span>
        </div>
        <div className="cat-progress-track" style={{ height: 3 }}>
          <div className="cat-progress-fill" style={{ width: `${pct}%`, background: curso.color }} />
        </div>
      </div>

      <p className="cal-list-precio">{curso.precio}</p>
    </div>
  );
}

// ─── Vista principal ──────────────────────────────────────────

export default function CatalogoHorarios() {
  const [categoria,    setCategoria]    = useState<string>("Todas");
  const [modoSemana,   setModoSemana]   = useState<boolean>(true);
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  const handleSelect = (id: number) =>
    setSeleccionado((prev) => (prev === id ? null : id));

  const filtrados = CURSOS_CATALOGO.filter(
    (c) => categoria === "Todas" || c.categoria === categoria
  );

  const categoriasFiltro = ["Todas", ...CATEGORIAS_CATALOGO.filter((c) => c !== "Todos")];

  return (
    <div className="cat-page">

      <div className="cat-header">
        <p className="cat-kicker">Oferta académica</p>
        <h2 className="cat-title">Horarios <em>disponibles</em></h2>
        <p className="cat-subtitle-text">
          Ciclo Ene–Jun 2025 · Selecciona un curso para ver el detalle
        </p>
      </div>

      <div className="cat-stats">
        {[
          { val: String(filtrados.length),                                 label: "Cursos",        sub: "en oferta" },
          { val: String(filtrados.reduce((a, c) => a + c.dias.length, 0)), label: "Sesiones/sem.", sub: "en total" },
          { val: String(filtrados.filter((c) => cupoLibre(c) > 0).length), label: "Con cupo",      sub: "disponible" },
        ].map((s) => (
          <div key={s.label} className="cat-stat-card">
            <p className="cat-stat-val">{s.val}</p>
            <p className="cat-stat-label">{s.label}</p>
            <p className="cat-stat-sub">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="cat-toolbar">
        <div className="cat-filters">
          {categoriasFiltro.map((cat) => (
            <button
              key={cat}
              className={`cat-filter-btn${categoria === cat ? " active" : ""}`}
              onClick={() => { setCategoria(cat); setSeleccionado(null); }}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>
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

      {/* ── Vista semana ── */}
      {modoSemana && (
        <div className="cal-layout">
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
                    <p className="cal-empty">—</p>
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

          {seleccionado !== null && (
            <PanelDetalle
              cursoId={seleccionado}
              onClose={() => setSeleccionado(null)}
            />
          )}
        </div>
      )}

      {/* ── Vista lista ── */}
      {!modoSemana && (
        <div className="cal-layout">
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="cal-list-wrap">
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
          </div>

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

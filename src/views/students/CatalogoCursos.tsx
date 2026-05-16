import { useState } from "react";
import type { CursoCatalogo } from "../../Types/index";
import {
  CURSOS_CATALOGO,
  CATEGORIAS_CATALOGO,
  MODALIDADES_CATALOGO,
} from "../../Data/mockCatalogo";
import "../../Styles/Catalogo.css";

// ─── Helpers ──────────────────────────────────────────────────
function cupoLibre(c: CursoCatalogo): number {
  return c.cupoTotal - c.cupoOcupado;
}

function getCupoStatus(c: CursoCatalogo) {
  const libre = cupoLibre(c);
  const pct   = libre / c.cupoTotal;
  if (libre === 0) return { label: "Sin cupo",  bg: "#fff5f5", color: "#9b1c1c", bar: "#e53e3e" };
  if (pct <= 0.2)  return { label: `${libre} lugar${libre > 1 ? "es" : ""}`, bg: "#fff8ed", color: "#7a3c00", bar: "#f59e0b" };
  return               { label: `${libre} lugares`, bg: "#f0faf5", color: "#1a6b3c", bar: "#22c55e" };
}

function getModalidadStyle(m: string): { bg: string; color: string } {
  if (m === "Presencial") return { bg: "#111",    color: "#fff" };
  if (m === "En línea")   return { bg: "#f0faf5", color: "#1a6b3c" };
  return                         { bg: "#f5f2ed", color: "#555" };
}

// ─── Subcomponentes ───────────────────────────────────────────

function BadgeModalidad({ tipo }: { tipo: string }) {
  const s = getModalidadStyle(tipo);
  return (
    <span className="cat-badge" style={{ background: s.bg, color: s.color }}>
      {tipo}
    </span>
  );
}

function BarraCupo({ curso }: { curso: CursoCatalogo }) {
  const st  = getCupoStatus(curso);
  const pct = (curso.cupoOcupado / curso.cupoTotal) * 100;
  return (
    <div className="cat-cupo-wrap">
      <div className="cat-cupo-header">
        <span className="cat-cupo-count">{curso.cupoOcupado}/{curso.cupoTotal} inscritos</span>
        <span className="cat-cupo-label" style={{ background: st.bg, color: st.color }}>
          {st.label}
        </span>
      </div>
      <div className="cat-progress-track">
        <div className="cat-progress-fill" style={{ width: `${pct}%`, background: st.bar }} />
      </div>
    </div>
  );
}

// Tarjeta grid
function TarjetaCursoGrid({ curso }: { curso: CursoCatalogo }) {
  const libre = cupoLibre(curso);
  return (
    <div className="cat-card">
      <div className="cat-card-badges">
        <span className="cat-badge cat-badge--outline">{curso.categoria}</span>
        <BadgeModalidad tipo={curso.modalidad} />
        <span className="cat-badge cat-badge--muted">{curso.nivel}</span>
      </div>

      <div>
        <h3 className="cat-card-nombre">{curso.nombre}</h3>
        <p className="cat-card-instructor">{curso.instructor}</p>
      </div>

      <p className="cat-card-desc">{curso.descripcion}</p>

      <div className="cat-card-meta">
        {[
          { icon: "◷", val: curso.horario },
          { icon: "◎", val: curso.sala },
          { icon: "◈", val: curso.duracion },
          { icon: "→", val: `Inicio: ${curso.inicio}` },
        ].map((d) => (
          <span key={d.val} className="cat-card-meta-item">
            <span className="cat-card-meta-icon">{d.icon}</span>
            {d.val}
          </span>
        ))}
      </div>

      <div className="cat-tags">
        {curso.tags.map((t) => <span key={t} className="cat-tag">{t}</span>)}
      </div>

      <BarraCupo curso={curso} />

      <div className="cat-card-footer">
        <p className="cat-precio">{curso.precio}</p>
        <button
          className={`cat-btn ${libre === 0 ? "cat-btn--disabled" : "cat-btn--primary"}`}
          disabled={libre === 0}
          style={{ width: "auto", padding: "9px 16px" }}
        >
          {libre === 0 ? "Sin cupo" : "Inscribirme →"}
        </button>
      </div>
    </div>
  );
}

// Fila lista
function FilaCursoLista({ curso }: { curso: CursoCatalogo }) {
  const libre = cupoLibre(curso);
  const st    = getCupoStatus(curso);
  const pct   = (curso.cupoOcupado / curso.cupoTotal) * 100;

  return (
    <div className="cat-list-item">
      <div className="cat-list-info">
        <div className="cat-card-badges" style={{ marginBottom: 10 }}>
          <span className="cat-badge cat-badge--outline">{curso.categoria}</span>
          <BadgeModalidad tipo={curso.modalidad} />
          <span className="cat-badge cat-badge--muted">{curso.nivel}</span>
        </div>
        <h3 className="cat-list-nombre">{curso.nombre}</h3>
        <p className="cat-list-instructor">{curso.instructor}</p>
        <p className="cat-list-desc">{curso.descripcion}</p>
        <div className="cat-list-metas">
          {[
            { icon: "◷", val: curso.horario },
            { icon: "◎", val: curso.sala },
            { icon: "◈", val: curso.duracion },
            { icon: "→", val: `Inicio: ${curso.inicio}` },
          ].map((d) => (
            <span key={d.val} className="cat-list-meta-item">
              <span style={{ marginRight: 4, opacity: .6 }}>{d.icon}</span>{d.val}
            </span>
          ))}
        </div>
      </div>

      <div className="cat-list-side">
        <div className="cat-cupo-box">
          <p className="cat-cupo-box-num">{libre === 0 ? "—" : libre}</p>
          <p className="cat-cupo-box-sub">{libre === 0 ? "Sin cupo" : "lugares libres"}</p>
          <div className="cat-progress-track">
            <div className="cat-progress-fill" style={{ width: `${pct}%`, background: st.bar }} />
          </div>
        </div>
        <p className="cat-precio" style={{ textAlign: "right" }}>{curso.precio}</p>
        <button
          className={`cat-btn ${libre === 0 ? "cat-btn--disabled" : "cat-btn--primary"}`}
          disabled={libre === 0}
        >
          {libre === 0 ? "Lista de espera" : "Inscribirme →"}
        </button>
      </div>
    </div>
  );
}

// ─── Vista principal ──────────────────────────────────────────

export default function CatalogoCursos() {
  const [categoria,  setCategoria]  = useState<string>("Todos");
  const [modalidad,  setModalidad]  = useState<string>("Todas");
  const [soloDispon, setSoloDispon] = useState<boolean>(false);
  const [vistaGrid,  setVistaGrid]  = useState<boolean>(true);

  const filtrados = CURSOS_CATALOGO.filter((c) => {
    if (categoria !== "Todos" && c.categoria !== categoria) return false;
    if (modalidad !== "Todas" && c.modalidad !== modalidad) return false;
    if (soloDispon && cupoLibre(c) === 0)                   return false;
    return true;
  });

  const totalLibres = filtrados.reduce((acc, c) => acc + cupoLibre(c), 0);
  const sinCupo     = filtrados.filter((c) => cupoLibre(c) === 0).length;

  return (
    <div className="cat-page">

      <div className="cat-header">
        <p className="cat-kicker">Oferta académica</p>
        <h2 className="cat-title">Cursos <em>disponibles</em></h2>
      </div>

      <div className="cat-stats">
        {[
          { val: String(filtrados.length), label: "Cursos",         sub: "en esta selección" },
          { val: String(totalLibres),       label: "Lugares libres", sub: "en total" },
          { val: String(sinCupo),           label: "Sin cupo",       sub: "lista de espera" },
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
          {CATEGORIAS_CATALOGO.map((cat) => (
            <button
              key={cat}
              className={`cat-filter-btn${categoria === cat ? " active" : ""}`}
              onClick={() => setCategoria(cat)}
            >
              <span>{cat}</span>
            </button>
          ))}
          <span className="cat-divider" />
          {MODALIDADES_CATALOGO.map((m) => (
            <button
              key={m}
              className={`cat-filter-btn secondary${modalidad === m ? " active" : ""}`}
              onClick={() => setModalidad(m)}
            >
              <span>{m}</span>
            </button>
          ))}
        </div>

        <div className="cat-filters">
          <label className="cat-check-label">
            <input
              type="checkbox"
              checked={soloDispon}
              onChange={(e) => setSoloDispon(e.target.checked)}
            />
            Solo con cupo
          </label>
          <div className="cat-toggle-vista">
            <button
              className={`cat-toggle-btn${vistaGrid ? " active" : ""}`}
              onClick={() => setVistaGrid(true)}
              title="Cuadrícula"
            >⊞</button>
            <button
              className={`cat-toggle-btn${!vistaGrid ? " active" : ""}`}
              onClick={() => setVistaGrid(false)}
              title="Lista"
            >≡</button>
          </div>
        </div>
      </div>

      {filtrados.length === 0 ? (
        <p className="cat-empty">No hay cursos con los filtros seleccionados.</p>
      ) : vistaGrid ? (
        <div className="cat-grid">
          {filtrados.map((c) => <TarjetaCursoGrid key={c.id} curso={c} />)}
        </div>
      ) : (
        <div>
          {filtrados.map((c) => <FilaCursoLista key={c.id} curso={c} />)}
        </div>
      )}
    </div>
  );
}

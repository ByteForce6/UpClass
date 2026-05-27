import { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/404.css';
import '../Styles/home.css';

export default function NotFound() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="nf-shell">
        <div className="nf-scanline" />
        <div className="nf-bg-num" aria-hidden="true">404</div>

        {/* Decoraciones laterales */}
        <div className="nf-deco-left" aria-hidden="true">
          <div className="nf-deco-line" />
          <span className="nf-deco-text">Error de ruta</span>
          <div className="nf-deco-line" />
        </div>
        <div className="nf-deco-right" aria-hidden="true">
          <span className="nf-deco-right-num">UP · CLASS</span>
        </div>

        {/* Navbar del Home */}
        <header className="home-navbar">
          <button
            className="home-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <div className="home-logo">UpClass</div>

          <nav className={`home-nav ${menuOpen ? "active" : ""}`}>
            <a href="/#inicio">Inicio</a>
            <a href="/#cursos">Cursos</a>
            <a href="/#testimonios">Testimonios</a>
            <a href="/#preguntas">Preguntas Frecuentes</a>
          </nav>

          <Link to="/login" className="home-login-btn">
            Iniciar sesión
          </Link>
        </header>

        {/* Centro */}
        <div className="nf-center">
          <div className="nf-badge">
            <span className="nf-badge__dot" />
            <span className="nf-badge__text">Página no encontrada</span>
          </div>

          <h1 className="nf-number">404</h1>

          <p className="nf-title">Esta página no existe.</p>

          <p className="nf-desc">
            La ruta que buscas no existe o fue movida. Verifica la dirección o regresa a un lugar conocido.
          </p>

          <div className="nf-actions">
            <a href="/" className="nf-btn nf-btn--solid">← Volver al inicio</a>
          </div>

          <div className="nf-suggestions">
            <span className="nf-suggest-label">Ir a:</span>
            {[
              { label: "Inicio", href: "/#inicio" },
              { label: "Cursos", href: "/#cursos" },
              { label: "Testimonios", href: "/#testimonios" },
              { label: "Login", href: "/login" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="nf-suggest-link">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Ticker inferior */}
        <div className="nf-ticker" aria-hidden="true">
          <div className="nf-ticker__track">
            {[...Array(10)].map((_, i) => (
              <span key={i} className={i % 2 === 0 ? "nf-ticker__item" : "nf-ticker__sep"}>
                {i % 2 === 0 ? "Error 404 — Página no encontrada" : "◆"}
              </span>
            ))}
            {[...Array(10)].map((_, i) => (
              <span key={`b${i}`} className={i % 2 === 0 ? "nf-ticker__item" : "nf-ticker__sep"}>
                {i % 2 === 0 ? "Error 404 — Página no encontrada" : "◆"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
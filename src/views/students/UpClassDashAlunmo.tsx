import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CatalogoCursos from "./CatalogoCursos";
import CatalogoHorarios from "./CatalogoHorarios";
import MisCursos from "./MisCursos";
import MisCalificaciones from "./MisCalificaciones";
import MisHorarios from "./MisHorarios";
import "../../Styles/dashboardAlumnos.css";

// ── TYPES E INTERFACES ──
type View =
  | "inicio"
  | "calificaciones"
  | "horarios"
  | "cursos"
  | "catalogoCursos"
  | "catalogoHorarios";

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

interface Calificacion {
  materia: string;
  profesor: string;
  fecha: string;
  Promedio: number;
  maximo: number;
}

export interface UserSession {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
}

// ── ARRAYS DE DATOS SIMULADOS ──
const CURSOS: Curso[] = [
  {
    id: 1,
    nombre: "Diseño UX/UI Avanzado",
    instructor: "Arq. Laura Méndez",
    categoria: "Diseño",
    progreso: 72,
    estado: "activo",
    sesiones: 13,
    sesionesTotal: 18,
    nextSession: "Lun 09:00",
    calificacion: 9.1,
  },
  {
    id: 2,
    nombre: "Fotografía Editorial",
    instructor: "Mtro. Carlos Ruiz",
    categoria: "Arte",
    progreso: 100,
    estado: "completado",
    sesiones: 20,
    sesionesTotal: 20,
    calificacion: 8.8,
  },
  {
    id: 3,
    nombre: "Marketing Digital & Growth",
    instructor: "Lic. Sofía Torres",
    categoria: "Negocios",
    progreso: 40,
    estado: "activo",
    sesiones: 6,
    sesionesTotal: 15,
    nextSession: "Mié 11:00",
    calificacion: 8.5,
  },
  {
    id: 4,
    nombre: "Liderazgo y Gestión de Equipos",
    instructor: "Dr. Andrés Vega",
    categoria: "Negocios",
    progreso: 0,
    estado: "pendiente",
    sesiones: 0,
    sesionesTotal: 12,
    nextSession: "Inicia Jun 2",
  },
];

const CALIFICACIONES: Calificacion[] = [
  {
    materia: "Diseño UX/UI Avanzado",
    profesor: "Arq. Laura Méndez",
    fecha: "12 May",
    Promedio: 9.5,
    maximo: 10,
  },
  {
    materia: "Fotografía Editorial",
    profesor: "Mtro. Carlos Ruiz",
    fecha: "15 Abr",
    Promedio: 8.8,
    maximo: 10,
  },
  {
    materia: "Marketing Digital & Growth",
    profesor: "Lic. Sofía Torres",
    fecha: "10 Abr",
    Promedio: 8.5,
    maximo: 10,
  },
];

// ── FUNCIONES AUXILIARES DE CÁLCULO ──
const PromedioColor = (n: number) =>
  n >= 9 ? "#1a6b3c" : n >= 7.5 ? "#7a5c00" : "#9b1c1c";

const PromedioBg = (n: number) =>
  n >= 9 ? "#f0faf5" : n >= 7.5 ? "#fefce8" : "#fff5f5";

const promedio = (cals: Calificacion[]) => {
  const avg =
    cals.reduce((a, c) => a + (c.Promedio / c.maximo) * 10, 0) / cals.length;
  return Math.round(avg * 10) / 10;
};

function BadgeTipo({ tipo }: { tipo: string }) {
  const m: Record<string, { bg: string; color: string }> = {
    Proyecto: { bg: "#f0f0f0", color: "#333" },
    Tarea: { bg: "#f5f2ed", color: "#555" },
    Evaluación: { bg: "#111", color: "#fff" },
    Participación: { bg: "#e8ede8", color: "#2a5c2a" },
  };
  const s = m[tipo] || { bg: "#eee", color: "#333" };
  return (
    <span
      style={{
        fontFamily: "var(--ds)",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: ".08em",
        textTransform: "uppercase" as const,
        background: s.bg,
        color: s.color,
        padding: "3px 9px",
        whiteSpace: "nowrap" as const,
      }}
    >
      {tipo}
    </span>
  );
}

// ── COMPONENTE: VISTA INICIO (CON PROPS DINÁMICAS) ──
function VistaInicio({ onNav, userName }: { onNav: (v: View) => void; userName: string }) {
  const activos = CURSOS.filter((c) => c.estado === "activo");
  const prom = promedio(CALIFICACIONES);
  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Bienvenido de vuelta</p>
        {/* Aquí se inyecta el nombre del usuario logueado */}
        <h2 className="uc-page-title">{userName}</h2>
      </div>
      <div className="uc-stats-grid">
        {[
          {
            icon: "📚",
            val: String(CURSOS.length),
            label: "Cursos inscritos",
            sub: "2 activos · 1 completado",
          },
          {
            icon: "✦",
            val: `${prom}`,
            label: "Promedio general",
            sub: "Sobre 100 puntos",
          },
          {
            icon: "◎",
            val: "94%",
            label: "Asistencia",
            sub: "Últimas 8 semanas",
          },
        ].map((s, i) => (
          <div key={i} className="uc-stat-card">
            <span style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</span>
            <p className="uc-stat-val">{s.val}</p>
            <p className="uc-stat-label">{s.label}</p>
            <p className="uc-stat-sub">{s.sub}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="uc-row-between" style={{ marginBottom: 18 }}>
          <p className="uc-subtitle">Cursos activos</p>
          <button className="uc-link-btn" onClick={() => onNav("cursos")}>
            Ver todos →
          </button>
        </div>
        {activos.map((c) => (
          <div key={c.id} className="uc-course-row">
            <div style={{ flex: 1, minWidth: 0 }}>
              <p className="uc-kicker" style={{ marginBottom: 4 }}>
                {c.categoria}
              </p>
              <p className="uc-course-name">{c.nombre}</p>
              <p className="uc-course-inst">{c.instructor}</p>
              <div className="uc-progress-row">
                <div className="uc-progress-track">
                  <div
                    className="uc-progress-fill"
                    style={{ width: `${c.progreso}%`, background: "var(--uc-brand-blue)" }}
                  />
                </div>
                <span className="uc-progress-label">
                  {c.progreso}% · {c.sesiones}/{c.sesionesTotal}
                </span>
              </div>
            </div>
            {c.nextSession && (
              <div className="uc-next-session">
                <p className="uc-kicker" style={{ marginBottom: 3 }}>
                  Próxima sesión
                </p>
                <p
                  style={{
                    fontFamily: "var(--dr)",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--uc-text)",
                    margin: 0,
                  }}
                >
                  {c.nextSession}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <div className="uc-row-between" style={{ marginBottom: 18 }}>
          <p className="uc-subtitle">Calificaciones recientes</p>
          <button
            className="uc-link-btn"
            onClick={() => onNav("calificaciones")}
          >
            Ver todas →
          </button>
        </div>
        {CALIFICACIONES.slice(0, 4).map((c, i) => (
          <div key={i} className="uc-cal-row">
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                flex: 1,
                minWidth: 0,
              }}
            >
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <BadgeTipo tipo="Evaluación" />
              </div>
              <div style={{ minWidth: 0 }}>
                <p className="uc-cal-act">{c.materia}</p>
                <p className="uc-cal-meta">
                  {c.profesor} · {c.fecha}
                </p>
              </div>
            </div>
            <div
              className="uc-Promedio-chip"
              style={{ background: PromedioBg(c.Promedio) }}
            >
              <p
                style={{
                  fontFamily: "var(--dr)",
                  fontSize: 20,
                  fontWeight: 700,
                  color: PromedioColor(c.Promedio),
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {c.Promedio}
              </p>
              <p
                style={{
                  fontFamily: "var(--ds)",
                  fontSize: 9,
                  color: "#aaa",
                  margin: 0,
                }}
              >
                /{c.maximo}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="uc-row-between" style={{ marginBottom: 18 }}>
          <p className="uc-subtitle">Explorar oferta</p>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
        >
          {[
            {
              label: "Cursos disponibles",
              sub: "Ver cupo y precios",
              key: "catalogoCursos" as View,
              icon: "◈",
            },
            {
              label: "Horarios",
              sub: "Consultar calendario",
              key: "catalogoHorarios" as View,
              icon: "◷",
            },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => onNav(item.key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 18px",
                background: "var(--uc-surface)",
                border: "1px solid #e0dbd4",
                textAlign: "left" as const,
                cursor: "pointer",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#111")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#e0dbd4")
              }
            >
              <span style={{ fontSize: 22, color: "#111" }}>{item.icon}</span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--dr)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#111",
                    margin: "0 0 2px",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--ds)",
                    fontSize: 11,
                    color: "#aaa",
                    margin: 0,
                  }}
                >
                  {item.sub}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CONFIGURACIÓN DEL MENÚ DE NAVEGACIÓN ──
const NAV: { key: View; label: string; icon: string }[] = [
  { key: "inicio", label: "Inicio", icon: "⌂" },
  { key: "cursos", label: "Mis cursos", icon: "◉" },
  { key: "calificaciones", label: "Calificaciones", icon: "✦" },
  { key: "horarios", label: "Horarios", icon: "◷" },
  { key: "catalogoCursos", label: "Cursos disponibles", icon: "◈" },
  { key: "catalogoHorarios", label: "Ver horarios", icon: "◫" },
];

// ── COMPONENTE PRINCIPAL EXPORTADO ──
export default function Dashboard() {
  const [view, setView] = useState<View>("inicio");
  const [sidebar, setSidebar] = useState(false);
  
  // Estado local seguro para guardar la información del usuario autenticado
  const [userData, setUserData] = useState<UserSession | null>(null);
  const navigate = useNavigate();

  // Validación de la sesión y rol
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    const storedRol = localStorage.getItem("rol");

    if (!token || !savedUser || !storedRol) {
      navigate("/");
      return;
    }

    const parsed = JSON.parse(savedUser);
    // Si el rol en user/localStorage no coincide con student => /home
    if (parsed?.rol !== "student" || storedRol !== "student") {
      navigate("/");
      return;
    }

    // setState after checks
    queueMicrotask(() => setUserData(parsed));
  }, [navigate]);

  // Función manejadora para romper la sesión actual
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rol");
    navigate("/");
  };

  // Previene el parpadeo de datos vacíos mientras se lee el almacenamiento local
  if (!userData) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        fontFamily: 'var(--dr)',
        color: '#111'
      }}>
        Verificando credenciales...
      </div>
    );
  }

  // Extrae y construye las iniciales de forma dinámica (ej: "Diego Pérez" -> "DP")
  const iniciales = userData.nombre
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <>
      <div className="ds-shell">
        {/* Overlay móvil */}
        <div
          className="ds-overlay"
          onClick={() => setSidebar(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 190,
            display: sidebar ? "block" : "none",
          }}
        />

        <aside className={`ds-sidebar${sidebar ? " open" : ""}`}>
          <div className="ds-sidebar-logo">
            <p className="ds-logo-text">UP CLASS</p>
            {/* Texto adaptable dependiendo de si es cuenta Teacher o Student */}
            <p className="ds-logo-sub">
              {userData.rol === "teacher" ? "Portal del Docente" : "Portal del Estudiante"}
            </p>
          </div>
          
          <div className="ds-sidebar-profile">
            <div className="ds-avatar">
              <span>{iniciales}</span>
            </div>
            <p className="ds-profile-name">{userData.nombre}</p>
          </div>
          
          <nav className="ds-nav-area">
            {NAV.map((item, idx) => {
              const active = view === item.key;
              const showSep = idx === 4;
              return (
                <div key={item.key}>
                  {showSep && <div className="ds-nav-separator" />}
                  <button
                    className={`ds-nav-btn${active ? " active" : ""}`}
                    onClick={() => {
                      setView(item.key);
                      setSidebar(false);
                    }}
                  >
                    <span className="ds-nav-icon">{item.icon}</span>
                    <span className="ds-nav-label">{item.label}</span>
                  </button>
                </div>
              );
            })}
          </nav>
          
          <div className="ds-sidebar-footer">
            {/* Vinculación de la función de destrucción de sesión */}
            <button className="ds-logout" onClick={handleLogout}>
              <span>↩ Cerrar sesión</span>
            </button>
          </div>
        </aside>

        <div className="ds-main">
          <div className="ds-topbar">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button className="ds-hamburger" onClick={() => setSidebar(true)}>
                ☰
              </button>
              <p className="ds-topbar-title">
                {NAV.find((n) => n.key === view)?.label}
              </p>
            </div>
            <div className="ds-topbar-right">
              <span className="ds-cycle-badge">Ciclo Ene–Jun 2026</span>
              <div className="ds-topbar-avatar">
                <span>{iniciales}</span>
              </div>
            </div>
          </div>
          
          <main className="ds-content">
            {/* Inyección de sub-vistas condicionales */}
            {view === "inicio" && <VistaInicio onNav={setView} userName={userData.nombre} />}
            {view === "calificaciones" && <MisCalificaciones />}
            {view === "horarios" && <MisHorarios />}
            {view === "cursos" && <MisCursos />}
            {view === "catalogoCursos" && <CatalogoCursos />}
            {view === "catalogoHorarios" && <CatalogoHorarios />}
          </main>
        </div>
      </div>
    </>
  );
}
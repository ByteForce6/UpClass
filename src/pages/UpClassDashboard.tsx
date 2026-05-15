import { useState } from "react";

// Datos //

const SCHEDULE = [
  { time: "07:00 am", dotColor: "teal", name: "Yoga matutino", meta: "Carla Reyes · 14 alumnos", badge: "green", badgeLabel: "En curso" },
  { time: "09:00 am", dotColor: "blue", name: "Inglés intermedio", meta: "Pedro Mora · 20 alumnos", badge: "green", badgeLabel: "En curso" },
  { time: "11:00 am", dotColor: "amber", name: "Piano nivel 1", meta: "Sofía Leal · 8 alumnos", badge: "amber", badgeLabel: "Próxima" },
  { time: "01:00 pm", dotColor: "coral", name: "Matemáticas avanzadas", meta: "Andrés Gil · 18 alumnos", badge: "gray", badgeLabel: "Pendiente" },
  { time: "04:00 pm", dotColor: "purple", name: "Dibujo y pintura", meta: "Luisa Fox · 12 alumnos", badge: "gray", badgeLabel: "Pendiente" },
];

const INSTRUCTORS = [
  { initials: "CR", color: "teal", name: "Carla Reyes", specialty: "Yoga · Meditación", students: 14 },
  { initials: "PM", color: "blue", name: "Pedro Mora", specialty: "Inglés · Francés", students: 20 },
  { initials: "SL", color: "amber", name: "Sofía Leal", specialty: "Piano · Música", students: 8 },
  { initials: "AG", color: "coral", name: "Andrés Gil", specialty: "Matemáticas", students: 18 },
  { initials: "LF", color: "purple", name: "Luisa Fox", specialty: "Arte · Diseño", students: 12 },
];

const STUDENTS = [
  { name: "Valeria Ríos", since: "Ene 2026", clase: "Yoga", pct: 92, pctColor: "#1D9E75", badge: "green", badgeLabel: "Al día" },
  { name: "Marco Soto", since: "Feb 2026", clase: "Inglés", pct: 75, pctColor: "#378ADD", badge: "blue", badgeLabel: "Al día" },
  { name: "Diana Núñez", since: "Mar 2026", clase: "Piano", pct: 55, pctColor: "#EF9F27", badge: "amber", badgeLabel: "Irregular" },
  { name: "Héctor Vega", since: "Abr 2026", clase: "Matemáticas", pct: 88, pctColor: "#1D9E75", badge: "green", badgeLabel: "Al día" },
];

const NAV_MAIN = [
  { icon: "ti-layout-dashboard", label: "Inicio", id: "inicio", badge: null },
  { icon: "ti-users", label: "Instructores", id: "instructores", badge: "8" },
  { icon: "ti-school", label: "Alumnos", id: "alumnos", badge: "142" },
  { icon: "ti-calendar-event", label: "Horarios", id: "horarios", badge: null },
];

const SETTINGS_SUBMENU = [
  { icon: "ti-building", label: "Perfil de la academia", id: "cfg-academia" },
  { icon: "ti-shield-lock", label: "Usuarios y permisos", id: "cfg-usuarios" },
];

// Subcomponentes //
interface NavItem {
  icon: string;
  label: string;
  id: string;
  badge: string | null;
}

interface NavSectionProps {
  label: string;
  items: NavItem[];
  active: string;
  onSelect: (id: string) => void;
}

function NavSection({ label, items, active, onSelect }: NavSectionProps) {
  return (
    <div className="uc-sidebar__section">
      <span className="uc-sidebar__section-label">{label}</span>
      {items.map((item) => (
        <button
          key={item.id}
          className={`uc-nav-item${active === item.id ? " uc-nav-item--active" : ""}`}
          onClick={() => onSelect(item.id)}
          data-label={item.label}
          title={item.label}
        >
          <i className={`ti ${item.icon} uc-nav-item__icon`} aria-hidden="true" />
          <span className="uc-nav-item__label">{item.label}</span>
          {item.badge && <span className="uc-nav-item__badge">{item.badge}</span>}
        </button>
      ))}
    </div>
  );
}

interface MetricCardProps {
  icon: string;
  iconColor: string;
  label: string;
  value: string;
}

function MetricCard({ icon, iconColor, label, value }: MetricCardProps) {
  return (
    <div className="uc-metric-card">
      <div className="uc-metric-card__label">
        <i className={`ti ${icon}`} aria-hidden="true" style={{ fontSize: 15, color: iconColor }} />
        {label}
      </div>
      <div className="uc-metric-card__value">{value}</div>
    </div>
  );
}

interface QuickActionBtnProps {
  iconClass: string;
  iconBgClass: string;
  label: string;
}

function QuickActionBtn({ iconClass, iconBgClass, label }: QuickActionBtnProps) {
  return (
    <button className="uc-quick-action-btn">
      <div className={`uc-quick-action-btn__icon ${iconBgClass}`}>
        <i className={`ti ${iconClass}`} aria-hidden="true" />
      </div>
      <span className="uc-quick-action-btn__label">{label}</span>
    </button>
  );
}

function ScheduleCard() {
  return (
    <div className="uc-card">
      <div className="uc-card__header">
        <span className="uc-card__title">Horario de hoy</span>
        <button className="uc-card__action">Ver semana</button>
      </div>
      <div className="uc-card__body">
        {SCHEDULE.map((item) => (
          <div className="uc-schedule-row" key={item.name}>
            <span className="uc-schedule-row__time">{item.time}</span>
            <span className={`uc-schedule-row__dot uc-dot--${item.dotColor}`} />
            <div className="uc-schedule-row__info">
              <div className="uc-schedule-row__name">{item.name}</div>
              <div className="uc-schedule-row__meta">{item.meta}</div>
            </div>
            <span className={`uc-badge uc-badge--${item.badge}`}>{item.badgeLabel}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InstructorsCard() {
  return (
    <div className="uc-card">
      <div className="uc-card__header">
        <span className="uc-card__title">Instructores activos</span>
        <button className="uc-card__action">Ver todos</button>
      </div>
      <div className="uc-card__body">
        {INSTRUCTORS.map((inst) => (
          <div className="uc-instructor-row" key={inst.name}>
            <div className={`uc-avatar uc-avatar--sm uc-avatar--${inst.color}`}>
              {inst.initials}
            </div>
            <div>
              <div className="uc-avatar__name">{inst.name}</div>
              <div className="uc-avatar__sub">{inst.specialty}</div>
            </div>
            <div className="uc-instructor-row__meta">
              <div className="uc-instructor-row__students">{inst.students} alumnos</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentsCard() {
  return (
    <div className="uc-card">
      <div className="uc-card__header">
        <span className="uc-card__title">Alumnos recientes</span>
        <button className="uc-card__action">Ver todos</button>
      </div>
      <div style={{ padding: "0 16px" }}>
        <table className="uc-students-table">
          <thead>
            <tr>
              <th>Alumno</th>
              <th>Clase</th>
              <th>Asistencia</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {STUDENTS.map((s) => (
              <tr key={s.name}>
                <td>
                  <div className="uc-student-name">{s.name}</div>
                  <div className="uc-student-since">Desde {s.since}</div>
                </td>
                <td>{s.clase}</td>
                <td>
                  <div className="uc-progress-wrap">
                    <div
                      className="uc-progress-fill"
                      style={{ width: `${s.pct}%`, background: s.pctColor }}
                    />
                  </div>
                  <div className="uc-progress-pct">{s.pct}%</div>
                </td>
                <td>
                  <span className={`uc-badge uc-badge--${s.badge}`}>{s.badgeLabel}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Componente principal //
export default function UpClassDashboard() {
  const [activeNav, setActiveNav] = useState("inicio");
  const [collapsed, setCollapsed] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const sidebarClass = `uc-sidebar${collapsed ? " uc-sidebar--collapsed" : ""}`;

  return (
    <>
      <div className="uc-root">
        {/* ── Sidebar ── */}
        <aside className={sidebarClass}>
          <div className="uc-sidebar__logo">
            <div className="uc-sidebar__logo-text">
              <div className="uc-sidebar__logo-name">UpClass</div>
              <div className="uc-sidebar__logo-sub">Panel de administración</div>
            </div>
            <button
              className="uc-sidebar__toggle"
              onClick={() => setCollapsed(!collapsed)}
              aria-label={collapsed ? "Expandir menú" : "Contraer menú"}
              title={collapsed ? "Expandir menú" : "Contraer menú"}
            >
              <i className="ti ti-chevrons-left" aria-hidden="true" />
            </button>
          </div>

          <NavSection label="Principal" items={NAV_MAIN} active={activeNav} onSelect={setActiveNav} />

          <div className="uc-sidebar__section">
            <span className="uc-sidebar__section-label">Configuración</span>

            <button
              className={`uc-nav-item${activeNav === "ajustes" ? " uc-nav-item--active" : ""}`}
              onClick={() => {
                setActiveNav("ajustes");
                setSettingsOpen(!settingsOpen);
              }}
              data-label="Ajustes"
              title="Ajustes"
            >
              <i className="ti ti-settings uc-nav-item__icon" aria-hidden="true" />
              <span className="uc-nav-item__label">Ajustes</span>
              <i className={`ti ti-chevron-down uc-nav-item__chevron${settingsOpen ? " uc-nav-item__chevron--open" : ""}`} aria-hidden="true" />
            </button>

            <div className={`uc-nav-submenu${settingsOpen ? " uc-nav-submenu--open" : ""}`}>
              {SETTINGS_SUBMENU.map((item) => (
                <button
                  key={item.id}
                  className="uc-nav-subitem"
                  onClick={() => setActiveNav(item.id)}
                >
                  <i className={`ti ${item.icon}`} aria-hidden="true" />
                  {item.label}
                </button>
              ))}

              <div className="uc-nav-submenu__divider" />

              <button
                className="uc-nav-subitem uc-nav-subitem--danger"
                onClick={() => console.log("cerrar sesión")}
              >
                <i className="ti ti-logout" aria-hidden="true" />
                Cerrar sesión
              </button>
            </div>
          </div>

          <div className="uc-sidebar__footer">
            <div className="uc-admin-pill">
              <div className="uc-avatar uc-avatar--md uc-avatar--blue">LA</div>
              <div className="uc-admin-pill__info">
                <div className="uc-avatar__name">Luis Aranda</div>
                <div className="uc-avatar__sub">Administrador</div>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Contenido principal ── */}
        < div className="uc-main" >
          {/* ── Topbar ── */}
          < header className="uc-topbar" >
            <div>
              <div className="uc-topbar__title">Resumen general</div>
              <div className="uc-topbar__sub">Jueves, 14 de mayo de 2026</div>
            </div>
            <div className="uc-topbar__actions">
              <button className="uc-btn-icon" aria-label="Buscar">
                <i className="ti ti-search" aria-hidden="true" />
              </button>
              <button className="uc-btn-primary">
                <i className="ti ti-plus" aria-hidden="true" />
                Nueva clase
              </button>
            </div>
          </header >

          {/* ── Scroll principal ── */}
          < main className="uc-content" >

            {/* Métricas */}
            < div className="uc-metrics-grid" >
              <MetricCard icon="ti-school" iconColor="#378ADD" label="Alumnos activos" value="142" />
              <MetricCard icon="ti-users" iconColor="#1D9E75" label="Instructores" value="8" />
              <MetricCard icon="ti-calendar-event" iconColor="#EF9F27" label="Clases hoy" value="11" />
            </div >

            {/* Acciones rápidas */}
            < div className="uc-quick-actions" >
              <QuickActionBtn iconClass="ti-user-plus" iconBgClass="uc-icon-bg--blue" label="Nuevo alumno" />
              <QuickActionBtn iconClass="ti-user-plus" iconBgClass="uc-icon-bg--blue" label="Nuevo instructor" />
              <QuickActionBtn iconClass="ti-calendar-plus" iconBgClass="uc-icon-bg--teal" label="Agendar clase" />
              <QuickActionBtn iconClass="ti-chart-bar" iconBgClass="uc-icon-bg--purple" label="Ver reportes" />
            </div >

            {/* Horario + Instructores */}
            < div className="uc-grid-2col" >
              <ScheduleCard />
              <InstructorsCard />
            </div >

            {/* Alumnos */}
            < div className="uc-grid-2col" >
              <StudentsCard />
            </div >

          </main >
        </div >
      </div >
    </>
  );
}
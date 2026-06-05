const HORARIOS: Horario[] = [
  {
    dia: "Lunes",
    bloques: [
      {
        hora: "09:00–11:00",
        curso: "Diseño UX/UI Avanzado",
        instructor: "Arq. Laura Méndez",
        sala: "Aula A-3",
        tipo: "Salón",
      },
    ],
  },
  {
    dia: "Miércoles",
    bloques: [
      {
        hora: "11:00–13:00",
        curso: "Marketing Digital & Growth",
        instructor: "Lic. Sofía Torres",
        sala: "Aula B-1",
        tipo: "Salón",
      },
    ],
  },
  {
    dia: "Viernes",
    bloques: [
      {
        hora: "09:00–11:00",
        curso: "Diseño UX/UI Avanzado",
        instructor: "Arq. Laura Méndez",
        sala: "Aula A-3",
        tipo: "Salón",
      },
      {
        hora: "12:00–13:30",
        curso: "Marketing Digital & Growth",
        instructor: "Lic. Sofía Torres",
        sala: "Aula A-2",
        tipo: "Salón",
      },
    ],
  },
];

interface Horario {
  dia: string;
  bloques: {
    hora: string;
    curso: string;
    instructor: string;
    sala: string;
    tipo: string;
  }[];
}

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];


/* ── HORARIOS ── */
export default function MisHorarios() {
  const hoy = "Lunes";
  const sesiones = HORARIOS.flatMap((h) =>
    h.bloques.map((b, i) => ({ ...b, dia: h.dia, key: `${h.dia}-${i}` })),
  );
  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Semana vigente</p>
        <h2 className="uc-page-title">Horario de clases</h2>
      </div>
      <div className="uc-week-grid">
        {DIAS.map((dia) => {
          const h = HORARIOS.find((h) => h.dia === dia);
          const isHoy = dia === hoy;
          return (
            <div
              key={dia}
              className={`uc-day-card${isHoy ? " uc-day-card--hoy" : ""}`}
            >
              <div className="uc-day-header">
                <p className="uc-day-name">{dia}</p>
                {isHoy && <span className="uc-hoy-badge">Hoy</span>}
              </div>
              <div className="uc-day-body">
                {h ? (
                  h.bloques.map((b, i) => (
                    <div
                      key={i}
                      className={`uc-bloque${isHoy ? " uc-bloque--hoy" : ""}`}
                    >
                      <p className="uc-bloque-hora">{b.hora}</p>
                      <p className="uc-bloque-nombre">
                        {b.curso.split(" ").slice(0, 3).join(" ")}
                      </p>
                      <p className="uc-bloque-sala">{b.sala}</p>
                      <span className="uc-bloque-tipo">{b.tipo}</span>
                    </div>
                  ))
                ) : (
                  <p className="uc-day-empty">Sin sesiones</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className="uc-subtitle" style={{ marginBottom: 16 }}>
          Detalle de sesiones
        </p>
        {sesiones.map((b) => (
          <div key={b.key} className="uc-sesion-row">
            <div className="uc-sesion-dia">
              <p
                style={{
                  fontFamily: "var(--ds)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".07em",
                  textTransform: "uppercase" as const,
                  color: "#555",
                  margin: "0 0 2px",
                }}
              >
                {b.dia}
              </p>
              <p
                style={{
                  fontFamily: "var(--ds)",
                  fontSize: 12,
                  color: "#aaa",
                  margin: 0,
                }}
              >
                {b.hora}
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontFamily: "var(--dr)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#111",
                  margin: "0 0 3px",
                }}
              >
                {b.curso}
              </p>
              <p
                style={{
                  fontFamily: "var(--ds)",
                  fontSize: 12,
                  color: "#999",
                  margin: 0,
                }}
              >
                {b.instructor}
              </p>
            </div>
            <div className="uc-sesion-tags">
              <span className="uc-tag-sala">{b.sala}</span>
              <span className="uc-tag-tipo">{b.tipo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
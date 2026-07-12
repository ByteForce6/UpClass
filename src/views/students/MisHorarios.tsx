import { useMemo } from "react";
import { useGetInscripcionesByEstudianteId } from "../../dataconnect-generated/react";

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

function obtenerEstudianteId(): string | null {
  return localStorage.getItem("estudianteInternalId");
}

function diaDeHoy(): string {
  const idx = new Date().getDay(); // 0=Domingo, 1=Lunes...
  const dias7 = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return dias7[idx];
}

/* ── HORARIOS ── */
export default function MisHorarios() {
  const estudianteInternalId = obtenerEstudianteId();
  const hoy = diaDeHoy();

  const { data, isLoading, isError } = useGetInscripcionesByEstudianteId(
    { estudianteInternalId: estudianteInternalId ?? "" },
    { enabled: !!estudianteInternalId }
  );

  const sesiones = useMemo(() => {
    return (data?.inscripcions ?? [])
      .map((i: any) => i.horario)
      .filter((h: any) => h && h.estado?.toLowerCase() === "activo")
      .map((h: any) => ({
        dia: h.diaSemana,
        hora: `${h.horaInicio}–${h.horaFin}`,
        curso: h.curso?.nombre ?? "",
        instructor: h.curso?.instructor?.usuario?.nombreCompleto ?? "—",
        tipo: h.curso?.categoria ?? "Curso",
        key: h.id,
        _horaInicio: h.horaInicio,
      }));
  }, [data]);

  const sesionesPorDia = useMemo(() => {
    const map: Record<string, typeof sesiones> = {};
    DIAS.forEach((d) => (map[d] = []));
    sesiones.forEach((s) => {
      if (map[s.dia]) map[s.dia].push(s);
    });
    Object.values(map).forEach((lista) =>
      lista.sort((a, b) => a._horaInicio.localeCompare(b._horaInicio))
    );
    return map;
  }, [sesiones]);

  const sesionesOrdenadas = useMemo(() => {
    return [...sesiones].sort((a, b) => {
      const diaDiff = DIAS.indexOf(a.dia) - DIAS.indexOf(b.dia);
      if (diaDiff !== 0) return diaDiff;
      return a._horaInicio.localeCompare(b._horaInicio);
    });
  }, [sesiones]);

  if (!estudianteInternalId) {
    return (
      <div className="uc-stack-lg">
        <p className="uc-day-empty">No se encontró tu sesión de estudiante. Inicia sesión de nuevo.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="uc-stack-lg">
        <p className="uc-day-empty">Cargando tu horario...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="uc-stack-lg">
        <p className="uc-day-empty">Ocurrió un error al cargar tu horario.</p>
      </div>
    );
  }

  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Semana vigente</p>
        <h2 className="uc-page-title">Horario de clases</h2>
      </div>

      <div className="uc-week-grid">
        {DIAS.map((dia) => {
          const bloques = sesionesPorDia[dia];
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
                {bloques.length > 0 ? (
                  bloques.map((b) => (
                    <div
                      key={b.key}
                      className={`uc-bloque${isHoy ? " uc-bloque--hoy" : ""}`}
                    >
                      <p className="uc-bloque-hora">{b.hora}</p>
                      <p className="uc-bloque-nombre">
                        {b.curso.split(" ").slice(0, 3).join(" ")}
                      </p>
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
        {sesionesOrdenadas.length === 0 ? (
          <p className="uc-day-empty">Aún no estás inscrito en ningún curso.</p>
        ) : (
          sesionesOrdenadas.map((b) => (
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
                <span className="uc-tag-tipo">{b.tipo}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
import { useMemo } from "react";
import { useGetInscripcionesByEstudianteId } from "../../dataconnect-generated/react";

interface CursoInscrito {
  inscripcionId: string;
  estadoInscripcion: string;
  pagoEstado: string;
  cursoId: number;
  nombre: string;
  categoria: string;
  instructor: string;
  horario: string;
  cupoActual: number;
  cupoMaximo: number;
}

const estadoTexto: Record<string, string> = {
  activa: "En curso",
  completada: "Completado",
  pendiente: "Por iniciar",
};

// TODO: ajusta esto a cómo realmente guardas la sesión del estudiante
function obtenerEstudianteId(): string | null {
  return localStorage.getItem("estudianteInternalId");
}

export default function MisCursos() {
  const estudianteInternalId = obtenerEstudianteId();

  const { data, isLoading, isError } = useGetInscripcionesByEstudianteId(
    { estudianteInternalId: estudianteInternalId ?? "" },
    { enabled: !!estudianteInternalId }
  );

  const cursos: CursoInscrito[] = useMemo(() => {
    return (data?.inscripcions ?? []).map((i: any) => ({
      inscripcionId: i.inscripcionId,
      estadoInscripcion: i.estadoInscripcion,
      pagoEstado: i.pagoEstado,
      cursoId: i.horario.curso.cursoId,
      nombre: i.horario.curso.nombre,
      categoria: i.horario.curso.categoria,
      instructor: i.horario.curso.instructor?.usuario?.nombreCompleto ?? "Sin asignar",
      horario: `${i.horario.diaSemana} ${i.horario.horaInicio} - ${i.horario.horaFin}`,
      cupoActual: i.horario.cupoActual,
      cupoMaximo: i.horario.cupoMaximo,
    }));
  }, [data]);

  if (!estudianteInternalId) {
    return (
      <div className="uc-stack-lg">
        <p>No se encontró tu sesión de estudiante. Inicia sesión de nuevo.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="uc-stack-lg">
        <p>Cargando tus cursos...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="uc-stack-lg">
        <p>Ocurrió un error al cargar tus cursos.</p>
      </div>
    );
  }

  return (
    <div className="uc-stack-lg">
      <div className="uc-section-header">
        <p className="uc-kicker">Mi formación</p>
        <h2 className="uc-page-title">Cursos inscritos</h2>
      </div>

      {cursos.length === 0 ? (
        <p>Aún no tienes cursos activos.</p>
      ) : (
        cursos.map((curso) => (
          <div key={curso.inscripcionId} className="uc-curso-card">
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <span className="uc-tag-cat">{curso.categoria}</span>
                <span style={{ background: "#111", color: "#fff", padding: "4px 10px", fontSize: 12 }}>
                  {estadoTexto[curso.estadoInscripcion] ?? curso.estadoInscripcion}
                </span>
              </div>

              <h3 className="uc-curso-title">{curso.nombre}</h3>
              <p className="uc-curso-inst">Instructor: {curso.instructor}</p>
              <p style={{ marginTop: 10, color: "#777" }}>🕒 {curso.horario}</p>

              <div style={{ marginTop: 12 }}>
                <small>Cupo: {curso.cupoActual}/{curso.cupoMaximo}</small>
                <div style={{ height: 6, background: "#eee", marginTop: 5 }}>
                  <div
                    style={{
                      width: `${(curso.cupoActual / curso.cupoMaximo) * 100}%`,
                      height: "100%",
                      background: "#111",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="uc-curso-side">
              <button className="uc-action-btn uc-action-btn--solid">Ir al aula →</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
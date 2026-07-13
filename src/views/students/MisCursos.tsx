import { useMemo } from "react";
import { useGetInscripcionesByEstudianteId } from "../../dataconnect-generated/react";
import "../../Styles/MisCursos.css";

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
            <div className="uc-da-mis-cursos-main">
              <div className="uc-da-mis-cursos-badges">
                <span className="uc-tag-cat">{curso.categoria}</span>
                <span className="uc-da-mis-cursos-estado">
                  {estadoTexto[curso.estadoInscripcion] ?? curso.estadoInscripcion}
                </span>
              </div>

              <h3 className="uc-curso-title">{curso.nombre}</h3>
              <p className="uc-curso-inst">Instructor: {curso.instructor}</p>
              <p className="uc-da-mis-cursos-horario">🕒 {curso.horario}</p>

              <div className="uc-da-mis-cursos-cupo">
                <small>
                  Cupo: {curso.cupoActual}/{curso.cupoMaximo}
                </small>
                <div className="uc-da-mis-cursos-progress-track">
                  <div
                    className="uc-da-mis-cursos-progress-fill"
                    style={{
                      width: `${(curso.cupoActual / curso.cupoMaximo) * 100}%`,
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
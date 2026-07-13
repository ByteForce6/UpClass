import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  teacherGetInstructorByCorreo,
  teacherListCursosPorCorreo,
  teacherListHorariosPorCurso,
  teacherListEstudiantesPorHorario,
  teacherListAsistenciasPorCorreo,
  teacherCreateAsistencia,
  teacherUpdateAsistencia,
  teacherDeleteAsistencia,
} from "../../dataconnect-generated";

import "../../Styles/dashboardProfesor.css";
import "../../App.css";

type EstadoAsistencia = "Presente" | "Ausente" | "Retardo";

interface InstructorSesion {
  id: string;
  instructorId: number;
  nombre: string;
  correo: string;
}

interface Curso {
  id: string;
  cursoId: number;
  nombre: string;
  categoria: string;
  estado: string;
}

interface Horario {
  id: string;
  horarioId: number;
  diaSemana: string;
  fechaInicio: string;
  fechaFin: string;
  horaInicio: string;
  horaFin: string;
  estado: string;
}

interface AlumnoAsistencia {
  estudianteInternalId: string;
  matricula: string;
  nombre: string;
  correo: string;
  estado: EstadoAsistencia;
  observaciones: string;
}

interface RegistroAsistencia {
  id: string;
  asistenciaId: number;
  materiaId: number;
  fecha: string;
  estado: EstadoAsistencia;
  observaciones: string;
  estudiante: {
    id: string;
    matricula: string;
    nombre: string;
    correo: string;
  };
}

const normalizarEstado = (valor: unknown): EstadoAsistencia => {
  const estado = String(valor ?? "").toLowerCase();

  if (estado === "ausente") {
    return "Ausente";
  }

  if (estado === "retardo" || estado === "tarde") {
    return "Retardo";
  }

  return "Presente";
};

const obtenerCorreoSesion = (): string => {
  const savedUser = localStorage.getItem("user");

  if (!savedUser) {
    return "";
  }

  try {
    const usuario = JSON.parse(savedUser);

    return (
      usuario?.correo ??
      usuario?.email ??
      usuario?.usuario?.correo ??
      ""
    );
  } catch {
    return "";
  }
};

export const AsistenciasView = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const [loadingInicial, setLoadingInicial] = useState(true);
  const [loadingHorarios, setLoadingHorarios] = useState(false);
  const [loadingAlumnos, setLoadingAlumnos] = useState(false);
  const [guardando, setGuardando] = useState(false);

  const [instructor, setInstructor] =
    useState<InstructorSesion | null>(null);

  const [cursos, setCursos] = useState<Curso[]>([]);
  const [horarios, setHorarios] = useState<Horario[]>([]);
  const [alumnos, setAlumnos] = useState<AlumnoAsistencia[]>([]);
  const [historial, setHistorial] = useState<RegistroAsistencia[]>([]);

  const [fecha, setFecha] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [cursoSeleccionado, setCursoSeleccionado] = useState("");
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("");

  const [registroEditando, setRegistroEditando] =
    useState<RegistroAsistencia | null>(null);

  const [estadoEdicion, setEstadoEdicion] =
    useState<EstadoAsistencia>("Presente");

  const [observacionesEdicion, setObservacionesEdicion] =
    useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    const rol = localStorage.getItem("rol");

    if (!token || !savedUser || rol !== "teacher") {
      navigate("/");
      return;
    }

    const correo = obtenerCorreoSesion();

    if (!correo) {
      alert("No se encontró el correo del profesor en la sesión.");
      navigate("/");
      return;
    }

    cargarDatosIniciales(correo);
  }, [navigate]);

  const cargarDatosIniciales = async (correo: string) => {
    setLoadingInicial(true);

    try {
      const [
        instructorResponse,
        cursosResponse,
        asistenciasResponse,
      ] = await Promise.all([
        teacherGetInstructorByCorreo({ correo }),
        teacherListCursosPorCorreo({ correo }),
        teacherListAsistenciasPorCorreo({ correo }),
      ]);

      const instructorData =
        (instructorResponse.data as any)?.instructors?.[0];

      if (!instructorData) {
        setInstructor(null);
        alert(
          "El usuario inició sesión como profesor, pero no tiene un registro en la tabla Instructor."
        );
        return;
      }

      setInstructor({
        id: instructorData.id,
        instructorId: instructorData.instructorId,
        nombre:
          instructorData.usuario?.nombreCompleto ?? "Profesor",
        correo: instructorData.usuario?.correo ?? correo,
      });

      const cursosData: Curso[] = (
        (cursosResponse.data as any)?.cursos ?? []
      ).map((curso: any) => ({
        id: curso.id,
        cursoId: curso.cursoId,
        nombre: curso.nombre ?? "Curso sin nombre",
        categoria: curso.categoria ?? "",
        estado: curso.estado ?? "",
      }));

      setCursos(cursosData);

      const asistenciasData: RegistroAsistencia[] = (
        (asistenciasResponse.data as any)?.asistencias ?? []
      ).map((registro: any) => ({
        id: registro.id,
        asistenciaId: registro.asistenciaId,
        materiaId: registro.materiaId,
        fecha: registro.fecha,
        estado: normalizarEstado(registro.estadoAsistencia),
        observaciones: registro.observaciones ?? "",
        estudiante: {
          id: registro.estudiante?.id ?? "",
          matricula:
            registro.estudiante?.matricula ?? "Sin matrícula",
          nombre:
            registro.estudiante?.usuario?.nombreCompleto ??
            "Alumno sin nombre",
          correo:
            registro.estudiante?.usuario?.correo ?? "",
        },
      }));

      setHistorial(asistenciasData);
    } catch (error) {
      console.error(
        "Error al cargar información de asistencias:",
        error
      );

      alert(
        "No se pudo cargar la información de asistencias. Revisa la consola."
      );
    } finally {
      setLoadingInicial(false);
    }
  };

  const recargarHistorial = async () => {
    if (!instructor?.correo) {
      return;
    }

    try {
      const response = await teacherListAsistenciasPorCorreo({
        correo: instructor.correo,
      });

      const asistenciasData: RegistroAsistencia[] = (
        (response.data as any)?.asistencias ?? []
      ).map((registro: any) => ({
        id: registro.id,
        asistenciaId: registro.asistenciaId,
        materiaId: registro.materiaId,
        fecha: registro.fecha,
        estado: normalizarEstado(registro.estadoAsistencia),
        observaciones: registro.observaciones ?? "",
        estudiante: {
          id: registro.estudiante?.id ?? "",
          matricula:
            registro.estudiante?.matricula ?? "Sin matrícula",
          nombre:
            registro.estudiante?.usuario?.nombreCompleto ??
            "Alumno sin nombre",
          correo:
            registro.estudiante?.usuario?.correo ?? "",
        },
      }));

      setHistorial(asistenciasData);
    } catch (error) {
      console.error("Error al actualizar historial:", error);
    }
  };

  const seleccionarCurso = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const cursoId = event.target.value;

    setCursoSeleccionado(cursoId);
    setHorarioSeleccionado("");
    setHorarios([]);
    setAlumnos([]);

    if (!cursoId) {
      return;
    }

    setLoadingHorarios(true);

    try {
      const response = await teacherListHorariosPorCurso({
        cursoId: Number(cursoId),
      });

      const horariosData: Horario[] = (
        (response.data as any)?.horarios ?? []
      ).map((horario: any) => ({
        id: horario.id,
        horarioId: horario.horarioId,
        diaSemana: horario.diaSemana ?? "",
        fechaInicio: horario.fechaInicio,
        fechaFin: horario.fechaFin,
        horaInicio: horario.horaInicio,
        horaFin: horario.horaFin,
        estado: horario.estado ?? "",
      }));

      setHorarios(horariosData);
    } catch (error) {
      console.error("Error al cargar horarios:", error);
      alert("No se pudieron cargar los horarios del curso.");
    } finally {
      setLoadingHorarios(false);
    }
  };

  const cargarAlumnos = async () => {
    if (!cursoSeleccionado) {
      alert("Selecciona un curso.");
      return;
    }

    if (!horarioSeleccionado) {
      alert("Selecciona un horario.");
      return;
    }

    setLoadingAlumnos(true);
    setAlumnos([]);

    try {
      const response = await teacherListEstudiantesPorHorario({
        horarioInternalId: horarioSeleccionado,
      });

      const inscripciones =
        (response.data as any)?.inscripcions ?? [];

      const estudiantesUnicos =
        new Map<string, AlumnoAsistencia>();

      for (const inscripcion of inscripciones) {
        const estudiante = inscripcion.estudiante;

        if (!estudiante?.id) {
          continue;
        }

        estudiantesUnicos.set(estudiante.id, {
          estudianteInternalId: estudiante.id,
          matricula: estudiante.matricula ?? "Sin matrícula",
          nombre:
            estudiante.usuario?.nombreCompleto ??
            "Alumno sin nombre",
          correo: estudiante.usuario?.correo ?? "",
          estado: "Presente",
          observaciones: "",
        });
      }

      const alumnosData = Array.from(
        estudiantesUnicos.values()
      );

      setAlumnos(alumnosData);

      if (alumnosData.length === 0) {
        alert(
          "No hay estudiantes con inscripción activa en este horario."
        );
      }
    } catch (error) {
      console.error("Error al cargar alumnos:", error);
      alert("No se pudieron cargar los alumnos inscritos.");
    } finally {
      setLoadingAlumnos(false);
    }
  };

  const cambiarEstadoAlumno = (
    estudianteInternalId: string,
    estado: EstadoAsistencia
  ) => {
    setAlumnos((actuales) =>
      actuales.map((alumno) =>
        alumno.estudianteInternalId === estudianteInternalId
          ? { ...alumno, estado }
          : alumno
      )
    );
  };

  const cambiarObservacionesAlumno = (
    estudianteInternalId: string,
    observaciones: string
  ) => {
    setAlumnos((actuales) =>
      actuales.map((alumno) =>
        alumno.estudianteInternalId === estudianteInternalId
          ? { ...alumno, observaciones }
          : alumno
      )
    );
  };

  const marcarTodosPresentes = () => {
    setAlumnos((actuales) =>
      actuales.map((alumno) => ({
        ...alumno,
        estado: "Presente",
      }))
    );
  };

  const generarAsistenciaId = (
    indice: number
  ): number => {
    const base = Math.floor(Date.now() / 1000);

    return base + indice;
  };

  const guardarAsistencias = async () => {
    if (!instructor) {
      alert("No se encontró el instructor.");
      return;
    }

    if (!cursoSeleccionado) {
      alert("Selecciona un curso.");
      return;
    }

    if (alumnos.length === 0) {
      alert("No hay alumnos para registrar.");
      return;
    }

    setGuardando(true);

    try {
      for (let indice = 0; indice < alumnos.length; indice++) {
        const alumno = alumnos[indice];

        await teacherCreateAsistencia({
          asistenciaId: generarAsistenciaId(indice),
          instructorInternalId: instructor.id,
          estudianteInternalId:
            alumno.estudianteInternalId,
          materiaId: Number(cursoSeleccionado),
          fecha,
          estadoAsistencia: alumno.estado,
          observaciones:
            alumno.observaciones.trim() || null,
        });
      }

      alert("La asistencia se guardó correctamente.");

      setAlumnos([]);
      setHorarioSeleccionado("");

      await recargarHistorial();
    } catch (error) {
      console.error("Error al guardar asistencias:", error);

      alert(
        "Ocurrió un error al guardar la asistencia. Es posible que algunos registros sí se hayan creado; revisa Firebase."
      );
    } finally {
      setGuardando(false);
    }
  };

  const abrirEdicion = (registro: RegistroAsistencia) => {
    setRegistroEditando(registro);
    setEstadoEdicion(registro.estado);
    setObservacionesEdicion(registro.observaciones);
  };

  const actualizarAsistencia = async () => {
    if (!registroEditando) {
      return;
    }

    try {
      await teacherUpdateAsistencia({
        asistenciaInternalId: registroEditando.id,
        fecha: registroEditando.fecha,
        estadoAsistencia: estadoEdicion,
        observaciones:
          observacionesEdicion.trim() || null,
      });

      setRegistroEditando(null);
      await recargarHistorial();

      alert("Asistencia actualizada correctamente.");
    } catch (error) {
      console.error("Error al actualizar asistencia:", error);
      alert("No se pudo actualizar la asistencia.");
    }
  };

  const eliminarAsistencia = async (
    registro: RegistroAsistencia
  ) => {
    const confirmar = window.confirm(
      `¿Deseas eliminar la asistencia de ${registro.estudiante.nombre}?`
    );

    if (!confirmar) {
      return;
    }

    try {
      await teacherDeleteAsistencia({
        asistenciaInternalId: registro.id,
      });

      await recargarHistorial();

      alert("Asistencia eliminada correctamente.");
    } catch (error) {
      console.error("Error al eliminar asistencia:", error);
      alert("No se pudo eliminar la asistencia.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rol");

    navigate("/");
  };

  const nombreCurso = (materiaId: number): string => {
    const curso = cursos.find(
      (item) => item.cursoId === materiaId
    );

    return curso?.nombre ?? `Curso ${materiaId}`;
  };

  const cursoActual = useMemo(
    () =>
      cursos.find(
        (curso) =>
          curso.cursoId === Number(cursoSeleccionado)
      ),
    [cursos, cursoSeleccionado]
  );

  const badgeStyle = (
    estado: EstadoAsistencia
  ): React.CSSProperties => {
    if (estado === "Presente") {
      return {
        background: "var(--uc-green-light)",
        color: "var(--uc-green)",
      };
    }

    if (estado === "Ausente") {
      return {
        background: "var(--uc-red-light)",
        color: "var(--uc-red)",
      };
    }

    return {
      background: "var(--uc-amber-light)",
      color: "var(--uc-amber-dark)",
    };
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    minHeight: 38,
    padding: "8px 11px",
    border: "0.5px solid rgba(0,0,0,0.15)",
    borderRadius: 7,
    background: "#fff",
    color: "#1A1A1A",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 6,
    color: "#555",
    fontSize: 12,
    fontWeight: 600,
  };

  return (
    <div className="dashboard-container">
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰ Menú Profesor
      </button>

      <aside
        className={`sidebar-profesor ${
          menuOpen ? "open" : ""
        }`}
      >
        <div className="sidebar-header">
          <h3>UpClass Profe</h3>
        </div>

        <nav className="sidebar-menu">
          <Link
            to="/teacher"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            🏠 Inicio (Dashboard)
          </Link>

          <Link
            to="/teacher/calificaciones"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            📝 Registrar Calificaciones
          </Link>

          <Link
            to="/teacher/asistencias"
            className="menu-item active"
            onClick={() => setMenuOpen(false)}
          >
            📋 Registrar Asistencias
          </Link>

          <hr className="sidebar-divider" />

          <button
            type="button"
            className="menu-item logout"
            onClick={handleLogout}
          >
            🚪 Cerrar Sesión
          </button>
        </nav>
      </aside>

      <main className="main-content-profesor">
        <header className="content-header">
          <h2>Control de Asistencia</h2>

          <p>
            {instructor
              ? `Profesor: ${instructor.nombre}`
              : "Registra la asistencia de tus estudiantes."}
          </p>
        </header>

        {loadingInicial ? (
          <section className="uc-card">
            <div
              className="uc-card__body"
              style={{
                padding: 36,
                textAlign: "center",
                color: "#888",
              }}
            >
              Cargando información...
            </div>
          </section>
        ) : (
          <div style={{ display: "grid", gap: 18 }}>
            <section className="uc-card">
              <div className="uc-card__header">
                <div>
                  <div className="uc-card__title">
                    Información de la clase
                  </div>

                  <div
                    style={{
                      color: "#888",
                      fontSize: 12,
                      marginTop: 3,
                    }}
                  >
                    Selecciona el curso, horario y fecha.
                  </div>
                </div>
              </div>

              <div
                className="uc-card__body"
                style={{ padding: 18 }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(3, minmax(180px, 1fr))",
                    gap: 14,
                  }}
                >
                  <div>
                    <label style={labelStyle}>Fecha</label>

                    <input
                      type="date"
                      value={fecha}
                      onChange={(event) =>
                        setFecha(event.target.value)
                      }
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Curso</label>

                    <select
                      value={cursoSeleccionado}
                      onChange={seleccionarCurso}
                      style={inputStyle}
                    >
                      <option value="">
                        Selecciona un curso
                      </option>

                      {cursos.map((curso) => (
                        <option
                          key={curso.id}
                          value={curso.cursoId}
                        >
                          {curso.nombre}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Horario</label>

                    <select
                      value={horarioSeleccionado}
                      onChange={(event) => {
                        setHorarioSeleccionado(
                          event.target.value
                        );
                        setAlumnos([]);
                      }}
                      style={inputStyle}
                      disabled={
                        !cursoSeleccionado ||
                        loadingHorarios
                      }
                    >
                      <option value="">
                        {loadingHorarios
                          ? "Cargando horarios..."
                          : "Selecciona un horario"}
                      </option>

                      {horarios.map((horario) => (
                        <option
                          key={horario.id}
                          value={horario.id}
                        >
                          {horario.diaSemana} ·{" "}
                          {horario.horaInicio} -{" "}
                          {horario.horaFin}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {cursoActual && (
                  <div
                    style={{
                      marginTop: 14,
                      padding: "10px 12px",
                      borderRadius: 8,
                      background:
                        "var(--uc-brand-blue-light)",
                      color: "var(--uc-brand-blue)",
                      fontSize: 12,
                    }}
                  >
                    Curso seleccionado:{" "}
                    <strong>{cursoActual.nombre}</strong>
                    {cursoActual.categoria
                      ? ` · ${cursoActual.categoria}`
                      : ""}
                  </div>
                )}

                <div
                  style={{
                    marginTop: 16,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    type="button"
                    className="uc-btn-primary"
                    onClick={cargarAlumnos}
                    disabled={loadingAlumnos}
                  >
                    👥{" "}
                    {loadingAlumnos
                      ? "Cargando..."
                      : "Cargar alumnos"}
                  </button>
                </div>
              </div>
            </section>

            <section className="ucv-table-card">
              <div
                style={{
                  padding: "14px 16px",
                  borderBottom:
                    "0.5px solid rgba(0,0,0,0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div className="uc-card__title">
                    Lista de alumnos
                  </div>

                  <div
                    style={{
                      color: "#888",
                      fontSize: 12,
                      marginTop: 3,
                    }}
                  >
                    {alumnos.length > 0
                      ? `${alumnos.length} alumnos cargados`
                      : "Selecciona un horario para cargar alumnos"}
                  </div>
                </div>

                {alumnos.length > 0 && (
                  <button
                    type="button"
                    className="ucv-page-btn"
                    onClick={marcarTodosPresentes}
                    style={{
                      width: "auto",
                      padding: "0 12px",
                      color: "var(--uc-green)",
                    }}
                  >
                    ✓ Todos presentes
                  </button>
                )}
              </div>

              <div className="ucv-table-scroll">
                <table className="ucv-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Alumno</th>
                      <th>Matrícula</th>
                      <th>Correo</th>
                      <th>Estado</th>
                      <th>Observaciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {alumnos.length === 0 ? (
                      <tr>
                        <td
                          colSpan={6}
                          style={{
                            textAlign: "center",
                            padding: 34,
                            color: "#aaa",
                          }}
                        >
                          No hay alumnos cargados.
                        </td>
                      </tr>
                    ) : (
                      alumnos.map((alumno, index) => (
                        <tr
                          key={alumno.estudianteInternalId}
                        >
                          <td>{index + 1}</td>

                          <td>
                            <div className="ucv-clase-name">
                              {alumno.nombre}
                            </div>
                          </td>

                          <td>{alumno.matricula}</td>

                          <td>{alumno.correo || "—"}</td>

                          <td>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                              }}
                            >
                              <span
                                className="ucv-badge"
                                style={badgeStyle(
                                  alumno.estado
                                )}
                              >
                                {alumno.estado}
                              </span>

                              <select
                                className="ucv-select"
                                value={alumno.estado}
                                onChange={(event) =>
                                  cambiarEstadoAlumno(
                                    alumno.estudianteInternalId,
                                    event.target
                                      .value as EstadoAsistencia
                                  )
                                }
                              >
                                <option value="Presente">
                                  Presente
                                </option>
                                <option value="Ausente">
                                  Ausente
                                </option>
                                <option value="Retardo">
                                  Retardo
                                </option>
                              </select>
                            </div>
                          </td>

                          <td>
                            <input
                              type="text"
                              value={alumno.observaciones}
                              onChange={(event) =>
                                cambiarObservacionesAlumno(
                                  alumno.estudianteInternalId,
                                  event.target.value
                                )
                              }
                              placeholder="Observaciones"
                              style={{
                                ...inputStyle,
                                minWidth: 220,
                              }}
                            />
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {alumnos.length > 0 && (
                <div
                  className="ucv-table-footer"
                  style={{
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    type="button"
                    className="uc-btn-primary"
                    onClick={guardarAsistencias}
                    disabled={guardando}
                  >
                    💾{" "}
                    {guardando
                      ? "Guardando..."
                      : "Guardar asistencia"}
                  </button>
                </div>
              )}
            </section>

            <section className="ucv-table-card">
              <div
                style={{
                  padding: "14px 16px",
                  borderBottom:
                    "0.5px solid rgba(0,0,0,0.08)",
                }}
              >
                <div className="uc-card__title">
                  Historial de asistencias
                </div>

                <div
                  style={{
                    color: "#888",
                    fontSize: 12,
                    marginTop: 3,
                  }}
                >
                  Registros asociados al profesor.
                </div>
              </div>

              <div className="ucv-table-scroll">
                <table className="ucv-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Fecha</th>
                      <th>Curso</th>
                      <th>Alumno</th>
                      <th>Matrícula</th>
                      <th>Estado</th>
                      <th>Observaciones</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    {historial.length === 0 ? (
                      <tr>
                        <td
                          colSpan={8}
                          style={{
                            textAlign: "center",
                            padding: 34,
                            color: "#aaa",
                          }}
                        >
                          Todavía no existen asistencias.
                        </td>
                      </tr>
                    ) : (
                      historial.map((registro) => (
                        <tr key={registro.id}>
                          <td>{registro.asistenciaId}</td>
                          <td>{registro.fecha}</td>
                          <td>
                            {nombreCurso(
                              registro.materiaId
                            )}
                          </td>
                          <td>
                            {registro.estudiante.nombre}
                          </td>
                          <td>
                            {registro.estudiante.matricula}
                          </td>
                          <td>
                            <span
                              className="ucv-badge"
                              style={badgeStyle(
                                registro.estado
                              )}
                            >
                              {registro.estado}
                            </span>
                          </td>
                          <td>
                            {registro.observaciones || "—"}
                          </td>
                          <td>
                            <div className="ucv-actions">
                              <button
                                type="button"
                                className="ucv-action-btn ucv-action-btn--edit"
                                title="Editar"
                                onClick={() =>
                                  abrirEdicion(registro)
                                }
                              >
                                ✏️
                              </button>

                              <button
                                type="button"
                                className="ucv-action-btn ucv-action-btn--delete"
                                title="Eliminar"
                                onClick={() =>
                                  eliminarAsistencia(
                                    registro
                                  )
                                }
                              >
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}
      </main>

      {registroEditando && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(15,23,42,0.40)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 440,
              background: "#fff",
              borderRadius: 14,
              padding: 24,
              boxShadow:
                "0 18px 45px rgba(15,23,42,0.18)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              Editar asistencia
            </h3>

            <p style={{ color: "#888", fontSize: 13 }}>
              {registroEditando.estudiante.nombre}
            </p>

            <div style={{ marginTop: 16 }}>
              <label style={labelStyle}>Estado</label>

              <select
                value={estadoEdicion}
                onChange={(event) =>
                  setEstadoEdicion(
                    event.target
                      .value as EstadoAsistencia
                  )
                }
                style={inputStyle}
              >
                <option value="Presente">Presente</option>
                <option value="Ausente">Ausente</option>
                <option value="Retardo">Retardo</option>
              </select>
            </div>

            <div style={{ marginTop: 14 }}>
              <label style={labelStyle}>
                Observaciones
              </label>

              <textarea
                value={observacionesEdicion}
                onChange={(event) =>
                  setObservacionesEdicion(
                    event.target.value
                  )
                }
                style={{
                  ...inputStyle,
                  minHeight: 90,
                  resize: "vertical",
                }}
              />
            </div>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "flex-end",
                gap: 10,
              }}
            >
              <button
                type="button"
                className="ucv-page-btn"
                style={{
                  width: "auto",
                  padding: "0 14px",
                }}
                onClick={() =>
                  setRegistroEditando(null)
                }
              >
                Cancelar
              </button>

              <button
                type="button"
                className="uc-btn-primary"
                onClick={actualizarAsistencia}
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
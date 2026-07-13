import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface ActualizarCupoHorarioData {
  horario_update?: Horario_Key | null;
}

export interface ActualizarCupoHorarioVariables {
  horarioInternalId: UUIDString;
  cupoActual: number;
}

export interface ActualizarEstudianteData {
  usuario_update?: Usuario_Key | null;
}

export interface ActualizarEstudianteSinCorreoData {
  usuario_update?: Usuario_Key | null;
}

export interface ActualizarEstudianteSinCorreoVariables {
  usuarioInternalId: UUIDString;
  nombreCompleto: string;
  telefono: string;
  activo: boolean;
}

export interface ActualizarEstudianteVariables {
  usuarioInternalId: UUIDString;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  activo: boolean;
}

export interface ActualizarPasswordUsuarioData {
  usuario_update?: Usuario_Key | null;
}

export interface ActualizarPasswordUsuarioVariables {
  usuarioInternalId: UUIDString;
  passwordHash: string;
}

export interface Asistencia_Key {
  id: UUIDString;
  __typename?: 'Asistencia_Key';
}

export interface BuscarCursoPorNombreData {
  cursos: ({
    id: UUIDString;
    cursoId: number;
    nombre: string;
    categoria?: string | null;
    estado?: string | null;
    instructor?: {
      usuario: {
        nombreCompleto: string;
      };
    };
  } & Curso_Key)[];
}

export interface BuscarCursoPorNombreVariables {
  nombre: string;
}

export interface BuscarHorarioPorCursoData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    curso: {
      cursoId: number;
      nombre: string;
    };
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
  } & Horario_Key)[];
}

export interface BuscarHorarioPorCursoVariables {
  cursoId: number;
}

export interface CancelarInscripcionData {
  inscripcion_update?: Inscripcion_Key | null;
}

export interface CancelarInscripcionVariables {
  inscripcionInternalId: UUIDString;
}

export interface CrearEstudianteData {
  usuario_insert: Usuario_Key;
  estudiante_insert: Estudiante_Key;
}

export interface CrearEstudianteVariables {
  usuarioInternalId: UUIDString;
  usuarioId: string;
  rolInternalId: UUIDString;
  nombreCompleto: string;
  correo: string;
  passwordHash: string;
  telefono: string;
  matricula: string;
}

export interface CreateCursoData {
  curso_insert: Curso_Key;
}

export interface CreateCursoVariables {
  cursoId: number;
  nombre: string;
  descripcion?: string | null;
  categoria?: string | null;
  urlImagen?: string | null;
  estado?: string | null;
  instructorId?: UUIDString | null;
}

export interface CreateHorarioData {
  horario_insert: Horario_Key;
}

export interface CreateHorarioVariables {
  horarioId: number;
  cursoId: UUIDString;
  diaSemana: string;
  fechaInicio: DateString;
  fechaFin: DateString;
  horaInicio: string;
  horaFin: string;
  cupoMaximo: number;
  cupoActual?: number | null;
  estado?: string | null;
}

export interface CreateInstructorData {
  usuario_insert: Usuario_Key;
  instructor_insert: Instructor_Key;
}

export interface CreateInstructorVariables {
  usuarioInternalId: UUIDString;
  usuarioId: string;
  rolInternalId: UUIDString;
  nombreCompleto: string;
  correo: string;
  passwordHash: string;
  telefono: string;
  especialidad: string;
  instructorId: number;
}

export interface CreateReporteEstadisticaData {
  reporteEstadistica_insert: ReporteEstadistica_Key;
}

export interface CreateReporteEstadisticaVariables {
  reporteId: number;
  cursoInternalId: UUIDString;
  periodoAnio: string;
  totalInscritos: number;
  totalBajas: number;
  porcentajeAsistencia: number;
  calificacionPromedio?: number | null;
  ingresosGenerados?: number | null;
}

export interface Curso_Key {
  id: UUIDString;
  __typename?: 'Curso_Key';
}

export interface CursosPorCategoriaData {
  cursos: ({
    id: UUIDString;
    cursoId: number;
    nombre: string;
    categoria?: string | null;
    estado?: string | null;
  } & Curso_Key)[];
}

export interface CursosPorCategoriaVariables {
  categoria: string;
}

export interface CursosPorEstadoData {
  cursos: ({
    id: UUIDString;
    nombre: string;
    estado?: string | null;
  } & Curso_Key)[];
}

export interface CursosPorEstadoVariables {
  estado: string;
}

export interface DeleteCursoData {
  curso_delete?: Curso_Key | null;
}

export interface DeleteCursoVariables {
  cursoInternalId: UUIDString;
}

export interface DeleteHorarioData {
  horario_delete?: Horario_Key | null;
}

export interface DeleteHorarioVariables {
  horarioInternalId: UUIDString;
}

export interface DeleteInstructorData {
  instructor_delete?: Instructor_Key | null;
  usuario_delete?: Usuario_Key | null;
}

export interface DeleteInstructorVariables {
  instructorInternalId: UUIDString;
  usuarioInternalId: UUIDString;
}

export interface EliminarEstudianteData {
  usuario_delete?: Usuario_Key | null;
}

export interface EliminarEstudianteVariables {
  usuarioInternalId: UUIDString;
}

export interface Estudiante_Key {
  id: UUIDString;
  __typename?: 'Estudiante_Key';
}

export interface GetCursoInternalIdData {
  cursos: ({
    id: UUIDString;
    cursoId: number;
    nombre: string;
  } & Curso_Key)[];
}

export interface GetCursoInternalIdVariables {
  cursoId: number;
}

export interface GetEstudianteByUsuarioInternalIdData {
  estudiantes: ({
    id: UUIDString;
    matricula: string;
  } & Estudiante_Key)[];
}

export interface GetEstudianteByUsuarioInternalIdVariables {
  usuarioInternalId: UUIDString;
}

export interface GetHorariosDisponiblesData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
    curso: {
      id: UUIDString;
      cursoId: number;
      nombre: string;
      descripcion?: string | null;
      categoria?: string | null;
      urlImagen?: string | null;
      estado?: string | null;
      instructor?: {
        instructorId: number;
        usuario: {
          nombreCompleto: string;
        };
      };
    } & Curso_Key;
  } & Horario_Key)[];
}

export interface GetInscripcionesByEstudianteData {
  inscripcions: ({
    inscripcionId: string;
    estadoInscripcion: string;
    pagoEstado?: string | null;
    fechaInscripcion: DateString;
    horario: {
      horarioId: number;
      horaInicio: string;
      horaFin: string;
      cupoMaximo: number;
      cupoActual: number;
      estado?: string | null;
      curso: {
        id: UUIDString;
        cursoId: number;
        nombre: string;
        descripcion?: string | null;
        categoria?: string | null;
        urlImagen?: string | null;
        estado?: string | null;
        instructor?: {
          instructorId: number;
          usuario: {
            nombreCompleto: string;
          };
        };
      } & Curso_Key;
    };
  })[];
}

export interface GetInscripcionesByEstudianteIdData {
  inscripcions: ({
    inscripcionId: string;
    estadoInscripcion: string;
    pagoEstado?: string | null;
    fechaInscripcion: DateString;
    horario: {
      id: UUIDString;
      horarioId: number;
      diaSemana: string;
      fechaInicio: DateString;
      fechaFin: DateString;
      horaInicio: string;
      horaFin: string;
      cupoMaximo: number;
      cupoActual: number;
      estado?: string | null;
      curso: {
        id: UUIDString;
        cursoId: number;
        nombre: string;
        descripcion?: string | null;
        categoria?: string | null;
        urlImagen?: string | null;
        estado?: string | null;
        instructor?: {
          instructorId: number;
          usuario: {
            nombreCompleto: string;
          };
        };
      } & Curso_Key;
    } & Horario_Key;
  })[];
}

export interface GetInscripcionesByEstudianteIdVariables {
  estudianteInternalId: UUIDString;
}

export interface GetInscripcionesByEstudianteVariables {
  matricula: string;
}

export interface GetRolByNumeroData {
  rols: ({
    id: UUIDString;
    rolId: number;
    nombre: string;
  } & Rol_Key)[];
}

export interface GetRolByNumeroVariables {
  rolId: number;
}

export interface GetUsuarioByCorreoData {
  usuarios: ({
    id: UUIDString;
    usuarioId: string;
    nombreCompleto: string;
    correo: string;
    passwordHash: string;
    rol: {
      nombre: string;
    };
  } & Usuario_Key)[];
}

export interface GetUsuarioByCorreoVariables {
  correo: string;
}

export interface Horario_Key {
  id: UUIDString;
  __typename?: 'Horario_Key';
}

export interface HorariosPorDiaData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    curso: {
      nombre: string;
    };
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
  } & Horario_Key)[];
}

export interface HorariosPorDiaVariables {
  diaSemana: string;
}

export interface HorariosPorEstadoData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    curso: {
      nombre: string;
    };
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
  } & Horario_Key)[];
}

export interface HorariosPorEstadoVariables {
  estado: string;
}

export interface Inscripcion_Key {
  id: UUIDString;
  __typename?: 'Inscripcion_Key';
}

export interface InsscribirEstudianteData {
  inscripcion_insert: Inscripcion_Key;
}

export interface InsscribirEstudianteVariables {
  inscripcionId: string;
  estudianteInternalId: UUIDString;
  horarioInternalId: UUIDString;
}

export interface Instructor_Key {
  id: UUIDString;
  __typename?: 'Instructor_Key';
}

export interface ListAsistenciasData {
  asistencias: ({
    asistenciaId: number;
    fecha: DateString;
    estadoAsistencia: string;
    observaciones?: string | null;
    estudiante: {
      matricula: string;
      usuario: {
        nombreCompleto: string;
      };
    };
    instructor: {
      instructorId: number;
      usuario: {
        nombreCompleto: string;
      };
    };
    materiaId: number;
  })[];
}

export interface ListAsistenciasPorEstadoData {
  asistencias: ({
    asistenciaId: number;
    fecha: DateString;
    estadoAsistencia: string;
    materiaId: number;
    estudiante: {
      matricula: string;
      usuario: {
        nombreCompleto: string;
      };
    };
  })[];
}

export interface ListAsistenciasPorEstadoVariables {
  estado: string;
}

export interface ListCursosData {
  cursos: ({
    id: UUIDString;
    cursoId: number;
    nombre: string;
    descripcion?: string | null;
    categoria?: string | null;
    urlImagen?: string | null;
    estado?: string | null;
    instructor?: {
      instructorId: number;
      usuario: {
        nombreCompleto: string;
      };
    };
  } & Curso_Key)[];
}

export interface ListCursosEstadisticasData {
  cursos: ({
    cursoId: number;
    nombre: string;
    descripcion?: string | null;
    categoria?: string | null;
    estado?: string | null;
    instructor?: {
      instructorId: number;
      especialidad?: string | null;
      usuario: {
        nombreCompleto: string;
      };
    };
  })[];
}

export interface ListHorariosData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    curso: {
      id: UUIDString;
      cursoId: number;
      nombre: string;
    } & Curso_Key;
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
  } & Horario_Key)[];
}

export interface ListHorariosEstadisticasData {
  horarios: ({
    horarioId: number;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
    curso: {
      cursoId: number;
      nombre: string;
      categoria?: string | null;
    };
  })[];
}

export interface ListHorariosPorEstadoData {
  horarios: ({
    horarioId: number;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
    curso: {
      cursoId: number;
      nombre: string;
      categoria?: string | null;
      instructor?: {
        usuario: {
          nombreCompleto: string;
        };
      };
    };
  })[];
}

export interface ListHorariosPorEstadoVariables {
  estado: string;
}

export interface ListInscripcionesActivasData {
  inscripcions: ({
    inscripcionId: string;
    horario: {
      horarioId: number;
    };
  })[];
}

export interface ListInscripcionesData {
  inscripcions: ({
    inscripcionId: string;
    fechaInscripcion: DateString;
    estadoInscripcion: string;
    pagoEstado?: string | null;
    estudiante: {
      matricula: string;
      usuario: {
        nombreCompleto: string;
        correo: string;
      };
    };
    horario: {
      horarioId: number;
      curso: {
        cursoId: number;
        nombre: string;
        categoria?: string | null;
      };
    };
  })[];
}

export interface ListInscripcionesPorEstadoData {
  inscripcions: ({
    inscripcionId: string;
    fechaInscripcion: DateString;
    estadoInscripcion: string;
    pagoEstado?: string | null;
    estudiante: {
      matricula: string;
      usuario: {
        nombreCompleto: string;
      };
    };
    horario: {
      horarioId: number;
      curso: {
        cursoId: number;
        nombre: string;
        categoria?: string | null;
      };
    };
  })[];
}

export interface ListInscripcionesPorEstadoVariables {
  estado: string;
}

export interface ListInstructorsData {
  instructors: ({
    id: UUIDString;
    instructorId: number;
    usuarioId: UUIDString;
    especialidad?: string | null;
    usuario: {
      id: UUIDString;
      usuarioId: string;
      nombreCompleto: string;
      correo: string;
      telefono?: string | null;
      activo: boolean;
    } & Usuario_Key;
  } & Instructor_Key)[];
}

export interface ListReportesEstadisticasData {
  reporteEstadisticas: ({
    id: UUIDString;
    reporteId: number;
    periodoAnio: string;
    totalInscritos: number;
    totalBajas: number;
    porcentajeAsistencia: number;
    calificacionPromedio?: number | null;
    ingresosGenerados?: number | null;
    fechaActualizacion: DateString;
    curso: {
      cursoId: number;
      nombre: string;
      categoria?: string | null;
    };
  } & ReporteEstadistica_Key)[];
}

export interface ListReportesPorCursoData {
  reporteEstadisticas: ({
    id: UUIDString;
    reporteId: number;
    periodoAnio: string;
    totalInscritos: number;
    totalBajas: number;
    porcentajeAsistencia: number;
    calificacionPromedio?: number | null;
    ingresosGenerados?: number | null;
    fechaActualizacion: DateString;
    curso: {
      cursoId: number;
      nombre: string;
      categoria?: string | null;
    };
  } & ReporteEstadistica_Key)[];
}

export interface ListReportesPorCursoVariables {
  cursoId: number;
}

export interface ListReportesPorPeriodoData {
  reporteEstadisticas: ({
    id: UUIDString;
    reporteId: number;
    periodoAnio: string;
    totalInscritos: number;
    totalBajas: number;
    porcentajeAsistencia: number;
    calificacionPromedio?: number | null;
    ingresosGenerados?: number | null;
    fechaActualizacion: DateString;
    curso: {
      cursoId: number;
      nombre: string;
      categoria?: string | null;
    };
  } & ReporteEstadistica_Key)[];
}

export interface ListReportesPorPeriodoVariables {
  periodo: string;
}

export interface ListarEstudiantesData {
  estudiantes: ({
    id: UUIDString;
    matricula: string;
    usuario: {
      id: UUIDString;
      usuarioId: string;
      nombreCompleto: string;
      correo: string;
      telefono?: string | null;
      activo: boolean;
    } & Usuario_Key;
  } & Estudiante_Key)[];
}

export interface ReporteEstadistica_Key {
  id: UUIDString;
  __typename?: 'ReporteEstadistica_Key';
}

export interface Rol_Key {
  id: UUIDString;
  __typename?: 'Rol_Key';
}

export interface TeacherCreateAsistenciaData {
  asistencia_insert: Asistencia_Key;
}

export interface TeacherCreateAsistenciaVariables {
  asistenciaId: number;
  instructorInternalId: UUIDString;
  estudianteInternalId: UUIDString;
  materiaId: number;
  fecha: DateString;
  estadoAsistencia: string;
  observaciones?: string | null;
}

export interface TeacherDeleteAsistenciaData {
  asistencia_delete?: Asistencia_Key | null;
}

export interface TeacherDeleteAsistenciaVariables {
  asistenciaInternalId: UUIDString;
}

export interface TeacherGetInstructorByCorreoData {
  instructors: ({
    id: UUIDString;
    instructorId: number;
    especialidad?: string | null;
    usuario: {
      id: UUIDString;
      usuarioId: string;
      nombreCompleto: string;
      correo: string;
      activo: boolean;
    } & Usuario_Key;
  } & Instructor_Key)[];
}

export interface TeacherGetInstructorByCorreoVariables {
  correo: string;
}

export interface TeacherListAsistenciasPorCorreoData {
  asistencias: ({
    id: UUIDString;
    asistenciaId: number;
    materiaId: number;
    fecha: DateString;
    estadoAsistencia: string;
    observaciones?: string | null;
    estudiante: {
      id: UUIDString;
      matricula: string;
      usuario: {
        id: UUIDString;
        nombreCompleto: string;
        correo: string;
      } & Usuario_Key;
    } & Estudiante_Key;
    instructor: {
      id: UUIDString;
      instructorId: number;
      usuario: {
        id: UUIDString;
        nombreCompleto: string;
        correo: string;
      } & Usuario_Key;
    } & Instructor_Key;
  } & Asistencia_Key)[];
}

export interface TeacherListAsistenciasPorCorreoVariables {
  correo: string;
}

export interface TeacherListCursosPorCorreoData {
  cursos: ({
    id: UUIDString;
    cursoId: number;
    nombre: string;
    descripcion?: string | null;
    categoria?: string | null;
    estado?: string | null;
    instructor?: {
      id: UUIDString;
      instructorId: number;
      usuario: {
        id: UUIDString;
        nombreCompleto: string;
        correo: string;
      } & Usuario_Key;
    } & Instructor_Key;
  } & Curso_Key)[];
}

export interface TeacherListCursosPorCorreoVariables {
  correo: string;
}

export interface TeacherListEstudiantesPorHorarioData {
  inscripcions: ({
    id: UUIDString;
    inscripcionId: string;
    estadoInscripcion: string;
    pagoEstado?: string | null;
    estudiante: {
      id: UUIDString;
      matricula: string;
      usuario: {
        id: UUIDString;
        usuarioId: string;
        nombreCompleto: string;
        correo: string;
        activo: boolean;
      } & Usuario_Key;
    } & Estudiante_Key;
    horario: {
      id: UUIDString;
      horarioId: number;
      curso: {
        id: UUIDString;
        cursoId: number;
        nombre: string;
      } & Curso_Key;
    } & Horario_Key;
  } & Inscripcion_Key)[];
}

export interface TeacherListEstudiantesPorHorarioVariables {
  horarioInternalId: UUIDString;
}

export interface TeacherListHorariosPorCursoData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
    curso: {
      id: UUIDString;
      cursoId: number;
      nombre: string;
      categoria?: string | null;
    } & Curso_Key;
  } & Horario_Key)[];
}

export interface TeacherListHorariosPorCursoVariables {
  cursoId: number;
}

export interface TeacherUpdateAsistenciaData {
  asistencia_update?: Asistencia_Key | null;
}

export interface TeacherUpdateAsistenciaVariables {
  asistenciaInternalId: UUIDString;
  fecha: DateString;
  estadoAsistencia: string;
  observaciones?: string | null;
}

export interface UpdateCursoData {
  curso_update?: Curso_Key | null;
}

export interface UpdateCursoVariables {
  cursoInternalId: UUIDString;
  cursoId: number;
  nombre: string;
  descripcion?: string | null;
  categoria?: string | null;
  urlImagen?: string | null;
  estado?: string | null;
  instructorId?: UUIDString | null;
}

export interface UpdateHorarioData {
  horario_update?: Horario_Key | null;
}

export interface UpdateHorarioVariables {
  horarioInternalId: UUIDString;
  horarioId: number;
  cursoId: UUIDString;
  diaSemana: string;
  fechaInicio: DateString;
  fechaFin: DateString;
  horaInicio: string;
  horaFin: string;
  cupoMaximo: number;
  cupoActual: number;
  estado?: string | null;
}

export interface UpdateInstructorData {
  usuario_update?: Usuario_Key | null;
  instructor_update?: Instructor_Key | null;
}

export interface UpdateInstructorVariables {
  usuarioInternalId: UUIDString;
  instructorInternalId: UUIDString;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  activo: boolean;
  especialidad: string;
}

export interface UpdateReporteEstadisticaData {
  reporteEstadistica_update?: ReporteEstadistica_Key | null;
}

export interface UpdateReporteEstadisticaVariables {
  reporteInternalId: UUIDString;
  totalInscritos: number;
  totalBajas: number;
  porcentajeAsistencia: number;
  calificacionPromedio?: number | null;
  ingresosGenerados?: number | null;
}

export interface Usuario_Key {
  id: UUIDString;
  __typename?: 'Usuario_Key';
}

interface GetUsuarioByCorreoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUsuarioByCorreoVariables): QueryRef<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUsuarioByCorreoVariables): QueryRef<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;
  operationName: string;
}
export const getUsuarioByCorreoRef: GetUsuarioByCorreoRef;

export function getUsuarioByCorreo(vars: GetUsuarioByCorreoVariables, options?: ExecuteQueryOptions): QueryPromise<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;
export function getUsuarioByCorreo(dc: DataConnect, vars: GetUsuarioByCorreoVariables, options?: ExecuteQueryOptions): QueryPromise<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;

interface GetEstudianteByUsuarioInternalIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEstudianteByUsuarioInternalIdVariables): QueryRef<GetEstudianteByUsuarioInternalIdData, GetEstudianteByUsuarioInternalIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetEstudianteByUsuarioInternalIdVariables): QueryRef<GetEstudianteByUsuarioInternalIdData, GetEstudianteByUsuarioInternalIdVariables>;
  operationName: string;
}
export const getEstudianteByUsuarioInternalIdRef: GetEstudianteByUsuarioInternalIdRef;

export function getEstudianteByUsuarioInternalId(vars: GetEstudianteByUsuarioInternalIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetEstudianteByUsuarioInternalIdData, GetEstudianteByUsuarioInternalIdVariables>;
export function getEstudianteByUsuarioInternalId(dc: DataConnect, vars: GetEstudianteByUsuarioInternalIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetEstudianteByUsuarioInternalIdData, GetEstudianteByUsuarioInternalIdVariables>;

interface ListarEstudiantesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListarEstudiantesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListarEstudiantesData, undefined>;
  operationName: string;
}
export const listarEstudiantesRef: ListarEstudiantesRef;

export function listarEstudiantes(options?: ExecuteQueryOptions): QueryPromise<ListarEstudiantesData, undefined>;
export function listarEstudiantes(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListarEstudiantesData, undefined>;

interface CrearEstudianteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CrearEstudianteVariables): MutationRef<CrearEstudianteData, CrearEstudianteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CrearEstudianteVariables): MutationRef<CrearEstudianteData, CrearEstudianteVariables>;
  operationName: string;
}
export const crearEstudianteRef: CrearEstudianteRef;

export function crearEstudiante(vars: CrearEstudianteVariables): MutationPromise<CrearEstudianteData, CrearEstudianteVariables>;
export function crearEstudiante(dc: DataConnect, vars: CrearEstudianteVariables): MutationPromise<CrearEstudianteData, CrearEstudianteVariables>;

interface ActualizarEstudianteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ActualizarEstudianteVariables): MutationRef<ActualizarEstudianteData, ActualizarEstudianteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ActualizarEstudianteVariables): MutationRef<ActualizarEstudianteData, ActualizarEstudianteVariables>;
  operationName: string;
}
export const actualizarEstudianteRef: ActualizarEstudianteRef;

export function actualizarEstudiante(vars: ActualizarEstudianteVariables): MutationPromise<ActualizarEstudianteData, ActualizarEstudianteVariables>;
export function actualizarEstudiante(dc: DataConnect, vars: ActualizarEstudianteVariables): MutationPromise<ActualizarEstudianteData, ActualizarEstudianteVariables>;

interface ActualizarEstudianteSinCorreoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ActualizarEstudianteSinCorreoVariables): MutationRef<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ActualizarEstudianteSinCorreoVariables): MutationRef<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;
  operationName: string;
}
export const actualizarEstudianteSinCorreoRef: ActualizarEstudianteSinCorreoRef;

export function actualizarEstudianteSinCorreo(vars: ActualizarEstudianteSinCorreoVariables): MutationPromise<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;
export function actualizarEstudianteSinCorreo(dc: DataConnect, vars: ActualizarEstudianteSinCorreoVariables): MutationPromise<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;

interface ActualizarPasswordUsuarioRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ActualizarPasswordUsuarioVariables): MutationRef<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ActualizarPasswordUsuarioVariables): MutationRef<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;
  operationName: string;
}
export const actualizarPasswordUsuarioRef: ActualizarPasswordUsuarioRef;

export function actualizarPasswordUsuario(vars: ActualizarPasswordUsuarioVariables): MutationPromise<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;
export function actualizarPasswordUsuario(dc: DataConnect, vars: ActualizarPasswordUsuarioVariables): MutationPromise<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;

interface EliminarEstudianteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: EliminarEstudianteVariables): MutationRef<EliminarEstudianteData, EliminarEstudianteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: EliminarEstudianteVariables): MutationRef<EliminarEstudianteData, EliminarEstudianteVariables>;
  operationName: string;
}
export const eliminarEstudianteRef: EliminarEstudianteRef;

export function eliminarEstudiante(vars: EliminarEstudianteVariables): MutationPromise<EliminarEstudianteData, EliminarEstudianteVariables>;
export function eliminarEstudiante(dc: DataConnect, vars: EliminarEstudianteVariables): MutationPromise<EliminarEstudianteData, EliminarEstudianteVariables>;

interface ListInstructorsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListInstructorsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListInstructorsData, undefined>;
  operationName: string;
}
export const listInstructorsRef: ListInstructorsRef;

export function listInstructors(options?: ExecuteQueryOptions): QueryPromise<ListInstructorsData, undefined>;
export function listInstructors(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListInstructorsData, undefined>;

interface GetRolByNumeroRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetRolByNumeroVariables): QueryRef<GetRolByNumeroData, GetRolByNumeroVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetRolByNumeroVariables): QueryRef<GetRolByNumeroData, GetRolByNumeroVariables>;
  operationName: string;
}
export const getRolByNumeroRef: GetRolByNumeroRef;

export function getRolByNumero(vars: GetRolByNumeroVariables, options?: ExecuteQueryOptions): QueryPromise<GetRolByNumeroData, GetRolByNumeroVariables>;
export function getRolByNumero(dc: DataConnect, vars: GetRolByNumeroVariables, options?: ExecuteQueryOptions): QueryPromise<GetRolByNumeroData, GetRolByNumeroVariables>;

interface CreateInstructorRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInstructorVariables): MutationRef<CreateInstructorData, CreateInstructorVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateInstructorVariables): MutationRef<CreateInstructorData, CreateInstructorVariables>;
  operationName: string;
}
export const createInstructorRef: CreateInstructorRef;

export function createInstructor(vars: CreateInstructorVariables): MutationPromise<CreateInstructorData, CreateInstructorVariables>;
export function createInstructor(dc: DataConnect, vars: CreateInstructorVariables): MutationPromise<CreateInstructorData, CreateInstructorVariables>;

interface UpdateInstructorRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateInstructorVariables): MutationRef<UpdateInstructorData, UpdateInstructorVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateInstructorVariables): MutationRef<UpdateInstructorData, UpdateInstructorVariables>;
  operationName: string;
}
export const updateInstructorRef: UpdateInstructorRef;

export function updateInstructor(vars: UpdateInstructorVariables): MutationPromise<UpdateInstructorData, UpdateInstructorVariables>;
export function updateInstructor(dc: DataConnect, vars: UpdateInstructorVariables): MutationPromise<UpdateInstructorData, UpdateInstructorVariables>;

interface DeleteInstructorRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteInstructorVariables): MutationRef<DeleteInstructorData, DeleteInstructorVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteInstructorVariables): MutationRef<DeleteInstructorData, DeleteInstructorVariables>;
  operationName: string;
}
export const deleteInstructorRef: DeleteInstructorRef;

export function deleteInstructor(vars: DeleteInstructorVariables): MutationPromise<DeleteInstructorData, DeleteInstructorVariables>;
export function deleteInstructor(dc: DataConnect, vars: DeleteInstructorVariables): MutationPromise<DeleteInstructorData, DeleteInstructorVariables>;

interface ListCursosRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCursosData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCursosData, undefined>;
  operationName: string;
}
export const listCursosRef: ListCursosRef;

export function listCursos(options?: ExecuteQueryOptions): QueryPromise<ListCursosData, undefined>;
export function listCursos(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCursosData, undefined>;

interface BuscarCursoPorNombreRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: BuscarCursoPorNombreVariables): QueryRef<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: BuscarCursoPorNombreVariables): QueryRef<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;
  operationName: string;
}
export const buscarCursoPorNombreRef: BuscarCursoPorNombreRef;

export function buscarCursoPorNombre(vars: BuscarCursoPorNombreVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;
export function buscarCursoPorNombre(dc: DataConnect, vars: BuscarCursoPorNombreVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;

interface CursosPorCategoriaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CursosPorCategoriaVariables): QueryRef<CursosPorCategoriaData, CursosPorCategoriaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CursosPorCategoriaVariables): QueryRef<CursosPorCategoriaData, CursosPorCategoriaVariables>;
  operationName: string;
}
export const cursosPorCategoriaRef: CursosPorCategoriaRef;

export function cursosPorCategoria(vars: CursosPorCategoriaVariables, options?: ExecuteQueryOptions): QueryPromise<CursosPorCategoriaData, CursosPorCategoriaVariables>;
export function cursosPorCategoria(dc: DataConnect, vars: CursosPorCategoriaVariables, options?: ExecuteQueryOptions): QueryPromise<CursosPorCategoriaData, CursosPorCategoriaVariables>;

interface CursosPorEstadoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CursosPorEstadoVariables): QueryRef<CursosPorEstadoData, CursosPorEstadoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CursosPorEstadoVariables): QueryRef<CursosPorEstadoData, CursosPorEstadoVariables>;
  operationName: string;
}
export const cursosPorEstadoRef: CursosPorEstadoRef;

export function cursosPorEstado(vars: CursosPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<CursosPorEstadoData, CursosPorEstadoVariables>;
export function cursosPorEstado(dc: DataConnect, vars: CursosPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<CursosPorEstadoData, CursosPorEstadoVariables>;

interface CreateCursoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCursoVariables): MutationRef<CreateCursoData, CreateCursoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCursoVariables): MutationRef<CreateCursoData, CreateCursoVariables>;
  operationName: string;
}
export const createCursoRef: CreateCursoRef;

export function createCurso(vars: CreateCursoVariables): MutationPromise<CreateCursoData, CreateCursoVariables>;
export function createCurso(dc: DataConnect, vars: CreateCursoVariables): MutationPromise<CreateCursoData, CreateCursoVariables>;

interface UpdateCursoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCursoVariables): MutationRef<UpdateCursoData, UpdateCursoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateCursoVariables): MutationRef<UpdateCursoData, UpdateCursoVariables>;
  operationName: string;
}
export const updateCursoRef: UpdateCursoRef;

export function updateCurso(vars: UpdateCursoVariables): MutationPromise<UpdateCursoData, UpdateCursoVariables>;
export function updateCurso(dc: DataConnect, vars: UpdateCursoVariables): MutationPromise<UpdateCursoData, UpdateCursoVariables>;

interface DeleteCursoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCursoVariables): MutationRef<DeleteCursoData, DeleteCursoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteCursoVariables): MutationRef<DeleteCursoData, DeleteCursoVariables>;
  operationName: string;
}
export const deleteCursoRef: DeleteCursoRef;

export function deleteCurso(vars: DeleteCursoVariables): MutationPromise<DeleteCursoData, DeleteCursoVariables>;
export function deleteCurso(dc: DataConnect, vars: DeleteCursoVariables): MutationPromise<DeleteCursoData, DeleteCursoVariables>;

interface ListHorariosRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHorariosData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListHorariosData, undefined>;
  operationName: string;
}
export const listHorariosRef: ListHorariosRef;

export function listHorarios(options?: ExecuteQueryOptions): QueryPromise<ListHorariosData, undefined>;
export function listHorarios(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListHorariosData, undefined>;

interface BuscarHorarioPorCursoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: BuscarHorarioPorCursoVariables): QueryRef<BuscarHorarioPorCursoData, BuscarHorarioPorCursoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: BuscarHorarioPorCursoVariables): QueryRef<BuscarHorarioPorCursoData, BuscarHorarioPorCursoVariables>;
  operationName: string;
}
export const buscarHorarioPorCursoRef: BuscarHorarioPorCursoRef;

export function buscarHorarioPorCurso(vars: BuscarHorarioPorCursoVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarHorarioPorCursoData, BuscarHorarioPorCursoVariables>;
export function buscarHorarioPorCurso(dc: DataConnect, vars: BuscarHorarioPorCursoVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarHorarioPorCursoData, BuscarHorarioPorCursoVariables>;

interface HorariosPorDiaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: HorariosPorDiaVariables): QueryRef<HorariosPorDiaData, HorariosPorDiaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: HorariosPorDiaVariables): QueryRef<HorariosPorDiaData, HorariosPorDiaVariables>;
  operationName: string;
}
export const horariosPorDiaRef: HorariosPorDiaRef;

export function horariosPorDia(vars: HorariosPorDiaVariables, options?: ExecuteQueryOptions): QueryPromise<HorariosPorDiaData, HorariosPorDiaVariables>;
export function horariosPorDia(dc: DataConnect, vars: HorariosPorDiaVariables, options?: ExecuteQueryOptions): QueryPromise<HorariosPorDiaData, HorariosPorDiaVariables>;

interface HorariosPorEstadoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: HorariosPorEstadoVariables): QueryRef<HorariosPorEstadoData, HorariosPorEstadoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: HorariosPorEstadoVariables): QueryRef<HorariosPorEstadoData, HorariosPorEstadoVariables>;
  operationName: string;
}
export const horariosPorEstadoRef: HorariosPorEstadoRef;

export function horariosPorEstado(vars: HorariosPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<HorariosPorEstadoData, HorariosPorEstadoVariables>;
export function horariosPorEstado(dc: DataConnect, vars: HorariosPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<HorariosPorEstadoData, HorariosPorEstadoVariables>;

interface ListInscripcionesActivasRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListInscripcionesActivasData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListInscripcionesActivasData, undefined>;
  operationName: string;
}
export const listInscripcionesActivasRef: ListInscripcionesActivasRef;

export function listInscripcionesActivas(options?: ExecuteQueryOptions): QueryPromise<ListInscripcionesActivasData, undefined>;
export function listInscripcionesActivas(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListInscripcionesActivasData, undefined>;

interface CreateHorarioRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHorarioVariables): MutationRef<CreateHorarioData, CreateHorarioVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateHorarioVariables): MutationRef<CreateHorarioData, CreateHorarioVariables>;
  operationName: string;
}
export const createHorarioRef: CreateHorarioRef;

export function createHorario(vars: CreateHorarioVariables): MutationPromise<CreateHorarioData, CreateHorarioVariables>;
export function createHorario(dc: DataConnect, vars: CreateHorarioVariables): MutationPromise<CreateHorarioData, CreateHorarioVariables>;

interface UpdateHorarioRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateHorarioVariables): MutationRef<UpdateHorarioData, UpdateHorarioVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateHorarioVariables): MutationRef<UpdateHorarioData, UpdateHorarioVariables>;
  operationName: string;
}
export const updateHorarioRef: UpdateHorarioRef;

export function updateHorario(vars: UpdateHorarioVariables): MutationPromise<UpdateHorarioData, UpdateHorarioVariables>;
export function updateHorario(dc: DataConnect, vars: UpdateHorarioVariables): MutationPromise<UpdateHorarioData, UpdateHorarioVariables>;

interface DeleteHorarioRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteHorarioVariables): MutationRef<DeleteHorarioData, DeleteHorarioVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteHorarioVariables): MutationRef<DeleteHorarioData, DeleteHorarioVariables>;
  operationName: string;
}
export const deleteHorarioRef: DeleteHorarioRef;

export function deleteHorario(vars: DeleteHorarioVariables): MutationPromise<DeleteHorarioData, DeleteHorarioVariables>;
export function deleteHorario(dc: DataConnect, vars: DeleteHorarioVariables): MutationPromise<DeleteHorarioData, DeleteHorarioVariables>;

interface ActualizarCupoHorarioRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ActualizarCupoHorarioVariables): MutationRef<ActualizarCupoHorarioData, ActualizarCupoHorarioVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ActualizarCupoHorarioVariables): MutationRef<ActualizarCupoHorarioData, ActualizarCupoHorarioVariables>;
  operationName: string;
}
export const actualizarCupoHorarioRef: ActualizarCupoHorarioRef;

export function actualizarCupoHorario(vars: ActualizarCupoHorarioVariables): MutationPromise<ActualizarCupoHorarioData, ActualizarCupoHorarioVariables>;
export function actualizarCupoHorario(dc: DataConnect, vars: ActualizarCupoHorarioVariables): MutationPromise<ActualizarCupoHorarioData, ActualizarCupoHorarioVariables>;

interface ListCursosEstadisticasRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCursosEstadisticasData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCursosEstadisticasData, undefined>;
  operationName: string;
}
export const listCursosEstadisticasRef: ListCursosEstadisticasRef;

export function listCursosEstadisticas(options?: ExecuteQueryOptions): QueryPromise<ListCursosEstadisticasData, undefined>;
export function listCursosEstadisticas(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCursosEstadisticasData, undefined>;

interface ListHorariosEstadisticasRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHorariosEstadisticasData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListHorariosEstadisticasData, undefined>;
  operationName: string;
}
export const listHorariosEstadisticasRef: ListHorariosEstadisticasRef;

export function listHorariosEstadisticas(options?: ExecuteQueryOptions): QueryPromise<ListHorariosEstadisticasData, undefined>;
export function listHorariosEstadisticas(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListHorariosEstadisticasData, undefined>;

interface ListHorariosPorEstadoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListHorariosPorEstadoVariables): QueryRef<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListHorariosPorEstadoVariables): QueryRef<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;
  operationName: string;
}
export const listHorariosPorEstadoRef: ListHorariosPorEstadoRef;

export function listHorariosPorEstado(vars: ListHorariosPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;
export function listHorariosPorEstado(dc: DataConnect, vars: ListHorariosPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;

interface ListInscripcionesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListInscripcionesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListInscripcionesData, undefined>;
  operationName: string;
}
export const listInscripcionesRef: ListInscripcionesRef;

export function listInscripciones(options?: ExecuteQueryOptions): QueryPromise<ListInscripcionesData, undefined>;
export function listInscripciones(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListInscripcionesData, undefined>;

interface ListInscripcionesPorEstadoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListInscripcionesPorEstadoVariables): QueryRef<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListInscripcionesPorEstadoVariables): QueryRef<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;
  operationName: string;
}
export const listInscripcionesPorEstadoRef: ListInscripcionesPorEstadoRef;

export function listInscripcionesPorEstado(vars: ListInscripcionesPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;
export function listInscripcionesPorEstado(dc: DataConnect, vars: ListInscripcionesPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;

interface ListAsistenciasRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAsistenciasData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAsistenciasData, undefined>;
  operationName: string;
}
export const listAsistenciasRef: ListAsistenciasRef;

export function listAsistencias(options?: ExecuteQueryOptions): QueryPromise<ListAsistenciasData, undefined>;
export function listAsistencias(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAsistenciasData, undefined>;

interface ListAsistenciasPorEstadoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListAsistenciasPorEstadoVariables): QueryRef<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListAsistenciasPorEstadoVariables): QueryRef<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;
  operationName: string;
}
export const listAsistenciasPorEstadoRef: ListAsistenciasPorEstadoRef;

export function listAsistenciasPorEstado(vars: ListAsistenciasPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;
export function listAsistenciasPorEstado(dc: DataConnect, vars: ListAsistenciasPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;

interface ListReportesEstadisticasRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListReportesEstadisticasData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListReportesEstadisticasData, undefined>;
  operationName: string;
}
export const listReportesEstadisticasRef: ListReportesEstadisticasRef;

export function listReportesEstadisticas(options?: ExecuteQueryOptions): QueryPromise<ListReportesEstadisticasData, undefined>;
export function listReportesEstadisticas(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListReportesEstadisticasData, undefined>;

interface ListReportesPorPeriodoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListReportesPorPeriodoVariables): QueryRef<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListReportesPorPeriodoVariables): QueryRef<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;
  operationName: string;
}
export const listReportesPorPeriodoRef: ListReportesPorPeriodoRef;

export function listReportesPorPeriodo(vars: ListReportesPorPeriodoVariables, options?: ExecuteQueryOptions): QueryPromise<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;
export function listReportesPorPeriodo(dc: DataConnect, vars: ListReportesPorPeriodoVariables, options?: ExecuteQueryOptions): QueryPromise<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;

interface ListReportesPorCursoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListReportesPorCursoVariables): QueryRef<ListReportesPorCursoData, ListReportesPorCursoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListReportesPorCursoVariables): QueryRef<ListReportesPorCursoData, ListReportesPorCursoVariables>;
  operationName: string;
}
export const listReportesPorCursoRef: ListReportesPorCursoRef;

export function listReportesPorCurso(vars: ListReportesPorCursoVariables, options?: ExecuteQueryOptions): QueryPromise<ListReportesPorCursoData, ListReportesPorCursoVariables>;
export function listReportesPorCurso(dc: DataConnect, vars: ListReportesPorCursoVariables, options?: ExecuteQueryOptions): QueryPromise<ListReportesPorCursoData, ListReportesPorCursoVariables>;

interface GetCursoInternalIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCursoInternalIdVariables): QueryRef<GetCursoInternalIdData, GetCursoInternalIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCursoInternalIdVariables): QueryRef<GetCursoInternalIdData, GetCursoInternalIdVariables>;
  operationName: string;
}
export const getCursoInternalIdRef: GetCursoInternalIdRef;

export function getCursoInternalId(vars: GetCursoInternalIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetCursoInternalIdData, GetCursoInternalIdVariables>;
export function getCursoInternalId(dc: DataConnect, vars: GetCursoInternalIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetCursoInternalIdData, GetCursoInternalIdVariables>;

interface CreateReporteEstadisticaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReporteEstadisticaVariables): MutationRef<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateReporteEstadisticaVariables): MutationRef<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;
  operationName: string;
}
export const createReporteEstadisticaRef: CreateReporteEstadisticaRef;

export function createReporteEstadistica(vars: CreateReporteEstadisticaVariables): MutationPromise<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;
export function createReporteEstadistica(dc: DataConnect, vars: CreateReporteEstadisticaVariables): MutationPromise<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;

interface UpdateReporteEstadisticaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReporteEstadisticaVariables): MutationRef<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateReporteEstadisticaVariables): MutationRef<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;
  operationName: string;
}
export const updateReporteEstadisticaRef: UpdateReporteEstadisticaRef;

export function updateReporteEstadistica(vars: UpdateReporteEstadisticaVariables): MutationPromise<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;
export function updateReporteEstadistica(dc: DataConnect, vars: UpdateReporteEstadisticaVariables): MutationPromise<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;

interface GetInscripcionesByEstudianteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetInscripcionesByEstudianteVariables): QueryRef<GetInscripcionesByEstudianteData, GetInscripcionesByEstudianteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetInscripcionesByEstudianteVariables): QueryRef<GetInscripcionesByEstudianteData, GetInscripcionesByEstudianteVariables>;
  operationName: string;
}
export const getInscripcionesByEstudianteRef: GetInscripcionesByEstudianteRef;

export function getInscripcionesByEstudiante(vars: GetInscripcionesByEstudianteVariables, options?: ExecuteQueryOptions): QueryPromise<GetInscripcionesByEstudianteData, GetInscripcionesByEstudianteVariables>;
export function getInscripcionesByEstudiante(dc: DataConnect, vars: GetInscripcionesByEstudianteVariables, options?: ExecuteQueryOptions): QueryPromise<GetInscripcionesByEstudianteData, GetInscripcionesByEstudianteVariables>;

interface GetInscripcionesByEstudianteIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetInscripcionesByEstudianteIdVariables): QueryRef<GetInscripcionesByEstudianteIdData, GetInscripcionesByEstudianteIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetInscripcionesByEstudianteIdVariables): QueryRef<GetInscripcionesByEstudianteIdData, GetInscripcionesByEstudianteIdVariables>;
  operationName: string;
}
export const getInscripcionesByEstudianteIdRef: GetInscripcionesByEstudianteIdRef;

export function getInscripcionesByEstudianteId(vars: GetInscripcionesByEstudianteIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetInscripcionesByEstudianteIdData, GetInscripcionesByEstudianteIdVariables>;
export function getInscripcionesByEstudianteId(dc: DataConnect, vars: GetInscripcionesByEstudianteIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetInscripcionesByEstudianteIdData, GetInscripcionesByEstudianteIdVariables>;

interface GetHorariosDisponiblesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetHorariosDisponiblesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetHorariosDisponiblesData, undefined>;
  operationName: string;
}
export const getHorariosDisponiblesRef: GetHorariosDisponiblesRef;

export function getHorariosDisponibles(options?: ExecuteQueryOptions): QueryPromise<GetHorariosDisponiblesData, undefined>;
export function getHorariosDisponibles(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetHorariosDisponiblesData, undefined>;

interface InsscribirEstudianteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsscribirEstudianteVariables): MutationRef<InsscribirEstudianteData, InsscribirEstudianteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: InsscribirEstudianteVariables): MutationRef<InsscribirEstudianteData, InsscribirEstudianteVariables>;
  operationName: string;
}
export const insscribirEstudianteRef: InsscribirEstudianteRef;

export function insscribirEstudiante(vars: InsscribirEstudianteVariables): MutationPromise<InsscribirEstudianteData, InsscribirEstudianteVariables>;
export function insscribirEstudiante(dc: DataConnect, vars: InsscribirEstudianteVariables): MutationPromise<InsscribirEstudianteData, InsscribirEstudianteVariables>;

interface CancelarInscripcionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CancelarInscripcionVariables): MutationRef<CancelarInscripcionData, CancelarInscripcionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CancelarInscripcionVariables): MutationRef<CancelarInscripcionData, CancelarInscripcionVariables>;
  operationName: string;
}
export const cancelarInscripcionRef: CancelarInscripcionRef;

export function cancelarInscripcion(vars: CancelarInscripcionVariables): MutationPromise<CancelarInscripcionData, CancelarInscripcionVariables>;
export function cancelarInscripcion(dc: DataConnect, vars: CancelarInscripcionVariables): MutationPromise<CancelarInscripcionData, CancelarInscripcionVariables>;

interface TeacherGetInstructorByCorreoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: TeacherGetInstructorByCorreoVariables): QueryRef<TeacherGetInstructorByCorreoData, TeacherGetInstructorByCorreoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: TeacherGetInstructorByCorreoVariables): QueryRef<TeacherGetInstructorByCorreoData, TeacherGetInstructorByCorreoVariables>;
  operationName: string;
}
export const teacherGetInstructorByCorreoRef: TeacherGetInstructorByCorreoRef;

export function teacherGetInstructorByCorreo(vars: TeacherGetInstructorByCorreoVariables, options?: ExecuteQueryOptions): QueryPromise<TeacherGetInstructorByCorreoData, TeacherGetInstructorByCorreoVariables>;
export function teacherGetInstructorByCorreo(dc: DataConnect, vars: TeacherGetInstructorByCorreoVariables, options?: ExecuteQueryOptions): QueryPromise<TeacherGetInstructorByCorreoData, TeacherGetInstructorByCorreoVariables>;

interface TeacherListCursosPorCorreoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: TeacherListCursosPorCorreoVariables): QueryRef<TeacherListCursosPorCorreoData, TeacherListCursosPorCorreoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: TeacherListCursosPorCorreoVariables): QueryRef<TeacherListCursosPorCorreoData, TeacherListCursosPorCorreoVariables>;
  operationName: string;
}
export const teacherListCursosPorCorreoRef: TeacherListCursosPorCorreoRef;

export function teacherListCursosPorCorreo(vars: TeacherListCursosPorCorreoVariables, options?: ExecuteQueryOptions): QueryPromise<TeacherListCursosPorCorreoData, TeacherListCursosPorCorreoVariables>;
export function teacherListCursosPorCorreo(dc: DataConnect, vars: TeacherListCursosPorCorreoVariables, options?: ExecuteQueryOptions): QueryPromise<TeacherListCursosPorCorreoData, TeacherListCursosPorCorreoVariables>;

interface TeacherListHorariosPorCursoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: TeacherListHorariosPorCursoVariables): QueryRef<TeacherListHorariosPorCursoData, TeacherListHorariosPorCursoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: TeacherListHorariosPorCursoVariables): QueryRef<TeacherListHorariosPorCursoData, TeacherListHorariosPorCursoVariables>;
  operationName: string;
}
export const teacherListHorariosPorCursoRef: TeacherListHorariosPorCursoRef;

export function teacherListHorariosPorCurso(vars: TeacherListHorariosPorCursoVariables, options?: ExecuteQueryOptions): QueryPromise<TeacherListHorariosPorCursoData, TeacherListHorariosPorCursoVariables>;
export function teacherListHorariosPorCurso(dc: DataConnect, vars: TeacherListHorariosPorCursoVariables, options?: ExecuteQueryOptions): QueryPromise<TeacherListHorariosPorCursoData, TeacherListHorariosPorCursoVariables>;

interface TeacherListEstudiantesPorHorarioRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: TeacherListEstudiantesPorHorarioVariables): QueryRef<TeacherListEstudiantesPorHorarioData, TeacherListEstudiantesPorHorarioVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: TeacherListEstudiantesPorHorarioVariables): QueryRef<TeacherListEstudiantesPorHorarioData, TeacherListEstudiantesPorHorarioVariables>;
  operationName: string;
}
export const teacherListEstudiantesPorHorarioRef: TeacherListEstudiantesPorHorarioRef;

export function teacherListEstudiantesPorHorario(vars: TeacherListEstudiantesPorHorarioVariables, options?: ExecuteQueryOptions): QueryPromise<TeacherListEstudiantesPorHorarioData, TeacherListEstudiantesPorHorarioVariables>;
export function teacherListEstudiantesPorHorario(dc: DataConnect, vars: TeacherListEstudiantesPorHorarioVariables, options?: ExecuteQueryOptions): QueryPromise<TeacherListEstudiantesPorHorarioData, TeacherListEstudiantesPorHorarioVariables>;

interface TeacherListAsistenciasPorCorreoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: TeacherListAsistenciasPorCorreoVariables): QueryRef<TeacherListAsistenciasPorCorreoData, TeacherListAsistenciasPorCorreoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: TeacherListAsistenciasPorCorreoVariables): QueryRef<TeacherListAsistenciasPorCorreoData, TeacherListAsistenciasPorCorreoVariables>;
  operationName: string;
}
export const teacherListAsistenciasPorCorreoRef: TeacherListAsistenciasPorCorreoRef;

export function teacherListAsistenciasPorCorreo(vars: TeacherListAsistenciasPorCorreoVariables, options?: ExecuteQueryOptions): QueryPromise<TeacherListAsistenciasPorCorreoData, TeacherListAsistenciasPorCorreoVariables>;
export function teacherListAsistenciasPorCorreo(dc: DataConnect, vars: TeacherListAsistenciasPorCorreoVariables, options?: ExecuteQueryOptions): QueryPromise<TeacherListAsistenciasPorCorreoData, TeacherListAsistenciasPorCorreoVariables>;

interface TeacherCreateAsistenciaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: TeacherCreateAsistenciaVariables): MutationRef<TeacherCreateAsistenciaData, TeacherCreateAsistenciaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: TeacherCreateAsistenciaVariables): MutationRef<TeacherCreateAsistenciaData, TeacherCreateAsistenciaVariables>;
  operationName: string;
}
export const teacherCreateAsistenciaRef: TeacherCreateAsistenciaRef;

export function teacherCreateAsistencia(vars: TeacherCreateAsistenciaVariables): MutationPromise<TeacherCreateAsistenciaData, TeacherCreateAsistenciaVariables>;
export function teacherCreateAsistencia(dc: DataConnect, vars: TeacherCreateAsistenciaVariables): MutationPromise<TeacherCreateAsistenciaData, TeacherCreateAsistenciaVariables>;

interface TeacherUpdateAsistenciaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: TeacherUpdateAsistenciaVariables): MutationRef<TeacherUpdateAsistenciaData, TeacherUpdateAsistenciaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: TeacherUpdateAsistenciaVariables): MutationRef<TeacherUpdateAsistenciaData, TeacherUpdateAsistenciaVariables>;
  operationName: string;
}
export const teacherUpdateAsistenciaRef: TeacherUpdateAsistenciaRef;

export function teacherUpdateAsistencia(vars: TeacherUpdateAsistenciaVariables): MutationPromise<TeacherUpdateAsistenciaData, TeacherUpdateAsistenciaVariables>;
export function teacherUpdateAsistencia(dc: DataConnect, vars: TeacherUpdateAsistenciaVariables): MutationPromise<TeacherUpdateAsistenciaData, TeacherUpdateAsistenciaVariables>;

interface TeacherDeleteAsistenciaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: TeacherDeleteAsistenciaVariables): MutationRef<TeacherDeleteAsistenciaData, TeacherDeleteAsistenciaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: TeacherDeleteAsistenciaVariables): MutationRef<TeacherDeleteAsistenciaData, TeacherDeleteAsistenciaVariables>;
  operationName: string;
}
export const teacherDeleteAsistenciaRef: TeacherDeleteAsistenciaRef;

export function teacherDeleteAsistencia(vars: TeacherDeleteAsistenciaVariables): MutationPromise<TeacherDeleteAsistenciaData, TeacherDeleteAsistenciaVariables>;
export function teacherDeleteAsistencia(dc: DataConnect, vars: TeacherDeleteAsistenciaVariables): MutationPromise<TeacherDeleteAsistenciaData, TeacherDeleteAsistenciaVariables>;


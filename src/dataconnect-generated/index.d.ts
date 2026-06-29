import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




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
    usuarioId: string;
    nombreCompleto: string;
    correo: string;
    passwordHash: string;
    rol: {
      nombre: string;
    };
  })[];
}

export interface GetUsuarioByCorreoVariables {
  correo: string;
}

export interface Horario_Key {
  id: UUIDString;
  __typename?: 'Horario_Key';
}

export interface Inscripcion_Key {
  id: UUIDString;
  __typename?: 'Inscripcion_Key';
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


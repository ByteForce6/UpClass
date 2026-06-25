import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




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

export interface BuscarEstudiantePorMatriculaData {
  estudiantes: ({
    matricula: string;
    usuario: {
      usuarioId: string;
      nombreCompleto: string;
      correo: string;
      activo: boolean;
    };
  })[];
}

export interface BuscarEstudiantePorMatriculaVariables {
  matricula: string;
}

export interface BuscarEstudiantePorNombreData {
  estudiantes: ({
    matricula: string;
    usuario: {
      nombreCompleto: string;
      correo: string;
    };
  })[];
}

export interface BuscarEstudiantePorNombreVariables {
  nombre: string;
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

export interface Estudiante_Key {
  id: UUIDString;
  __typename?: 'Estudiante_Key';
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

export interface ListarEstudiantesData {
  estudiantes: ({
    matricula: string;
    usuario: {
      nombreCompleto: string;
      correo: string;
      activo: boolean;
    };
  })[];
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

interface BuscarEstudiantePorMatriculaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: BuscarEstudiantePorMatriculaVariables): QueryRef<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: BuscarEstudiantePorMatriculaVariables): QueryRef<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;
  operationName: string;
}
export const buscarEstudiantePorMatriculaRef: BuscarEstudiantePorMatriculaRef;

export function buscarEstudiantePorMatricula(vars: BuscarEstudiantePorMatriculaVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;
export function buscarEstudiantePorMatricula(dc: DataConnect, vars: BuscarEstudiantePorMatriculaVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;

interface BuscarEstudiantePorNombreRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: BuscarEstudiantePorNombreVariables): QueryRef<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: BuscarEstudiantePorNombreVariables): QueryRef<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;
  operationName: string;
}
export const buscarEstudiantePorNombreRef: BuscarEstudiantePorNombreRef;

export function buscarEstudiantePorNombre(vars: BuscarEstudiantePorNombreVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;
export function buscarEstudiantePorNombre(dc: DataConnect, vars: BuscarEstudiantePorNombreVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;

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


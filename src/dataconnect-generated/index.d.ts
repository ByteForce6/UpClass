import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, DataConnectSettings } from 'firebase/data-connect';

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

export interface BuscarEstudiantePorMatriculaData {
  estudiantes: ({
    id: UUIDString;
    matricula: string;
    nombreCompleto: string;
    correo: string;
    activo: boolean;
  } & Estudiante_Key)[];
}

export interface BuscarEstudiantePorMatriculaVariables {
  matricula: string;
}

export interface BuscarEstudiantePorNombreData {
  estudiantes: ({
    matricula: string;
    nombreCompleto: string;
    correo: string;
  })[];
}

export interface BuscarEstudiantePorNombreVariables {
  nombre: string;
}

export interface Curso_Key {
  id: UUIDString;
  __typename?: 'Curso_Key';
}

export interface Estudiante_Key {
  id: UUIDString;
  __typename?: 'Estudiante_Key';
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

export interface ListarEstudiantesData {
  estudiantes: ({
    matricula: string;
    nombreCompleto: string;
    correo: string;
    activo: boolean;
  })[];
}

export interface ReporteEstadistica_Key {
  id: UUIDString;
  __typename?: 'ReporteEstadistica_Key';
}

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


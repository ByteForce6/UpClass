import { GetUsuarioByCorreoData, GetUsuarioByCorreoVariables, BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables, BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables, ListarEstudiantesData, ListInstructorsData, GetRolByNumeroData, GetRolByNumeroVariables, CreateInstructorData, CreateInstructorVariables, UpdateInstructorData, UpdateInstructorVariables, DeleteInstructorData, DeleteInstructorVariables, ListCursosData, BuscarCursoPorNombreData, BuscarCursoPorNombreVariables, CursosPorCategoriaData, CursosPorCategoriaVariables, CursosPorEstadoData, CursosPorEstadoVariables, CreateCursoData, CreateCursoVariables, UpdateCursoData, UpdateCursoVariables, DeleteCursoData, DeleteCursoVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetUsuarioByCorreo(vars: GetUsuarioByCorreoVariables, options?: useDataConnectQueryOptions<GetUsuarioByCorreoData>): UseDataConnectQueryResult<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;
export function useGetUsuarioByCorreo(dc: DataConnect, vars: GetUsuarioByCorreoVariables, options?: useDataConnectQueryOptions<GetUsuarioByCorreoData>): UseDataConnectQueryResult<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;

export function useBuscarEstudiantePorMatricula(vars: BuscarEstudiantePorMatriculaVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorMatriculaData>): UseDataConnectQueryResult<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;
export function useBuscarEstudiantePorMatricula(dc: DataConnect, vars: BuscarEstudiantePorMatriculaVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorMatriculaData>): UseDataConnectQueryResult<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;

export function useBuscarEstudiantePorNombre(vars: BuscarEstudiantePorNombreVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorNombreData>): UseDataConnectQueryResult<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;
export function useBuscarEstudiantePorNombre(dc: DataConnect, vars: BuscarEstudiantePorNombreVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorNombreData>): UseDataConnectQueryResult<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;

export function useListarEstudiantes(options?: useDataConnectQueryOptions<ListarEstudiantesData>): UseDataConnectQueryResult<ListarEstudiantesData, undefined>;
export function useListarEstudiantes(dc: DataConnect, options?: useDataConnectQueryOptions<ListarEstudiantesData>): UseDataConnectQueryResult<ListarEstudiantesData, undefined>;

export function useListInstructors(options?: useDataConnectQueryOptions<ListInstructorsData>): UseDataConnectQueryResult<ListInstructorsData, undefined>;
export function useListInstructors(dc: DataConnect, options?: useDataConnectQueryOptions<ListInstructorsData>): UseDataConnectQueryResult<ListInstructorsData, undefined>;

export function useGetRolByNumero(vars: GetRolByNumeroVariables, options?: useDataConnectQueryOptions<GetRolByNumeroData>): UseDataConnectQueryResult<GetRolByNumeroData, GetRolByNumeroVariables>;
export function useGetRolByNumero(dc: DataConnect, vars: GetRolByNumeroVariables, options?: useDataConnectQueryOptions<GetRolByNumeroData>): UseDataConnectQueryResult<GetRolByNumeroData, GetRolByNumeroVariables>;

export function useCreateInstructor(options?: useDataConnectMutationOptions<CreateInstructorData, FirebaseError, CreateInstructorVariables>): UseDataConnectMutationResult<CreateInstructorData, CreateInstructorVariables>;
export function useCreateInstructor(dc: DataConnect, options?: useDataConnectMutationOptions<CreateInstructorData, FirebaseError, CreateInstructorVariables>): UseDataConnectMutationResult<CreateInstructorData, CreateInstructorVariables>;

export function useUpdateInstructor(options?: useDataConnectMutationOptions<UpdateInstructorData, FirebaseError, UpdateInstructorVariables>): UseDataConnectMutationResult<UpdateInstructorData, UpdateInstructorVariables>;
export function useUpdateInstructor(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateInstructorData, FirebaseError, UpdateInstructorVariables>): UseDataConnectMutationResult<UpdateInstructorData, UpdateInstructorVariables>;

export function useDeleteInstructor(options?: useDataConnectMutationOptions<DeleteInstructorData, FirebaseError, DeleteInstructorVariables>): UseDataConnectMutationResult<DeleteInstructorData, DeleteInstructorVariables>;
export function useDeleteInstructor(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteInstructorData, FirebaseError, DeleteInstructorVariables>): UseDataConnectMutationResult<DeleteInstructorData, DeleteInstructorVariables>;

export function useListCursos(options?: useDataConnectQueryOptions<ListCursosData>): UseDataConnectQueryResult<ListCursosData, undefined>;
export function useListCursos(dc: DataConnect, options?: useDataConnectQueryOptions<ListCursosData>): UseDataConnectQueryResult<ListCursosData, undefined>;

export function useBuscarCursoPorNombre(vars: BuscarCursoPorNombreVariables, options?: useDataConnectQueryOptions<BuscarCursoPorNombreData>): UseDataConnectQueryResult<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;
export function useBuscarCursoPorNombre(dc: DataConnect, vars: BuscarCursoPorNombreVariables, options?: useDataConnectQueryOptions<BuscarCursoPorNombreData>): UseDataConnectQueryResult<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;

export function useCursosPorCategoria(vars: CursosPorCategoriaVariables, options?: useDataConnectQueryOptions<CursosPorCategoriaData>): UseDataConnectQueryResult<CursosPorCategoriaData, CursosPorCategoriaVariables>;
export function useCursosPorCategoria(dc: DataConnect, vars: CursosPorCategoriaVariables, options?: useDataConnectQueryOptions<CursosPorCategoriaData>): UseDataConnectQueryResult<CursosPorCategoriaData, CursosPorCategoriaVariables>;

export function useCursosPorEstado(vars: CursosPorEstadoVariables, options?: useDataConnectQueryOptions<CursosPorEstadoData>): UseDataConnectQueryResult<CursosPorEstadoData, CursosPorEstadoVariables>;
export function useCursosPorEstado(dc: DataConnect, vars: CursosPorEstadoVariables, options?: useDataConnectQueryOptions<CursosPorEstadoData>): UseDataConnectQueryResult<CursosPorEstadoData, CursosPorEstadoVariables>;

export function useCreateCurso(options?: useDataConnectMutationOptions<CreateCursoData, FirebaseError, CreateCursoVariables>): UseDataConnectMutationResult<CreateCursoData, CreateCursoVariables>;
export function useCreateCurso(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCursoData, FirebaseError, CreateCursoVariables>): UseDataConnectMutationResult<CreateCursoData, CreateCursoVariables>;

export function useUpdateCurso(options?: useDataConnectMutationOptions<UpdateCursoData, FirebaseError, UpdateCursoVariables>): UseDataConnectMutationResult<UpdateCursoData, UpdateCursoVariables>;
export function useUpdateCurso(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateCursoData, FirebaseError, UpdateCursoVariables>): UseDataConnectMutationResult<UpdateCursoData, UpdateCursoVariables>;

export function useDeleteCurso(options?: useDataConnectMutationOptions<DeleteCursoData, FirebaseError, DeleteCursoVariables>): UseDataConnectMutationResult<DeleteCursoData, DeleteCursoVariables>;
export function useDeleteCurso(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteCursoData, FirebaseError, DeleteCursoVariables>): UseDataConnectMutationResult<DeleteCursoData, DeleteCursoVariables>;

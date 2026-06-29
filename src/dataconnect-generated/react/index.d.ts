import { GetUsuarioByCorreoData, GetUsuarioByCorreoVariables, ListarEstudiantesData, CrearEstudianteData, CrearEstudianteVariables, ActualizarEstudianteData, ActualizarEstudianteVariables, ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables, ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables, EliminarEstudianteData, EliminarEstudianteVariables, ListInstructorsData, GetRolByNumeroData, GetRolByNumeroVariables, CreateInstructorData, CreateInstructorVariables, UpdateInstructorData, UpdateInstructorVariables, DeleteInstructorData, DeleteInstructorVariables, ListCursosData, BuscarCursoPorNombreData, BuscarCursoPorNombreVariables, CursosPorCategoriaData, CursosPorCategoriaVariables, CursosPorEstadoData, CursosPorEstadoVariables, CreateCursoData, CreateCursoVariables, UpdateCursoData, UpdateCursoVariables, DeleteCursoData, DeleteCursoVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetUsuarioByCorreo(vars: GetUsuarioByCorreoVariables, options?: useDataConnectQueryOptions<GetUsuarioByCorreoData>): UseDataConnectQueryResult<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;
export function useGetUsuarioByCorreo(dc: DataConnect, vars: GetUsuarioByCorreoVariables, options?: useDataConnectQueryOptions<GetUsuarioByCorreoData>): UseDataConnectQueryResult<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;

export function useListarEstudiantes(options?: useDataConnectQueryOptions<ListarEstudiantesData>): UseDataConnectQueryResult<ListarEstudiantesData, undefined>;
export function useListarEstudiantes(dc: DataConnect, options?: useDataConnectQueryOptions<ListarEstudiantesData>): UseDataConnectQueryResult<ListarEstudiantesData, undefined>;

export function useCrearEstudiante(options?: useDataConnectMutationOptions<CrearEstudianteData, FirebaseError, CrearEstudianteVariables>): UseDataConnectMutationResult<CrearEstudianteData, CrearEstudianteVariables>;
export function useCrearEstudiante(dc: DataConnect, options?: useDataConnectMutationOptions<CrearEstudianteData, FirebaseError, CrearEstudianteVariables>): UseDataConnectMutationResult<CrearEstudianteData, CrearEstudianteVariables>;

export function useActualizarEstudiante(options?: useDataConnectMutationOptions<ActualizarEstudianteData, FirebaseError, ActualizarEstudianteVariables>): UseDataConnectMutationResult<ActualizarEstudianteData, ActualizarEstudianteVariables>;
export function useActualizarEstudiante(dc: DataConnect, options?: useDataConnectMutationOptions<ActualizarEstudianteData, FirebaseError, ActualizarEstudianteVariables>): UseDataConnectMutationResult<ActualizarEstudianteData, ActualizarEstudianteVariables>;

export function useActualizarEstudianteSinCorreo(options?: useDataConnectMutationOptions<ActualizarEstudianteSinCorreoData, FirebaseError, ActualizarEstudianteSinCorreoVariables>): UseDataConnectMutationResult<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;
export function useActualizarEstudianteSinCorreo(dc: DataConnect, options?: useDataConnectMutationOptions<ActualizarEstudianteSinCorreoData, FirebaseError, ActualizarEstudianteSinCorreoVariables>): UseDataConnectMutationResult<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;

export function useActualizarPasswordUsuario(options?: useDataConnectMutationOptions<ActualizarPasswordUsuarioData, FirebaseError, ActualizarPasswordUsuarioVariables>): UseDataConnectMutationResult<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;
export function useActualizarPasswordUsuario(dc: DataConnect, options?: useDataConnectMutationOptions<ActualizarPasswordUsuarioData, FirebaseError, ActualizarPasswordUsuarioVariables>): UseDataConnectMutationResult<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;

export function useEliminarEstudiante(options?: useDataConnectMutationOptions<EliminarEstudianteData, FirebaseError, EliminarEstudianteVariables>): UseDataConnectMutationResult<EliminarEstudianteData, EliminarEstudianteVariables>;
export function useEliminarEstudiante(dc: DataConnect, options?: useDataConnectMutationOptions<EliminarEstudianteData, FirebaseError, EliminarEstudianteVariables>): UseDataConnectMutationResult<EliminarEstudianteData, EliminarEstudianteVariables>;

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

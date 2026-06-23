import { GetUsuarioByCorreoData, GetUsuarioByCorreoVariables, BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables, BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables, ListarEstudiantesData, ListInstructorsData, GetRolByNumeroData, GetRolByNumeroVariables, CreateInstructorData, CreateInstructorVariables, UpdateInstructorData, UpdateInstructorVariables, DeleteInstructorData, DeleteInstructorVariables } from '../';
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

import { BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables, BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables, ListarEstudiantesData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useBuscarEstudiantePorMatricula(vars: BuscarEstudiantePorMatriculaVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorMatriculaData>): UseDataConnectQueryResult<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;
export function useBuscarEstudiantePorMatricula(dc: DataConnect, vars: BuscarEstudiantePorMatriculaVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorMatriculaData>): UseDataConnectQueryResult<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;

export function useBuscarEstudiantePorNombre(vars: BuscarEstudiantePorNombreVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorNombreData>): UseDataConnectQueryResult<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;
export function useBuscarEstudiantePorNombre(dc: DataConnect, vars: BuscarEstudiantePorNombreVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorNombreData>): UseDataConnectQueryResult<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;

export function useListarEstudiantes(options?: useDataConnectQueryOptions<ListarEstudiantesData>): UseDataConnectQueryResult<ListarEstudiantesData, undefined>;
export function useListarEstudiantes(dc: DataConnect, options?: useDataConnectQueryOptions<ListarEstudiantesData>): UseDataConnectQueryResult<ListarEstudiantesData, undefined>;

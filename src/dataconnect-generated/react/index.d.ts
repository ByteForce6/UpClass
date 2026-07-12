<<<<<<< Updated upstream
import { GetUsuarioByCorreoData, GetUsuarioByCorreoVariables, ListarEstudiantesData, CrearEstudianteData, CrearEstudianteVariables, ActualizarEstudianteData, ActualizarEstudianteVariables, ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables, ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables, EliminarEstudianteData, EliminarEstudianteVariables, ListInstructorsData, GetRolByNumeroData, GetRolByNumeroVariables, CreateInstructorData, CreateInstructorVariables, UpdateInstructorData, UpdateInstructorVariables, DeleteInstructorData, DeleteInstructorVariables, ListCursosData, BuscarCursoPorNombreData, BuscarCursoPorNombreVariables, CursosPorCategoriaData, CursosPorCategoriaVariables, CursosPorEstadoData, CursosPorEstadoVariables, CreateCursoData, CreateCursoVariables, UpdateCursoData, UpdateCursoVariables, DeleteCursoData, DeleteCursoVariables, ListCursosEstadisticasData, ListHorariosData, ListHorariosPorEstadoData, ListHorariosPorEstadoVariables, ListInscripcionesData, ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables, ListAsistenciasData, ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables, ListReportesEstadisticasData, ListReportesPorPeriodoData, ListReportesPorPeriodoVariables, ListReportesPorCursoData, ListReportesPorCursoVariables, GetCursoInternalIdData, GetCursoInternalIdVariables, CreateReporteEstadisticaData, CreateReporteEstadisticaVariables, UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables, GetInscripcionesByEstudianteData, GetInscripcionesByEstudianteVariables, GetHorariosDisponiblesData, InsscribirEstudianteData, InsscribirEstudianteVariables, CancelarInscripcionData, CancelarInscripcionVariables } from '../';
=======
import { GetUsuarioByCorreoData, GetUsuarioByCorreoVariables, ListarEstudiantesData, CrearEstudianteData, CrearEstudianteVariables, ActualizarEstudianteData, ActualizarEstudianteVariables, ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables, ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables, EliminarEstudianteData, EliminarEstudianteVariables, ListInstructorsData, GetRolByNumeroData, GetRolByNumeroVariables, CreateInstructorData, CreateInstructorVariables, UpdateInstructorData, UpdateInstructorVariables, DeleteInstructorData, DeleteInstructorVariables, ListCursosData, BuscarCursoPorNombreData, BuscarCursoPorNombreVariables, CursosPorCategoriaData, CursosPorCategoriaVariables, CursosPorEstadoData, CursosPorEstadoVariables, CreateCursoData, CreateCursoVariables, UpdateCursoData, UpdateCursoVariables, DeleteCursoData, DeleteCursoVariables, ListHorariosData, BuscarHorarioPorCursoData, BuscarHorarioPorCursoVariables, HorariosPorDiaData, HorariosPorDiaVariables, HorariosPorEstadoData, HorariosPorEstadoVariables, ListInscripcionesActivasData, CreateHorarioData, CreateHorarioVariables, UpdateHorarioData, UpdateHorarioVariables, DeleteHorarioData, DeleteHorarioVariables, ListCursosEstadisticasData, ListHorariosEstadisticasData, ListHorariosPorEstadoData, ListHorariosPorEstadoVariables, ListInscripcionesData, ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables, ListAsistenciasData, ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables, ListReportesEstadisticasData, ListReportesPorPeriodoData, ListReportesPorPeriodoVariables, ListReportesPorCursoData, ListReportesPorCursoVariables, GetCursoInternalIdData, GetCursoInternalIdVariables, CreateReporteEstadisticaData, CreateReporteEstadisticaVariables, UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables } from '../';
>>>>>>> Stashed changes
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

export function useListHorarios(options?: useDataConnectQueryOptions<ListHorariosData>): UseDataConnectQueryResult<ListHorariosData, undefined>;
export function useListHorarios(dc: DataConnect, options?: useDataConnectQueryOptions<ListHorariosData>): UseDataConnectQueryResult<ListHorariosData, undefined>;

export function useBuscarHorarioPorCurso(vars: BuscarHorarioPorCursoVariables, options?: useDataConnectQueryOptions<BuscarHorarioPorCursoData>): UseDataConnectQueryResult<BuscarHorarioPorCursoData, BuscarHorarioPorCursoVariables>;
export function useBuscarHorarioPorCurso(dc: DataConnect, vars: BuscarHorarioPorCursoVariables, options?: useDataConnectQueryOptions<BuscarHorarioPorCursoData>): UseDataConnectQueryResult<BuscarHorarioPorCursoData, BuscarHorarioPorCursoVariables>;

export function useHorariosPorDia(vars: HorariosPorDiaVariables, options?: useDataConnectQueryOptions<HorariosPorDiaData>): UseDataConnectQueryResult<HorariosPorDiaData, HorariosPorDiaVariables>;
export function useHorariosPorDia(dc: DataConnect, vars: HorariosPorDiaVariables, options?: useDataConnectQueryOptions<HorariosPorDiaData>): UseDataConnectQueryResult<HorariosPorDiaData, HorariosPorDiaVariables>;

export function useHorariosPorEstado(vars: HorariosPorEstadoVariables, options?: useDataConnectQueryOptions<HorariosPorEstadoData>): UseDataConnectQueryResult<HorariosPorEstadoData, HorariosPorEstadoVariables>;
export function useHorariosPorEstado(dc: DataConnect, vars: HorariosPorEstadoVariables, options?: useDataConnectQueryOptions<HorariosPorEstadoData>): UseDataConnectQueryResult<HorariosPorEstadoData, HorariosPorEstadoVariables>;

export function useListInscripcionesActivas(options?: useDataConnectQueryOptions<ListInscripcionesActivasData>): UseDataConnectQueryResult<ListInscripcionesActivasData, undefined>;
export function useListInscripcionesActivas(dc: DataConnect, options?: useDataConnectQueryOptions<ListInscripcionesActivasData>): UseDataConnectQueryResult<ListInscripcionesActivasData, undefined>;

export function useCreateHorario(options?: useDataConnectMutationOptions<CreateHorarioData, FirebaseError, CreateHorarioVariables>): UseDataConnectMutationResult<CreateHorarioData, CreateHorarioVariables>;
export function useCreateHorario(dc: DataConnect, options?: useDataConnectMutationOptions<CreateHorarioData, FirebaseError, CreateHorarioVariables>): UseDataConnectMutationResult<CreateHorarioData, CreateHorarioVariables>;

export function useUpdateHorario(options?: useDataConnectMutationOptions<UpdateHorarioData, FirebaseError, UpdateHorarioVariables>): UseDataConnectMutationResult<UpdateHorarioData, UpdateHorarioVariables>;
export function useUpdateHorario(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateHorarioData, FirebaseError, UpdateHorarioVariables>): UseDataConnectMutationResult<UpdateHorarioData, UpdateHorarioVariables>;

export function useDeleteHorario(options?: useDataConnectMutationOptions<DeleteHorarioData, FirebaseError, DeleteHorarioVariables>): UseDataConnectMutationResult<DeleteHorarioData, DeleteHorarioVariables>;
export function useDeleteHorario(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteHorarioData, FirebaseError, DeleteHorarioVariables>): UseDataConnectMutationResult<DeleteHorarioData, DeleteHorarioVariables>;

export function useListCursosEstadisticas(options?: useDataConnectQueryOptions<ListCursosEstadisticasData>): UseDataConnectQueryResult<ListCursosEstadisticasData, undefined>;
export function useListCursosEstadisticas(dc: DataConnect, options?: useDataConnectQueryOptions<ListCursosEstadisticasData>): UseDataConnectQueryResult<ListCursosEstadisticasData, undefined>;

export function useListHorariosEstadisticas(options?: useDataConnectQueryOptions<ListHorariosEstadisticasData>): UseDataConnectQueryResult<ListHorariosEstadisticasData, undefined>;
export function useListHorariosEstadisticas(dc: DataConnect, options?: useDataConnectQueryOptions<ListHorariosEstadisticasData>): UseDataConnectQueryResult<ListHorariosEstadisticasData, undefined>;

export function useListHorariosPorEstado(vars: ListHorariosPorEstadoVariables, options?: useDataConnectQueryOptions<ListHorariosPorEstadoData>): UseDataConnectQueryResult<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;
export function useListHorariosPorEstado(dc: DataConnect, vars: ListHorariosPorEstadoVariables, options?: useDataConnectQueryOptions<ListHorariosPorEstadoData>): UseDataConnectQueryResult<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;

export function useListInscripciones(options?: useDataConnectQueryOptions<ListInscripcionesData>): UseDataConnectQueryResult<ListInscripcionesData, undefined>;
export function useListInscripciones(dc: DataConnect, options?: useDataConnectQueryOptions<ListInscripcionesData>): UseDataConnectQueryResult<ListInscripcionesData, undefined>;

export function useListInscripcionesPorEstado(vars: ListInscripcionesPorEstadoVariables, options?: useDataConnectQueryOptions<ListInscripcionesPorEstadoData>): UseDataConnectQueryResult<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;
export function useListInscripcionesPorEstado(dc: DataConnect, vars: ListInscripcionesPorEstadoVariables, options?: useDataConnectQueryOptions<ListInscripcionesPorEstadoData>): UseDataConnectQueryResult<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;

export function useListAsistencias(options?: useDataConnectQueryOptions<ListAsistenciasData>): UseDataConnectQueryResult<ListAsistenciasData, undefined>;
export function useListAsistencias(dc: DataConnect, options?: useDataConnectQueryOptions<ListAsistenciasData>): UseDataConnectQueryResult<ListAsistenciasData, undefined>;

export function useListAsistenciasPorEstado(vars: ListAsistenciasPorEstadoVariables, options?: useDataConnectQueryOptions<ListAsistenciasPorEstadoData>): UseDataConnectQueryResult<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;
export function useListAsistenciasPorEstado(dc: DataConnect, vars: ListAsistenciasPorEstadoVariables, options?: useDataConnectQueryOptions<ListAsistenciasPorEstadoData>): UseDataConnectQueryResult<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;

export function useListReportesEstadisticas(options?: useDataConnectQueryOptions<ListReportesEstadisticasData>): UseDataConnectQueryResult<ListReportesEstadisticasData, undefined>;
export function useListReportesEstadisticas(dc: DataConnect, options?: useDataConnectQueryOptions<ListReportesEstadisticasData>): UseDataConnectQueryResult<ListReportesEstadisticasData, undefined>;

export function useListReportesPorPeriodo(vars: ListReportesPorPeriodoVariables, options?: useDataConnectQueryOptions<ListReportesPorPeriodoData>): UseDataConnectQueryResult<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;
export function useListReportesPorPeriodo(dc: DataConnect, vars: ListReportesPorPeriodoVariables, options?: useDataConnectQueryOptions<ListReportesPorPeriodoData>): UseDataConnectQueryResult<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;

export function useListReportesPorCurso(vars: ListReportesPorCursoVariables, options?: useDataConnectQueryOptions<ListReportesPorCursoData>): UseDataConnectQueryResult<ListReportesPorCursoData, ListReportesPorCursoVariables>;
export function useListReportesPorCurso(dc: DataConnect, vars: ListReportesPorCursoVariables, options?: useDataConnectQueryOptions<ListReportesPorCursoData>): UseDataConnectQueryResult<ListReportesPorCursoData, ListReportesPorCursoVariables>;

export function useGetCursoInternalId(vars: GetCursoInternalIdVariables, options?: useDataConnectQueryOptions<GetCursoInternalIdData>): UseDataConnectQueryResult<GetCursoInternalIdData, GetCursoInternalIdVariables>;
export function useGetCursoInternalId(dc: DataConnect, vars: GetCursoInternalIdVariables, options?: useDataConnectQueryOptions<GetCursoInternalIdData>): UseDataConnectQueryResult<GetCursoInternalIdData, GetCursoInternalIdVariables>;

export function useCreateReporteEstadistica(options?: useDataConnectMutationOptions<CreateReporteEstadisticaData, FirebaseError, CreateReporteEstadisticaVariables>): UseDataConnectMutationResult<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;
export function useCreateReporteEstadistica(dc: DataConnect, options?: useDataConnectMutationOptions<CreateReporteEstadisticaData, FirebaseError, CreateReporteEstadisticaVariables>): UseDataConnectMutationResult<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;

export function useUpdateReporteEstadistica(options?: useDataConnectMutationOptions<UpdateReporteEstadisticaData, FirebaseError, UpdateReporteEstadisticaVariables>): UseDataConnectMutationResult<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;
export function useUpdateReporteEstadistica(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateReporteEstadisticaData, FirebaseError, UpdateReporteEstadisticaVariables>): UseDataConnectMutationResult<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;

export function useGetInscripcionesByEstudiante(vars: GetInscripcionesByEstudianteVariables, options?: useDataConnectQueryOptions<GetInscripcionesByEstudianteData>): UseDataConnectQueryResult<GetInscripcionesByEstudianteData, GetInscripcionesByEstudianteVariables>;
export function useGetInscripcionesByEstudiante(dc: DataConnect, vars: GetInscripcionesByEstudianteVariables, options?: useDataConnectQueryOptions<GetInscripcionesByEstudianteData>): UseDataConnectQueryResult<GetInscripcionesByEstudianteData, GetInscripcionesByEstudianteVariables>;

export function useGetHorariosDisponibles(options?: useDataConnectQueryOptions<GetHorariosDisponiblesData>): UseDataConnectQueryResult<GetHorariosDisponiblesData, undefined>;
export function useGetHorariosDisponibles(dc: DataConnect, options?: useDataConnectQueryOptions<GetHorariosDisponiblesData>): UseDataConnectQueryResult<GetHorariosDisponiblesData, undefined>;

export function useInsscribirEstudiante(options?: useDataConnectMutationOptions<InsscribirEstudianteData, FirebaseError, InsscribirEstudianteVariables>): UseDataConnectMutationResult<InsscribirEstudianteData, InsscribirEstudianteVariables>;
export function useInsscribirEstudiante(dc: DataConnect, options?: useDataConnectMutationOptions<InsscribirEstudianteData, FirebaseError, InsscribirEstudianteVariables>): UseDataConnectMutationResult<InsscribirEstudianteData, InsscribirEstudianteVariables>;

export function useCancelarInscripcion(options?: useDataConnectMutationOptions<CancelarInscripcionData, FirebaseError, CancelarInscripcionVariables>): UseDataConnectMutationResult<CancelarInscripcionData, CancelarInscripcionVariables>;
export function useCancelarInscripcion(dc: DataConnect, options?: useDataConnectMutationOptions<CancelarInscripcionData, FirebaseError, CancelarInscripcionVariables>): UseDataConnectMutationResult<CancelarInscripcionData, CancelarInscripcionVariables>;

const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs, makeMemoryCacheProvider } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'upclass-78c13-service',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;
const dataConnectSettings = {
  cacheSettings: {
    cacheProvider: makeMemoryCacheProvider()
  }
};
exports.dataConnectSettings = dataConnectSettings;

const getUsuarioByCorreoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUsuarioByCorreo', inputVars);
}
getUsuarioByCorreoRef.operationName = 'GetUsuarioByCorreo';
exports.getUsuarioByCorreoRef = getUsuarioByCorreoRef;

exports.getUsuarioByCorreo = function getUsuarioByCorreo(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getUsuarioByCorreoRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listarEstudiantesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListarEstudiantes');
}
listarEstudiantesRef.operationName = 'ListarEstudiantes';
exports.listarEstudiantesRef = listarEstudiantesRef;

exports.listarEstudiantes = function listarEstudiantes(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listarEstudiantesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const crearEstudianteRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CrearEstudiante', inputVars);
}
crearEstudianteRef.operationName = 'CrearEstudiante';
exports.crearEstudianteRef = crearEstudianteRef;

exports.crearEstudiante = function crearEstudiante(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(crearEstudianteRef(dcInstance, inputVars));
}
;

const actualizarEstudianteRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ActualizarEstudiante', inputVars);
}
actualizarEstudianteRef.operationName = 'ActualizarEstudiante';
exports.actualizarEstudianteRef = actualizarEstudianteRef;

exports.actualizarEstudiante = function actualizarEstudiante(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(actualizarEstudianteRef(dcInstance, inputVars));
}
;

const actualizarEstudianteSinCorreoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ActualizarEstudianteSinCorreo', inputVars);
}
actualizarEstudianteSinCorreoRef.operationName = 'ActualizarEstudianteSinCorreo';
exports.actualizarEstudianteSinCorreoRef = actualizarEstudianteSinCorreoRef;

exports.actualizarEstudianteSinCorreo = function actualizarEstudianteSinCorreo(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(actualizarEstudianteSinCorreoRef(dcInstance, inputVars));
}
;

const actualizarPasswordUsuarioRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ActualizarPasswordUsuario', inputVars);
}
actualizarPasswordUsuarioRef.operationName = 'ActualizarPasswordUsuario';
exports.actualizarPasswordUsuarioRef = actualizarPasswordUsuarioRef;

exports.actualizarPasswordUsuario = function actualizarPasswordUsuario(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(actualizarPasswordUsuarioRef(dcInstance, inputVars));
}
;

const eliminarEstudianteRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'EliminarEstudiante', inputVars);
}
eliminarEstudianteRef.operationName = 'EliminarEstudiante';
exports.eliminarEstudianteRef = eliminarEstudianteRef;

exports.eliminarEstudiante = function eliminarEstudiante(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(eliminarEstudianteRef(dcInstance, inputVars));
}
;

const listInstructorsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListInstructors');
}
listInstructorsRef.operationName = 'ListInstructors';
exports.listInstructorsRef = listInstructorsRef;

exports.listInstructors = function listInstructors(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listInstructorsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getRolByNumeroRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRolByNumero', inputVars);
}
getRolByNumeroRef.operationName = 'GetRolByNumero';
exports.getRolByNumeroRef = getRolByNumeroRef;

exports.getRolByNumero = function getRolByNumero(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getRolByNumeroRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createInstructorRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInstructor', inputVars);
}
createInstructorRef.operationName = 'CreateInstructor';
exports.createInstructorRef = createInstructorRef;

exports.createInstructor = function createInstructor(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createInstructorRef(dcInstance, inputVars));
}
;

const updateInstructorRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateInstructor', inputVars);
}
updateInstructorRef.operationName = 'UpdateInstructor';
exports.updateInstructorRef = updateInstructorRef;

exports.updateInstructor = function updateInstructor(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateInstructorRef(dcInstance, inputVars));
}
;

const deleteInstructorRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteInstructor', inputVars);
}
deleteInstructorRef.operationName = 'DeleteInstructor';
exports.deleteInstructorRef = deleteInstructorRef;

exports.deleteInstructor = function deleteInstructor(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteInstructorRef(dcInstance, inputVars));
}
;

const listCursosRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCursos');
}
listCursosRef.operationName = 'ListCursos';
exports.listCursosRef = listCursosRef;

exports.listCursos = function listCursos(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listCursosRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const buscarCursoPorNombreRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'BuscarCursoPorNombre', inputVars);
}
buscarCursoPorNombreRef.operationName = 'BuscarCursoPorNombre';
exports.buscarCursoPorNombreRef = buscarCursoPorNombreRef;

exports.buscarCursoPorNombre = function buscarCursoPorNombre(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(buscarCursoPorNombreRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const cursosPorCategoriaRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'CursosPorCategoria', inputVars);
}
cursosPorCategoriaRef.operationName = 'CursosPorCategoria';
exports.cursosPorCategoriaRef = cursosPorCategoriaRef;

exports.cursosPorCategoria = function cursosPorCategoria(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(cursosPorCategoriaRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const cursosPorEstadoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'CursosPorEstado', inputVars);
}
cursosPorEstadoRef.operationName = 'CursosPorEstado';
exports.cursosPorEstadoRef = cursosPorEstadoRef;

exports.cursosPorEstado = function cursosPorEstado(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(cursosPorEstadoRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createCursoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCurso', inputVars);
}
createCursoRef.operationName = 'CreateCurso';
exports.createCursoRef = createCursoRef;

exports.createCurso = function createCurso(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createCursoRef(dcInstance, inputVars));
}
;

const updateCursoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateCurso', inputVars);
}
updateCursoRef.operationName = 'UpdateCurso';
exports.updateCursoRef = updateCursoRef;

exports.updateCurso = function updateCurso(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateCursoRef(dcInstance, inputVars));
}
;

const deleteCursoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteCurso', inputVars);
}
deleteCursoRef.operationName = 'DeleteCurso';
exports.deleteCursoRef = deleteCursoRef;

exports.deleteCurso = function deleteCurso(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteCursoRef(dcInstance, inputVars));
}
;

const listHorariosRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListHorarios');
}
listHorariosRef.operationName = 'ListHorarios';
exports.listHorariosRef = listHorariosRef;

exports.listHorarios = function listHorarios(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listHorariosRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const buscarHorarioPorCursoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'BuscarHorarioPorCurso', inputVars);
}
buscarHorarioPorCursoRef.operationName = 'BuscarHorarioPorCurso';
exports.buscarHorarioPorCursoRef = buscarHorarioPorCursoRef;

exports.buscarHorarioPorCurso = function buscarHorarioPorCurso(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(buscarHorarioPorCursoRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const horariosPorDiaRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'HorariosPorDia', inputVars);
}
horariosPorDiaRef.operationName = 'HorariosPorDia';
exports.horariosPorDiaRef = horariosPorDiaRef;

exports.horariosPorDia = function horariosPorDia(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(horariosPorDiaRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const horariosPorEstadoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'HorariosPorEstado', inputVars);
}
horariosPorEstadoRef.operationName = 'HorariosPorEstado';
exports.horariosPorEstadoRef = horariosPorEstadoRef;

exports.horariosPorEstado = function horariosPorEstado(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(horariosPorEstadoRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listInscripcionesActivasRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListInscripcionesActivas');
}
listInscripcionesActivasRef.operationName = 'ListInscripcionesActivas';
exports.listInscripcionesActivasRef = listInscripcionesActivasRef;

exports.listInscripcionesActivas = function listInscripcionesActivas(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listInscripcionesActivasRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createHorarioRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateHorario', inputVars);
}
createHorarioRef.operationName = 'CreateHorario';
exports.createHorarioRef = createHorarioRef;

exports.createHorario = function createHorario(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createHorarioRef(dcInstance, inputVars));
}
;

const updateHorarioRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateHorario', inputVars);
}
updateHorarioRef.operationName = 'UpdateHorario';
exports.updateHorarioRef = updateHorarioRef;

exports.updateHorario = function updateHorario(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateHorarioRef(dcInstance, inputVars));
}
;

const deleteHorarioRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteHorario', inputVars);
}
deleteHorarioRef.operationName = 'DeleteHorario';
exports.deleteHorarioRef = deleteHorarioRef;

exports.deleteHorario = function deleteHorario(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteHorarioRef(dcInstance, inputVars));
}
;

const listCursosEstadisticasRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCursosEstadisticas');
}
listCursosEstadisticasRef.operationName = 'ListCursosEstadisticas';
exports.listCursosEstadisticasRef = listCursosEstadisticasRef;

exports.listCursosEstadisticas = function listCursosEstadisticas(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listCursosEstadisticasRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listHorariosEstadisticasRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListHorariosEstadisticas');
}
listHorariosEstadisticasRef.operationName = 'ListHorariosEstadisticas';
exports.listHorariosEstadisticasRef = listHorariosEstadisticasRef;

exports.listHorariosEstadisticas = function listHorariosEstadisticas(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listHorariosEstadisticasRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listHorariosPorEstadoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListHorariosPorEstado', inputVars);
}
listHorariosPorEstadoRef.operationName = 'ListHorariosPorEstado';
exports.listHorariosPorEstadoRef = listHorariosPorEstadoRef;

exports.listHorariosPorEstado = function listHorariosPorEstado(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listHorariosPorEstadoRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listInscripcionesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListInscripciones');
}
listInscripcionesRef.operationName = 'ListInscripciones';
exports.listInscripcionesRef = listInscripcionesRef;

exports.listInscripciones = function listInscripciones(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listInscripcionesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listInscripcionesPorEstadoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListInscripcionesPorEstado', inputVars);
}
listInscripcionesPorEstadoRef.operationName = 'ListInscripcionesPorEstado';
exports.listInscripcionesPorEstadoRef = listInscripcionesPorEstadoRef;

exports.listInscripcionesPorEstado = function listInscripcionesPorEstado(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listInscripcionesPorEstadoRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listAsistenciasRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAsistencias');
}
listAsistenciasRef.operationName = 'ListAsistencias';
exports.listAsistenciasRef = listAsistenciasRef;

exports.listAsistencias = function listAsistencias(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listAsistenciasRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listAsistenciasPorEstadoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAsistenciasPorEstado', inputVars);
}
listAsistenciasPorEstadoRef.operationName = 'ListAsistenciasPorEstado';
exports.listAsistenciasPorEstadoRef = listAsistenciasPorEstadoRef;

exports.listAsistenciasPorEstado = function listAsistenciasPorEstado(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listAsistenciasPorEstadoRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listReportesEstadisticasRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListReportesEstadisticas');
}
listReportesEstadisticasRef.operationName = 'ListReportesEstadisticas';
exports.listReportesEstadisticasRef = listReportesEstadisticasRef;

exports.listReportesEstadisticas = function listReportesEstadisticas(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listReportesEstadisticasRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listReportesPorPeriodoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListReportesPorPeriodo', inputVars);
}
listReportesPorPeriodoRef.operationName = 'ListReportesPorPeriodo';
exports.listReportesPorPeriodoRef = listReportesPorPeriodoRef;

exports.listReportesPorPeriodo = function listReportesPorPeriodo(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listReportesPorPeriodoRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listReportesPorCursoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListReportesPorCurso', inputVars);
}
listReportesPorCursoRef.operationName = 'ListReportesPorCurso';
exports.listReportesPorCursoRef = listReportesPorCursoRef;

exports.listReportesPorCurso = function listReportesPorCurso(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listReportesPorCursoRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getCursoInternalIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCursoInternalId', inputVars);
}
getCursoInternalIdRef.operationName = 'GetCursoInternalId';
exports.getCursoInternalIdRef = getCursoInternalIdRef;

exports.getCursoInternalId = function getCursoInternalId(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getCursoInternalIdRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createReporteEstadisticaRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateReporteEstadistica', inputVars);
}
createReporteEstadisticaRef.operationName = 'CreateReporteEstadistica';
exports.createReporteEstadisticaRef = createReporteEstadisticaRef;

exports.createReporteEstadistica = function createReporteEstadistica(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createReporteEstadisticaRef(dcInstance, inputVars));
}
;

const updateReporteEstadisticaRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateReporteEstadistica', inputVars);
}
updateReporteEstadisticaRef.operationName = 'UpdateReporteEstadistica';
exports.updateReporteEstadisticaRef = updateReporteEstadisticaRef;

exports.updateReporteEstadistica = function updateReporteEstadistica(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateReporteEstadisticaRef(dcInstance, inputVars));
}
;

const getInscripcionesByEstudianteRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetInscripcionesByEstudiante', inputVars);
}
getInscripcionesByEstudianteRef.operationName = 'GetInscripcionesByEstudiante';
exports.getInscripcionesByEstudianteRef = getInscripcionesByEstudianteRef;

exports.getInscripcionesByEstudiante = function getInscripcionesByEstudiante(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getInscripcionesByEstudianteRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getHorariosDisponiblesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetHorariosDisponibles');
}
getHorariosDisponiblesRef.operationName = 'GetHorariosDisponibles';
exports.getHorariosDisponiblesRef = getHorariosDisponiblesRef;

exports.getHorariosDisponibles = function getHorariosDisponibles(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getHorariosDisponiblesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const insscribirEstudianteRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsscribirEstudiante', inputVars);
}
insscribirEstudianteRef.operationName = 'InsscribirEstudiante';
exports.insscribirEstudianteRef = insscribirEstudianteRef;

exports.insscribirEstudiante = function insscribirEstudiante(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(insscribirEstudianteRef(dcInstance, inputVars));
}
;

const cancelarInscripcionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CancelarInscripcion', inputVars);
}
cancelarInscripcionRef.operationName = 'CancelarInscripcion';
exports.cancelarInscripcionRef = cancelarInscripcionRef;

exports.cancelarInscripcion = function cancelarInscripcion(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(cancelarInscripcionRef(dcInstance, inputVars));
}
;

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

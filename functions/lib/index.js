"use strict";
/**
 * functions/src/index.ts
 * Cloud Function programada — genera ReporteEstadistica cada 24 horas
 * leyendo datos reales de Inscripcion y Asistencia en Data Connect.
 *
 * Disparo: todos los días a las 2:00 AM hora de Ciudad de México
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarReporteDiario = void 0;
const scheduler_1 = require("firebase-functions/v2/scheduler");
const v2_1 = require("firebase-functions/v2");
const app_1 = require("firebase-admin/app");
(0, app_1.initializeApp)();
// ─── Configuración ────────────────────────────────────────────────────────────
const PROJECT_ID = "upclass-78c13";
const LOCATION = "us-east4";
const SERVICE_ID = "upclass-78c13-service";
const CONNECTOR = "example";
const DATA_CONNECT_URL = `https://firebasedataconnect.googleapis.com/v1/projects/${PROJECT_ID}` +
    `/locations/${LOCATION}/services/${SERVICE_ID}/connectors/${CONNECTOR}:executeQuery`;
const DATA_CONNECT_MUTATION_URL = `https://firebasedataconnect.googleapis.com/v1/projects/${PROJECT_ID}` +
    `/locations/${LOCATION}/services/${SERVICE_ID}/connectors/${CONNECTOR}:executeMutation`;
// ─── Helper: obtener token de acceso del servidor ─────────────────────────────
async function getAccessToken() {
    var _a;
    const { GoogleAuth } = await import("google-auth-library");
    const auth = new GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    });
    const client = await auth.getClient();
    const token = await client.getAccessToken();
    return (_a = token.token) !== null && _a !== void 0 ? _a : "";
}
// ─── Helper: ejecutar query GraphQL ──────────────────────────────────────────
async function gqlQuery(token, operationName, variables = {}) {
    var _a;
    const res = await fetch(DATA_CONNECT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ operationName, variables }),
    });
    const json = await res.json();
    if ((_a = json.errors) === null || _a === void 0 ? void 0 : _a.length)
        throw new Error(JSON.stringify(json.errors));
    return json.data;
}
// ─── Helper: ejecutar mutation GraphQL ───────────────────────────────────────
async function gqlMutation(token, operationName, variables = {}) {
    var _a;
    const res = await fetch(DATA_CONNECT_MUTATION_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ operationName, variables }),
    });
    const json = await res.json();
    if ((_a = json.errors) === null || _a === void 0 ? void 0 : _a.length)
        throw new Error(JSON.stringify(json.errors));
}
// ─── Helper: calcular periodo actual (ej: "2026-Q2") ─────────────────────────
function getPeriodoActual() {
    const now = new Date();
    const anio = now.getFullYear();
    const mes = now.getMonth() + 1; // 1-12
    const q = mes <= 3 ? "Q1" : mes <= 6 ? "Q2" : mes <= 9 ? "Q3" : "Q4";
    return `${anio}-${q}`;
}
// ─── Helper: obtener el inicio del trimestre actual ───────────────────────────
function getInicioTrimestre() {
    const now = new Date();
    const mes = now.getMonth(); // 0-11
    const q = Math.floor(mes / 3); // 0,1,2,3
    return new Date(now.getFullYear(), q * 3, 1);
}
// ─── Función principal ────────────────────────────────────────────────────────
exports.generarReporteDiario = (0, scheduler_1.onSchedule)({
    schedule: "0 2 * * *", // Todos los días a las 2:00 AM
    timeZone: "America/Mexico_City",
    region: "us-central1",
    memory: "256MiB",
    timeoutSeconds: 120,
}, async () => {
    v2_1.logger.info("▶ Iniciando generación de reportes de estadísticas...");
    try {
        const token = await getAccessToken();
        const periodo = getPeriodoActual();
        const inicioTrimestre = getInicioTrimestre();
        v2_1.logger.info(`Periodo calculado: ${periodo}`);
        // ── 1. Obtener todos los cursos ────────────────────────────────────────
        const cursosData = await gqlQuery(token, "ListCursos");
        const cursos = cursosData.cursos;
        v2_1.logger.info(`Cursos encontrados: ${cursos.length}`);
        if (cursos.length === 0) {
            v2_1.logger.warn("No hay cursos, abortando.");
            return;
        }
        // ── 2. Obtener todas las inscripciones del trimestre actual ────────────
        const inscripcionesData = await gqlQuery(token, "ListInscripciones");
        const todasInscripciones = inscripcionesData.inscripcions.filter((i) => {
            const fecha = new Date(i.fechaInscripcion);
            return fecha >= inicioTrimestre;
        });
        // ── 3. Obtener todas las asistencias del trimestre ─────────────────────
        const asistenciasData = await gqlQuery(token, "ListAsistencias");
        const todasAsistencias = asistenciasData.asistencias;
        // ── 4. Obtener reportes ya existentes para este periodo ────────────────
        const reportesData = await gqlQuery(token, "ListReportesPorPeriodo", { periodo });
        const reportesExistentes = reportesData.reporteEstadisticas;
        // ── 5. Calcular y upsert reporte por cada curso ────────────────────────
        let creados = 0;
        let actualizados = 0;
        // Necesitamos un reporteId único — usamos el máximo existente + 1
        const maxReporteId = reportesExistentes.length > 0
            ? Math.max(...reportesExistentes.map((r) => r.reporteId))
            : 0;
        let nextReporteId = maxReporteId + 1;
        for (const curso of cursos) {
            // Inscripciones activas de este curso en el periodo
            const inscripcionesCurso = todasInscripciones.filter((i) => i.horario.curso.cursoId === curso.cursoId);
            const totalInscritos = inscripcionesCurso.filter((i) => i.estadoInscripcion === "activa").length;
            const totalBajas = inscripcionesCurso.filter((i) => i.estadoInscripcion === "baja").length;
            // Asistencias de este curso (usando materiaId = cursoId como proxy)
            const asistenciasCurso = todasAsistencias.filter((a) => a.materiaId === curso.cursoId);
            const presentes = asistenciasCurso.filter((a) => a.estadoAsistencia === "presente").length;
            const porcentajeAsistencia = asistenciasCurso.length > 0
                ? Math.round((presentes / asistenciasCurso.length) * 100 * 10) / 10
                : 0;
            // Buscar si ya existe un reporte para este curso + periodo
            const reporteExistente = reportesExistentes.find((r) => r.curso.cursoId === curso.cursoId);
            if (reporteExistente) {
                // Actualizar reporte existente
                await gqlMutation(token, "UpdateReporteEstadistica", {
                    reporteInternalId: reporteExistente.id,
                    totalInscritos,
                    totalBajas,
                    porcentajeAsistencia,
                    calificacionPromedio: null,
                    ingresosGenerados: null,
                });
                actualizados++;
                v2_1.logger.info(`✓ Actualizado: ${curso.nombre} (${periodo})`);
            }
            else {
                // Crear nuevo reporte
                await gqlMutation(token, "CreateReporteEstadistica", {
                    reporteId: nextReporteId++,
                    cursoInternalId: curso.id,
                    periodoAnio: periodo,
                    totalInscritos,
                    totalBajas,
                    porcentajeAsistencia,
                    calificacionPromedio: null,
                    ingresosGenerados: null,
                });
                creados++;
                v2_1.logger.info(`✓ Creado: ${curso.nombre} (${periodo})`);
            }
        }
        v2_1.logger.info(`✅ Reportes generados — Creados: ${creados}, Actualizados: ${actualizados}`);
    }
    catch (err) {
        v2_1.logger.error("❌ Error generando reportes:", err);
        throw err;
    }
});
//# sourceMappingURL=index.js.map
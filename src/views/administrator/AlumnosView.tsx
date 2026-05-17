import { useState } from "react";

interface Alumno {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    clase: string;
    instructor: string;
    asistencia: number;
    estado: "Al día" | "Irregular" | "Inactivo";
}

const ALUMNOS_DATA: Alumno[] = [
    { id: 1, nombre: "Valeria Ríos", email: "valeria@gmail.com", telefono: "55 1111 2222", clase: "Yoga matutino", instructor: "Carla Reyes", asistencia: 92, estado: "Al día" },
    { id: 2, nombre: "Marco Soto", email: "marco@gmail.com", telefono: "55 2222 3333", clase: "Inglés intermedio", instructor: "Pedro Mora", asistencia: 75, estado: "Al día" },
    { id: 3, nombre: "Diana Núñez", email: "diana@gmail.com", telefono: "55 3333 4444", clase: "Piano nivel 1", instructor: "Sofía Leal", asistencia: 55, estado: "Irregular" },
    { id: 4, nombre: "Héctor Vega", email: "hector@gmail.com", telefono: "55 4444 5555", clase: "Matemáticas avanzadas", instructor: "Andrés Gil", asistencia: 88, estado: "Al día" },
    { id: 5, nombre: "Fernanda López", email: "fernanda@gmail.com", telefono: "55 5555 6666", clase: "Dibujo y pintura", instructor: "Luisa Fox", asistencia: 40, estado: "Irregular" },
    { id: 6, nombre: "Rodrigo Peña", email: "rodrigo@gmail.com", telefono: "55 6666 7777", clase: "Guitarra básica", instructor: "Marco Soto", asistencia: 95, estado: "Al día" },
    { id: 7, nombre: "Camila Torres", email: "camila@gmail.com", telefono: "55 7777 8888", clase: "Inglés intermedio", instructor: "Pedro Mora", asistencia: 20, estado: "Inactivo" },
    { id: 8, nombre: "Sebastián Cruz", email: "sebas@gmail.com", telefono: "55 8888 9999", clase: "Yoga matutino", instructor: "Carla Reyes", asistencia: 80, estado: "Al día" },
];

const ESTADO_STYLES: Record<Alumno["estado"], { bg: string; color: string }> = {
    "Al día": { bg: "#E8F4DC", color: "#2E6B0E" },
    "Irregular": { bg: "#FDF0DA", color: "#7A4A00" },
    "Inactivo": { bg: "#F0F0EE", color: "#555" },
};

export default function AlumnosView() {
    const [search, setSearch] = useState("");
    const [perPage, setPerPage] = useState(5);
    const [page, setPage] = useState(1);

    const filtered = ALUMNOS_DATA.filter((a) =>
        a.nombre.toLowerCase().includes(search.toLowerCase()) ||
        a.clase.toLowerCase().includes(search.toLowerCase()) ||
        a.instructor.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / perPage);
    const paginated = filtered.slice((page - 1) * perPage, page * perPage);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const handlePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPerPage(Number(e.target.value));
        setPage(1);
    };

    return (
        <>
            <div className="ucv-clases-wrap">

                {/* Header */}
                <div className="ucv-clases-header">
                    <div>
                        <div className="ucv-clases-header__title">Alumnos registrados</div>
                        <div className="ucv-clases-header__sub">{ALUMNOS_DATA.length} alumnos en total</div>
                    </div>
                </div>

                {/* Controles */}
                <div className="ucv-table-controls">
                    <div className="ucv-table-controls__left">
                        Mostrar
                        <select className="ucv-select" value={perPage} onChange={handlePerPage}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                        </select>
                        entradas
                    </div>

                    <div className="ucv-search-wrap">
                        <i className="ti ti-search" aria-hidden="true" />
                        <input
                            className="ucv-search-input"
                            type="text"
                            placeholder="Buscar..."
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {/* Tabla */}
                <div className="ucv-table-card">
                    <div className="ucv-table-scroll">
                        <table className="ucv-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th className="ucv-th--sortable">Alumno</th>
                                    <th>Contacto</th>
                                    <th className="ucv-th--sortable">Clase</th>
                                    <th>Instructor</th>
                                    <th className="ucv-th--sortable">Asistencia</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginated.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} style={{ textAlign: "center", color: "#aaa", padding: "32px" }}>
                                            No se encontraron alumnos.
                                        </td>
                                    </tr>
                                ) : (
                                    paginated.map((alumno) => (
                                        <tr key={alumno.id}>
                                            <td style={{ color: "#aaa", fontSize: 12 }}>{alumno.id}</td>
                                            <td>
                                                <div className="ucv-clase-name">{alumno.nombre}</div>
                                                <div className="ucv-clase-salon">{alumno.email}</div>
                                            </td>
                                            <td>
                                                <div className="ucv-clase-salon">{alumno.telefono}</div>
                                            </td>
                                            <td>
                                                <div className="ucv-clase-name">{alumno.clase}</div>
                                            </td>
                                            <td>{alumno.instructor}</td>
                                            <td>
                                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                                    <div style={{ flex: 1, height: 5, background: "#F0F0EE", borderRadius: 20, overflow: "hidden", minWidth: 60 }}>
                                                        <div style={{
                                                            height: "100%",
                                                            borderRadius: 20,
                                                            width: `${alumno.asistencia}%`,
                                                            background: alumno.asistencia >= 80 ? "#1D9E75" : alumno.asistencia >= 50 ? "#EF9F27" : "#D85A30"
                                                        }} />
                                                    </div>
                                                    <span style={{ fontSize: 11, color: "#888", minWidth: 28 }}>{alumno.asistencia}%</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span
                                                    className="ucv-badge"
                                                    style={{
                                                        background: ESTADO_STYLES[alumno.estado].bg,
                                                        color: ESTADO_STYLES[alumno.estado].color,
                                                    }}
                                                >
                                                    {alumno.estado}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer con paginación */}
                    <div className="ucv-table-footer">
                        <span className="ucv-table-footer__info">
                            Mostrando {filtered.length === 0 ? 0 : (page - 1) * perPage + 1} a{" "}
                            {Math.min(page * perPage, filtered.length)} de {filtered.length} entradas
                        </span>
                        <div className="ucv-pagination">
                            <button
                                className="ucv-page-btn"
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                            >
                                Anterior
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                <button
                                    key={p}
                                    className={`ucv-page-btn${page === p ? " ucv-page-btn--active" : ""}`}
                                    onClick={() => setPage(p)}
                                >
                                    {p}
                                </button>
                            ))}
                            <button
                                className="ucv-page-btn"
                                onClick={() => setPage(page + 1)}
                                disabled={page === totalPages || totalPages === 0}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
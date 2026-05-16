import { useState } from "react";

interface Instructor {
    id: number;
    nombre: string;
    especialidad: string;
    email: string;
    telefono: string;
    alumnos: number;
    clases: number;
    estado: "Activo" | "Inactivo" | "Vacaciones";
}

const INSTRUCTORES_DATA: Instructor[] = [
    { id: 1, nombre: "Carla Reyes", especialidad: "Yoga · Meditación", email: "carla@upclass.mx", telefono: "55 1234 5678", alumnos: 14, clases: 3, estado: "Activo" },
    { id: 2, nombre: "Pedro Mora", especialidad: "Inglés · Francés", email: "pedro@upclass.mx", telefono: "55 2345 6789", alumnos: 35, clases: 4, estado: "Activo" },
    { id: 3, nombre: "Sofía Leal", especialidad: "Piano · Música", email: "sofia@upclass.mx", telefono: "55 3456 7890", alumnos: 8, clases: 2, estado: "Vacaciones" },
    { id: 4, nombre: "Andrés Gil", especialidad: "Matemáticas", email: "andres@upclass.mx", telefono: "55 4567 8901", alumnos: 18, clases: 5, estado: "Activo" },
    { id: 5, nombre: "Luisa Fox", especialidad: "Arte · Diseño", email: "luisa@upclass.mx", telefono: "55 5678 9012", alumnos: 12, clases: 3, estado: "Inactivo" },
    { id: 6, nombre: "Marco Soto", especialidad: "Guitarra · Música", email: "marco@upclass.mx", telefono: "55 6789 0123", alumnos: 9, clases: 2, estado: "Activo" },
    { id: 7, nombre: "Diana Núñez", especialidad: "Danza · Expresión", email: "diana@upclass.mx", telefono: "55 7890 1234", alumnos: 11, clases: 2, estado: "Activo" },
];

const ESTADO_STYLES: Record<Instructor["estado"], { bg: string; color: string }> = {
    Activo: { bg: "#E8F4DC", color: "#2E6B0E" },
    Inactivo: { bg: "#F0F0EE", color: "#555" },
    Vacaciones: { bg: "#FDF0DA", color: "#7A4A00" },
};

export default function InstructoresView() {
    const [search, setSearch] = useState("");
    const [perPage, setPerPage] = useState(5);
    const [page, setPage] = useState(1);

    const filtered = INSTRUCTORES_DATA.filter((i) =>
        i.nombre.toLowerCase().includes(search.toLowerCase()) ||
        i.especialidad.toLowerCase().includes(search.toLowerCase()) ||
        i.email.toLowerCase().includes(search.toLowerCase())
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
                        <div className="ucv-clases-header__title">Instructores registrados</div>
                        <div className="ucv-clases-header__sub">{INSTRUCTORES_DATA.length} instructores en total</div>
                    </div>
                    <button className="ucv-btn-add">
                        <i className="ti ti-plus" aria-hidden="true" />
                        Agregar instructor
                    </button>
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
                                    <th className="ucv-th--sortable">Instructor</th>
                                    <th>Especialidad</th>
                                    <th>Contacto</th>
                                    <th className="ucv-th--sortable">Alumnos</th>
                                    <th className="ucv-th--sortable">Clases</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginated.length === 0 ? (
                                    <tr>
                                        <td colSpan={8} style={{ textAlign: "center", color: "#aaa", padding: "32px" }}>
                                            No se encontraron instructores.
                                        </td>
                                    </tr>
                                ) : (
                                    paginated.map((inst) => (
                                        <tr key={inst.id}>
                                            <td style={{ color: "#aaa", fontSize: 12 }}>{inst.id}</td>
                                            <td>
                                                <div className="ucv-clase-name">{inst.nombre}</div>
                                            </td>
                                            <td>
                                                <div className="ucv-clase-salon">{inst.especialidad}</div>
                                            </td>
                                            <td>
                                                <div className="ucv-clase-name" style={{ fontSize: 12 }}>{inst.email}</div>
                                                <div className="ucv-clase-salon">{inst.telefono}</div>
                                            </td>
                                            <td>{inst.alumnos}</td>
                                            <td>{inst.clases}</td>
                                            <td>
                                                <span
                                                    className="ucv-badge"
                                                    style={{
                                                        background: ESTADO_STYLES[inst.estado].bg,
                                                        color: ESTADO_STYLES[inst.estado].color,
                                                    }}
                                                >
                                                    {inst.estado}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="ucv-actions">
                                                    <button className="ucv-action-btn ucv-action-btn--edit" title="Editar">
                                                        <i className="ti ti-pencil" aria-hidden="true" />
                                                    </button>
                                                    <button className="ucv-action-btn ucv-action-btn--delete" title="Eliminar">
                                                        <i className="ti ti-trash" aria-hidden="true" />
                                                    </button>
                                                    <button className="ucv-action-btn ucv-action-btn--toggle" title="Activar / Desactivar">
                                                        <i className="ti ti-refresh" aria-hidden="true" />
                                                    </button>
                                                </div>
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
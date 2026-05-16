import { useState } from "react";

interface Clase {
    id: number;
    nombre: string;
    instructor: string;
    salon: string;
    horario: string;
    dias: string;
    alumnos: number;
    estado: "Activa" | "Pausada" | "Finalizada";
}

const CLASES_DATA: Clase[] = [
    { id: 1, nombre: "Yoga matutino", instructor: "Carla Reyes", salon: "Salón A", horario: "07:00 - 08:00", dias: "Lun, Mié, Vie", alumnos: 14, estado: "Activa" },
    { id: 2, nombre: "Inglés intermedio", instructor: "Pedro Mora", salon: "Salón B", horario: "09:00 - 10:30", dias: "Mar, Jue", alumnos: 20, estado: "Activa" },
    { id: 3, nombre: "Piano nivel 1", instructor: "Sofía Leal", salon: "Aula C", horario: "11:00 - 12:00", dias: "Lun, Vie", alumnos: 8, estado: "Activa" },
    { id: 4, nombre: "Matemáticas avanzadas", instructor: "Andrés Gil", salon: "Salón A", horario: "13:00 - 14:30", dias: "Lun a Vie", alumnos: 18, estado: "Activa" },
    { id: 5, nombre: "Dibujo y pintura", instructor: "Luisa Fox", salon: "Taller D", horario: "16:00 - 17:30", dias: "Mar, Jue, Sáb", alumnos: 12, estado: "Pausada" },
    { id: 6, nombre: "Guitarra básica", instructor: "Marco Soto", salon: "Aula C", horario: "18:00 - 19:00", dias: "Mié, Vie", alumnos: 9, estado: "Activa" },
    { id: 7, nombre: "Francés nivel 2", instructor: "Pedro Mora", salon: "Salón B", horario: "10:00 - 11:30", dias: "Lun, Mié", alumnos: 15, estado: "Finalizada" },
];

const ESTADO_STYLES: Record<Clase["estado"], { bg: string; color: string }> = {
    Activa: { bg: "#E8F4DC", color: "#2E6B0E" },
    Pausada: { bg: "#FDF0DA", color: "#7A4A00" },
    Finalizada: { bg: "#F0F0EE", color: "#555" },
};

export default function ClasesView() {
    const [search, setSearch] = useState("");
    const [perPage, setPerPage] = useState(5);
    const [page, setPage] = useState(1);

    const filtered = CLASES_DATA.filter((c) =>
        c.nombre.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase()) ||
        c.salon.toLowerCase().includes(search.toLowerCase())
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
                        <div className="ucv-clases-header__title">Clases registradas</div>
                        <div className="ucv-clases-header__sub">{CLASES_DATA.length} clases en total</div>
                    </div>
                    <button className="ucv-btn-add">
                        <i className="ti ti-plus" aria-hidden="true" />
                        Agregar clase
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
                                    <th className="ucv-th--sortable">Clase</th>
                                    <th className="ucv-th--sortable">Instructor</th>
                                    <th>Horario</th>
                                    <th>Días</th>
                                    <th className="ucv-th--sortable">Alumnos</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginated.length === 0 ? (
                                    <tr>
                                        <td colSpan={8} style={{ textAlign: "center", color: "#aaa", padding: "32px" }}>
                                            No se encontraron clases.
                                        </td>
                                    </tr>
                                ) : (
                                    paginated.map((clase) => (
                                        <tr key={clase.id}>
                                            <td style={{ color: "#aaa", fontSize: 12 }}>{clase.id}</td>
                                            <td>
                                                <div className="ucv-clase-name">{clase.nombre}</div>
                                                <div className="ucv-clase-salon">{clase.salon}</div>
                                            </td>
                                            <td>{clase.instructor}</td>
                                            <td>{clase.horario}</td>
                                            <td>{clase.dias}</td>
                                            <td>{clase.alumnos}</td>
                                            <td>
                                                <span
                                                    className="ucv-badge"
                                                    style={{
                                                        background: ESTADO_STYLES[clase.estado].bg,
                                                        color: ESTADO_STYLES[clase.estado].color,
                                                    }}
                                                >
                                                    {clase.estado}
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
                                                    <button className="ucv-action-btn ucv-action-btn--toggle" title="Pausar / Activar">
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
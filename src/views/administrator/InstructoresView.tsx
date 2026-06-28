/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import {
    listInstructors,
    getRolByNumero,
    createInstructor,
    updateInstructor,
    deleteInstructor
} from "../../dataconnect-generated";

interface Instructor {
    id: string;
    instructorId: number;
    usuarioInternalId: string;
    usuarioId: string;
    nombre: string;
    especialidad: string;
    email: string;
    telefono: string;
    alumnos: number;
    clases: number;
    estado: "Activo" | "Inactivo";
}

const ESTADO_STYLES: Record<Instructor["estado"], { bg: string; color: string }> = {
    Activo: { bg: "#E8F4DC", color: "#2E6B0E" },
    Inactivo: { bg: "#F0F0EE", color: "#555" },
};

export default function InstructoresView() {
    const [instructores, setInstructores] = useState<Instructor[]>([]);
    const [search, setSearch] = useState("");
    const [perPage, setPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState<Instructor | null>(null);

    const [nombre, setNombre] = useState("");
    const [especialidad, setEspecialidad] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [activo, setActivo] = useState(true);

    const inputStyle: React.CSSProperties = {
        width: "100%",
        border: "1px solid #D1D5DB",
        borderRadius: 8,
        padding: "10px 12px",
        fontSize: 14,
        outline: "none",
        boxSizing: "border-box"
    };

    const labelStyle: React.CSSProperties = {
        fontSize: 13,
        fontWeight: 600,
        color: "#374151"
    };

    const cargarInstructores = async () => {
        setLoading(true);
        try {
            const res = await listInstructors();

            const data = ((res.data as any)?.instructors || []).map((inst: any) => ({
                id: inst.id,
                instructorId: inst.instructorId,
                usuarioInternalId: inst.usuario?.id || inst.usuarioId,
                usuarioId: inst.usuario?.usuarioId || "",
                nombre: inst.usuario?.nombreCompleto || "Sin nombre",
                especialidad: inst.especialidad || "",
                email: inst.usuario?.correo || "",
                telefono: inst.usuario?.telefono || "",
                alumnos: 0,
                clases: 0,
                estado: inst.usuario?.activo ? "Activo" : "Inactivo",
            }));

            setInstructores(data);
        } catch (error) {
            console.error("Error al cargar instructores:", error);
            alert("Error al cargar instructores.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarInstructores();
    }, []);

    const limpiarFormulario = () => {
        setEditing(null);
        setNombre("");
        setEspecialidad("");
        setEmail("");
        setTelefono("");
        setPassword("");
        setActivo(true);
    };

    const abrirNuevo = () => {
        limpiarFormulario();
        setModalOpen(true);
    };

    const abrirEditar = (inst: Instructor) => {
        setEditing(inst);
        setNombre(inst.nombre);
        setEspecialidad(inst.especialidad);
        setEmail(inst.email);
        setTelefono(inst.telefono);
        setActivo(inst.estado === "Activo");
        setModalOpen(true);
    };

    const generarInstructorId = () => {
        return Math.floor(Date.now() % 1000000000);
    };

    const guardarInstructor = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (editing) {
                await updateInstructor({
                    usuarioInternalId: editing.usuarioInternalId,
                    instructorInternalId: editing.id,
                    nombreCompleto: nombre,
                    correo: email,
                    telefono,
                    activo,
                    especialidad
                });
            } else {
                const rolRes = await getRolByNumero({ rolId: 2 });
                const rolInstructor = (rolRes.data as any)?.rols?.[0];

                if (!rolInstructor) {
                    alert("No se encontró el rol de instructor con rolId = 2.");
                    return;
                }

                const usuarioInternalId = crypto.randomUUID();

                await createInstructor({
                    usuarioInternalId,
                    usuarioId: email,
                    rolInternalId: rolInstructor.id,
                    nombreCompleto: nombre,
                    correo: email,
                    passwordHash: password || "123456",
                    telefono,
                    especialidad,
                    instructorId: generarInstructorId()
                });
            }

            setModalOpen(false);
            limpiarFormulario();
            cargarInstructores();
        } catch (error) {
            console.error("Error al guardar instructor:", error);
            alert("Error al guardar instructor. Revisa la consola.");
        }
    };

    const eliminarInstructor = async (inst: Instructor) => {
        if (!window.confirm("¿Seguro que deseas eliminar este instructor?")) return;

        try {
            await deleteInstructor({
                instructorInternalId: inst.id,
                usuarioInternalId: inst.usuarioInternalId
            });

            cargarInstructores();
        } catch (error) {
            console.error("Error al eliminar instructor:", error);
            alert("Error al eliminar instructor.");
        }
    };

    const cambiarEstado = async (inst: Instructor) => {
        try {
            await updateInstructor({
                usuarioInternalId: inst.usuarioInternalId,
                instructorInternalId: inst.id,
                nombreCompleto: inst.nombre,
                correo: inst.email,
                telefono: inst.telefono,
                activo: inst.estado !== "Activo",
                especialidad: inst.especialidad
            });

            cargarInstructores();
        } catch (error) {
            console.error("Error al cambiar estado:", error);
            alert("Error al cambiar estado.");
        }
    };

    const filtered = instructores.filter((i) =>
        i.nombre.toLowerCase().includes(search.toLowerCase()) ||
        i.especialidad.toLowerCase().includes(search.toLowerCase()) ||
        i.email.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / perPage);
    const paginated = filtered.slice((page - 1) * perPage, page * perPage);

    return (
        <>
            <div className="ucv-clases-wrap">
                <div className="ucv-clases-header">
                    <div>
                        <div className="ucv-clases-header__title">Instructores registrados</div>
                        <div className="ucv-clases-header__sub">{filtered.length} instructores en total</div>
                    </div>

                    <button className="ucv-btn-add" onClick={abrirNuevo}>
                        <i className="ti ti-plus" aria-hidden="true" />
                        Agregar instructor
                    </button>
                </div>

                <div className="ucv-table-controls">
                    <div className="ucv-table-controls__left">
                        Mostrar
                        <select
                            className="ucv-select"
                            value={perPage}
                            onChange={(e) => {
                                setPerPage(Number(e.target.value));
                                setPage(1);
                            }}
                        >
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
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                        />
                    </div>
                </div>

                <div className="ucv-table-card">
                    <div className="ucv-table-scroll">
                        <table className="ucv-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Instructor</th>
                                    <th>Especialidad</th>
                                    <th>Contacto</th>
                                    <th>Alumnos</th>
                                    <th>Clases</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={8} style={{ textAlign: "center", padding: "32px" }}>
                                            Cargando instructores...
                                        </td>
                                    </tr>
                                ) : paginated.length === 0 ? (
                                    <tr>
                                        <td colSpan={8} style={{ textAlign: "center", color: "#aaa", padding: "32px" }}>
                                            No se encontraron instructores.
                                        </td>
                                    </tr>
                                ) : (
                                    paginated.map((inst) => (
                                        <tr key={inst.id}>
                                            <td style={{ color: "#aaa", fontSize: 12 }}>{inst.instructorId}</td>
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
                                                    <button className="ucv-action-btn ucv-action-btn--edit" title="Editar" onClick={() => abrirEditar(inst)}>
                                                        <i className="ti ti-pencil" aria-hidden="true" />
                                                    </button>
                                                    <button className="ucv-action-btn ucv-action-btn--delete" title="Eliminar" onClick={() => eliminarInstructor(inst)}>
                                                        <i className="ti ti-trash" aria-hidden="true" />
                                                    </button>
                                                    <button className="ucv-action-btn ucv-action-btn--toggle" title="Activar / Desactivar" onClick={() => cambiarEstado(inst)}>
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

                    <div className="ucv-table-footer">
                        <span className="ucv-table-footer__info">
                            Mostrando {filtered.length === 0 ? 0 : (page - 1) * perPage + 1} a{" "}
                            {Math.min(page * perPage, filtered.length)} de {filtered.length} entradas
                        </span>

                        <div className="ucv-pagination">
                            <button className="ucv-page-btn" onClick={() => setPage(page - 1)} disabled={page === 1}>
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

            {modalOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(15, 23, 42, 0.35)",
                        backdropFilter: "blur(2px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                        padding: 20
                    }}
                >
                    <form
                        onSubmit={guardarInstructor}
                        style={{
                            background: "#fff",
                            padding: "28px 30px",
                            borderRadius: 16,
                            width: "100%",
                            maxWidth: 460,
                            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.18)",
                            display: "grid",
                            gap: 14
                        }}
                    >
                        <div style={{ marginBottom: 4 }}>
                            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#111827" }}>
                                {editing ? "Editar instructor" : "Agregar instructor"}
                            </h3>
                            <p style={{ margin: "6px 0 0", fontSize: 13, color: "#6B7280" }}>
                                Completa la información del instructor.
                            </p>
                        </div>

                        <div style={{ display: "grid", gap: 6 }}>
                            <label style={labelStyle}>Nombre completo</label>
                            <input
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                                placeholder="Ej. Carla Reyes"
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ display: "grid", gap: 6 }}>
                            <label style={labelStyle}>Especialidad</label>
                            <input
                                value={especialidad}
                                onChange={(e) => setEspecialidad(e.target.value)}
                                required
                                placeholder="Ej. Yoga · Meditación"
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                            <div style={{ display: "grid", gap: 6 }}>
                                <label style={labelStyle}>Correo</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={!!editing}
                                    required
                                    placeholder="correo@upclass.mx"
                                    style={{
                                        ...inputStyle,
                                        background: editing ? "#F3F4F6" : "#fff",
                                        cursor: editing ? "not-allowed" : "text"
                                    }}
                                />
                            </div>

                            <div style={{ display: "grid", gap: 6 }}>
                                <label style={labelStyle}>Teléfono</label>
                                <input
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    required
                                    placeholder="55 1234 5678"
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        {!editing && (
                            <div style={{ display: "grid", gap: 6 }}>
                                <label style={labelStyle}>Contraseña</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Contraseña inicial"
                                    style={inputStyle}
                                />
                            </div>
                        )}

                        {editing && (
                            <label
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontSize: 14,
                                    color: "#374151",
                                    marginTop: 2
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={activo}
                                    onChange={(e) => setActivo(e.target.checked)}
                                />
                                Instructor activo
                            </label>
                        )}

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: 10,
                                marginTop: 10
                            }}
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    setModalOpen(false);
                                    limpiarFormulario();
                                }}
                                style={{
                                    border: "1px solid #D1D5DB",
                                    background: "#fff",
                                    color: "#374151",
                                    padding: "10px 16px",
                                    borderRadius: 8,
                                    fontWeight: 600,
                                    cursor: "pointer"
                                }}
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                style={{
                                    border: "none",
                                    background: "#064B93",
                                    color: "#fff",
                                    padding: "10px 18px",
                                    borderRadius: 8,
                                    fontWeight: 700,
                                    cursor: "pointer"
                                }}
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
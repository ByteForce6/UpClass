import { useState, useEffect, useMemo } from "react";
import {
    useListHorarios,
    useListCursos,
    useListInscripcionesActivas,
    useCreateHorario,
    useUpdateHorario,
    useDeleteHorario,
} from "../../dataconnect-generated/react";
import "../../Styles/dashboardHorarios.css";

interface BloqueHorario {
    diaSemana: string;
    horaInicio: string;
    horaFin: string;
}

interface FormHorario {
    cursoId: string;
    diaSemana: string;
    fechaInicio: string;
    fechaFin: string;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number | "";
    cupoActual: number | "";
    estado: string;
    horarioId: number | "";
    bloques: BloqueHorario[];
}

const BLOQUE_INICIAL: BloqueHorario = {
    diaSemana: "",
    horaInicio: "",
    horaFin: "",
};

const FORM_INICIAL: FormHorario = {
    cursoId: "",
    diaSemana: "",
    fechaInicio: "",
    fechaFin: "",
    horaInicio: "",
    horaFin: "",
    cupoMaximo: "",
    cupoActual: 0,
    estado: "Activo",
    horarioId: "",
    bloques: [{ ...BLOQUE_INICIAL }],
};

export default function HorariosView() {
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selectedHorario, setSelectedHorario] = useState<any>(null);
    const [form, setForm] = useState<FormHorario>(FORM_INICIAL);
    const [busqueda, setBusqueda] = useState("");
    const [horariosLocal, setHorariosLocal] = useState<any[]>([]);
    const [cargaInicial, setCargaInicial] = useState(false);

    const { data: horariosData } = useListHorarios();
    const { data: cursosData } = useListCursos();
    const { data: inscripcionesData } = useListInscripcionesActivas();

    const { mutate: createHorario, isPending: creando } = useCreateHorario();
    const { mutate: updateHorario, isPending: actualizando } = useUpdateHorario();
    const { mutate: deleteHorario, isPending: eliminando } = useDeleteHorario();

    useEffect(() => {
        if (horariosData?.horarios && !cargaInicial) {
            setHorariosLocal(horariosData.horarios);
            setCargaInicial(true);
        }
    }, [horariosData, cargaInicial]);

    const cursos = cursosData?.cursos ?? [];

    const inscripcionesPorHorario = useMemo(() => {
        const map: Record<number, number> = {};
        inscripcionesData?.inscripcions?.forEach((i: any) => {
            const hid = i.horario?.horarioId;
            if (hid != null) {
                map[hid] = (map[hid] ?? 0) + 1;
            }
        });
        return map;
    }, [inscripcionesData]);

    const horariosFiltrados = horariosLocal.filter((h: any) =>
        h.curso?.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
        h.diaSemana?.toLowerCase().includes(busqueda.toLowerCase()) ||
        h.estado?.toLowerCase().includes(busqueda.toLowerCase())
    );

    const agregarBloque = () => {
        setForm((prev) => ({
            ...prev,
            bloques: [...prev.bloques, { ...BLOQUE_INICIAL }],
        }));
    };

    const eliminarBloque = (index: number) => {
        setForm((prev) => ({
            ...prev,
            bloques: prev.bloques.filter((_, i) => i !== index),
        }));
    };

    const actualizarBloque = (index: number, campo: keyof BloqueHorario, valor: string) => {
        setForm((prev) => ({
            ...prev,
            bloques: prev.bloques.map((b, i) => (i === index ? { ...b, [campo]: valor } : b)),
        }));
    };

    const handleCreate = () => {
        const cursoSeleccionado = cursos.find((c: any) => c.id === form.cursoId);
        const bloquesValidos = form.bloques.filter(
            (b) => b.diaSemana && b.horaInicio && b.horaFin
        );

        if (bloquesValidos.length === 0) return;

        let completados = 0;
        const nuevosHorarios: any[] = [];

        bloquesValidos.forEach((bloque) => {
            createHorario(
                {
                    horarioId: Math.floor(Math.random() * 2000000000),
                    cursoId: form.cursoId,
                    diaSemana: bloque.diaSemana,
                    fechaInicio: form.fechaInicio,
                    fechaFin: form.fechaFin,
                    horaInicio: bloque.horaInicio,
                    horaFin: bloque.horaFin,
                    cupoMaximo: Number(form.cupoMaximo),
                    cupoActual: 0,
                    estado: form.estado,
                },
                {
                    onSuccess: (result: any) => {
                        const nuevoId = result?.data?.horario_insert?.id;
                        nuevosHorarios.push({
                            id: nuevoId,
                            diaSemana: bloque.diaSemana,
                            fechaInicio: form.fechaInicio,
                            fechaFin: form.fechaFin,
                            horaInicio: bloque.horaInicio,
                            horaFin: bloque.horaFin,
                            cupoMaximo: Number(form.cupoMaximo),
                            cupoActual: 0,
                            estado: form.estado,
                            curso: cursoSeleccionado ?? null,
                        });
                        completados++;

                        if (completados === bloquesValidos.length) {
                            setHorariosLocal((prev) => [...prev, ...nuevosHorarios]);
                            setOpenCreate(false);
                            setForm(FORM_INICIAL);
                        }
                    },
                }
            );
        });
    };

    const handleOpenEdit = (horario: any) => {
        setSelectedHorario(horario);
        setForm({
            cursoId: horario.curso?.id ?? "",
            diaSemana: horario.diaSemana ?? "",
            fechaInicio: horario.fechaInicio ?? "",
            fechaFin: horario.fechaFin ?? "",
            horaInicio: horario.horaInicio ?? "",
            horaFin: horario.horaFin ?? "",
            cupoMaximo: horario.cupoMaximo ?? "",
            cupoActual: horario.cupoActual ?? 0,
            estado: horario.estado ?? "Activo",
            horarioId: horario.horarioId ?? "",
            bloques: [{ ...BLOQUE_INICIAL }],
        });
        setOpenEdit(true);
    };

    const handleUpdate = () => {
        if (!selectedHorario) return;
        updateHorario(
            {
                horarioInternalId: selectedHorario.id,
                horarioId: selectedHorario.horarioId,
                cursoId: form.cursoId,
                diaSemana: form.diaSemana,
                fechaInicio: form.fechaInicio,
                fechaFin: form.fechaFin,
                horaInicio: form.horaInicio,
                horaFin: form.horaFin,
                cupoMaximo: Number(form.cupoMaximo),
                cupoActual: Number(form.cupoActual),
                estado: form.estado,
            },
            {
                onSuccess: () => {
                    setHorariosLocal((prev) =>
                        prev.map((h) =>
                            h.id === selectedHorario.id
                                ? {
                                    ...h,
                                    diaSemana: form.diaSemana,
                                    fechaInicio: form.fechaInicio,
                                    fechaFin: form.fechaFin,
                                    horaInicio: form.horaInicio,
                                    horaFin: form.horaFin,
                                    cupoMaximo: Number(form.cupoMaximo),
                                    cupoActual: Number(form.cupoActual),
                                    estado: form.estado,
                                    curso: cursos.find((c: any) => c.id === form.cursoId) ?? h.curso,
                                }
                                : h
                        )
                    );
                    setOpenEdit(false);
                    setSelectedHorario(null);
                    setForm(FORM_INICIAL);
                },
            }
        );
    };

    const handleOpenDelete = (horario: any) => {
        setSelectedHorario(horario);
        setOpenDelete(true);
    };

    const handleDelete = () => {
        if (!selectedHorario) return;
        deleteHorario(
            { horarioInternalId: selectedHorario.id },
            {
                onSuccess: () => {
                    setHorariosLocal((prev) => prev.filter((h) => h.id !== selectedHorario.id));
                    setOpenDelete(false);
                    setSelectedHorario(null);
                },
            }
        );
    };

    return (
        <>
            <div className="ucv-clases-wrap">
                <div className="ucv-clases-header">
                    <div>
                        <div className="ucv-clases-header__title">Horarios registrados</div>
                        <div className="ucv-clases-header__sub">
                            {busqueda
                                ? `${horariosFiltrados.length} resultado${horariosFiltrados.length !== 1 ? "s" : ""} de ${horariosLocal.length} horarios`
                                : `${horariosLocal.length} horarios en total`}
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <input
                            placeholder="Buscar horario, día o estado..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            style={{
                                padding: "9px 14px",
                                border: "1px solid #E5E7EB",
                                borderRadius: 10,
                                fontSize: 14,
                                outline: "none",
                                minWidth: 240,
                            }}
                        />
                        <button
                            className="ucv-btn-add"
                            onClick={() => { setForm(FORM_INICIAL); setOpenCreate(true); }}
                        >
                            + Agregar horario
                        </button>
                    </div>
                </div>

                <div className="ucv-table-card">
                    <div className="ucv-table-scroll">
                        <table className="ucv-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Curso</th>
                                    <th>Día</th>
                                    <th>Fecha inicio</th>
                                    <th>Fecha fin</th>
                                    <th>Horario</th>
                                    <th>Cupo</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {horariosFiltrados.length === 0 ? (
                                    <tr>
                                        <td colSpan={9} className="ucv-empty-cell">
                                            No se encontraron horarios
                                        </td>
                                    </tr>
                                ) : (
                                    horariosFiltrados.map((horario: any, i: number) => (
                                        <tr key={horario.id}>
                                            <td>{i + 1}</td>
                                            <td><span className="ucv-clase-name">{horario.curso?.nombre}</span></td>
                                            <td>{horario.diaSemana}</td>
                                            <td>{horario.fechaInicio}</td>
                                            <td>{horario.fechaFin}</td>
                                            <td>{horario.horaInicio} - {horario.horaFin}</td>
                                            <td>{inscripcionesPorHorario[horario.horarioId] ?? 0}/{horario.cupoMaximo}</td>
                                            <td><span className="ucv-badge">{horario.estado}</span></td>
                                            <td>
                                                <div className="ucv-actions">
                                                    <button
                                                        className="ucv-action-btn ucv-action-btn--edit"
                                                        title="Editar"
                                                        onClick={() => handleOpenEdit(horario)}
                                                    >
                                                        <i className="ti ti-pencil" aria-hidden="true" />
                                                    </button>
                                                    <button
                                                        className="ucv-action-btn ucv-action-btn--delete"
                                                        title="Eliminar"
                                                        onClick={() => handleOpenDelete(horario)}
                                                    >
                                                        <i className="ti ti-trash" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* MODAL CREAR */}
            {openCreate && (
                <div className="ucv-modal-overlay">
                    <div className="ucv-modal">
                        <div className="ucv-modal-header">
                            <h3>Crear horario</h3>
                            <button className="ucv-modal-close" onClick={() => setOpenCreate(false)}>✕</button>
                        </div>

                        <div className="ucv-modal-body">
                            <label className="ucv-field-label">Curso</label>
                            <select value={form.cursoId} onChange={(e) => setForm({ ...form, cursoId: e.target.value })}>
                                <option value="">Selecciona un curso</option>
                                {cursos.map((c: any) => (
                                    <option key={c.id} value={c.id}>{c.nombre}</option>
                                ))}
                            </select><br/><br/>

                            <label className="ucv-field-label">Fecha de inicio del curso</label>
                            <input type="date" value={form.fechaInicio} onChange={(e) => setForm({ ...form, fechaInicio: e.target.value })} /> <br/><br/>

                            <label className="ucv-field-label">Fecha de término del curso</label>
                            <input type="date" value={form.fechaFin} onChange={(e) => setForm({ ...form, fechaFin: e.target.value })} /><br/><br/>

                            <label className="ucv-field-label">Cupo máximo de estudiantes</label>
                            <input type="number" placeholder="Cupo máximo" value={form.cupoMaximo} onChange={(e) => setForm({ ...form, cupoMaximo: e.target.value === "" ? "" : Number(e.target.value) })} /><br/><br/>

                            <label className="ucv-field-label">Estado del curso</label>
                            <select value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })}><br/><br/>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select><br/><br/>

                            <div className="ucv-bloques-header">
                                <label className="ucv-field-label">Días y horarios de clase</label>
                                <button type="button" className="ucv-btn-add-bloque" onClick={agregarBloque}>
                                    + Agregar día
                                </button>
                            </div>

                <div className="ucv-bloques-list">
                    {form.bloques.map((bloque, index) => (
                        <div key={index} className="ucv-bloque-card">
                            <div className="ucv-bloque-card__top">
                                <span className="ucv-bloque-card__num">Día {index + 1}</span>
                                {form.bloques.length > 1 && (
                                    <button
                                        type="button"
                                        className="ucv-btn-remove-bloque"
                                        onClick={() => eliminarBloque(index)}
                                        title="Quitar este día"
                                    >
                                        <i className="ti ti-trash" aria-hidden="true" />
                                    </button>
                                )}
                            </div>

                            <label className="ucv-field-label-sm">Día de la semana</label>
                            <select
                                value={bloque.diaSemana}
                                onChange={(e) => actualizarBloque(index, "diaSemana", e.target.value)}
                            >
                                <option value="">Selecciona un día</option>
                                <option value="Lunes">Lunes</option>
                                <option value="Martes">Martes</option>
                                <option value="Miércoles">Miércoles</option>
                                <option value="Jueves">Jueves</option>
                                <option value="Viernes">Viernes</option>
                                <option value="Sábado">Sábado</option>
                                <option value="Domingo">Domingo</option>
                            </select>

                            <div className="ucv-bloque-horas">
                                <div className="ucv-bloque-hora-field">
                                    <label className="ucv-field-label-sm">Hora de inicio</label>
                                    <input
                                        type="time"
                                        value={bloque.horaInicio}
                                        onChange={(e) => actualizarBloque(index, "horaInicio", e.target.value)}
                                    />
                                </div>
                                <div className="ucv-bloque-hora-field">
                                    <label className="ucv-field-label-sm">Hora de término</label>
                                    <input
                                        type="time"
                                        value={bloque.horaFin}
                                        onChange={(e) => actualizarBloque(index, "horaFin", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                        </div>

                        <div className="ucv-modal-actions">
                            <button disabled={creando} onClick={handleCreate} className="ucv-btn-primary">
                                {creando ? "Guardando..." : "Guardar"}
                            </button>
                            <button onClick={() => setOpenCreate(false)} className="ucv-btn-secondary">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* MODAL EDITAR */}
            {openEdit && (
                <div className="ucv-modal-overlay">
                    <div className="ucv-modal">
                        <div className="ucv-modal-header">
                            <h3>Editar horario</h3>
                            <button className="ucv-modal-close" onClick={() => setOpenEdit(false)}>✕</button>
                        </div>

                        <label className="ucv-field-label">Curso</label>
                        <select value={form.cursoId} onChange={(e) => setForm({ ...form, cursoId: e.target.value })}>
                            <option value="">Selecciona un curso</option>
                            {cursos.map((c: any) => (
                                <option key={c.id} value={c.id}>{c.nombre}</option>
                            ))}
                        </select>

                        <label className="ucv-field-label">Día de la semana</label>
                        <select value={form.diaSemana} onChange={(e) => setForm({ ...form, diaSemana: e.target.value })}>
                            <option value="">Selecciona un día</option>
                            <option value="Lunes">Lunes</option>
                            <option value="Martes">Martes</option>
                            <option value="Miércoles">Miércoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                            <option value="Sábado">Sábado</option>
                            <option value="Domingo">Domingo</option>
                        </select>

                        <label className="ucv-field-label">Fecha de inicio del curso</label>
                        <input type="date" value={form.fechaInicio} onChange={(e) => setForm({ ...form, fechaInicio: e.target.value })} />

                        <label className="ucv-field-label">Fecha de término del curso</label>
                        <input type="date" value={form.fechaFin} onChange={(e) => setForm({ ...form, fechaFin: e.target.value })} />

                        <label className="ucv-field-label">Hora en la que iniciará el curso</label>
                        <input type="time" value={form.horaInicio} onChange={(e) => setForm({ ...form, horaInicio: e.target.value })} />

                        <label className="ucv-field-label">Hora en la que terminará el curso</label>
                        <input type="time" value={form.horaFin} onChange={(e) => setForm({ ...form, horaFin: e.target.value })} />

                        <label className="ucv-field-label">Cupo máximo de estudiantes</label>
                        <input type="number" placeholder="Cupo máximo" value={form.cupoMaximo} onChange={(e) => setForm({ ...form, cupoMaximo: e.target.value === "" ? "" : Number(e.target.value) })} />

                        <label className="ucv-field-label">Estado del curso</label>
                        <select value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })}>
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>

                        <div className="ucv-modal-actions">
                            <button disabled={actualizando} onClick={handleUpdate} className="ucv-btn-primary">
                                {actualizando ? "Actualizando..." : "Actualizar"}
                            </button>
                            <button onClick={() => setOpenEdit(false)} className="ucv-btn-secondary">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL ELIMINAR */}
            {openDelete && (
                <div className="ucv-modal-overlay">
                    <div className="ucv-modal">
                        <div className="ucv-modal-header">
                            <h3>Eliminar horario</h3>
                            <button className="ucv-modal-close" onClick={() => setOpenDelete(false)}>✕</button>
                        </div>
                        <p className="ucv-modal-text">
                            ¿Estás seguro de eliminar el horario de{" "}
                            <strong>{selectedHorario?.curso?.nombre}</strong> ({selectedHorario?.diaSemana})? Esta acción no se puede deshacer.
                        </p>
                        <div className="ucv-modal-actions">
                            <button disabled={eliminando} onClick={handleDelete} className="ucv-btn-danger">
                                {eliminando ? "Eliminando..." : "Sí, eliminar"}
                            </button>
                            <button onClick={() => setOpenDelete(false)} className="ucv-btn-secondary">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
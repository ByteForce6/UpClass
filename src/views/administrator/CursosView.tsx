import { useState } from "react";
import {
  useListCursos,
  useListInstructors,
  useCreateCurso,
  useUpdateCurso,
  useDeleteCurso,
} from "../../dataconnect-generated/react";

interface FormCurso {
  nombre: string;
  descripcion: string;
  categoria: string;
  urlImagen: string;
  estado: string;
  instructorId: string;
  cursoId: number | "";
}

const FORM_INICIAL: FormCurso = {
  nombre: "",
  descripcion: "",
  categoria: "",
  urlImagen: "",
  estado: "Activo",
  instructorId: "",
  cursoId: "",
};

export default function ClasesView() {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedCurso, setSelectedCurso] = useState<any>(null);
  const [form, setForm] = useState<FormCurso>(FORM_INICIAL);
  const [busqueda, setBusqueda] = useState("");  // ← nuevo

  const { data: cursosData, refetch } = useListCursos();
  const { data: instructoresData } = useListInstructors();

  const { mutate: createCurso, isPending: creando } = useCreateCurso();
  const { mutate: updateCurso, isPending: actualizando } = useUpdateCurso();
  const { mutate: deleteCurso, isPending: eliminando } = useDeleteCurso();

  const cursos = cursosData?.cursos ?? [];
  const instructores = instructoresData?.instructors ?? [];

  // ← filtrado por búsqueda
  const cursosFiltrados = cursos.filter((c: any) =>
    c.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.categoria?.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.instructor?.usuario?.nombreCompleto?.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleCreate = () => {
    createCurso(
      {
        cursoId: Math.floor(Math.random() * 2000000000),
        nombre: form.nombre,
        descripcion: form.descripcion,
        categoria: form.categoria,
        urlImagen: form.urlImagen,
        estado: form.estado,
        instructorId: form.instructorId !== "" ? form.instructorId : undefined,
      },
      {
        onSuccess: () => {
          refetch();
          setOpenCreate(false);
          setForm(FORM_INICIAL);
        },
      }
    );
  };

  const handleOpenEdit = (curso: any) => {
    setSelectedCurso(curso);
    setForm({
      nombre: curso.nombre ?? "",
      descripcion: curso.descripcion ?? "",
      categoria: curso.categoria ?? "",
      urlImagen: curso.urlImagen ?? "",
      estado: curso.estado ?? "Activo",
      instructorId: curso.instructor?.id ?? "",
      cursoId: curso.cursoId ?? "",
    });
    setOpenEdit(true);
  };

  const handleUpdate = () => {
    if (!selectedCurso) return;
    updateCurso(
      {
        cursoInternalId: selectedCurso.id,
        cursoId: selectedCurso.cursoId,
        nombre: form.nombre,
        descripcion: form.descripcion,
        categoria: form.categoria,
        urlImagen: form.urlImagen,
        estado: form.estado,
        instructorId: form.instructorId !== "" ? form.instructorId : undefined,
      },
      {
        onSuccess: () => {
          refetch();
          setOpenEdit(false);
          setSelectedCurso(null);
          setForm(FORM_INICIAL);
        },
      }
    );
  };

  const handleOpenDelete = (curso: any) => {
    setSelectedCurso(curso);
    setOpenDelete(true);
  };

  const handleDelete = () => {
    if (!selectedCurso) return;
    deleteCurso(
      { cursoInternalId: selectedCurso.id },
      {
        onSuccess: () => {
          refetch();
          setOpenDelete(false);
          setSelectedCurso(null);
        },
      }
    );
  };

  return (
    <>
      <div className="ucv-clases-wrap">
        <div className="ucv-clases-header">
          <div>
            <div className="ucv-clases-header__title">Cursos registrados</div>
            {/* muestra filtrados si hay búsqueda, total si no */}
            <div className="ucv-clases-header__sub">
              {busqueda
                ? `${cursosFiltrados.length} resultado${cursosFiltrados.length !== 1 ? "s" : ""} de ${cursos.length} cursos`
                : `${cursos.length} cursos en total`}
            </div>
          </div>

          {/* buscador + botón agregar */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <input
              placeholder="Buscar curso, categoría o instructor..."
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
              + Agregar curso
            </button>
          </div>
        </div>

        <div className="ucv-table-card">
          <div className="ucv-table-scroll">
            <table className="ucv-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Imagen</th>
                  <th>Curso</th>
                  <th>Categoría</th>
                  <th>Instructor</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cursosFiltrados.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: "center", padding: 32, color: "#6B7280" }}>
                      No se encontraron cursos
                    </td>
                  </tr>
                ) : (
                  cursosFiltrados.map((curso: any, i: number) => (
                    <tr key={curso.id}>
                      <td>{i + 1}</td>
                      <td>
                        {curso.urlImagen ? (
                          <img
                            src={curso.urlImagen}
                            alt={curso.nombre}
                            style={{ width: 48, height: 48, borderRadius: 8, objectFit: "cover" }}
                          />
                        ) : (
                          <div style={{ width: 48, height: 48, borderRadius: 8, background: "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                            📚
                          </div>
                        )}
                      </td>
                      <td><span className="ucv-clase-name">{curso.nombre}</span></td>
                      <td>{curso.categoria}</td>
                      <td>{curso.instructor?.usuario?.nombreCompleto || "Sin instructor"}</td>
                      <td><span className="ucv-badge">{curso.estado}</span></td>
                      {/* CÓDIGO REEMPLAZADO EN TU FILA DE LA TABLA */}
<td>
  <div className="ucv-actions">
    {/* Botón de Editar */}
    <button 
      className="ucv-action-btn ucv-action-btn--edit" 
      title="Editar" 
      onClick={() => handleOpenEdit(curso)}
    >
      <i className="ti ti-pencil" aria-hidden="true" />
    </button>

    {/* Botón de Eliminar */}
    <button 
      className="ucv-action-btn ucv-action-btn--delete" 
      title="Eliminar" 
      onClick={() => handleOpenDelete(curso)}
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
              <h3>Crear curso</h3>
              <button onClick={() => setOpenCreate(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#6B7280" }}>✕</button>
            </div>
            <input placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
            <input placeholder="Descripción" value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} />
            <input placeholder="Categoría" value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} />
            <input placeholder="URL Imagen" value={form.urlImagen} onChange={(e) => setForm({ ...form, urlImagen: e.target.value })} />
            <select value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })}>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
            <select value={form.instructorId} onChange={(e) => setForm({ ...form, instructorId: e.target.value })}>
              <option value="">Sin instructor</option>
              {instructores.map((inst: any) => (
                <option key={inst.id} value={inst.id}>{inst.usuario?.nombreCompleto}</option>
              ))}
            </select>
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <button disabled={creando} onClick={handleCreate} style={{ flex: 1, padding: "10px", background: "#0B4AA2", color: "#fff", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer" }}>
                {creando ? "Guardando..." : "Guardar"}
              </button>
              <button onClick={() => setOpenCreate(false)} style={{ flex: 1, padding: "10px", background: "#F3F4F6", color: "#374151", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer" }}>
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
              <h3>Editar curso</h3>
              <button onClick={() => setOpenEdit(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#6B7280" }}>✕</button>
            </div>
            <input placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
            <input placeholder="Descripción" value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} />
            <input placeholder="Categoría" value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} />
            <input placeholder="URL Imagen" value={form.urlImagen} onChange={(e) => setForm({ ...form, urlImagen: e.target.value })} />
            <select value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })}>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
            <select value={form.instructorId} onChange={(e) => setForm({ ...form, instructorId: e.target.value })}>
              <option value="">Sin instructor</option>
              {instructores.map((inst: any) => (
                <option key={inst.id} value={inst.id}>{inst.usuario?.nombreCompleto}</option>
              ))}
            </select>
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <button disabled={actualizando} onClick={handleUpdate} style={{ flex: 1, padding: "10px", background: "#0B4AA2", color: "#fff", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer" }}>
                {actualizando ? "Actualizando..." : "Actualizar"}
              </button>
              <button onClick={() => setOpenEdit(false)} style={{ flex: 1, padding: "10px", background: "#F3F4F6", color: "#374151", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer" }}>
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
              <h3>Eliminar curso</h3>
              <button onClick={() => setOpenDelete(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#6B7280" }}>✕</button>
            </div>
            <p style={{ color: "#6B7280", margin: 0 }}>
              ¿Estás seguro de eliminar el curso <strong style={{ color: "#111827" }}>{selectedCurso?.nombre}</strong>? Esta acción no se puede deshacer.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <button disabled={eliminando} onClick={handleDelete} style={{ flex: 1, padding: "10px", background: "#DC2626", color: "#fff", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer" }}>
                {eliminando ? "Eliminando..." : "Sí, eliminar"}
              </button>
              <button onClick={() => setOpenDelete(false)} style={{ flex: 1, padding: "10px", background: "#F3F4F6", color: "#374151", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer" }}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
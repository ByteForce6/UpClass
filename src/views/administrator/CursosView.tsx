import { useState } from "react";
import {
  useListCursos,
  useListInstructors,
  useCreateCurso,
  useUpdateCurso,
  useDeleteCurso,
} from "../../dataconnect-generated/react";
import "../../Styles/dasboardCurso.css"

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

// ─── Estilos del modal (header/footer fijos, body con scroll) ──

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  padding: 16,
};

const modalStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 14,
  width: "100%",
  maxWidth: 480,
  maxHeight: "85vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const modalHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "18px 20px",
  borderBottom: "1px solid #E5E7EB",
  flexShrink: 0,
};

const modalBodyStyle: React.CSSProperties = {
  padding: "16px 20px",
  overflowY: "auto",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

// Franja de advertencia FUERA del área con scroll, para que aparecer/desaparecer
// no dispare el scrollbar interno del modal (antes vivía dentro de modalBodyStyle).
const modalWarningStyle: React.CSSProperties = {
  padding: "10px 20px",
  background: "#FEF2F2",
  borderTop: "1px solid #FCA5A5",
  color: "#c0392b",
  fontSize: 13,
  fontWeight: 500,
  flexShrink: 0,
};

const modalActionsStyle: React.CSSProperties = {
  display: "flex",
  gap: 8,
  padding: "16px 20px",
  borderTop: "1px solid #E5E7EB",
  flexShrink: 0,
};

const toastStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 24,
  right: 24,
  background: "#0B4AA2",
  color: "#fff",
  padding: "14px 20px",
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 500,
  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
  zIndex: 2000,
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const toastErrorStyle: React.CSSProperties = {
  ...toastStyle,
  background: "#DC2626",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  border: "1px solid #E5E7EB",
  borderRadius: 10,
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

// ─── Validación de nombre duplicado ────────────────────────────

// Normaliza para comparar de forma flexible: ignora mayúsculas/minúsculas
// y espacios extra (" Diseño  UX/UI " === "diseño ux/ui")
function normalizarNombre(nombre: string): string {
  return nombre.trim().toLowerCase().replace(/\s+/g, " ");
}

// Busca un curso con el mismo nombre normalizado, excluyendo el propio
// curso cuando se está editando (para no marcarse a sí mismo como duplicado)
function buscarCursoDuplicado(nombre: string, cursos: any[], cursoIdActual?: string) {
  const nombreNormalizado = normalizarNombre(nombre);
  if (!nombreNormalizado) return null;
  return cursos.find(
    (c: any) => normalizarNombre(c.nombre) === nombreNormalizado && c.id !== cursoIdActual
  );
}

export default function ClasesView() {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedCurso, setSelectedCurso] = useState<any>(null);
  const [form, setForm] = useState<FormCurso>(FORM_INICIAL);
  const [busqueda, setBusqueda] = useState("");

  // ─ estado de la validación de nombre duplicado ─
  const [formErrorCreate, setFormErrorCreate] = useState<string | null>(null);
  const [confirmarDuplicadoCreate, setConfirmarDuplicadoCreate] = useState(false);
  const [formErrorEdit, setFormErrorEdit] = useState<string | null>(null);
  const [confirmarDuplicadoEdit, setConfirmarDuplicadoEdit] = useState(false);

  // ─ toast de éxito/error ─
  const [toast, setToast] = useState<string | null>(null);
  const [toastTipo, setToastTipo] = useState<"exito" | "error">("exito");

  const mostrarToast = (mensaje: string, tipo: "exito" | "error" = "exito") => {
    setToast(mensaje);
    setToastTipo(tipo);
    setTimeout(() => setToast(null), 3000);
  };

  const { data: cursosData, refetch } = useListCursos();
  const { data: instructoresData } = useListInstructors();

  const { mutate: createCurso, isPending: creando } = useCreateCurso();
  const { mutate: updateCurso, isPending: actualizando } = useUpdateCurso();
  const { mutate: deleteCurso, isPending: eliminando } = useDeleteCurso();

  const cursos = cursosData?.cursos ?? [];
  const instructores = instructoresData?.instructors ?? [];

  const cursosFiltrados = cursos.filter((c: any) =>
    c.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.categoria?.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.instructor?.usuario?.nombreCompleto?.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleCreate = () => {
    const duplicado = buscarCursoDuplicado(form.nombre, cursos);
    if (duplicado && !confirmarDuplicadoCreate) {
      setFormErrorCreate(
        `Ya existe un curso llamado "${duplicado.nombre}". Si de verdad quieres crear otro con el mismo nombre, dale clic a "Guardar" de nuevo para confirmar.`
      );
      setConfirmarDuplicadoCreate(true);
      return;
    }

    setFormErrorCreate(null);
    setConfirmarDuplicadoCreate(false);

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
          mostrarToast("Curso creado exitosamente");
        },
        onError: () => {
          setOpenCreate(false);
          mostrarToast("Ocurrió un error al crear el curso", "error");
        },
      }
    );
  };

  const handleOpenEdit = (curso: any) => {
    setSelectedCurso(curso);
    setFormErrorEdit(null);
    setConfirmarDuplicadoEdit(false);
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

    const duplicado = buscarCursoDuplicado(form.nombre, cursos, selectedCurso.id);
    if (duplicado && !confirmarDuplicadoEdit) {
      setFormErrorEdit(
        `Ya existe un curso llamado "${duplicado.nombre}". Si de verdad quieres dejar este nombre repetido, dale clic a "Actualizar" de nuevo para confirmar.`
      );
      setConfirmarDuplicadoEdit(true);
      return;
    }

    setFormErrorEdit(null);
    setConfirmarDuplicadoEdit(false);

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
          mostrarToast("Curso actualizado exitosamente");
        },
        onError: () => {
          setOpenEdit(false);
          mostrarToast("Ocurrió un error al actualizar el curso", "error");
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
          mostrarToast("Curso eliminado exitosamente");
        },
        onError: () => {
          setOpenDelete(false);
          mostrarToast("Ocurrió un error al eliminar el curso", "error");
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
            <div className="ucv-clases-header__sub">
              {busqueda
                ? `${cursosFiltrados.length} resultado${cursosFiltrados.length !== 1 ? "s" : ""} de ${cursos.length} cursos`
                : `${cursos.length} cursos en total`}
            </div>
          </div>

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
              onClick={() => {
                setForm(FORM_INICIAL);
                setFormErrorCreate(null);
                setConfirmarDuplicadoCreate(false);
                setOpenCreate(true);
              }}
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
                      <td>
                        <div className="ucv-actions">
                          <button
                            className="ucv-action-btn ucv-action-btn--edit"
                            title="Editar"
                            onClick={() => handleOpenEdit(curso)}
                          >
                            <i className="ti ti-pencil" aria-hidden="true" />
                          </button>

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
        <div style={modalOverlayStyle} onClick={() => setOpenCreate(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <div className="ucv-modal-header" style={modalHeaderStyle}>
              <h3 style={{ margin: 0 }}>Crear curso</h3>
              <button onClick={() => setOpenCreate(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#fff" }}>✕</button>
            </div>

            <div style={modalBodyStyle}>
              <input
                placeholder="Nombre"
                value={form.nombre}
                style={inputStyle}
                onChange={(e) => {
                  setForm({ ...form, nombre: e.target.value });
                  setFormErrorCreate(null);
                  setConfirmarDuplicadoCreate(false);
                }}
              />
              <textarea
                placeholder="Descripción"
                value={form.descripcion}
                onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
              />

              <input placeholder="Categoría" value={form.categoria} style={inputStyle} onChange={(e) => setForm({ ...form, categoria: e.target.value })} />
              <input placeholder="URL Imagen" value={form.urlImagen} style={inputStyle} onChange={(e) => setForm({ ...form, urlImagen: e.target.value })} />
              <select value={form.estado} style={inputStyle} onChange={(e) => setForm({ ...form, estado: e.target.value })}>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
              <select value={form.instructorId} style={inputStyle} onChange={(e) => setForm({ ...form, instructorId: e.target.value })}>
                <option value="">Sin instructor</option>
                {instructores.map((inst: any) => (
                  <option key={inst.id} value={inst.id}>{inst.usuario?.nombreCompleto}</option>
                ))}
              </select>
            </div>

            {formErrorCreate && (
              <div style={modalWarningStyle}>{formErrorCreate}</div>
            )}

            <div style={modalActionsStyle}>
              <button disabled={creando} onClick={handleCreate} style={{ flex: 1, padding: "10px", background: "#0B4AA2", color: "#fff", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer" }}>
                {creando ? "Guardando..." : confirmarDuplicadoCreate ? "Guardar de todos modos" : "Guardar"}
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
        <div style={modalOverlayStyle} onClick={() => setOpenEdit(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <div className="ucv-modal-header" style={modalHeaderStyle}>
              <h3 style={{ margin: 0 }}>Editar curso</h3>
              <button onClick={() => setOpenEdit(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#fff" }}>✕</button>
            </div>

            <div style={modalBodyStyle}>
              <input
                placeholder="Nombre"
                value={form.nombre}
                style={inputStyle}
                onChange={(e) => {
                  setForm({ ...form, nombre: e.target.value });
                  setFormErrorEdit(null);
                  setConfirmarDuplicadoEdit(false);
                }}
              />
              <textarea
                placeholder="Descripción"
                value={form.descripcion}
                onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
              />

              <input placeholder="Categoría" value={form.categoria} style={inputStyle} onChange={(e) => setForm({ ...form, categoria: e.target.value })} />
              <input placeholder="URL Imagen" value={form.urlImagen} style={inputStyle} onChange={(e) => setForm({ ...form, urlImagen: e.target.value })} />
              <select value={form.estado} style={inputStyle} onChange={(e) => setForm({ ...form, estado: e.target.value })}>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
              <select value={form.instructorId} style={inputStyle} onChange={(e) => setForm({ ...form, instructorId: e.target.value })}>
                <option value="">Sin instructor</option>
                {instructores.map((inst: any) => (
                  <option key={inst.id} value={inst.id}>{inst.usuario?.nombreCompleto}</option>
                ))}
              </select>
            </div>

            {formErrorEdit && (
              <div style={modalWarningStyle}>{formErrorEdit}</div>
            )}

            <div style={modalActionsStyle}>
              <button disabled={actualizando} onClick={handleUpdate} style={{ flex: 1, padding: "10px", background: "#0B4AA2", color: "#fff", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer" }}>
                {actualizando ? "Actualizando..." : confirmarDuplicadoEdit ? "Actualizar de todos modos" : "Actualizar"}
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
        <div style={modalOverlayStyle} onClick={() => setOpenDelete(false)}>
          <div style={{ ...modalStyle, maxWidth: 420 }} onClick={(e) => e.stopPropagation()}>
            <div style={modalHeaderStyle}>
              <h3 style={{ margin: 0 }}>Eliminar curso</h3>
              <button onClick={() => setOpenDelete(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#6B7280" }}>✕</button>
            </div>
            <div style={modalBodyStyle}>
              <p style={{ color: "#6B7280", margin: 0 }}>
                ¿Estás seguro de eliminar el curso <strong style={{ color: "#111827" }}>{selectedCurso?.nombre}</strong>? Esta acción no se puede deshacer.
              </p>
            </div>
            <div style={modalActionsStyle}>
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

      {toast && (
        <div style={toastTipo === "error" ? toastErrorStyle : toastStyle}>
          <span>{toastTipo === "error" ? "✕" : "✓"}</span>
          {toast}
        </div>
      )}
    </>
  );
}
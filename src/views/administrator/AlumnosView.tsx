/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import {
  listarEstudiantes,
  getRolByNumero,
  crearEstudiante,
  actualizarEstudiante,
  eliminarEstudiante,
} from "../../dataconnect-generated";

type ModalMode = "add" | "edit";

interface Estudiante {
  id: string;
  matricula: string;
  usuarioInternalId: string;
  usuarioId: string;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  activo: boolean;
}

const ESTADO_CLASS: Record<"Activo" | "Inactivo", string> = {
  Activo: "ucv-badge ucv-badge--activo",
  Inactivo: "ucv-badge ucv-badge--inactivo",
};

export default function AlumnosView() {
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const [loading, setLoading] = useState(true);

  /* ── form ── */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("add");
  const [editing, setEditing] = useState<Estudiante | null>(null);

  const [nombreCompleto, setNombreCompleto] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [activo, setActivo] = useState(true);

  const [errorModal, setErrorModal] = useState<string | null>(null);

  /* ── delete ── */
  const [deleteTarget, setDeleteTarget] = useState<Estudiante | null>(null);

  /* ══════════════════════════════════════
     CARGAR
  ══════════════════════════════════════ */
  const cargarEstudiantes = async () => {
    setLoading(true);
    try {
      const res = await listarEstudiantes();
      const list = ((res.data as any)?.estudiantes ?? []) as any[];

      setEstudiantes(
        list.map((e: any) => ({
          id: e.id ?? "",
          matricula: e.matricula,
          usuarioInternalId: e.usuario?.id ?? "",
          usuarioId: e.usuario?.usuarioId ?? "",
          nombreCompleto: e.usuario?.nombreCompleto ?? "",
          correo: e.usuario?.correo ?? "",
          telefono: e.usuario?.telefono ?? "",
          activo: Boolean(e.usuario?.activo),
        })),
      );
    } catch (err) {
      console.error("Error al cargar estudiantes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarEstudiantes();
  }, []);

  /* ══════════════════════════════════════
     HELPERS MODAL
  ══════════════════════════════════════ */
  const limpiar = () => {
    setEditing(null);
    setNombreCompleto("");
    setCorreo("");
    setTelefono("");
    setPassword("");
    setActivo(true);
    setErrorModal(null);
  };

  const abrirNuevo = () => {
    limpiar();
    setModalMode("add");
    setModalOpen(true);
  };

  const abrirEditar = (est: Estudiante) => {
    setEditing(est);
    setNombreCompleto(est.nombreCompleto);
    setCorreo(est.correo);
    setTelefono(est.telefono);
    setActivo(est.activo);
    setModalMode("edit");
    setModalOpen(true);
  };

  /* ══════════════════════════════════════
     CREAR
  ══════════════════════════════════════ */
  const generarMatricula = () => {
    const año = new Date().getFullYear();
    const rand = Math.floor(Math.random() * 9000) + 1000;
    return `MAT-${año}-${rand}`;
  };

  const handleCrear = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const rolRes = await getRolByNumero({ rolId: 3 });
      const rol = (rolRes.data as any)?.rols?.[0];

      if (!rol) {
        alert("No se encontró el rol de estudiante (rolId = 3). Verifica tu base de datos.");
        return;
      }

      const usuarioInternalId = crypto.randomUUID();

      await crearEstudiante({
        usuarioInternalId,
        usuarioId: correo,
        rolInternalId: rol.id,
        nombreCompleto,
        correo,
        passwordHash: password || "123456",
        telefono,
        matricula: generarMatricula(),
      });

      setModalOpen(false);
      limpiar();
      cargarEstudiantes();
    } catch (err: any) {
      console.error("Error al crear estudiante:", err);
      const errorStr = JSON.stringify(err);

      if (errorStr.includes("usuario_correo_uidx")) {
        setErrorModal("¡Atención! Este correo electrónico ya está registrado. Por favor, utiliza uno diferente.");
      } else if (errorStr.includes("ALREADY_EXISTS")) {
        setErrorModal("El estudiante ya existe en el sistema.");
      } else {
        setErrorModal("Hubo un problema al guardar el estudiante. Por favor, inténtalo de nuevo.");
      }
    }
  };

  /* ══════════════════════════════════════
     ACTUALIZAR
  ══════════════════════════════════════ */
  const handleActualizar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    try {
      // Mandamos 'correo' modificado en el formulario
      await actualizarEstudiante({
        usuarioInternalId: editing.usuarioInternalId,
        nombreCompleto,
        correo, 
        telefono,
        activo,
      });

      setModalOpen(false);
      limpiar();
      cargarEstudiantes();
    } catch (err) {
      console.error("Error al actualizar estudiante:", err);
      alert("Error al actualizar. Revisa la consola.");
    }
  };

  /* ══════════════════════════════════════
     ELIMINAR
  ══════════════════════════════════════ */
  const handleEliminar = async () => {
  if (!deleteTarget) return;
  try {
    await eliminarEstudiante({
      // Eliminamos el parámetro que causa el error de tipado
      usuarioInternalId: deleteTarget.usuarioInternalId, 
    });
    
    setDeleteTarget(null);
    cargarEstudiantes();
  } catch (err) {
    console.error("Error al eliminar estudiante:", err);
    alert("Error al eliminar. Revisa la consola.");
  }
};

  /* ══════════════════════════════════════
     ENVIAR CORREO
  ══════════════════════════════════════ */
  const handleSendEmail = () => {
    if (!correo) return;
    window.location.href = `mailto:${encodeURIComponent(correo)}`;
  };

  /* ══════════════════════════════════════
     FILTRO + PAGINACIÓN
  ══════════════════════════════════════ */
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return estudiantes.filter(
      (e) =>
        e.nombreCompleto.toLowerCase().includes(q) ||
        e.correo.toLowerCase().includes(q) ||
        e.matricula.toLowerCase().includes(q),
    );
  }, [estudiantes, search]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <div className="ucv-clases-wrap">
        <div className="ucv-clases-header">
          <div>
            <div className="ucv-clases-header__title">Estudiantes registrados</div>
            <div className="ucv-clases-header__sub">{estudiantes.length} estudiantes en total</div>
          </div>
          <button className="ucv-btn-add" onClick={abrirNuevo}>
            <i className="ti ti-plus" aria-hidden="true" />
            Agregar estudiante
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
                  <th>Estudiante</th>
                  <th>Correo</th>
                  <th>Teléfono</th>
                  <th>Matrícula</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="ucv-table-empty">Cargando...</td>
                  </tr>
                ) : paginated.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="ucv-table-empty">No se encontraron estudiantes.</td>
                  </tr>
                ) : (
                  paginated.map((est, idx) => (
                    <tr key={est.id}>
                      <td className="ucv-td-idx">{(page - 1) * perPage + idx + 1}</td>
                      <td><div className="ucv-clase-name">{est.nombreCompleto}</div></td>
                      <td><div className="ucv-clase-salon">{est.correo}</div></td>
                      <td><div className="ucv-clase-salon">{est.telefono}</div></td>
                      <td><div className="ucv-clase-salon">{est.matricula}</div></td>
                      <td>
                        <span className={ESTADO_CLASS[est.activo ? "Activo" : "Inactivo"]}>
                          {est.activo ? "Activo" : "Inactivo"}
                        </span>
                      </td>
                      <td>
                        <div className="ucv-actions">
                          <button
                            className="ucv-action-btn ucv-action-btn--edit"
                            title="Editar"
                            onClick={() => abrirEditar(est)}
                          >
                            <i className="ti ti-pencil" aria-hidden="true" />
                          </button>
                          <button
                            className="ucv-action-btn ucv-action-btn--delete"
                            title="Eliminar"
                            onClick={() => setDeleteTarget(est)}
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

      {/* ══════ MODAL CREAR / EDITAR ══════ */}
      {modalOpen && (
        <div
          className="ucv-modal-overlay"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setModalOpen(false);
              limpiar();
            }
          }}
        >
          <div className="ucv-modal-card">
            <div className="ucv-modal-header">
              <span className="ucv-modal-title">
                {modalMode === "add" ? "Agregar estudiante" : "Editar estudiante"}
              </span>
              <button
                type="button"
                className="ucv-modal-close"
                onClick={() => {
                  setModalOpen(false);
                  limpiar();
                }}
              >
                ×
              </button>
            </div>

            <form className="ucv-modal-body" onSubmit={modalMode === "add" ? handleCrear : handleActualizar}>
              {errorModal && (
                <div
                  style={{
                    backgroundColor: "#fee2e2",
                    color: "#991b1b",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.375rem",
                    marginBottom: "1rem",
                    fontSize: "0.875rem",
                    border: "1px solid #fca5a5",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <i className="ti ti-alert-triangle" style={{ fontSize: "1.1rem" }} aria-hidden="true" />
                  <span>{errorModal}</span>
                </div>
              )}

              <div className="ucv-modal-grid">
                {modalMode === "edit" && (
                  <div className="ucv-modal-field ucv-modal-field--full">
                    <span className="ucv-modal-label">Matrícula</span>
                    <input className="ucv-modal-input ucv-modal-input--disabled" value={editing?.matricula ?? ""} disabled />
                  </div>
                )}

                <div className="ucv-modal-field">
                  <span className="ucv-modal-label">Nombre completo</span>
                  <input
                    className="ucv-modal-input"
                    value={nombreCompleto}
                    onChange={(e) => setNombreCompleto(e.target.value)}
                    placeholder="Ej. Ana García"
                    required
                  />
                </div>

                <div className="ucv-modal-field">
                  <span className="ucv-modal-label">Teléfono</span>
                  <input
                    className="ucv-modal-input"
                    type="tel"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    value={telefono}
                    onChange={(e) => {
                      const valor = e.target.value.replace(/\D/g, "");
                      if (valor.length <= 10) setTelefono(valor);
                    }}
                    placeholder="55 0000 0000"
                  />
                </div>

                {/* Campo de Correo Habilitado para Modificación */}
                <div className="ucv-modal-field ucv-modal-field--full">
                  <span className="ucv-modal-label">Correo</span>
                  <div className="ucv-modal-email-row">
                    <input
                      className="ucv-modal-input ucv-modal-email-input"
                      type="email"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      placeholder="ejemplo@correo.com"
                      required
                      // Removido disabled para permitir la edición fluida
                    />
                    <button type="button" className="ucv-email-send-btn" onClick={handleSendEmail} title="Enviar correo">
                      <i className="ti ti-send" aria-hidden="true" />
                      Enviar
                    </button>
                  </div>
                </div>

                {modalMode === "add" && (
                  <div className="ucv-modal-field ucv-modal-field--full">
                    <span className="ucv-modal-label">Contraseña inicial</span>
                    <input
                      className="ucv-modal-input"
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Contraseña inicial"
                    />
                  </div>
                )}

                <div className="ucv-modal-field ucv-modal-field--full">
                  <span className="ucv-modal-label">Estado</span>
                  <label className="ucv-modal-estado-row">
                    <input
                      type="checkbox"
                      className="ucv-modal-check"
                      checked={activo}
                      onChange={(e) => setActivo(e.target.checked)}
                    />
                    <span
                      className={`ucv-modal-estado-label${activo ? " ucv-modal-estado-label--activo" : " ucv-modal-estado-label--inactivo"}`}
                    >
                      {activo ? "Estudiante activo" : "Estudiante inactivo"}
                    </span>
                  </label>
                </div>
              </div>

              <div className="ucv-modal-actions">
                <button type="button" className="ucv-modal-btn ucv-modal-btn--ghost" onClick={() => { setModalOpen(false); limpiar(); }}>
                  Cancelar
                </button>
                <button type="submit" className="ucv-modal-btn ucv-modal-btn--primary">
                  <i className="ti ti-check" aria-hidden="true" />
                  {modalMode === "add" ? "Guardar" : "Actualizar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══════ MODAL ELIMINAR ══════ */}
      {deleteTarget && (
        <div
          className="ucv-modal-overlay ucv-modal-overlay--top"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => { if (e.target === e.currentTarget) setDeleteTarget(null); }}
        >
          <div className="ucv-modal-card ucv-modal-card--sm">
            <div className="ucv-modal-header">
              <span className="ucv-modal-title">Eliminar estudiante</span>
              <button type="button" className="ucv-modal-close" onClick={() => setDeleteTarget(null)}>×</button>
            </div>
            <div className="ucv-modal-body">
              <p className="ucv-modal-delete-msg">
                ¿Estás seguro de eliminar a <strong>{deleteTarget.nombreCompleto}</strong>? Esta acción no se puede deshacer.
              </p>
              <div className="ucv-modal-actions">
                <button type="button" className="ucv-modal-btn ucv-modal-btn--ghost" onClick={() => setDeleteTarget(null)}>
                  Cancelar
                </button>
                <button type="button" className="ucv-modal-btn ucv-modal-btn--danger" onClick={handleEliminar}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
import { useState, useMemo } from "react";
import {
  useGetHorariosDisponibles,
  useInsscribirEstudiante,
  useGetInscripcionesByEstudianteId,
  useActualizarCupoHorario,
} from "../../dataconnect-generated/react";
import "../../Styles/Catalogo.css";

// ─── Helpers ──────────────────────────────────────────────────

function cupoLibre(h: any): number {
  return h.cupoMaximo - h.cupoActual;
}

function getCupoStatus(libre: number, cupoMaximo: number) {
  const pct = libre / cupoMaximo;

  if (libre === 0)
    return { label: "Sin cupo", bg: "#fff5f5", color: "#9b1c1c", bar: "#e53e3e" };

  if (pct <= 0.2)
    return {
      label: `${libre} lugar${libre > 1 ? "es" : ""}`,
      bg: "#fff8ed",
      color: "#7a3c00",
      bar: "#f59e0b",
    };

  return { label: `${libre} lugares`, bg: "#f0faf5", color: "#1a6b3c", bar: "#22c55e" };
}

function agruparPorCursoYBloque(horarios: any[]) {
  const mapa = new Map<string, { curso: any; horarios: any[] }>();

  horarios.forEach((h) => {
    const clave = `${h.curso.id}_${h.fechaInicio}_${h.fechaFin}`;
    if (!mapa.has(clave)) {
      mapa.set(clave, { curso: h.curso, horarios: [] });
    }
    mapa.get(clave)!.horarios.push(h);
  });

  const ordenDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  mapa.forEach((grupo) => {
    grupo.horarios.sort(
      (a, b) => ordenDias.indexOf(a.diaSemana) - ordenDias.indexOf(b.diaSemana)
    );
  });

  return Array.from(mapa.values());
}

// TODO: ajusta esto a cómo realmente guardas la sesión del estudiante
function obtenerEstudianteId(): string | null {
  return localStorage.getItem("estudianteInternalId");
}

// ─── Tarjeta de Curso (con su horario tipo "clase de escuela") ─

function TarjetaCurso({
  curso,
  horarios,
  yaInscrito,
  onInscribir,
}: {
  curso: any;
  horarios: any[];
  yaInscrito: boolean;
  onInscribir: (curso: any, horarios: any[]) => void;
}) {
  const cupoMaximo = horarios[0].cupoMaximo;
  const libreMinimo = Math.min(...horarios.map((h) => cupoLibre(h)));
  const st = getCupoStatus(libreMinimo, cupoMaximo);
  const sinCupo = libreMinimo === 0;
  const deshabilitado = sinCupo || yaInscrito;

  return (
    <div className="cat-card">
      {curso.urlImagen && (
        <img
          src={curso.urlImagen}
          alt={curso.nombre}
          className="cat-card-img"
          style={{
            width: "100%",
            height: 140,
            objectFit: "cover",
            borderRadius: 8,
            marginBottom: 12,
          }}
        />
      )}

      <div className="cat-card-badges">
        {curso.categoria && (
          <span className="cat-badge cat-badge--outline">{curso.categoria}</span>
        )}
        {yaInscrito && (
          <span
            className="cat-badge"
            style={{ background: "#eafaf0", color: "#1a6b3c", fontWeight: 600 }}
          >
            ✓ Ya inscrito
          </span>
        )}
      </div>

      <h3 className="cat-card-nombre">{curso.nombre}</h3>

      {curso.instructor?.usuario?.nombreCompleto && (
        <p className="cat-card-instructor">{curso.instructor.usuario.nombreCompleto}</p>
      )}

      {curso.descripcion && <p className="cat-card-desc">{curso.descripcion}</p>}

      <div className="cat-horario-semana">
        {horarios.map((h) => (
          <div key={h.id} className="cat-dia-badge">
            <span className="cat-dia-nombre">{h.diaSemana}</span>
            <span className="cat-dia-hora">{h.horaInicio} - {h.horaFin}</span>
          </div>
        ))}
      </div>

      <div className="cat-cupo-wrap">
        <div className="cat-cupo-header">
          <span className="cat-cupo-count">
            {cupoMaximo - libreMinimo}/{cupoMaximo} inscritos
          </span>
          <span className="cat-cupo-label" style={{ background: st.bg, color: st.color }}>
            {st.label}
          </span>
        </div>
        <div className="cat-progress-track">
          <div
            className="cat-progress-fill"
            style={{
              width: `${((cupoMaximo - libreMinimo) / cupoMaximo) * 100}%`,
              background: st.bar,
            }}
          />
        </div>
      </div>

      <div className="cat-card-footer">
        <button
          type="button"
          className={`cat-btn ${deshabilitado ? "cat-btn--disabled" : "cat-btn--primary"}`}
          disabled={deshabilitado}
          style={{ width: "auto", padding: "9px 16px" }}
          onClick={() => onInscribir(curso, horarios)}
        >
          {yaInscrito ? "Ya inscrito" : sinCupo ? "Sin cupo" : "Inscribirme →"}
        </button>
      </div>
    </div>
  );
}

// ─── Vista Principal ──────────────────────────────────────────

export default function CatalogoCursos() {
  const [categoria, setCategoria] = useState("Todos");
  const [soloDispon, setSoloDispon] = useState(false);

  const [cursoSeleccionado, setCursoSeleccionado] = useState<any>(null);
  const [horariosSeleccionados, setHorariosSeleccionados] = useState<any[]>([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inscribiendo, setInscribiendo] = useState(false);

  const estudianteInternalId = obtenerEstudianteId();

  const { data, isLoading, isError, refetch: refetchHorarios } = useGetHorariosDisponibles();
  const { mutateAsync: inscribir } = useInsscribirEstudiante();
  const { mutateAsync: actualizarCupo } = useActualizarCupoHorario();

  const { data: dataInscripciones, refetch: refetchInscripciones } =
    useGetInscripcionesByEstudianteId(
      { estudianteInternalId: estudianteInternalId ?? "" },
      { enabled: !!estudianteInternalId }
    );

  const cursosInscritos = useMemo(() => {
    const set = new Set<string>();
    (dataInscripciones?.inscripcions ?? []).forEach((i: any) => {
      const cursoId = i.horario?.curso?.id;
      if (cursoId) set.add(cursoId);
    });
    return set;
  }, [dataInscripciones]);

  const horarios = (data?.horarios ?? []).filter(
    (h: any) => h.estado?.toLowerCase() === "activo"
  );

  const categorias = [
    "Todos",
    ...Array.from(
      new Set(horarios.map((h: any) => h.curso.categoria).filter((c: any) => !!c))
    ),
  ];

  const cursosAgrupados = agruparPorCursoYBloque(horarios).filter(({ curso, horarios }) => {
    const pasaCategoria = categoria === "Todos" || curso.categoria === categoria;
    const libreMinimo = Math.min(...horarios.map((h) => cupoLibre(h)));
    const pasaCupo = !soloDispon || libreMinimo > 0;
    return pasaCategoria && pasaCupo;
  });

  const totalLibres = cursosAgrupados.reduce(
    (acc, { horarios }) => acc + Math.min(...horarios.map((h) => cupoLibre(h))),
    0
  );
  const sinCupo = cursosAgrupados.filter(
    ({ horarios }) => Math.min(...horarios.map((h) => cupoLibre(h))) === 0
  ).length;

  function handleInscribir(curso: any, horariosDelCurso: any[]) {
    if (cursosInscritos.has(curso.id)) {
      setError("Ya estás inscrito en este curso.");
      return;
    }

    const libreMinimo = Math.min(...horariosDelCurso.map((h) => cupoLibre(h)));
    if (libreMinimo === 0) {
      setError("Este curso ya no tiene cupo disponible.");
      return;
    }

    setCursoSeleccionado(curso);
    setHorariosSeleccionados(horariosDelCurso);
    setMostrarModal(true);
    setMensajeExito(false);
    setError(null);
  }

  async function confirmarInscripcion() {
    if (!estudianteInternalId) {
      setError("No se encontró tu sesión de estudiante. Inicia sesión de nuevo.");
      return;
    }

    if (cursoSeleccionado && cursosInscritos.has(cursoSeleccionado.id)) {
      setError("Ya estás inscrito en este curso.");
      return;
    }

    setInscribiendo(true);
    setError(null);

    try {
      // Traemos el cupo más reciente justo antes de inscribir
      const horariosFrescos = await refetchHorarios();
      const listaFresca = (horariosFrescos.data?.horarios ?? []) as any[];

      const horariosDelGrupoFrescos = horariosSeleccionados
        .map((hSel) => listaFresca.find((hFresco: any) => hFresco.id === hSel.id))
        .filter(Boolean) as any[];

      const libreMinimoFresco =
        horariosDelGrupoFrescos.length > 0
          ? Math.min(...horariosDelGrupoFrescos.map((h) => cupoLibre(h)))
          : Math.min(...horariosSeleccionados.map((h) => cupoLibre(h)));

      if (libreMinimoFresco === 0) {
        setError("Este curso ya no tiene cupo disponible.");
        setInscribiendo(false);
        return;
      }

      // Inscribe en TODOS los días/horarios de este curso, y para cada uno
      // incrementa cupoActual — esto es lo que faltaba antes.
      for (const horario of horariosSeleccionados) {
        const horarioFresco =
          horariosDelGrupoFrescos.find((h) => h.id === horario.id) ?? horario;

        await inscribir({
          inscripcionId: crypto.randomUUID(),
          estudianteInternalId,
          horarioInternalId: horario.id,
        });

        await actualizarCupo({
          horarioInternalId: horario.id,
          cupoActual: horarioFresco.cupoActual + 1,
        });
      }

      await refetchHorarios();
      await refetchInscripciones();
      setMensajeExito(true);
    } catch (e) {
      setError("No se pudo completar la inscripción. Intenta de nuevo.");
    } finally {
      setInscribiendo(false);
    }
  }

  function cerrarModal() {
    setMostrarModal(false);
    setCursoSeleccionado(null);
    setHorariosSeleccionados([]);
    setMensajeExito(false);
    setError(null);
  }

  if (isLoading) {
    return (
      <div className="cat-page">
        <p className="cat-empty">Cargando cursos...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="cat-page">
        <p className="cat-empty">Ocurrió un error al cargar los cursos.</p>
      </div>
    );
  }

  return (
    <div className="cat-page">
      <div className="cat-header">
        <p className="cat-kicker">Oferta académica</p>
        <h2 className="cat-title">Cursos disponibles</h2>
      </div>

      <div className="cat-stats">
        {[
          { val: String(cursosAgrupados.length), label: "Cursos", sub: "disponibles" },
          { val: String(totalLibres), label: "Lugares libres", sub: "en total" },
          { val: String(sinCupo), label: "Sin cupo", sub: "lista de espera" },
        ].map((s) => (
          <div key={s.label} className="cat-stat-card">
            <p className="cat-stat-val">{s.val}</p>
            <p className="cat-stat-label">{s.label}</p>
            <p className="cat-stat-sub">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="cat-toolbar">
        <div className="cat-filters">
          {categorias.map((cat: any) => (
            <button
              key={cat}
              type="button"
              className={`cat-filter-btn${categoria === cat ? " active" : ""}`}
              onClick={() => setCategoria(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <label className="cat-check-label">
          <input
            type="checkbox"
            checked={soloDispon}
            onChange={(e) => setSoloDispon(e.target.checked)}
          />
          Solo con cupo
        </label>
      </div>

      {cursosAgrupados.length === 0 ? (
        <p className="cat-empty">No hay cursos disponibles.</p>
      ) : (
        <div className="cat-grid">
          {cursosAgrupados.map(({ curso, horarios }, i) => (
            <TarjetaCurso
              key={`${curso.id}_${i}`}
              curso={curso}
              horarios={horarios}
              yaInscrito={cursosInscritos.has(curso.id)}
              onInscribir={handleInscribir}
            />
          ))}
        </div>
      )}

      {mostrarModal && cursoSeleccionado && (
        <div className="cat-modal-overlay" onClick={cerrarModal}>
          <div className="cat-modal" onClick={(e) => e.stopPropagation()}>
            {!mensajeExito ? (
              <>
                <h3>Confirmar inscripción</h3>
                <p>
                  ¿Deseas inscribirte en <strong>{cursoSeleccionado.nombre}</strong>?
                </p>
                <ul style={{ margin: "0 0 16px", paddingLeft: 18, fontSize: 14, color: "#444" }}>
                  {horariosSeleccionados.map((h) => (
                    <li key={h.id}>
                      {h.diaSemana}: {h.horaInicio} - {h.horaFin}
                    </li>
                  ))}
                </ul>
                {error && <p className="cat-error">{error}</p>}
                <div className="cat-modal-actions">
                  <button
                    type="button"
                    className="cat-btn"
                    onClick={cerrarModal}
                    disabled={inscribiendo}
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="cat-btn cat-btn--primary"
                    onClick={confirmarInscripcion}
                    disabled={inscribiendo}
                  >
                    {inscribiendo ? "Inscribiendo..." : "Confirmar"}
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3>Has sido inscrito</h3>
                <p>
                  Quedaste registrado en <strong>{cursoSeleccionado.nombre}</strong>.
                </p>
                <button
                  type="button"
                  className="cat-btn cat-btn--primary"
                  onClick={cerrarModal}
                >
                  Cerrar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
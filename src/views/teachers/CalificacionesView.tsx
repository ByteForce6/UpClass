import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/dashboardProfesor.css"; // Usa los mismos estilos base

export const CalificacionesView = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Datos simulados de alumnos para calificar
  const [alumnos, setAlumnos] = useState([
    { id: "2026001", nombre: "Ángel Santiago", tarea1: 9, examen: 8, final: 8.5 },
    { id: "2026002", nombre: "Cristofer Anthony", tarea1: 10, examen: 9, final: 9.5 },
    { id: "2026003", nombre: "María Fernanda", tarea1: 8, examen: 7, final: 7.5 },
    { id: "2026004", nombre: "Juan Carlos", tarea1: 6, examen: 8, final: 7.0 }
  ]);

  // Función rápida por si quieres simular que editas una nota
  const manejarCambioNota = (id: string, campo: string, valor: string) => {
    const notaNum = parseFloat(valor) || 0;
    setAlumnos(alumnos.map(al => {
      if (al.id === id) {
        const actualizado = { ...al, [campo]: notaNum };
        actualizado.final = parseFloat(((actualizado.tarea1 + actualizado.examen) / 2).toFixed(1));
        return actualizado;
      }
      return al;
    }));
  };

  return (
    <div className="dashboard-container">
      {/* BOTÓN HAMBURGUESA PARA MÓVILES */}
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰ Menu Profesor
      </button>

      {/* 1. SIDEBAR (MENÚ LATERAL INTACTO) */}
      <aside className={`sidebar-profesor ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>UpClass Profe</h3>
        </div>
        <nav className="sidebar-menu">
          <Link to="/teacher" className="menu-item" onClick={() => setMenuOpen(false)}>
            🏠 Inicio (Dashboard)
          </Link>
          <Link to="/teacher/calificaciones" className="menu-item active" onClick={() => setMenuOpen(false)}>
            📝 Registrar Calificaciones
          </Link>
          <hr className="sidebar-divider" />
          <Link to="/login" className="menu-item logout">
            🚪 Cerrar Sesión
          </Link>
        </nav>
      </aside>

      {/* 2. CONTENIDO PRINCIPAL CON SCROLL ACTIVADO */}
      <main className="main-content-profesor">
        <header className="content-header">
          <h2>Registro de Calificaciones</h2>
          <p>Materia: Desarrollo Web Avanzado - Grupo 401</p>
        </header>

        {/* CONTENEDOR DE LA TABLA DE CALIFICACIONES */}
        <section className="dashboard-section">
          <h3>Evaluación Continua</h3>
          <p style={{ color: "#858796", fontSize: "0.9rem", marginBottom: "20px" }}>
            * Modifica los valores directamente en las casillas. El promedio final se calcula solo.
          </p>
          
          <div className="table-responsive">
            <table className="clases-table">
              <thead>
                <tr>
                  <th>Matrícula</th>
                  <th>Nombre del Alumno</th>
                  <th>Tareas (50%)</th>
                  <th>Examen (50%)</th>
                  <th>Promedio Final</th>
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno) => (
                  <tr key={alumno.id}>
                    <td>{alumno.id}</td>
                    <td><strong>{alumno.nombre}</strong></td>
                    <td>
                      <input 
                        type="number" 
                        min="0" 
                        max="10"
                        value={alumno.tarea1} 
                        onChange={(e) => manejarCambioNota(alumno.id, "tarea1", e.target.value)}
                        style={{ width: "60px", padding: "5px", borderRadius: "4px", border: "1px solid #d1d3e2" }}
                      />
                    </td>
                    <td>
                      <input 
                        type="number" 
                        min="0" 
                        max="10"
                        value={alumno.examen} 
                        onChange={(e) => manejarCambioNota(alumno.id, "examen", e.target.value)}
                        style={{ width: "60px", padding: "5px", borderRadius: "4px", border: "1px solid #d1d3e2" }}
                      />
                    </td>
                    <td>
                      <span style={{ 
                        fontWeight: "bold", 
                        color: alumno.final >= 7 ? "#1cc88a" : "#e74a3b",
                        backgroundColor: alumno.final >= 7 ? "#ea7" : "#fcebea",
                        padding: "4px 8px",
                        borderRadius: "4px"
                      }}>
                        {alumno.final}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

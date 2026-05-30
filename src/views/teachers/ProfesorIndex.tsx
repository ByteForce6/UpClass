import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/dashboardProfesor.css";

export const ProfesorIndex = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Datos simulados para que el Dashboard tenga vida
  const estadisticas = [
    { id: 1, titulo: "Clases Activas", valor: "4", color: "#4e73df" },
    { id: 2, titulo: "Total Alumnos", valor: "118", color: "#1cc88a" },
    { id: 3, titulo: "Tareas por Revisar", valor: "15", color: "#f6c23e" },
    { id: 4, titulo: "Promedio Grupal", valor: "8.7", color: "#36b9cc" }
  ];

  const misClases = [
    { id: "INF-101", nombre: "Introducción a la Programación", horario: "Lu-Mi 08:00 - 10:00", aula: "Laboratorio B" },
    { id: "INF-204", nombre: "Estructuras de Datos", horario: "Ma-Ju 10:00 - 12:00", aula: "Aula 104" },
    { id: "INF-302", nombre: "Desarrollo Web Avanzado", horario: "Mi-Vi 12:00 - 14:00", aula: "Laboratorio de Cómputo" },
  ];

  return (
    <div className="dashboard-container">
      {/* BOTÓN HAMBURGUESA PARA MÓVILES */}
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰ Menu Profesor
      </button>

      {/* 1. SIDEBAR (MENÚ LATERAL) */}
      <aside className={`sidebar-profesor ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>UpClass Profe</h3>
        </div>
        <nav className="sidebar-menu">
          <Link to="/teacher" className="menu-item active" onClick={() => setMenuOpen(false)}>
            🏠 Inicio (Dashboard)
          </Link>
          <Link to="/teacher/calificaciones" className="menu-item" onClick={() => setMenuOpen(false)}>
            📝 Registrar Calificaciones
          </Link>
          <hr className="sidebar-divider" />
          <Link to="/login" className="menu-item logout">
            🚪 Cerrar Sesión
          </Link>
        </nav>
      </aside>

      {/* 2. CONTENIDO PRINCIPAL (DASHBOARD) */}
      <main className="main-content-profesor">
        <header className="content-header">
          <h2>Panel de Control</h2>
          <p>Bienvenido de nuevo, Profesor</p>
        </header>

        {/* CONTENEDOR DE TARJETAS (CARDS) */}
        <section className="cards-grid">
          {estadisticas.map((card) => (
            <div className="card-stat" key={card.id} style={{ borderLeft: `5px solid ${card.color}` }}>
              <div className="card-info">
                <span className="card-title" style={{ color: card.color }}>{card.titulo}</span>
                <span className="card-value">{card.valor}</span>
              </div>
            </div>
          ))}
        </section>

        {/* SECCIÓN DE CLASES */}
        <section className="dashboard-section">
          <h3>Mis Clases Asignadas</h3>
          <div className="table-responsive">
            <table className="clases-table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Materia</th>
                  <th>Horario</th>
                  <th>Aula</th>
                </tr>
              </thead>
              <tbody>
                {misClases.map((clase) => (
                  <tr key={clase.id}>
                    <td><strong>{clase.id}</strong></td>
                    <td>{clase.nombre}</td>
                    <td>{clase.horario}</td>
                    <td>{clase.aula}</td>
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
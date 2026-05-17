import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/home.css';

export const ProfesorIndex: React.FC = () => {
  // Fecha dinámica simulada
  const fechaActual = "Domingo, 17 de mayo de 2026";

  return (
    <div className="home" style={{ background: '#f8fafc', minHeight: '100vh', padding: '0' }}>
      
      {/* NAVBAR SUPERIOR TIPO DASHBOARD */}
      <header style={{
        background: 'white',
        padding: '20px 40px',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <div>
          <h4 style={{ fontSize: '14px', color: '#64748b', fontWeight: 500, marginBottom: '4px' }}>Panel de Profesor</h4>
          <h2 style={{ fontSize: '24px', color: '#0f172a', fontWeight: 700 }}>Resumen general</h2>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '14px', color: '#64748b', display: 'block' }}>{fechaActual}</span>
          <span style={{ fontSize: '14px', color: '#0F4C8A', fontWeight: 600 }}>Profesor Activo</span>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ padding: '40px 5%' }}>
        <section className="hero" style={{ minHeight: 'auto', padding: '0', gap: '40px', alignItems: 'start' }}>
          
          {/* Lado Izquierdo */}
          <div className="hero-left" style={{ marginTop: '20px' }}>
            <span className="hero-badge" style={{ background: '#e0f2fe', color: '#0369a1' }}>
              Gestión Docente
            </span>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 54px)', marginTop: '15px' }}>
              Bienvenido a tu espacio,<span> Profesor</span>
            </h1>

            <p style={{ marginTop: '20px', maxWidth: '540px' }}>
              Administra tus grupos asignados, controla el avance del temario y gestiona las calificaciones oficiales de tus estudiantes en UpClass.
            </p>

            <div className="hero-buttons" style={{ marginTop: '30px' }}>
              <Link 
                to="/teacher/calificaciones" 
                className="hero-primary" 
                style={{ 
                  textDecoration: 'none', 
                  display: 'inline-block', 
                  textAlign: 'center',
                  padding: '16px 30px',
                  borderRadius: '12px'
                }}
              >
                Evaluar Alumnos
              </Link>
            </div>
          </div>

          {/* Lado Derecho - Tarjetas de Datos tipo Admin */}
          <div className="hero-right" style={{ width: '100%', maxWidth: '500px', marginTop: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%' }}>
              
              {/* Card 1 */}
              <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <span style={{ color: '#64748b', fontSize: '14px', fontWeight: 500 }}>Grupos Activos</span>
                <h3 style={{ fontSize: '36px', color: '#0F4C8A', marginTop: '8px', fontWeight: 700 }}>03</h3>
              </div>

              {/* Card 2 */}
              <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <span style={{ color: '#64748b', fontSize: '14px', fontWeight: 500 }}>Alumnos Totales</span>
                <h3 style={{ fontSize: '36px', color: '#0F4C8A', marginTop: '8px', fontWeight: 700 }}>74</h3>
              </div>

              {/* Card Grande Decorativa */}
              <div style={{ 
                gridColumn: '1 / -1', 
                background: 'linear-gradient(135deg, #0F4C8A 0%, #0b3b6c 100%)', 
                padding: '24px', 
                borderRadius: '16px', 
                color: 'white',
                boxShadow: '0 10px 15px -3px rgba(15, 76, 138, 0.2)' 
              }}>
                <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>Recordatorio de Cierre</h4>
                <p style={{ color: '#e0f2fe', fontSize: '14px', lineHeight: '1.5' }}>
                  El periodo de evaluación del primer parcial cierra el próximo viernes. Asegúrate de sincronizar todas las notas pendientes.
                </p>
              </div>

            </div>
          </div>

        </section>
      </main>
    </div>
  );
};
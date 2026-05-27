import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/home.css';

interface Alumno {
  id: number;
  nombre: string;
  curso: string;
  calificacion: number;
}

export const CalificacionesView: React.FC = () => {
  const [alumnos] = useState<Alumno[]>([
    { id: 1, nombre: 'Ana García', curso: 'Programación Web', calificacion: 9.5 },
    { id: 2, nombre: 'Carlos López', curso: 'Bases de Datos', calificacion: 7.0 },
    { id: 3, nombre: 'María Martínez', curso: 'Programación Web', calificacion: 8.8 },
    { id: 4, nombre: 'Juan Escutia', curso: 'Diseño UX/UI', calificacion: 6.5 },
  ]);

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
          <h2 style={{ fontSize: '24px', color: '#0f172a', fontWeight: 700 }}>Registro Escolar</h2>
        </div>
        <div>
          <Link 
            to="/teacher" 
            className="hero-secondary" 
            style={{ 
              textDecoration: 'none', 
              padding: '10px 20px', 
              borderRadius: '10px', 
              fontSize: '14px',
              display: 'inline-block'
            }}
          >
            ← Volver al Inicio
          </Link>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ padding: '40px 5%' }}>
        <div className="courses-header" style={{ marginBottom: '10px', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2 style={{ fontSize: '28px', color: '#0F4C8A', fontWeight: 700 }}>Calificaciones del Grupo</h2>
        </div>
        
        <p style={{ color: '#64748b', marginBottom: '30px', fontSize: '15px' }}>
          Asignación y revisión de notas correspondientes al ciclo actual.
        </p>

        {/* CONTENEDOR DE LA TABLA */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '10px', 
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
          overflowX: 'auto',
          width: '100%'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'Inter, sans-serif', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #edf2f7' }}>
                <th style={{ padding: '16px', color: '#475569', fontWeight: '600', fontSize: '14px' }}>ID</th>
                <th style={{ padding: '16px', color: '#475569', fontWeight: '600', fontSize: '14px' }}>Nombre del Alumno</th>
                <th style={{ padding: '16px', color: '#475569', fontWeight: '600', fontSize: '14px' }}>Curso asignado</th>
                <th style={{ padding: '16px', color: '#475569', fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>Nota Final</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno) => (
                <tr key={alumno.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '16px', color: '#64748b', fontWeight: '500' }}>#{alumno.id}</td>
                  <td style={{ padding: '16px', color: '#0f172a', fontWeight: '600' }}>{alumno.nombre}</td>
                  <td style={{ padding: '16px', color: '#475569' }}>{alumno.curso}</td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <span style={{ 
                      padding: '6px 14px', 
                      borderRadius: '8px', 
                      fontWeight: '700',
                      fontSize: '14px',
                      background: alumno.calificacion >= 8 ? '#d1fae5' : '#fee2e2', 
                      color: alumno.calificacion >= 8 ? '#065f46' : '#991b1b',
                      display: 'inline-block'
                    }}>
                      {alumno.calificacion.toFixed(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
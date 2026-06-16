import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import "../Styles/login.css"; 

export default function Login() {
    // 1. Estados para capturar los datos de los inputs
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [nombre, setNombre] = useState(''); // Lo usaremos si decide registrarse

    // 2. Control de pantalla dinámica (Login / Registro)
    const [isRegister, setIsRegister] = useState(false);
    
    // 3. Traemos la lógica de nuestro Custom Hook
    const { executeLogin, loading, error } = useAuth();

    // 4. Manejador del envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (isRegister) {
            // LÓGICA DE REGISTRO
            if (!correo || !clave || !nombre) return;
            console.log("Registrando usuario con:", { nombre, correo, clave });
            // Aquí llamarías a una función executeRegister si la creas en tu hook
        } else {
            // LÓGICA DE INICIO DE SESIÓN
            if (!correo || !clave) return;
            executeLogin({ correo, clave });
        }
    };

    return (
        <div className="login-page">

            {/* LEFT */}
            <div className="login-left">
                <div className="login-overlay"></div>
                <div className="login-left-content">
                    <span>BIENVENIDO A</span>
                    <h1>UpClass</h1>
                    <p>
                        Gestiona cursos, estudiantes y aprendizaje
                        desde una plataforma moderna y accesible.
                    </p>
                </div>
            </div>

            {/* RIGHT */}
            <div className="login-right">
                <div className={`login-card ${isRegister ? "active" : ""}`}>

                    <Link to="/" className="login-back">
                        ← Volver
                    </Link>

                    {/* TITLE DINÁMICO */}
                    <h2>
                        {isRegister ? "Crear cuenta" : "Iniciar sesión"}
                    </h2>

                    <p className="login-subtitle">
                        {isRegister
                            ? "Regístrate para acceder a UpClass"
                            : "Ingresa tus datos para continuar"}
                    </p>

                    {/* MENSAJE DE ERROR DEL BACKEND */}
                    {error && <p className="error-alert" style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}

                    {/* 5. Conectamos el evento onSubmit al formulario */}
                    <form className="login-form" onSubmit={handleSubmit}>

                        {/* NOMBRE SOLO EN REGISTER */}
                        {isRegister && (
                            <div className="login-input-group">
                                <label>Nombre completo</label>
                                <input 
                                    type="text" 
                                    placeholder="Juan Pérez" 
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    disabled={loading}
                                />
                            </div>
                        )}

                        <div className="login-input-group">
                            <label>Correo electrónico</label>
                            <input
                                type="email"
                                placeholder="ejemplo@upclass.com"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div className="login-input-group">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={clave}
                                onChange={(e) => setClave(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        {/* BOTÓN DINÁMICO (Se deshabilita mientras carga) */}
                        <button className="login-btn" type="submit" disabled={loading}>
                            {loading ? "Cargando..." : (isRegister ? "Crear cuenta" : "Entrar")}
                        </button>

                    </form>

                    {/* SWITCH LOGIN / REGISTER */}
                    <div className="login-divider">
                        <span>
                            {isRegister
                                ? "¿Ya tienes cuenta?"
                                : "¿Aún no tienes cuenta?"}
                        </span>
                    </div>

                    <button
                        type="button"
                        className="login-register-btn"
                        onClick={() => setIsRegister(!isRegister)}
                        disabled={loading}
                    >
                        {isRegister ? "Iniciar sesión" : "Crear cuenta"}
                    </button>

                    {/* SOCIAL */}
                    <div className="login-divider">
                        <span>o continuar con</span>
                    </div>

                    <div className="login-socials">
                        <button type="button" disabled={loading}>
                            <i className="ti ti-brand-google"></i>
                            Google
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}
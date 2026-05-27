import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/login.css";

export default function Login() {

    const [isRegister] = useState(false);

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

                    <form className="login-form">

                        {/* NOMBRE SOLO EN REGISTER */}
                        {isRegister && (
                            <div className="login-input-group">
                                <label>Nombre completo</label>
                                <input type="text" placeholder="Juan Pérez" />
                            </div>
                        )}

                        <div className="login-input-group">
                            <label>Correo electrónico</label>
                            <input
                                type="email"
                                placeholder="ejemplo@upclass.com"
                            />
                        </div>

                        <div className="login-input-group">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* BOTÓN DINÁMICO */}
                        <button className="login-btn">
                            Entrar
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
}
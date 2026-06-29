import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useAuth } from "../hooks/useAuth";
import "../Styles/login.css";

export default function Login() {
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    const rol = localStorage.getItem("rol");

    if (token && rol) {
      if (rol === "admin") navigate("/admin", { replace: true });
      else if (rol === "student") navigate("/students", { replace: true });
      else if (rol === "teacher") navigate("/teacher", { replace: true });
      else navigate("/", { replace: true });
    }
  }, [navigate]);

  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [showClave, setShowClave] = useState(false);

  // login | recover
  const [mode, setMode] = useState<"login" | "recover">("login");
  const isRecover = mode === "recover";

  const { executeLogin, loading, error } = useAuth();

  const [recoverySent, setRecoverySent] = useState(false);

  // limpiar mensajes al cambiar de modo
  const recoveryMessage = recoverySent
    ? "Listo: te llegará un enlace de recuperación al correo."
    : "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!correo) return;

    if (!isRecover) {
      if (!clave) return;
      executeLogin({ correo, clave });
      return;
    }

    // Recuperación (por ahora solo UI)
    setRecoverySent(true);
  };

  return (
    <div className="login-page">
      {/* LEFT */}
      <div className="login-left">
        <div className="login-overlay" />
        <div className="login-left-content">
          <span>BIENVENIDO A</span>
          <h1>UpClass</h1>
          <p>
            Gestiona cursos, estudiantes y aprendizaje desde una plataforma
            moderna y accesible.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <div className="login-card">
          <Link to="/" className="login-back">
            ← Volver
          </Link>

          <h2>{isRecover ? "Recuperar contraseña" : "Iniciar sesión"}</h2>

          <p className="login-subtitle">
            {isRecover
              ? "Ingresa tu correo y te enviaremos un enlace de recuperación"
              : "Ingresa tus datos para continuar"}
          </p>

          {!isRecover && error && (
            <p
              className="error-alert"
              style={{ color: "red", marginBottom: "15px" }}
            >
              {error}
            </p>
          )}

          {recoveryMessage && (
            <p style={{ color: "#1D9E75", marginBottom: 15 }}>
              {recoveryMessage}
            </p>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
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

            {!isRecover && (
              <div className="login-input-group">
                <label>Contraseña</label>
                <div className="login-password-wrapper">
                  <input
                    type={showClave ? "text" : "password"}
                    placeholder="••••••••"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                    disabled={loading}
                  />

                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() => setShowClave((v) => !v)}
                    disabled={loading}
                    aria-label={
                      showClave ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                  >
                    {showClave ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
            )}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Cargando..." : isRecover ? "Enviar correo" : "Entrar"}
            </button>
          </form>

          <div className="login-divider">
            {isRecover ? (
              <button
                type="button"
                className="login-link-btn"
                onClick={() => {
                  setRecoverySent(false);
                  setMode("login");
                }}
                disabled={loading}
              >
                ¿Ya puedes iniciar sesión?
              </button>
            ) : (
              <button
                type="button"
                className="login-link-btn"
                onClick={() => {
                  setRecoverySent(false);
                  setMode("recover");
                }}
                disabled={loading}
              >
                ¿Olvidaste tu contraseña?
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

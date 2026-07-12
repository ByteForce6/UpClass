// useAuth.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";  // 👈
import { loginAPI } from "../services/auth.service";
import { type LoginCredentials } from "../Types/auth.types";

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();  // 👈

  const executeLogin = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loginAPI(credentials);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.usuario));
      localStorage.setItem("rol", data.usuario.rol);

      if (data.usuario.estudianteInternalId) {
        localStorage.setItem("estudianteInternalId", data.usuario.estudianteInternalId);
      }
      // 👇 replace: true evita que el login quede en el historial
      if (data.usuario.rol === "admin") navigate("/admin", { replace: true });
      else if (data.usuario.rol === "student") navigate("/students", { replace: true });
      else if (data.usuario.rol === "teacher") navigate("/teacher", { replace: true });
      else navigate("/", { replace: true });

    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Ocurrió un error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return { executeLogin, loading, error };
};
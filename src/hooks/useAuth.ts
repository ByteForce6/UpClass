// src/hooks/useAuth.ts
import { useState } from "react";
import { loginAPI } from "../services/auth.service";
import { type LoginCredentials } from "../Types/auth.types";

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const executeLogin = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loginAPI(credentials);

      // 1. Guardamos los datos en el localStorage para mantener la sesión activa
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.usuario));
      localStorage.setItem("rol", data.usuario.rol); 

      // 2. REDIRECCIÓN DINÁMICA SEGÚN EL ROL DE FIREBASE 🚀
      if (data.usuario.rol === "admin") {
        window.location.href = "/admin";
      } else if (data.usuario.rol === "student") {
        window.location.href = "/students";
      } else if (data.usuario.rol === "teacher") {
        window.location.href = "/teacher"; 
      } else {
        window.location.href = "/";
      }

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error inesperado");
      }
    } finally {
      setLoading(false);
    }
  };

  return { executeLogin, loading, error };
};
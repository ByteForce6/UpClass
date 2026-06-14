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

      // 1. Guardamos el token en el almacenamiento del navegador para mantener la sesión
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.usuario));
      localStorage.setItem("rol", data.usuario.rol); // Guardamos el rol para control de acceso

      if (data.usuario.rol === "admin") {
        window.location.href = "/admin";
      } else if (data.usuario.rol === "student") {
        window.location.href = "/students";
      }
      // 2. Redirigimos al usuario a la pantalla principal de tu app
    } catch (err: unknown) {
      // Validamos si el error es un objeto que tiene la propiedad 'message'
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

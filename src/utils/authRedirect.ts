import type { NavigateFunction } from "react-router-dom";

export type AppRole = "admin" | "student" | "teacher";

export type StoredSession = {
  token: string;
  user: {
    id: string;
    nombre: string;
    correo: string;
    rol: string;
  };
  rol: string;
};

const getStoredSession = (): StoredSession | null => {
  const token = localStorage.getItem("token") ?? "";
  const rawUser = localStorage.getItem("user");
  const rol = localStorage.getItem("rol") ?? "";

  if (!token || !rawUser || !rol) return null;

  try {
    const user = JSON.parse(rawUser);
    if (!user?.rol) return null;

    return { token, user, rol };
  } catch {
    return null;
  }
};

export const getSessionRole = (): AppRole | null => {
  const session = getStoredSession();
  if (!session) return null;

  const r = session.rol;
  if (r === "admin" || r === "student" || r === "teacher") return r;
  return null;
};

export const signOut = (navigate: NavigateFunction) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("rol");
  navigate("/");
};

export const requireRole = (
  roleAllowed: AppRole[],
  navigate: NavigateFunction
) => {
  const session = getStoredSession();
  const role = session ? (session.rol as AppRole) : null;

  // Sin sesión o rol inválido => /home
  if (!session || !role || !roleAllowed.includes(role)) {
    navigate("/");
    return false;
  }

  // Si el rol local no coincide con el rol dentro del user, también mandamos a /home
  if (session.user?.rol && session.user.rol !== role) {
    navigate("/");
    return false;
  }

  return true;
};
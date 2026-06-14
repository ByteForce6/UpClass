// src/types/auth.types.ts

// Lo que tu formulario le envía al backend
export interface LoginCredentials {
  correo: string;
  clave: string;
}

// Lo que tu backend le responde a React si el login es correcto
export interface AuthResponse {
  token: string;
  usuario: {
    id: number;
    nombre: string;
    correo: string;
    rol: string;
  };
}
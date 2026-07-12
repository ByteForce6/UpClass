export interface LoginCredentials {
  correo: string;
  clave: string;
}

export interface AuthResponse {
  token: string;
  usuario: {
    id: string;
    nombre: string;
    correo: string;
    rol: string;
     estudianteInternalId?: string;
  };
}
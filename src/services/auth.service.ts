import { type LoginCredentials, type AuthResponse } from '../Types/auth.types';

const USUARIOS_PRUEBA = [
  {
    id: 1,
    nombre: 'Cristofer Antonio',
    correo: 'cristofer@upclass.com',
    clave: '123456',
    rol: 'admin'
  },
  {
    id: 2,
    nombre: 'Diego Pérez',
    correo: 'diego@upclass.com',
    clave: '654321',
    rol: 'student'
  },
  {
     id: 3,
    nombre: 'María González',
    correo: 'maria@upclass.com',
    clave: '987654',
    rol: 'teacher'
  }
];

export const loginAPI = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // Simulamos el tiempo de espera del servidor
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Buscamos si existe un usuario en el array que coincida con el correo y la clave
  const usuarioEncontrado = USUARIOS_PRUEBA.find(
    (u) => u.correo === credentials.correo && u.clave === credentials.clave
  );

  // Si lo encontramos, devolvemos sus datos dinámicamente
  if (usuarioEncontrado) {
    return {
      token: `token_falso_upclass_session_${usuarioEncontrado.id}`,
      usuario: {
        id: usuarioEncontrado.id,
        nombre: usuarioEncontrado.nombre,
        correo: usuarioEncontrado.correo,
        rol: usuarioEncontrado.rol // Enviamos su rol (student o teacher)
      },
    };
  } else {
    // Si no se encuentra a nadie en el array, disparamos el error
    throw new Error('El correo electrónico o la contraseña son incorrectos.');
  }
};
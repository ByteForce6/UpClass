import { type LoginCredentials, type AuthResponse } from '../Types/auth.types';
import { dataConnect } from '../../firebase';
import { executeQuery } from 'firebase/data-connect';
import { getUsuarioByCorreoRef, type GetUsuarioByCorreoVariables } from '@dataconnect/generated';
import bcrypt from 'bcryptjs';

export const loginAPI = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  try {
    // Dev fixtures (para pruebas rápidas en local)
    // Contraseña para todas: 123456
    // Admin: admin@upclass.com
    // Profesor/Instructor: alberto.gomez@upclass.com
    // Estudiante/Alumno: carlos.mendoza@upclass.com
    const correoFixture = credentials.correo?.toLowerCase().trim() ?? "";
    const claveFixture = credentials.clave ?? "";

    if (claveFixture === "123456") {
      const rol =
        correoFixture === "admin@upclass.com"
          ? "admin"
          : correoFixture === "alberto.gomez@upclass.com"
            ? "teacher"
            : correoFixture === "carlos.mendoza@upclass.com"
              ? "student"
              : null;

      if (rol) {
        return {
          token: `firebase_session_token_${correoFixture}`,
          usuario: {
            id: `fixture_${correoFixture}`,
            nombre:
              rol === "admin"
                ? "Administrador"
                : rol === "teacher"
                  ? "Alberto Gómez"
                  : "Carlos Mendoza",
            correo: correoFixture,
            rol,
          },
        };
      }
    }

    const correoBuscar = credentials.correo?.toLowerCase().trim() ?? '';
    if (!correoBuscar) throw new Error('El correo electrónico es obligatorio.');

    // 1. Ejecutamos la query generada por Data Connect
    const variables: GetUsuarioByCorreoVariables = { correo: correoBuscar };
    const resultado = await executeQuery(getUsuarioByCorreoRef(dataConnect, variables));

    const listaUsuarios = resultado.data?.usuarios || [];

    // 3. Validamos si el correo existe en el sistema
    if (listaUsuarios.length === 0) {
      throw new Error('El correo electrónico no está registrado.');
    }

    const usuarioFirebase = listaUsuarios[0];

    // 4. Validamos contraseña contra el hash real almacenado en BD
    if (!usuarioFirebase.passwordHash) {
      throw new Error('No se encontró una contraseña válida para este usuario.');
    }

    const esPasswordValido = await bcrypt.compare(
      credentials.clave,
      usuarioFirebase.passwordHash,
    );

    if (!esPasswordValido) {
      throw new Error('La contraseña es incorrecta.');
    }

    // 5. Retornamos los datos DINÁMICOS mapeando el rol real de la BD ("admin", "teacher", "student")
    return {
      token: `firebase_session_token_${usuarioFirebase.usuarioId}`,
      usuario: {
        id: usuarioFirebase.usuarioId,
        nombre: usuarioFirebase.nombreCompleto,
        correo: usuarioFirebase.correo,
        rol: usuarioFirebase.rol.nombre,
      },
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message, { cause: error });
    }
    throw new Error('Error al conectar con el servicio de autenticación de Firebase.', { cause: error });
  }
};

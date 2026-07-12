# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useGetUsuarioByCorreo, useGetEstudianteByUsuarioInternalId, useListarEstudiantes, useCrearEstudiante, useActualizarEstudiante, useActualizarEstudianteSinCorreo, useActualizarPasswordUsuario, useEliminarEstudiante, useListInstructors, useGetRolByNumero } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useGetUsuarioByCorreo(getUsuarioByCorreoVars);

const { data, isPending, isSuccess, isError, error } = useGetEstudianteByUsuarioInternalId(getEstudianteByUsuarioInternalIdVars);

const { data, isPending, isSuccess, isError, error } = useListarEstudiantes();

const { data, isPending, isSuccess, isError, error } = useCrearEstudiante(crearEstudianteVars);

const { data, isPending, isSuccess, isError, error } = useActualizarEstudiante(actualizarEstudianteVars);

const { data, isPending, isSuccess, isError, error } = useActualizarEstudianteSinCorreo(actualizarEstudianteSinCorreoVars);

const { data, isPending, isSuccess, isError, error } = useActualizarPasswordUsuario(actualizarPasswordUsuarioVars);

const { data, isPending, isSuccess, isError, error } = useEliminarEstudiante(eliminarEstudianteVars);

const { data, isPending, isSuccess, isError, error } = useListInstructors();

const { data, isPending, isSuccess, isError, error } = useGetRolByNumero(getRolByNumeroVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { getUsuarioByCorreo, getEstudianteByUsuarioInternalId, listarEstudiantes, crearEstudiante, actualizarEstudiante, actualizarEstudianteSinCorreo, actualizarPasswordUsuario, eliminarEstudiante, listInstructors, getRolByNumero } from '@dataconnect/generated';


// Operation GetUsuarioByCorreo:  For variables, look at type GetUsuarioByCorreoVars in ../index.d.ts
const { data } = await GetUsuarioByCorreo(dataConnect, getUsuarioByCorreoVars);

// Operation GetEstudianteByUsuarioInternalId:  For variables, look at type GetEstudianteByUsuarioInternalIdVars in ../index.d.ts
const { data } = await GetEstudianteByUsuarioInternalId(dataConnect, getEstudianteByUsuarioInternalIdVars);

// Operation ListarEstudiantes: 
const { data } = await ListarEstudiantes(dataConnect);

// Operation CrearEstudiante:  For variables, look at type CrearEstudianteVars in ../index.d.ts
const { data } = await CrearEstudiante(dataConnect, crearEstudianteVars);

// Operation ActualizarEstudiante:  For variables, look at type ActualizarEstudianteVars in ../index.d.ts
const { data } = await ActualizarEstudiante(dataConnect, actualizarEstudianteVars);

// Operation ActualizarEstudianteSinCorreo:  For variables, look at type ActualizarEstudianteSinCorreoVars in ../index.d.ts
const { data } = await ActualizarEstudianteSinCorreo(dataConnect, actualizarEstudianteSinCorreoVars);

// Operation ActualizarPasswordUsuario:  For variables, look at type ActualizarPasswordUsuarioVars in ../index.d.ts
const { data } = await ActualizarPasswordUsuario(dataConnect, actualizarPasswordUsuarioVars);

// Operation EliminarEstudiante:  For variables, look at type EliminarEstudianteVars in ../index.d.ts
const { data } = await EliminarEstudiante(dataConnect, eliminarEstudianteVars);

// Operation ListInstructors: 
const { data } = await ListInstructors(dataConnect);

// Operation GetRolByNumero:  For variables, look at type GetRolByNumeroVars in ../index.d.ts
const { data } = await GetRolByNumero(dataConnect, getRolByNumeroVars);


```
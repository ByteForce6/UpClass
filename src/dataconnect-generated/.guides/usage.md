# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useGetUsuarioByCorreo, useBuscarEstudiantePorMatricula, useBuscarEstudiantePorNombre, useListarEstudiantes, useListInstructors, useGetRolByNumero, useCreateInstructor, useUpdateInstructor, useDeleteInstructor, useListCursos } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useGetUsuarioByCorreo(getUsuarioByCorreoVars);

const { data, isPending, isSuccess, isError, error } = useBuscarEstudiantePorMatricula(buscarEstudiantePorMatriculaVars);

const { data, isPending, isSuccess, isError, error } = useBuscarEstudiantePorNombre(buscarEstudiantePorNombreVars);

const { data, isPending, isSuccess, isError, error } = useListarEstudiantes();

const { data, isPending, isSuccess, isError, error } = useListInstructors();

const { data, isPending, isSuccess, isError, error } = useGetRolByNumero(getRolByNumeroVars);

const { data, isPending, isSuccess, isError, error } = useCreateInstructor(createInstructorVars);

const { data, isPending, isSuccess, isError, error } = useUpdateInstructor(updateInstructorVars);

const { data, isPending, isSuccess, isError, error } = useDeleteInstructor(deleteInstructorVars);

const { data, isPending, isSuccess, isError, error } = useListCursos();

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
import { getUsuarioByCorreo, buscarEstudiantePorMatricula, buscarEstudiantePorNombre, listarEstudiantes, listInstructors, getRolByNumero, createInstructor, updateInstructor, deleteInstructor, listCursos } from '@dataconnect/generated';


// Operation GetUsuarioByCorreo:  For variables, look at type GetUsuarioByCorreoVars in ../index.d.ts
const { data } = await GetUsuarioByCorreo(dataConnect, getUsuarioByCorreoVars);

// Operation BuscarEstudiantePorMatricula:  For variables, look at type BuscarEstudiantePorMatriculaVars in ../index.d.ts
const { data } = await BuscarEstudiantePorMatricula(dataConnect, buscarEstudiantePorMatriculaVars);

// Operation BuscarEstudiantePorNombre:  For variables, look at type BuscarEstudiantePorNombreVars in ../index.d.ts
const { data } = await BuscarEstudiantePorNombre(dataConnect, buscarEstudiantePorNombreVars);

// Operation ListarEstudiantes: 
const { data } = await ListarEstudiantes(dataConnect);

// Operation ListInstructors: 
const { data } = await ListInstructors(dataConnect);

// Operation GetRolByNumero:  For variables, look at type GetRolByNumeroVars in ../index.d.ts
const { data } = await GetRolByNumero(dataConnect, getRolByNumeroVars);

// Operation CreateInstructor:  For variables, look at type CreateInstructorVars in ../index.d.ts
const { data } = await CreateInstructor(dataConnect, createInstructorVars);

// Operation UpdateInstructor:  For variables, look at type UpdateInstructorVars in ../index.d.ts
const { data } = await UpdateInstructor(dataConnect, updateInstructorVars);

// Operation DeleteInstructor:  For variables, look at type DeleteInstructorVars in ../index.d.ts
const { data } = await DeleteInstructor(dataConnect, deleteInstructorVars);

// Operation ListCursos: 
const { data } = await ListCursos(dataConnect);


```
# Generated React README
This README will guide you through the process of using the generated React SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `JavaScript README`, you can find it at [`dataconnect-generated/README.md`](../README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@dataconnect/generated/react` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#react).

# Table of Contents
- [**Overview**](#generated-react-readme)
- [**TanStack Query Firebase & TanStack React Query**](#tanstack-query-firebase-tanstack-react-query)
  - [*Package Installation*](#installing-tanstack-query-firebase-and-tanstack-react-query-packages)
  - [*Configuring TanStack Query*](#configuring-tanstack-query)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUsuarioByCorreo*](#getusuariobycorreo)
  - [*GetEstudianteByUsuarioInternalId*](#getestudiantebyusuariointernalid)
  - [*ListarEstudiantes*](#listarestudiantes)
  - [*ListInstructors*](#listinstructors)
  - [*GetRolByNumero*](#getrolbynumero)
  - [*ListCursos*](#listcursos)
  - [*BuscarCursoPorNombre*](#buscarcursopornombre)
  - [*CursosPorCategoria*](#cursosporcategoria)
  - [*CursosPorEstado*](#cursosporestado)
  - [*ListHorarios*](#listhorarios)
  - [*BuscarHorarioPorCurso*](#buscarhorarioporcurso)
  - [*HorariosPorDia*](#horariospordia)
  - [*HorariosPorEstado*](#horariosporestado)
  - [*ListInscripcionesActivas*](#listinscripcionesactivas)
  - [*ListCursosEstadisticas*](#listcursosestadisticas)
  - [*ListHorariosEstadisticas*](#listhorariosestadisticas)
  - [*ListHorariosPorEstado*](#listhorariosporestado)
  - [*ListInscripciones*](#listinscripciones)
  - [*ListInscripcionesPorEstado*](#listinscripcionesporestado)
  - [*ListAsistencias*](#listasistencias)
  - [*ListAsistenciasPorEstado*](#listasistenciasporestado)
  - [*ListReportesEstadisticas*](#listreportesestadisticas)
  - [*ListReportesPorPeriodo*](#listreportesporperiodo)
  - [*ListReportesPorCurso*](#listreportesporcurso)
  - [*GetCursoInternalId*](#getcursointernalid)
  - [*GetInscripcionesByEstudiante*](#getinscripcionesbyestudiante)
  - [*GetInscripcionesByEstudianteId*](#getinscripcionesbyestudianteid)
  - [*GetHorariosDisponibles*](#gethorariosdisponibles)
- [**Mutations**](#mutations)
  - [*CrearEstudiante*](#crearestudiante)
  - [*ActualizarEstudiante*](#actualizarestudiante)
  - [*ActualizarEstudianteSinCorreo*](#actualizarestudiantesincorreo)
  - [*ActualizarPasswordUsuario*](#actualizarpasswordusuario)
  - [*EliminarEstudiante*](#eliminarestudiante)
  - [*CreateInstructor*](#createinstructor)
  - [*UpdateInstructor*](#updateinstructor)
  - [*DeleteInstructor*](#deleteinstructor)
  - [*CreateCurso*](#createcurso)
  - [*UpdateCurso*](#updatecurso)
  - [*DeleteCurso*](#deletecurso)
  - [*CreateHorario*](#createhorario)
  - [*UpdateHorario*](#updatehorario)
  - [*DeleteHorario*](#deletehorario)
  - [*ActualizarCupoHorario*](#actualizarcupohorario)
  - [*CreateReporteEstadistica*](#createreporteestadistica)
  - [*UpdateReporteEstadistica*](#updatereporteestadistica)
  - [*InsscribirEstudiante*](#insscribirestudiante)
  - [*CancelarInscripcion*](#cancelarinscripcion)

# TanStack Query Firebase & TanStack React Query
This SDK provides [React](https://react.dev/) hooks generated specific to your application, for the operations found in the connector `example`. These hooks are generated using [TanStack Query Firebase](https://react-query-firebase.invertase.dev/) by our partners at Invertase, a library built on top of [TanStack React Query v5](https://tanstack.com/query/v5/docs/framework/react/overview).

***You do not need to be familiar with Tanstack Query or Tanstack Query Firebase to use this SDK.*** However, you may find it useful to learn more about them, as they will empower you as a user of this Generated React SDK.

## Installing TanStack Query Firebase and TanStack React Query Packages
In order to use the React generated SDK, you must install the `TanStack React Query` and `TanStack Query Firebase` packages.
```bash
npm i --save @tanstack/react-query @tanstack-query-firebase/react
```
```bash
npm i --save firebase@latest # Note: React has a peer dependency on ^11.3.0
```

You can also follow the installation instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#tanstack-install), or the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react) and [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/installation).

## Configuring TanStack Query
In order to use the React generated SDK in your application, you must wrap your application's component tree in a `QueryClientProvider` component from TanStack React Query. None of your generated React SDK hooks will work without this provider.

```javascript
import { QueryClientProvider } from '@tanstack/react-query';

// Create a TanStack Query client instance
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}
```

To learn more about `QueryClientProvider`, see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/quick-start) and the [TanStack Query Firebase documentation](https://invertase.docs.page/tanstack-query-firebase/react#usage).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#emulator-react-angular).

```javascript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) using the hooks provided from your generated React SDK.

# Queries

The React generated SDK provides Query hook functions that call and return [`useDataConnectQuery`](https://react-query-firebase.invertase.dev/react/data-connect/querying) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and the most recent data returned by the Query, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/querying).

TanStack React Query caches the results of your Queries, so using the same Query hook function in multiple places in your application allows the entire application to automatically see updates to that Query's data.

Query hooks execute their Queries automatically when called, and periodically refresh, unless you change the `queryOptions` for the Query. To learn how to stop a Query from automatically executing, including how to make a query "lazy", see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries).

To learn more about TanStack React Query's Queries, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/queries).

## Using Query Hooks
Here's a general overview of how to use the generated Query hooks in your code:

- If the Query has no variables, the Query hook function does not require arguments.
- If the Query has any required variables, the Query hook function will require at least one argument: an object that contains all the required variables for the Query.
- If the Query has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Query's variables are optional, the Query hook function does not require any arguments.
- Query hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Query hooks functions can be called with or without passing in an `options` argument of type `useDataConnectQueryOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/query-options).
  - ***Special case:***  If the Query has all optional variables and you would like to provide an `options` argument to the Query hook function without providing any variables, you must pass `undefined` where you would normally pass the Query's variables, and then may provide the `options` argument.

Below are examples of how to use the `example` connector's generated Query hook functions to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## GetUsuarioByCorreo
You can execute the `GetUsuarioByCorreo` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetUsuarioByCorreo(dc: DataConnect, vars: GetUsuarioByCorreoVariables, options?: useDataConnectQueryOptions<GetUsuarioByCorreoData>): UseDataConnectQueryResult<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetUsuarioByCorreo(vars: GetUsuarioByCorreoVariables, options?: useDataConnectQueryOptions<GetUsuarioByCorreoData>): UseDataConnectQueryResult<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;
```

### Variables
The `GetUsuarioByCorreo` Query requires an argument of type `GetUsuarioByCorreoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetUsuarioByCorreoVariables {
  correo: string;
}
```
### Return Type
Recall that calling the `GetUsuarioByCorreo` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetUsuarioByCorreo` Query is of type `GetUsuarioByCorreoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetUsuarioByCorreoData {
  usuarios: ({
    id: UUIDString;
    usuarioId: string;
    nombreCompleto: string;
    correo: string;
    passwordHash: string;
    rol: {
      nombre: string;
    };
  } & Usuario_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetUsuarioByCorreo`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetUsuarioByCorreoVariables } from '@dataconnect/generated';
import { useGetUsuarioByCorreo } from '@dataconnect/generated/react'

export default function GetUsuarioByCorreoComponent() {
  // The `useGetUsuarioByCorreo` Query hook requires an argument of type `GetUsuarioByCorreoVariables`:
  const getUsuarioByCorreoVars: GetUsuarioByCorreoVariables = {
    correo: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetUsuarioByCorreo(getUsuarioByCorreoVars);
  // Variables can be defined inline as well.
  const query = useGetUsuarioByCorreo({ correo: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetUsuarioByCorreo(dataConnect, getUsuarioByCorreoVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetUsuarioByCorreo(getUsuarioByCorreoVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetUsuarioByCorreo(dataConnect, getUsuarioByCorreoVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.usuarios);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetEstudianteByUsuarioInternalId
You can execute the `GetEstudianteByUsuarioInternalId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetEstudianteByUsuarioInternalId(dc: DataConnect, vars: GetEstudianteByUsuarioInternalIdVariables, options?: useDataConnectQueryOptions<GetEstudianteByUsuarioInternalIdData>): UseDataConnectQueryResult<GetEstudianteByUsuarioInternalIdData, GetEstudianteByUsuarioInternalIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetEstudianteByUsuarioInternalId(vars: GetEstudianteByUsuarioInternalIdVariables, options?: useDataConnectQueryOptions<GetEstudianteByUsuarioInternalIdData>): UseDataConnectQueryResult<GetEstudianteByUsuarioInternalIdData, GetEstudianteByUsuarioInternalIdVariables>;
```

### Variables
The `GetEstudianteByUsuarioInternalId` Query requires an argument of type `GetEstudianteByUsuarioInternalIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetEstudianteByUsuarioInternalIdVariables {
  usuarioInternalId: UUIDString;
}
```
### Return Type
Recall that calling the `GetEstudianteByUsuarioInternalId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetEstudianteByUsuarioInternalId` Query is of type `GetEstudianteByUsuarioInternalIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetEstudianteByUsuarioInternalIdData {
  estudiantes: ({
    id: UUIDString;
    matricula: string;
  } & Estudiante_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetEstudianteByUsuarioInternalId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetEstudianteByUsuarioInternalIdVariables } from '@dataconnect/generated';
import { useGetEstudianteByUsuarioInternalId } from '@dataconnect/generated/react'

export default function GetEstudianteByUsuarioInternalIdComponent() {
  // The `useGetEstudianteByUsuarioInternalId` Query hook requires an argument of type `GetEstudianteByUsuarioInternalIdVariables`:
  const getEstudianteByUsuarioInternalIdVars: GetEstudianteByUsuarioInternalIdVariables = {
    usuarioInternalId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetEstudianteByUsuarioInternalId(getEstudianteByUsuarioInternalIdVars);
  // Variables can be defined inline as well.
  const query = useGetEstudianteByUsuarioInternalId({ usuarioInternalId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetEstudianteByUsuarioInternalId(dataConnect, getEstudianteByUsuarioInternalIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetEstudianteByUsuarioInternalId(getEstudianteByUsuarioInternalIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetEstudianteByUsuarioInternalId(dataConnect, getEstudianteByUsuarioInternalIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.estudiantes);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListarEstudiantes
You can execute the `ListarEstudiantes` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListarEstudiantes(dc: DataConnect, options?: useDataConnectQueryOptions<ListarEstudiantesData>): UseDataConnectQueryResult<ListarEstudiantesData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListarEstudiantes(options?: useDataConnectQueryOptions<ListarEstudiantesData>): UseDataConnectQueryResult<ListarEstudiantesData, undefined>;
```

### Variables
The `ListarEstudiantes` Query has no variables.
### Return Type
Recall that calling the `ListarEstudiantes` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListarEstudiantes` Query is of type `ListarEstudiantesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListarEstudiantesData {
  estudiantes: ({
    id: UUIDString;
    matricula: string;
    usuario: {
      id: UUIDString;
      usuarioId: string;
      nombreCompleto: string;
      correo: string;
      telefono?: string | null;
      activo: boolean;
    } & Usuario_Key;
  } & Estudiante_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListarEstudiantes`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListarEstudiantes } from '@dataconnect/generated/react'

export default function ListarEstudiantesComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListarEstudiantes();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListarEstudiantes(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListarEstudiantes(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListarEstudiantes(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.estudiantes);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListInstructors
You can execute the `ListInstructors` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListInstructors(dc: DataConnect, options?: useDataConnectQueryOptions<ListInstructorsData>): UseDataConnectQueryResult<ListInstructorsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListInstructors(options?: useDataConnectQueryOptions<ListInstructorsData>): UseDataConnectQueryResult<ListInstructorsData, undefined>;
```

### Variables
The `ListInstructors` Query has no variables.
### Return Type
Recall that calling the `ListInstructors` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListInstructors` Query is of type `ListInstructorsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListInstructorsData {
  instructors: ({
    id: UUIDString;
    instructorId: number;
    usuarioId: UUIDString;
    especialidad?: string | null;
    usuario: {
      id: UUIDString;
      usuarioId: string;
      nombreCompleto: string;
      correo: string;
      telefono?: string | null;
      activo: boolean;
    } & Usuario_Key;
  } & Instructor_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListInstructors`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListInstructors } from '@dataconnect/generated/react'

export default function ListInstructorsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListInstructors();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListInstructors(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListInstructors(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListInstructors(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.instructors);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetRolByNumero
You can execute the `GetRolByNumero` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetRolByNumero(dc: DataConnect, vars: GetRolByNumeroVariables, options?: useDataConnectQueryOptions<GetRolByNumeroData>): UseDataConnectQueryResult<GetRolByNumeroData, GetRolByNumeroVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetRolByNumero(vars: GetRolByNumeroVariables, options?: useDataConnectQueryOptions<GetRolByNumeroData>): UseDataConnectQueryResult<GetRolByNumeroData, GetRolByNumeroVariables>;
```

### Variables
The `GetRolByNumero` Query requires an argument of type `GetRolByNumeroVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetRolByNumeroVariables {
  rolId: number;
}
```
### Return Type
Recall that calling the `GetRolByNumero` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetRolByNumero` Query is of type `GetRolByNumeroData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetRolByNumeroData {
  rols: ({
    id: UUIDString;
    rolId: number;
    nombre: string;
  } & Rol_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetRolByNumero`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetRolByNumeroVariables } from '@dataconnect/generated';
import { useGetRolByNumero } from '@dataconnect/generated/react'

export default function GetRolByNumeroComponent() {
  // The `useGetRolByNumero` Query hook requires an argument of type `GetRolByNumeroVariables`:
  const getRolByNumeroVars: GetRolByNumeroVariables = {
    rolId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetRolByNumero(getRolByNumeroVars);
  // Variables can be defined inline as well.
  const query = useGetRolByNumero({ rolId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetRolByNumero(dataConnect, getRolByNumeroVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetRolByNumero(getRolByNumeroVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetRolByNumero(dataConnect, getRolByNumeroVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.rols);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListCursos
You can execute the `ListCursos` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListCursos(dc: DataConnect, options?: useDataConnectQueryOptions<ListCursosData>): UseDataConnectQueryResult<ListCursosData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListCursos(options?: useDataConnectQueryOptions<ListCursosData>): UseDataConnectQueryResult<ListCursosData, undefined>;
```

### Variables
The `ListCursos` Query has no variables.
### Return Type
Recall that calling the `ListCursos` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListCursos` Query is of type `ListCursosData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListCursosData {
  cursos: ({
    id: UUIDString;
    cursoId: number;
    nombre: string;
    descripcion?: string | null;
    categoria?: string | null;
    urlImagen?: string | null;
    estado?: string | null;
    instructor?: {
      instructorId: number;
      usuario: {
        nombreCompleto: string;
      };
    };
  } & Curso_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListCursos`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListCursos } from '@dataconnect/generated/react'

export default function ListCursosComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListCursos();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListCursos(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListCursos(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListCursos(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.cursos);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## BuscarCursoPorNombre
You can execute the `BuscarCursoPorNombre` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useBuscarCursoPorNombre(dc: DataConnect, vars: BuscarCursoPorNombreVariables, options?: useDataConnectQueryOptions<BuscarCursoPorNombreData>): UseDataConnectQueryResult<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useBuscarCursoPorNombre(vars: BuscarCursoPorNombreVariables, options?: useDataConnectQueryOptions<BuscarCursoPorNombreData>): UseDataConnectQueryResult<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;
```

### Variables
The `BuscarCursoPorNombre` Query requires an argument of type `BuscarCursoPorNombreVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface BuscarCursoPorNombreVariables {
  nombre: string;
}
```
### Return Type
Recall that calling the `BuscarCursoPorNombre` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `BuscarCursoPorNombre` Query is of type `BuscarCursoPorNombreData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface BuscarCursoPorNombreData {
  cursos: ({
    id: UUIDString;
    cursoId: number;
    nombre: string;
    categoria?: string | null;
    estado?: string | null;
    instructor?: {
      usuario: {
        nombreCompleto: string;
      };
    };
  } & Curso_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `BuscarCursoPorNombre`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, BuscarCursoPorNombreVariables } from '@dataconnect/generated';
import { useBuscarCursoPorNombre } from '@dataconnect/generated/react'

export default function BuscarCursoPorNombreComponent() {
  // The `useBuscarCursoPorNombre` Query hook requires an argument of type `BuscarCursoPorNombreVariables`:
  const buscarCursoPorNombreVars: BuscarCursoPorNombreVariables = {
    nombre: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useBuscarCursoPorNombre(buscarCursoPorNombreVars);
  // Variables can be defined inline as well.
  const query = useBuscarCursoPorNombre({ nombre: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useBuscarCursoPorNombre(dataConnect, buscarCursoPorNombreVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useBuscarCursoPorNombre(buscarCursoPorNombreVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useBuscarCursoPorNombre(dataConnect, buscarCursoPorNombreVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.cursos);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CursosPorCategoria
You can execute the `CursosPorCategoria` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useCursosPorCategoria(dc: DataConnect, vars: CursosPorCategoriaVariables, options?: useDataConnectQueryOptions<CursosPorCategoriaData>): UseDataConnectQueryResult<CursosPorCategoriaData, CursosPorCategoriaVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useCursosPorCategoria(vars: CursosPorCategoriaVariables, options?: useDataConnectQueryOptions<CursosPorCategoriaData>): UseDataConnectQueryResult<CursosPorCategoriaData, CursosPorCategoriaVariables>;
```

### Variables
The `CursosPorCategoria` Query requires an argument of type `CursosPorCategoriaVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CursosPorCategoriaVariables {
  categoria: string;
}
```
### Return Type
Recall that calling the `CursosPorCategoria` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `CursosPorCategoria` Query is of type `CursosPorCategoriaData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CursosPorCategoriaData {
  cursos: ({
    id: UUIDString;
    cursoId: number;
    nombre: string;
    categoria?: string | null;
    estado?: string | null;
  } & Curso_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `CursosPorCategoria`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CursosPorCategoriaVariables } from '@dataconnect/generated';
import { useCursosPorCategoria } from '@dataconnect/generated/react'

export default function CursosPorCategoriaComponent() {
  // The `useCursosPorCategoria` Query hook requires an argument of type `CursosPorCategoriaVariables`:
  const cursosPorCategoriaVars: CursosPorCategoriaVariables = {
    categoria: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useCursosPorCategoria(cursosPorCategoriaVars);
  // Variables can be defined inline as well.
  const query = useCursosPorCategoria({ categoria: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useCursosPorCategoria(dataConnect, cursosPorCategoriaVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useCursosPorCategoria(cursosPorCategoriaVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useCursosPorCategoria(dataConnect, cursosPorCategoriaVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.cursos);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CursosPorEstado
You can execute the `CursosPorEstado` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useCursosPorEstado(dc: DataConnect, vars: CursosPorEstadoVariables, options?: useDataConnectQueryOptions<CursosPorEstadoData>): UseDataConnectQueryResult<CursosPorEstadoData, CursosPorEstadoVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useCursosPorEstado(vars: CursosPorEstadoVariables, options?: useDataConnectQueryOptions<CursosPorEstadoData>): UseDataConnectQueryResult<CursosPorEstadoData, CursosPorEstadoVariables>;
```

### Variables
The `CursosPorEstado` Query requires an argument of type `CursosPorEstadoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CursosPorEstadoVariables {
  estado: string;
}
```
### Return Type
Recall that calling the `CursosPorEstado` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `CursosPorEstado` Query is of type `CursosPorEstadoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CursosPorEstadoData {
  cursos: ({
    id: UUIDString;
    nombre: string;
    estado?: string | null;
  } & Curso_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `CursosPorEstado`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CursosPorEstadoVariables } from '@dataconnect/generated';
import { useCursosPorEstado } from '@dataconnect/generated/react'

export default function CursosPorEstadoComponent() {
  // The `useCursosPorEstado` Query hook requires an argument of type `CursosPorEstadoVariables`:
  const cursosPorEstadoVars: CursosPorEstadoVariables = {
    estado: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useCursosPorEstado(cursosPorEstadoVars);
  // Variables can be defined inline as well.
  const query = useCursosPorEstado({ estado: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useCursosPorEstado(dataConnect, cursosPorEstadoVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useCursosPorEstado(cursosPorEstadoVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useCursosPorEstado(dataConnect, cursosPorEstadoVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.cursos);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListHorarios
You can execute the `ListHorarios` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListHorarios(dc: DataConnect, options?: useDataConnectQueryOptions<ListHorariosData>): UseDataConnectQueryResult<ListHorariosData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListHorarios(options?: useDataConnectQueryOptions<ListHorariosData>): UseDataConnectQueryResult<ListHorariosData, undefined>;
```

### Variables
The `ListHorarios` Query has no variables.
### Return Type
Recall that calling the `ListHorarios` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListHorarios` Query is of type `ListHorariosData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListHorariosData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    curso: {
      id: UUIDString;
      cursoId: number;
      nombre: string;
    } & Curso_Key;
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
  } & Horario_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListHorarios`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListHorarios } from '@dataconnect/generated/react'

export default function ListHorariosComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListHorarios();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListHorarios(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListHorarios(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListHorarios(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.horarios);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## BuscarHorarioPorCurso
You can execute the `BuscarHorarioPorCurso` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useBuscarHorarioPorCurso(dc: DataConnect, vars: BuscarHorarioPorCursoVariables, options?: useDataConnectQueryOptions<BuscarHorarioPorCursoData>): UseDataConnectQueryResult<BuscarHorarioPorCursoData, BuscarHorarioPorCursoVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useBuscarHorarioPorCurso(vars: BuscarHorarioPorCursoVariables, options?: useDataConnectQueryOptions<BuscarHorarioPorCursoData>): UseDataConnectQueryResult<BuscarHorarioPorCursoData, BuscarHorarioPorCursoVariables>;
```

### Variables
The `BuscarHorarioPorCurso` Query requires an argument of type `BuscarHorarioPorCursoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface BuscarHorarioPorCursoVariables {
  cursoId: number;
}
```
### Return Type
Recall that calling the `BuscarHorarioPorCurso` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `BuscarHorarioPorCurso` Query is of type `BuscarHorarioPorCursoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface BuscarHorarioPorCursoData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    curso: {
      cursoId: number;
      nombre: string;
    };
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
  } & Horario_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `BuscarHorarioPorCurso`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, BuscarHorarioPorCursoVariables } from '@dataconnect/generated';
import { useBuscarHorarioPorCurso } from '@dataconnect/generated/react'

export default function BuscarHorarioPorCursoComponent() {
  // The `useBuscarHorarioPorCurso` Query hook requires an argument of type `BuscarHorarioPorCursoVariables`:
  const buscarHorarioPorCursoVars: BuscarHorarioPorCursoVariables = {
    cursoId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useBuscarHorarioPorCurso(buscarHorarioPorCursoVars);
  // Variables can be defined inline as well.
  const query = useBuscarHorarioPorCurso({ cursoId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useBuscarHorarioPorCurso(dataConnect, buscarHorarioPorCursoVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useBuscarHorarioPorCurso(buscarHorarioPorCursoVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useBuscarHorarioPorCurso(dataConnect, buscarHorarioPorCursoVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.horarios);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## HorariosPorDia
You can execute the `HorariosPorDia` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useHorariosPorDia(dc: DataConnect, vars: HorariosPorDiaVariables, options?: useDataConnectQueryOptions<HorariosPorDiaData>): UseDataConnectQueryResult<HorariosPorDiaData, HorariosPorDiaVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useHorariosPorDia(vars: HorariosPorDiaVariables, options?: useDataConnectQueryOptions<HorariosPorDiaData>): UseDataConnectQueryResult<HorariosPorDiaData, HorariosPorDiaVariables>;
```

### Variables
The `HorariosPorDia` Query requires an argument of type `HorariosPorDiaVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface HorariosPorDiaVariables {
  diaSemana: string;
}
```
### Return Type
Recall that calling the `HorariosPorDia` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `HorariosPorDia` Query is of type `HorariosPorDiaData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface HorariosPorDiaData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    curso: {
      nombre: string;
    };
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
  } & Horario_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `HorariosPorDia`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, HorariosPorDiaVariables } from '@dataconnect/generated';
import { useHorariosPorDia } from '@dataconnect/generated/react'

export default function HorariosPorDiaComponent() {
  // The `useHorariosPorDia` Query hook requires an argument of type `HorariosPorDiaVariables`:
  const horariosPorDiaVars: HorariosPorDiaVariables = {
    diaSemana: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useHorariosPorDia(horariosPorDiaVars);
  // Variables can be defined inline as well.
  const query = useHorariosPorDia({ diaSemana: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useHorariosPorDia(dataConnect, horariosPorDiaVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useHorariosPorDia(horariosPorDiaVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useHorariosPorDia(dataConnect, horariosPorDiaVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.horarios);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## HorariosPorEstado
You can execute the `HorariosPorEstado` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useHorariosPorEstado(dc: DataConnect, vars: HorariosPorEstadoVariables, options?: useDataConnectQueryOptions<HorariosPorEstadoData>): UseDataConnectQueryResult<HorariosPorEstadoData, HorariosPorEstadoVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useHorariosPorEstado(vars: HorariosPorEstadoVariables, options?: useDataConnectQueryOptions<HorariosPorEstadoData>): UseDataConnectQueryResult<HorariosPorEstadoData, HorariosPorEstadoVariables>;
```

### Variables
The `HorariosPorEstado` Query requires an argument of type `HorariosPorEstadoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface HorariosPorEstadoVariables {
  estado: string;
}
```
### Return Type
Recall that calling the `HorariosPorEstado` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `HorariosPorEstado` Query is of type `HorariosPorEstadoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface HorariosPorEstadoData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    curso: {
      nombre: string;
    };
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
  } & Horario_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `HorariosPorEstado`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, HorariosPorEstadoVariables } from '@dataconnect/generated';
import { useHorariosPorEstado } from '@dataconnect/generated/react'

export default function HorariosPorEstadoComponent() {
  // The `useHorariosPorEstado` Query hook requires an argument of type `HorariosPorEstadoVariables`:
  const horariosPorEstadoVars: HorariosPorEstadoVariables = {
    estado: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useHorariosPorEstado(horariosPorEstadoVars);
  // Variables can be defined inline as well.
  const query = useHorariosPorEstado({ estado: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useHorariosPorEstado(dataConnect, horariosPorEstadoVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useHorariosPorEstado(horariosPorEstadoVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useHorariosPorEstado(dataConnect, horariosPorEstadoVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.horarios);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListInscripcionesActivas
You can execute the `ListInscripcionesActivas` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListInscripcionesActivas(dc: DataConnect, options?: useDataConnectQueryOptions<ListInscripcionesActivasData>): UseDataConnectQueryResult<ListInscripcionesActivasData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListInscripcionesActivas(options?: useDataConnectQueryOptions<ListInscripcionesActivasData>): UseDataConnectQueryResult<ListInscripcionesActivasData, undefined>;
```

### Variables
The `ListInscripcionesActivas` Query has no variables.
### Return Type
Recall that calling the `ListInscripcionesActivas` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListInscripcionesActivas` Query is of type `ListInscripcionesActivasData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListInscripcionesActivasData {
  inscripcions: ({
    inscripcionId: string;
    horario: {
      horarioId: number;
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListInscripcionesActivas`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListInscripcionesActivas } from '@dataconnect/generated/react'

export default function ListInscripcionesActivasComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListInscripcionesActivas();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListInscripcionesActivas(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListInscripcionesActivas(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListInscripcionesActivas(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.inscripcions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListCursosEstadisticas
You can execute the `ListCursosEstadisticas` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListCursosEstadisticas(dc: DataConnect, options?: useDataConnectQueryOptions<ListCursosEstadisticasData>): UseDataConnectQueryResult<ListCursosEstadisticasData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListCursosEstadisticas(options?: useDataConnectQueryOptions<ListCursosEstadisticasData>): UseDataConnectQueryResult<ListCursosEstadisticasData, undefined>;
```

### Variables
The `ListCursosEstadisticas` Query has no variables.
### Return Type
Recall that calling the `ListCursosEstadisticas` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListCursosEstadisticas` Query is of type `ListCursosEstadisticasData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListCursosEstadisticasData {
  cursos: ({
    cursoId: number;
    nombre: string;
    descripcion?: string | null;
    categoria?: string | null;
    estado?: string | null;
    instructor?: {
      instructorId: number;
      especialidad?: string | null;
      usuario: {
        nombreCompleto: string;
      };
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListCursosEstadisticas`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListCursosEstadisticas } from '@dataconnect/generated/react'

export default function ListCursosEstadisticasComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListCursosEstadisticas();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListCursosEstadisticas(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListCursosEstadisticas(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListCursosEstadisticas(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.cursos);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListHorariosEstadisticas
You can execute the `ListHorariosEstadisticas` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListHorariosEstadisticas(dc: DataConnect, options?: useDataConnectQueryOptions<ListHorariosEstadisticasData>): UseDataConnectQueryResult<ListHorariosEstadisticasData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListHorariosEstadisticas(options?: useDataConnectQueryOptions<ListHorariosEstadisticasData>): UseDataConnectQueryResult<ListHorariosEstadisticasData, undefined>;
```

### Variables
The `ListHorariosEstadisticas` Query has no variables.
### Return Type
Recall that calling the `ListHorariosEstadisticas` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListHorariosEstadisticas` Query is of type `ListHorariosEstadisticasData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListHorariosEstadisticasData {
  horarios: ({
    horarioId: number;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
    curso: {
      cursoId: number;
      nombre: string;
      categoria?: string | null;
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListHorariosEstadisticas`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListHorariosEstadisticas } from '@dataconnect/generated/react'

export default function ListHorariosEstadisticasComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListHorariosEstadisticas();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListHorariosEstadisticas(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListHorariosEstadisticas(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListHorariosEstadisticas(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.horarios);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListHorariosPorEstado
You can execute the `ListHorariosPorEstado` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListHorariosPorEstado(dc: DataConnect, vars: ListHorariosPorEstadoVariables, options?: useDataConnectQueryOptions<ListHorariosPorEstadoData>): UseDataConnectQueryResult<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListHorariosPorEstado(vars: ListHorariosPorEstadoVariables, options?: useDataConnectQueryOptions<ListHorariosPorEstadoData>): UseDataConnectQueryResult<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;
```

### Variables
The `ListHorariosPorEstado` Query requires an argument of type `ListHorariosPorEstadoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListHorariosPorEstadoVariables {
  estado: string;
}
```
### Return Type
Recall that calling the `ListHorariosPorEstado` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListHorariosPorEstado` Query is of type `ListHorariosPorEstadoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListHorariosPorEstadoData {
  horarios: ({
    horarioId: number;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
    curso: {
      cursoId: number;
      nombre: string;
      categoria?: string | null;
      instructor?: {
        usuario: {
          nombreCompleto: string;
        };
      };
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListHorariosPorEstado`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListHorariosPorEstadoVariables } from '@dataconnect/generated';
import { useListHorariosPorEstado } from '@dataconnect/generated/react'

export default function ListHorariosPorEstadoComponent() {
  // The `useListHorariosPorEstado` Query hook requires an argument of type `ListHorariosPorEstadoVariables`:
  const listHorariosPorEstadoVars: ListHorariosPorEstadoVariables = {
    estado: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListHorariosPorEstado(listHorariosPorEstadoVars);
  // Variables can be defined inline as well.
  const query = useListHorariosPorEstado({ estado: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListHorariosPorEstado(dataConnect, listHorariosPorEstadoVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListHorariosPorEstado(listHorariosPorEstadoVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListHorariosPorEstado(dataConnect, listHorariosPorEstadoVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.horarios);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListInscripciones
You can execute the `ListInscripciones` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListInscripciones(dc: DataConnect, options?: useDataConnectQueryOptions<ListInscripcionesData>): UseDataConnectQueryResult<ListInscripcionesData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListInscripciones(options?: useDataConnectQueryOptions<ListInscripcionesData>): UseDataConnectQueryResult<ListInscripcionesData, undefined>;
```

### Variables
The `ListInscripciones` Query has no variables.
### Return Type
Recall that calling the `ListInscripciones` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListInscripciones` Query is of type `ListInscripcionesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListInscripcionesData {
  inscripcions: ({
    inscripcionId: string;
    fechaInscripcion: DateString;
    estadoInscripcion: string;
    pagoEstado?: string | null;
    estudiante: {
      matricula: string;
      usuario: {
        nombreCompleto: string;
        correo: string;
      };
    };
    horario: {
      horarioId: number;
      curso: {
        cursoId: number;
        nombre: string;
        categoria?: string | null;
      };
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListInscripciones`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListInscripciones } from '@dataconnect/generated/react'

export default function ListInscripcionesComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListInscripciones();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListInscripciones(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListInscripciones(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListInscripciones(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.inscripcions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListInscripcionesPorEstado
You can execute the `ListInscripcionesPorEstado` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListInscripcionesPorEstado(dc: DataConnect, vars: ListInscripcionesPorEstadoVariables, options?: useDataConnectQueryOptions<ListInscripcionesPorEstadoData>): UseDataConnectQueryResult<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListInscripcionesPorEstado(vars: ListInscripcionesPorEstadoVariables, options?: useDataConnectQueryOptions<ListInscripcionesPorEstadoData>): UseDataConnectQueryResult<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;
```

### Variables
The `ListInscripcionesPorEstado` Query requires an argument of type `ListInscripcionesPorEstadoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListInscripcionesPorEstadoVariables {
  estado: string;
}
```
### Return Type
Recall that calling the `ListInscripcionesPorEstado` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListInscripcionesPorEstado` Query is of type `ListInscripcionesPorEstadoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListInscripcionesPorEstadoData {
  inscripcions: ({
    inscripcionId: string;
    fechaInscripcion: DateString;
    estadoInscripcion: string;
    pagoEstado?: string | null;
    estudiante: {
      matricula: string;
      usuario: {
        nombreCompleto: string;
      };
    };
    horario: {
      horarioId: number;
      curso: {
        cursoId: number;
        nombre: string;
        categoria?: string | null;
      };
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListInscripcionesPorEstado`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListInscripcionesPorEstadoVariables } from '@dataconnect/generated';
import { useListInscripcionesPorEstado } from '@dataconnect/generated/react'

export default function ListInscripcionesPorEstadoComponent() {
  // The `useListInscripcionesPorEstado` Query hook requires an argument of type `ListInscripcionesPorEstadoVariables`:
  const listInscripcionesPorEstadoVars: ListInscripcionesPorEstadoVariables = {
    estado: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListInscripcionesPorEstado(listInscripcionesPorEstadoVars);
  // Variables can be defined inline as well.
  const query = useListInscripcionesPorEstado({ estado: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListInscripcionesPorEstado(dataConnect, listInscripcionesPorEstadoVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListInscripcionesPorEstado(listInscripcionesPorEstadoVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListInscripcionesPorEstado(dataConnect, listInscripcionesPorEstadoVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.inscripcions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListAsistencias
You can execute the `ListAsistencias` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListAsistencias(dc: DataConnect, options?: useDataConnectQueryOptions<ListAsistenciasData>): UseDataConnectQueryResult<ListAsistenciasData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListAsistencias(options?: useDataConnectQueryOptions<ListAsistenciasData>): UseDataConnectQueryResult<ListAsistenciasData, undefined>;
```

### Variables
The `ListAsistencias` Query has no variables.
### Return Type
Recall that calling the `ListAsistencias` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListAsistencias` Query is of type `ListAsistenciasData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListAsistenciasData {
  asistencias: ({
    asistenciaId: number;
    fecha: DateString;
    estadoAsistencia: string;
    observaciones?: string | null;
    estudiante: {
      matricula: string;
      usuario: {
        nombreCompleto: string;
      };
    };
    instructor: {
      instructorId: number;
      usuario: {
        nombreCompleto: string;
      };
    };
    materiaId: number;
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListAsistencias`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListAsistencias } from '@dataconnect/generated/react'

export default function ListAsistenciasComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListAsistencias();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListAsistencias(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListAsistencias(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListAsistencias(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.asistencias);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListAsistenciasPorEstado
You can execute the `ListAsistenciasPorEstado` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListAsistenciasPorEstado(dc: DataConnect, vars: ListAsistenciasPorEstadoVariables, options?: useDataConnectQueryOptions<ListAsistenciasPorEstadoData>): UseDataConnectQueryResult<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListAsistenciasPorEstado(vars: ListAsistenciasPorEstadoVariables, options?: useDataConnectQueryOptions<ListAsistenciasPorEstadoData>): UseDataConnectQueryResult<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;
```

### Variables
The `ListAsistenciasPorEstado` Query requires an argument of type `ListAsistenciasPorEstadoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListAsistenciasPorEstadoVariables {
  estado: string;
}
```
### Return Type
Recall that calling the `ListAsistenciasPorEstado` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListAsistenciasPorEstado` Query is of type `ListAsistenciasPorEstadoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListAsistenciasPorEstadoData {
  asistencias: ({
    asistenciaId: number;
    fecha: DateString;
    estadoAsistencia: string;
    materiaId: number;
    estudiante: {
      matricula: string;
      usuario: {
        nombreCompleto: string;
      };
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListAsistenciasPorEstado`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListAsistenciasPorEstadoVariables } from '@dataconnect/generated';
import { useListAsistenciasPorEstado } from '@dataconnect/generated/react'

export default function ListAsistenciasPorEstadoComponent() {
  // The `useListAsistenciasPorEstado` Query hook requires an argument of type `ListAsistenciasPorEstadoVariables`:
  const listAsistenciasPorEstadoVars: ListAsistenciasPorEstadoVariables = {
    estado: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListAsistenciasPorEstado(listAsistenciasPorEstadoVars);
  // Variables can be defined inline as well.
  const query = useListAsistenciasPorEstado({ estado: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListAsistenciasPorEstado(dataConnect, listAsistenciasPorEstadoVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListAsistenciasPorEstado(listAsistenciasPorEstadoVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListAsistenciasPorEstado(dataConnect, listAsistenciasPorEstadoVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.asistencias);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListReportesEstadisticas
You can execute the `ListReportesEstadisticas` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListReportesEstadisticas(dc: DataConnect, options?: useDataConnectQueryOptions<ListReportesEstadisticasData>): UseDataConnectQueryResult<ListReportesEstadisticasData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListReportesEstadisticas(options?: useDataConnectQueryOptions<ListReportesEstadisticasData>): UseDataConnectQueryResult<ListReportesEstadisticasData, undefined>;
```

### Variables
The `ListReportesEstadisticas` Query has no variables.
### Return Type
Recall that calling the `ListReportesEstadisticas` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListReportesEstadisticas` Query is of type `ListReportesEstadisticasData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListReportesEstadisticasData {
  reporteEstadisticas: ({
    id: UUIDString;
    reporteId: number;
    periodoAnio: string;
    totalInscritos: number;
    totalBajas: number;
    porcentajeAsistencia: number;
    calificacionPromedio?: number | null;
    ingresosGenerados?: number | null;
    fechaActualizacion: DateString;
    curso: {
      cursoId: number;
      nombre: string;
      categoria?: string | null;
    };
  } & ReporteEstadistica_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListReportesEstadisticas`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListReportesEstadisticas } from '@dataconnect/generated/react'

export default function ListReportesEstadisticasComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListReportesEstadisticas();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListReportesEstadisticas(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListReportesEstadisticas(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListReportesEstadisticas(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.reporteEstadisticas);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListReportesPorPeriodo
You can execute the `ListReportesPorPeriodo` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListReportesPorPeriodo(dc: DataConnect, vars: ListReportesPorPeriodoVariables, options?: useDataConnectQueryOptions<ListReportesPorPeriodoData>): UseDataConnectQueryResult<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListReportesPorPeriodo(vars: ListReportesPorPeriodoVariables, options?: useDataConnectQueryOptions<ListReportesPorPeriodoData>): UseDataConnectQueryResult<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;
```

### Variables
The `ListReportesPorPeriodo` Query requires an argument of type `ListReportesPorPeriodoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListReportesPorPeriodoVariables {
  periodo: string;
}
```
### Return Type
Recall that calling the `ListReportesPorPeriodo` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListReportesPorPeriodo` Query is of type `ListReportesPorPeriodoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListReportesPorPeriodoData {
  reporteEstadisticas: ({
    id: UUIDString;
    reporteId: number;
    periodoAnio: string;
    totalInscritos: number;
    totalBajas: number;
    porcentajeAsistencia: number;
    calificacionPromedio?: number | null;
    ingresosGenerados?: number | null;
    fechaActualizacion: DateString;
    curso: {
      cursoId: number;
      nombre: string;
      categoria?: string | null;
    };
  } & ReporteEstadistica_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListReportesPorPeriodo`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListReportesPorPeriodoVariables } from '@dataconnect/generated';
import { useListReportesPorPeriodo } from '@dataconnect/generated/react'

export default function ListReportesPorPeriodoComponent() {
  // The `useListReportesPorPeriodo` Query hook requires an argument of type `ListReportesPorPeriodoVariables`:
  const listReportesPorPeriodoVars: ListReportesPorPeriodoVariables = {
    periodo: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListReportesPorPeriodo(listReportesPorPeriodoVars);
  // Variables can be defined inline as well.
  const query = useListReportesPorPeriodo({ periodo: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListReportesPorPeriodo(dataConnect, listReportesPorPeriodoVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListReportesPorPeriodo(listReportesPorPeriodoVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListReportesPorPeriodo(dataConnect, listReportesPorPeriodoVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.reporteEstadisticas);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListReportesPorCurso
You can execute the `ListReportesPorCurso` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListReportesPorCurso(dc: DataConnect, vars: ListReportesPorCursoVariables, options?: useDataConnectQueryOptions<ListReportesPorCursoData>): UseDataConnectQueryResult<ListReportesPorCursoData, ListReportesPorCursoVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListReportesPorCurso(vars: ListReportesPorCursoVariables, options?: useDataConnectQueryOptions<ListReportesPorCursoData>): UseDataConnectQueryResult<ListReportesPorCursoData, ListReportesPorCursoVariables>;
```

### Variables
The `ListReportesPorCurso` Query requires an argument of type `ListReportesPorCursoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListReportesPorCursoVariables {
  cursoId: number;
}
```
### Return Type
Recall that calling the `ListReportesPorCurso` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListReportesPorCurso` Query is of type `ListReportesPorCursoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListReportesPorCursoData {
  reporteEstadisticas: ({
    id: UUIDString;
    reporteId: number;
    periodoAnio: string;
    totalInscritos: number;
    totalBajas: number;
    porcentajeAsistencia: number;
    calificacionPromedio?: number | null;
    ingresosGenerados?: number | null;
    fechaActualizacion: DateString;
    curso: {
      cursoId: number;
      nombre: string;
      categoria?: string | null;
    };
  } & ReporteEstadistica_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListReportesPorCurso`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListReportesPorCursoVariables } from '@dataconnect/generated';
import { useListReportesPorCurso } from '@dataconnect/generated/react'

export default function ListReportesPorCursoComponent() {
  // The `useListReportesPorCurso` Query hook requires an argument of type `ListReportesPorCursoVariables`:
  const listReportesPorCursoVars: ListReportesPorCursoVariables = {
    cursoId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListReportesPorCurso(listReportesPorCursoVars);
  // Variables can be defined inline as well.
  const query = useListReportesPorCurso({ cursoId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListReportesPorCurso(dataConnect, listReportesPorCursoVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListReportesPorCurso(listReportesPorCursoVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListReportesPorCurso(dataConnect, listReportesPorCursoVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.reporteEstadisticas);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetCursoInternalId
You can execute the `GetCursoInternalId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetCursoInternalId(dc: DataConnect, vars: GetCursoInternalIdVariables, options?: useDataConnectQueryOptions<GetCursoInternalIdData>): UseDataConnectQueryResult<GetCursoInternalIdData, GetCursoInternalIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetCursoInternalId(vars: GetCursoInternalIdVariables, options?: useDataConnectQueryOptions<GetCursoInternalIdData>): UseDataConnectQueryResult<GetCursoInternalIdData, GetCursoInternalIdVariables>;
```

### Variables
The `GetCursoInternalId` Query requires an argument of type `GetCursoInternalIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetCursoInternalIdVariables {
  cursoId: number;
}
```
### Return Type
Recall that calling the `GetCursoInternalId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetCursoInternalId` Query is of type `GetCursoInternalIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetCursoInternalIdData {
  cursos: ({
    id: UUIDString;
    cursoId: number;
    nombre: string;
  } & Curso_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetCursoInternalId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetCursoInternalIdVariables } from '@dataconnect/generated';
import { useGetCursoInternalId } from '@dataconnect/generated/react'

export default function GetCursoInternalIdComponent() {
  // The `useGetCursoInternalId` Query hook requires an argument of type `GetCursoInternalIdVariables`:
  const getCursoInternalIdVars: GetCursoInternalIdVariables = {
    cursoId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetCursoInternalId(getCursoInternalIdVars);
  // Variables can be defined inline as well.
  const query = useGetCursoInternalId({ cursoId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetCursoInternalId(dataConnect, getCursoInternalIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetCursoInternalId(getCursoInternalIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetCursoInternalId(dataConnect, getCursoInternalIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.cursos);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetInscripcionesByEstudiante
You can execute the `GetInscripcionesByEstudiante` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetInscripcionesByEstudiante(dc: DataConnect, vars: GetInscripcionesByEstudianteVariables, options?: useDataConnectQueryOptions<GetInscripcionesByEstudianteData>): UseDataConnectQueryResult<GetInscripcionesByEstudianteData, GetInscripcionesByEstudianteVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetInscripcionesByEstudiante(vars: GetInscripcionesByEstudianteVariables, options?: useDataConnectQueryOptions<GetInscripcionesByEstudianteData>): UseDataConnectQueryResult<GetInscripcionesByEstudianteData, GetInscripcionesByEstudianteVariables>;
```

### Variables
The `GetInscripcionesByEstudiante` Query requires an argument of type `GetInscripcionesByEstudianteVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetInscripcionesByEstudianteVariables {
  matricula: string;
}
```
### Return Type
Recall that calling the `GetInscripcionesByEstudiante` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetInscripcionesByEstudiante` Query is of type `GetInscripcionesByEstudianteData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetInscripcionesByEstudianteData {
  inscripcions: ({
    inscripcionId: string;
    estadoInscripcion: string;
    pagoEstado?: string | null;
    fechaInscripcion: DateString;
    horario: {
      horarioId: number;
      horaInicio: string;
      horaFin: string;
      cupoMaximo: number;
      cupoActual: number;
      estado?: string | null;
      curso: {
        id: UUIDString;
        cursoId: number;
        nombre: string;
        descripcion?: string | null;
        categoria?: string | null;
        urlImagen?: string | null;
        estado?: string | null;
        instructor?: {
          instructorId: number;
          usuario: {
            nombreCompleto: string;
          };
        };
      } & Curso_Key;
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetInscripcionesByEstudiante`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetInscripcionesByEstudianteVariables } from '@dataconnect/generated';
import { useGetInscripcionesByEstudiante } from '@dataconnect/generated/react'

export default function GetInscripcionesByEstudianteComponent() {
  // The `useGetInscripcionesByEstudiante` Query hook requires an argument of type `GetInscripcionesByEstudianteVariables`:
  const getInscripcionesByEstudianteVars: GetInscripcionesByEstudianteVariables = {
    matricula: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetInscripcionesByEstudiante(getInscripcionesByEstudianteVars);
  // Variables can be defined inline as well.
  const query = useGetInscripcionesByEstudiante({ matricula: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetInscripcionesByEstudiante(dataConnect, getInscripcionesByEstudianteVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetInscripcionesByEstudiante(getInscripcionesByEstudianteVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetInscripcionesByEstudiante(dataConnect, getInscripcionesByEstudianteVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.inscripcions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetInscripcionesByEstudianteId
You can execute the `GetInscripcionesByEstudianteId` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetInscripcionesByEstudianteId(dc: DataConnect, vars: GetInscripcionesByEstudianteIdVariables, options?: useDataConnectQueryOptions<GetInscripcionesByEstudianteIdData>): UseDataConnectQueryResult<GetInscripcionesByEstudianteIdData, GetInscripcionesByEstudianteIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetInscripcionesByEstudianteId(vars: GetInscripcionesByEstudianteIdVariables, options?: useDataConnectQueryOptions<GetInscripcionesByEstudianteIdData>): UseDataConnectQueryResult<GetInscripcionesByEstudianteIdData, GetInscripcionesByEstudianteIdVariables>;
```

### Variables
The `GetInscripcionesByEstudianteId` Query requires an argument of type `GetInscripcionesByEstudianteIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetInscripcionesByEstudianteIdVariables {
  estudianteInternalId: UUIDString;
}
```
### Return Type
Recall that calling the `GetInscripcionesByEstudianteId` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetInscripcionesByEstudianteId` Query is of type `GetInscripcionesByEstudianteIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetInscripcionesByEstudianteIdData {
  inscripcions: ({
    inscripcionId: string;
    estadoInscripcion: string;
    pagoEstado?: string | null;
    fechaInscripcion: DateString;
    horario: {
      id: UUIDString;
      horarioId: number;
      diaSemana: string;
      fechaInicio: DateString;
      fechaFin: DateString;
      horaInicio: string;
      horaFin: string;
      cupoMaximo: number;
      cupoActual: number;
      estado?: string | null;
      curso: {
        id: UUIDString;
        cursoId: number;
        nombre: string;
        descripcion?: string | null;
        categoria?: string | null;
        urlImagen?: string | null;
        estado?: string | null;
        instructor?: {
          instructorId: number;
          usuario: {
            nombreCompleto: string;
          };
        };
      } & Curso_Key;
    } & Horario_Key;
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetInscripcionesByEstudianteId`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetInscripcionesByEstudianteIdVariables } from '@dataconnect/generated';
import { useGetInscripcionesByEstudianteId } from '@dataconnect/generated/react'

export default function GetInscripcionesByEstudianteIdComponent() {
  // The `useGetInscripcionesByEstudianteId` Query hook requires an argument of type `GetInscripcionesByEstudianteIdVariables`:
  const getInscripcionesByEstudianteIdVars: GetInscripcionesByEstudianteIdVariables = {
    estudianteInternalId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetInscripcionesByEstudianteId(getInscripcionesByEstudianteIdVars);
  // Variables can be defined inline as well.
  const query = useGetInscripcionesByEstudianteId({ estudianteInternalId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetInscripcionesByEstudianteId(dataConnect, getInscripcionesByEstudianteIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetInscripcionesByEstudianteId(getInscripcionesByEstudianteIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetInscripcionesByEstudianteId(dataConnect, getInscripcionesByEstudianteIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.inscripcions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetHorariosDisponibles
You can execute the `GetHorariosDisponibles` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetHorariosDisponibles(dc: DataConnect, options?: useDataConnectQueryOptions<GetHorariosDisponiblesData>): UseDataConnectQueryResult<GetHorariosDisponiblesData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetHorariosDisponibles(options?: useDataConnectQueryOptions<GetHorariosDisponiblesData>): UseDataConnectQueryResult<GetHorariosDisponiblesData, undefined>;
```

### Variables
The `GetHorariosDisponibles` Query has no variables.
### Return Type
Recall that calling the `GetHorariosDisponibles` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetHorariosDisponibles` Query is of type `GetHorariosDisponiblesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetHorariosDisponiblesData {
  horarios: ({
    id: UUIDString;
    horarioId: number;
    diaSemana: string;
    fechaInicio: DateString;
    fechaFin: DateString;
    horaInicio: string;
    horaFin: string;
    cupoMaximo: number;
    cupoActual: number;
    estado?: string | null;
    curso: {
      id: UUIDString;
      cursoId: number;
      nombre: string;
      descripcion?: string | null;
      categoria?: string | null;
      urlImagen?: string | null;
      estado?: string | null;
      instructor?: {
        instructorId: number;
        usuario: {
          nombreCompleto: string;
        };
      };
    } & Curso_Key;
  } & Horario_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetHorariosDisponibles`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useGetHorariosDisponibles } from '@dataconnect/generated/react'

export default function GetHorariosDisponiblesComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetHorariosDisponibles();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetHorariosDisponibles(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetHorariosDisponibles(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetHorariosDisponibles(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.horarios);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

# Mutations

The React generated SDK provides Mutations hook functions that call and return [`useDataConnectMutation`](https://react-query-firebase.invertase.dev/react/data-connect/mutations) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, and the most recent data returned by the Mutation, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/mutations).

Mutation hooks do not execute their Mutations automatically when called. Rather, after calling the Mutation hook function and getting a `UseMutationResult` object, you must call the `UseMutationResult.mutate()` function to execute the Mutation.

To learn more about TanStack React Query's Mutations, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

## Using Mutation Hooks
Here's a general overview of how to use the generated Mutation hooks in your code:

- Mutation hook functions are not called with the arguments to the Mutation. Instead, arguments are passed to `UseMutationResult.mutate()`.
- If the Mutation has no variables, the `mutate()` function does not require arguments.
- If the Mutation has any required variables, the `mutate()` function will require at least one argument: an object that contains all the required variables for the Mutation.
- If the Mutation has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Mutation's variables are optional, the Mutation hook function does not require any arguments.
- Mutation hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Mutation hooks also accept an `options` argument of type `useDataConnectMutationOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations#mutation-side-effects).
  - `UseMutationResult.mutate()` also accepts an `options` argument of type `useDataConnectMutationOptions`.
  - ***Special case:*** If the Mutation has no arguments (or all optional arguments and you wish to provide none), and you want to pass `options` to `UseMutationResult.mutate()`, you must pass `undefined` where you would normally pass the Mutation's arguments, and then may provide the options argument.

Below are examples of how to use the `example` connector's generated Mutation hook functions to execute each Mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## CrearEstudiante
You can execute the `CrearEstudiante` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCrearEstudiante(options?: useDataConnectMutationOptions<CrearEstudianteData, FirebaseError, CrearEstudianteVariables>): UseDataConnectMutationResult<CrearEstudianteData, CrearEstudianteVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCrearEstudiante(dc: DataConnect, options?: useDataConnectMutationOptions<CrearEstudianteData, FirebaseError, CrearEstudianteVariables>): UseDataConnectMutationResult<CrearEstudianteData, CrearEstudianteVariables>;
```

### Variables
The `CrearEstudiante` Mutation requires an argument of type `CrearEstudianteVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CrearEstudianteVariables {
  usuarioInternalId: UUIDString;
  usuarioId: string;
  rolInternalId: UUIDString;
  nombreCompleto: string;
  correo: string;
  passwordHash: string;
  telefono: string;
  matricula: string;
}
```
### Return Type
Recall that calling the `CrearEstudiante` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CrearEstudiante` Mutation is of type `CrearEstudianteData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CrearEstudianteData {
  usuario_insert: Usuario_Key;
  estudiante_insert: Estudiante_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CrearEstudiante`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CrearEstudianteVariables } from '@dataconnect/generated';
import { useCrearEstudiante } from '@dataconnect/generated/react'

export default function CrearEstudianteComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCrearEstudiante();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCrearEstudiante(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCrearEstudiante(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCrearEstudiante(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCrearEstudiante` Mutation requires an argument of type `CrearEstudianteVariables`:
  const crearEstudianteVars: CrearEstudianteVariables = {
    usuarioInternalId: ..., 
    usuarioId: ..., 
    rolInternalId: ..., 
    nombreCompleto: ..., 
    correo: ..., 
    passwordHash: ..., 
    telefono: ..., 
    matricula: ..., 
  };
  mutation.mutate(crearEstudianteVars);
  // Variables can be defined inline as well.
  mutation.mutate({ usuarioInternalId: ..., usuarioId: ..., rolInternalId: ..., nombreCompleto: ..., correo: ..., passwordHash: ..., telefono: ..., matricula: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(crearEstudianteVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.usuario_insert);
    console.log(mutation.data.estudiante_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ActualizarEstudiante
You can execute the `ActualizarEstudiante` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useActualizarEstudiante(options?: useDataConnectMutationOptions<ActualizarEstudianteData, FirebaseError, ActualizarEstudianteVariables>): UseDataConnectMutationResult<ActualizarEstudianteData, ActualizarEstudianteVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useActualizarEstudiante(dc: DataConnect, options?: useDataConnectMutationOptions<ActualizarEstudianteData, FirebaseError, ActualizarEstudianteVariables>): UseDataConnectMutationResult<ActualizarEstudianteData, ActualizarEstudianteVariables>;
```

### Variables
The `ActualizarEstudiante` Mutation requires an argument of type `ActualizarEstudianteVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ActualizarEstudianteVariables {
  usuarioInternalId: UUIDString;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  activo: boolean;
}
```
### Return Type
Recall that calling the `ActualizarEstudiante` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `ActualizarEstudiante` Mutation is of type `ActualizarEstudianteData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ActualizarEstudianteData {
  usuario_update?: Usuario_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `ActualizarEstudiante`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ActualizarEstudianteVariables } from '@dataconnect/generated';
import { useActualizarEstudiante } from '@dataconnect/generated/react'

export default function ActualizarEstudianteComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useActualizarEstudiante();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useActualizarEstudiante(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useActualizarEstudiante(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useActualizarEstudiante(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useActualizarEstudiante` Mutation requires an argument of type `ActualizarEstudianteVariables`:
  const actualizarEstudianteVars: ActualizarEstudianteVariables = {
    usuarioInternalId: ..., 
    nombreCompleto: ..., 
    correo: ..., 
    telefono: ..., 
    activo: ..., 
  };
  mutation.mutate(actualizarEstudianteVars);
  // Variables can be defined inline as well.
  mutation.mutate({ usuarioInternalId: ..., nombreCompleto: ..., correo: ..., telefono: ..., activo: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(actualizarEstudianteVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.usuario_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ActualizarEstudianteSinCorreo
You can execute the `ActualizarEstudianteSinCorreo` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useActualizarEstudianteSinCorreo(options?: useDataConnectMutationOptions<ActualizarEstudianteSinCorreoData, FirebaseError, ActualizarEstudianteSinCorreoVariables>): UseDataConnectMutationResult<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useActualizarEstudianteSinCorreo(dc: DataConnect, options?: useDataConnectMutationOptions<ActualizarEstudianteSinCorreoData, FirebaseError, ActualizarEstudianteSinCorreoVariables>): UseDataConnectMutationResult<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;
```

### Variables
The `ActualizarEstudianteSinCorreo` Mutation requires an argument of type `ActualizarEstudianteSinCorreoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ActualizarEstudianteSinCorreoVariables {
  usuarioInternalId: UUIDString;
  nombreCompleto: string;
  telefono: string;
  activo: boolean;
}
```
### Return Type
Recall that calling the `ActualizarEstudianteSinCorreo` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `ActualizarEstudianteSinCorreo` Mutation is of type `ActualizarEstudianteSinCorreoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ActualizarEstudianteSinCorreoData {
  usuario_update?: Usuario_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `ActualizarEstudianteSinCorreo`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ActualizarEstudianteSinCorreoVariables } from '@dataconnect/generated';
import { useActualizarEstudianteSinCorreo } from '@dataconnect/generated/react'

export default function ActualizarEstudianteSinCorreoComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useActualizarEstudianteSinCorreo();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useActualizarEstudianteSinCorreo(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useActualizarEstudianteSinCorreo(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useActualizarEstudianteSinCorreo(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useActualizarEstudianteSinCorreo` Mutation requires an argument of type `ActualizarEstudianteSinCorreoVariables`:
  const actualizarEstudianteSinCorreoVars: ActualizarEstudianteSinCorreoVariables = {
    usuarioInternalId: ..., 
    nombreCompleto: ..., 
    telefono: ..., 
    activo: ..., 
  };
  mutation.mutate(actualizarEstudianteSinCorreoVars);
  // Variables can be defined inline as well.
  mutation.mutate({ usuarioInternalId: ..., nombreCompleto: ..., telefono: ..., activo: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(actualizarEstudianteSinCorreoVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.usuario_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ActualizarPasswordUsuario
You can execute the `ActualizarPasswordUsuario` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useActualizarPasswordUsuario(options?: useDataConnectMutationOptions<ActualizarPasswordUsuarioData, FirebaseError, ActualizarPasswordUsuarioVariables>): UseDataConnectMutationResult<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useActualizarPasswordUsuario(dc: DataConnect, options?: useDataConnectMutationOptions<ActualizarPasswordUsuarioData, FirebaseError, ActualizarPasswordUsuarioVariables>): UseDataConnectMutationResult<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;
```

### Variables
The `ActualizarPasswordUsuario` Mutation requires an argument of type `ActualizarPasswordUsuarioVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ActualizarPasswordUsuarioVariables {
  usuarioInternalId: UUIDString;
  passwordHash: string;
}
```
### Return Type
Recall that calling the `ActualizarPasswordUsuario` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `ActualizarPasswordUsuario` Mutation is of type `ActualizarPasswordUsuarioData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ActualizarPasswordUsuarioData {
  usuario_update?: Usuario_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `ActualizarPasswordUsuario`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ActualizarPasswordUsuarioVariables } from '@dataconnect/generated';
import { useActualizarPasswordUsuario } from '@dataconnect/generated/react'

export default function ActualizarPasswordUsuarioComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useActualizarPasswordUsuario();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useActualizarPasswordUsuario(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useActualizarPasswordUsuario(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useActualizarPasswordUsuario(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useActualizarPasswordUsuario` Mutation requires an argument of type `ActualizarPasswordUsuarioVariables`:
  const actualizarPasswordUsuarioVars: ActualizarPasswordUsuarioVariables = {
    usuarioInternalId: ..., 
    passwordHash: ..., 
  };
  mutation.mutate(actualizarPasswordUsuarioVars);
  // Variables can be defined inline as well.
  mutation.mutate({ usuarioInternalId: ..., passwordHash: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(actualizarPasswordUsuarioVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.usuario_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## EliminarEstudiante
You can execute the `EliminarEstudiante` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useEliminarEstudiante(options?: useDataConnectMutationOptions<EliminarEstudianteData, FirebaseError, EliminarEstudianteVariables>): UseDataConnectMutationResult<EliminarEstudianteData, EliminarEstudianteVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useEliminarEstudiante(dc: DataConnect, options?: useDataConnectMutationOptions<EliminarEstudianteData, FirebaseError, EliminarEstudianteVariables>): UseDataConnectMutationResult<EliminarEstudianteData, EliminarEstudianteVariables>;
```

### Variables
The `EliminarEstudiante` Mutation requires an argument of type `EliminarEstudianteVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface EliminarEstudianteVariables {
  usuarioInternalId: UUIDString;
}
```
### Return Type
Recall that calling the `EliminarEstudiante` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `EliminarEstudiante` Mutation is of type `EliminarEstudianteData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface EliminarEstudianteData {
  usuario_delete?: Usuario_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `EliminarEstudiante`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, EliminarEstudianteVariables } from '@dataconnect/generated';
import { useEliminarEstudiante } from '@dataconnect/generated/react'

export default function EliminarEstudianteComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useEliminarEstudiante();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useEliminarEstudiante(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useEliminarEstudiante(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useEliminarEstudiante(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useEliminarEstudiante` Mutation requires an argument of type `EliminarEstudianteVariables`:
  const eliminarEstudianteVars: EliminarEstudianteVariables = {
    usuarioInternalId: ..., 
  };
  mutation.mutate(eliminarEstudianteVars);
  // Variables can be defined inline as well.
  mutation.mutate({ usuarioInternalId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(eliminarEstudianteVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.usuario_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateInstructor
You can execute the `CreateInstructor` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateInstructor(options?: useDataConnectMutationOptions<CreateInstructorData, FirebaseError, CreateInstructorVariables>): UseDataConnectMutationResult<CreateInstructorData, CreateInstructorVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateInstructor(dc: DataConnect, options?: useDataConnectMutationOptions<CreateInstructorData, FirebaseError, CreateInstructorVariables>): UseDataConnectMutationResult<CreateInstructorData, CreateInstructorVariables>;
```

### Variables
The `CreateInstructor` Mutation requires an argument of type `CreateInstructorVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateInstructorVariables {
  usuarioInternalId: UUIDString;
  usuarioId: string;
  rolInternalId: UUIDString;
  nombreCompleto: string;
  correo: string;
  passwordHash: string;
  telefono: string;
  especialidad: string;
  instructorId: number;
}
```
### Return Type
Recall that calling the `CreateInstructor` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateInstructor` Mutation is of type `CreateInstructorData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateInstructorData {
  usuario_insert: Usuario_Key;
  instructor_insert: Instructor_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateInstructor`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateInstructorVariables } from '@dataconnect/generated';
import { useCreateInstructor } from '@dataconnect/generated/react'

export default function CreateInstructorComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateInstructor();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateInstructor(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateInstructor(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateInstructor(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateInstructor` Mutation requires an argument of type `CreateInstructorVariables`:
  const createInstructorVars: CreateInstructorVariables = {
    usuarioInternalId: ..., 
    usuarioId: ..., 
    rolInternalId: ..., 
    nombreCompleto: ..., 
    correo: ..., 
    passwordHash: ..., 
    telefono: ..., 
    especialidad: ..., 
    instructorId: ..., 
  };
  mutation.mutate(createInstructorVars);
  // Variables can be defined inline as well.
  mutation.mutate({ usuarioInternalId: ..., usuarioId: ..., rolInternalId: ..., nombreCompleto: ..., correo: ..., passwordHash: ..., telefono: ..., especialidad: ..., instructorId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createInstructorVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.usuario_insert);
    console.log(mutation.data.instructor_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateInstructor
You can execute the `UpdateInstructor` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateInstructor(options?: useDataConnectMutationOptions<UpdateInstructorData, FirebaseError, UpdateInstructorVariables>): UseDataConnectMutationResult<UpdateInstructorData, UpdateInstructorVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateInstructor(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateInstructorData, FirebaseError, UpdateInstructorVariables>): UseDataConnectMutationResult<UpdateInstructorData, UpdateInstructorVariables>;
```

### Variables
The `UpdateInstructor` Mutation requires an argument of type `UpdateInstructorVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateInstructorVariables {
  usuarioInternalId: UUIDString;
  instructorInternalId: UUIDString;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  activo: boolean;
  especialidad: string;
}
```
### Return Type
Recall that calling the `UpdateInstructor` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateInstructor` Mutation is of type `UpdateInstructorData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateInstructorData {
  usuario_update?: Usuario_Key | null;
  instructor_update?: Instructor_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateInstructor`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateInstructorVariables } from '@dataconnect/generated';
import { useUpdateInstructor } from '@dataconnect/generated/react'

export default function UpdateInstructorComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateInstructor();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateInstructor(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateInstructor(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateInstructor(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateInstructor` Mutation requires an argument of type `UpdateInstructorVariables`:
  const updateInstructorVars: UpdateInstructorVariables = {
    usuarioInternalId: ..., 
    instructorInternalId: ..., 
    nombreCompleto: ..., 
    correo: ..., 
    telefono: ..., 
    activo: ..., 
    especialidad: ..., 
  };
  mutation.mutate(updateInstructorVars);
  // Variables can be defined inline as well.
  mutation.mutate({ usuarioInternalId: ..., instructorInternalId: ..., nombreCompleto: ..., correo: ..., telefono: ..., activo: ..., especialidad: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateInstructorVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.usuario_update);
    console.log(mutation.data.instructor_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteInstructor
You can execute the `DeleteInstructor` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteInstructor(options?: useDataConnectMutationOptions<DeleteInstructorData, FirebaseError, DeleteInstructorVariables>): UseDataConnectMutationResult<DeleteInstructorData, DeleteInstructorVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteInstructor(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteInstructorData, FirebaseError, DeleteInstructorVariables>): UseDataConnectMutationResult<DeleteInstructorData, DeleteInstructorVariables>;
```

### Variables
The `DeleteInstructor` Mutation requires an argument of type `DeleteInstructorVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteInstructorVariables {
  instructorInternalId: UUIDString;
  usuarioInternalId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteInstructor` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteInstructor` Mutation is of type `DeleteInstructorData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteInstructorData {
  instructor_delete?: Instructor_Key | null;
  usuario_delete?: Usuario_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteInstructor`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteInstructorVariables } from '@dataconnect/generated';
import { useDeleteInstructor } from '@dataconnect/generated/react'

export default function DeleteInstructorComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteInstructor();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteInstructor(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteInstructor(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteInstructor(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteInstructor` Mutation requires an argument of type `DeleteInstructorVariables`:
  const deleteInstructorVars: DeleteInstructorVariables = {
    instructorInternalId: ..., 
    usuarioInternalId: ..., 
  };
  mutation.mutate(deleteInstructorVars);
  // Variables can be defined inline as well.
  mutation.mutate({ instructorInternalId: ..., usuarioInternalId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteInstructorVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.instructor_delete);
    console.log(mutation.data.usuario_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateCurso
You can execute the `CreateCurso` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateCurso(options?: useDataConnectMutationOptions<CreateCursoData, FirebaseError, CreateCursoVariables>): UseDataConnectMutationResult<CreateCursoData, CreateCursoVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateCurso(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCursoData, FirebaseError, CreateCursoVariables>): UseDataConnectMutationResult<CreateCursoData, CreateCursoVariables>;
```

### Variables
The `CreateCurso` Mutation requires an argument of type `CreateCursoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateCursoVariables {
  cursoId: number;
  nombre: string;
  descripcion?: string | null;
  categoria?: string | null;
  urlImagen?: string | null;
  estado?: string | null;
  instructorId?: UUIDString | null;
}
```
### Return Type
Recall that calling the `CreateCurso` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateCurso` Mutation is of type `CreateCursoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateCursoData {
  curso_insert: Curso_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateCurso`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateCursoVariables } from '@dataconnect/generated';
import { useCreateCurso } from '@dataconnect/generated/react'

export default function CreateCursoComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateCurso();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateCurso(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCurso(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCurso(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateCurso` Mutation requires an argument of type `CreateCursoVariables`:
  const createCursoVars: CreateCursoVariables = {
    cursoId: ..., 
    nombre: ..., 
    descripcion: ..., // optional
    categoria: ..., // optional
    urlImagen: ..., // optional
    estado: ..., // optional
    instructorId: ..., // optional
  };
  mutation.mutate(createCursoVars);
  // Variables can be defined inline as well.
  mutation.mutate({ cursoId: ..., nombre: ..., descripcion: ..., categoria: ..., urlImagen: ..., estado: ..., instructorId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createCursoVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.curso_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateCurso
You can execute the `UpdateCurso` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateCurso(options?: useDataConnectMutationOptions<UpdateCursoData, FirebaseError, UpdateCursoVariables>): UseDataConnectMutationResult<UpdateCursoData, UpdateCursoVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateCurso(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateCursoData, FirebaseError, UpdateCursoVariables>): UseDataConnectMutationResult<UpdateCursoData, UpdateCursoVariables>;
```

### Variables
The `UpdateCurso` Mutation requires an argument of type `UpdateCursoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateCursoVariables {
  cursoInternalId: UUIDString;
  cursoId: number;
  nombre: string;
  descripcion?: string | null;
  categoria?: string | null;
  urlImagen?: string | null;
  estado?: string | null;
  instructorId?: UUIDString | null;
}
```
### Return Type
Recall that calling the `UpdateCurso` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateCurso` Mutation is of type `UpdateCursoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateCursoData {
  curso_update?: Curso_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateCurso`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateCursoVariables } from '@dataconnect/generated';
import { useUpdateCurso } from '@dataconnect/generated/react'

export default function UpdateCursoComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateCurso();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateCurso(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateCurso(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateCurso(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateCurso` Mutation requires an argument of type `UpdateCursoVariables`:
  const updateCursoVars: UpdateCursoVariables = {
    cursoInternalId: ..., 
    cursoId: ..., 
    nombre: ..., 
    descripcion: ..., // optional
    categoria: ..., // optional
    urlImagen: ..., // optional
    estado: ..., // optional
    instructorId: ..., // optional
  };
  mutation.mutate(updateCursoVars);
  // Variables can be defined inline as well.
  mutation.mutate({ cursoInternalId: ..., cursoId: ..., nombre: ..., descripcion: ..., categoria: ..., urlImagen: ..., estado: ..., instructorId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateCursoVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.curso_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteCurso
You can execute the `DeleteCurso` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteCurso(options?: useDataConnectMutationOptions<DeleteCursoData, FirebaseError, DeleteCursoVariables>): UseDataConnectMutationResult<DeleteCursoData, DeleteCursoVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteCurso(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteCursoData, FirebaseError, DeleteCursoVariables>): UseDataConnectMutationResult<DeleteCursoData, DeleteCursoVariables>;
```

### Variables
The `DeleteCurso` Mutation requires an argument of type `DeleteCursoVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteCursoVariables {
  cursoInternalId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteCurso` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteCurso` Mutation is of type `DeleteCursoData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteCursoData {
  curso_delete?: Curso_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteCurso`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteCursoVariables } from '@dataconnect/generated';
import { useDeleteCurso } from '@dataconnect/generated/react'

export default function DeleteCursoComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteCurso();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteCurso(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteCurso(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteCurso(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteCurso` Mutation requires an argument of type `DeleteCursoVariables`:
  const deleteCursoVars: DeleteCursoVariables = {
    cursoInternalId: ..., 
  };
  mutation.mutate(deleteCursoVars);
  // Variables can be defined inline as well.
  mutation.mutate({ cursoInternalId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteCursoVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.curso_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateHorario
You can execute the `CreateHorario` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateHorario(options?: useDataConnectMutationOptions<CreateHorarioData, FirebaseError, CreateHorarioVariables>): UseDataConnectMutationResult<CreateHorarioData, CreateHorarioVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateHorario(dc: DataConnect, options?: useDataConnectMutationOptions<CreateHorarioData, FirebaseError, CreateHorarioVariables>): UseDataConnectMutationResult<CreateHorarioData, CreateHorarioVariables>;
```

### Variables
The `CreateHorario` Mutation requires an argument of type `CreateHorarioVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateHorarioVariables {
  horarioId: number;
  cursoId: UUIDString;
  diaSemana: string;
  fechaInicio: DateString;
  fechaFin: DateString;
  horaInicio: string;
  horaFin: string;
  cupoMaximo: number;
  cupoActual?: number | null;
  estado?: string | null;
}
```
### Return Type
Recall that calling the `CreateHorario` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateHorario` Mutation is of type `CreateHorarioData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateHorarioData {
  horario_insert: Horario_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateHorario`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateHorarioVariables } from '@dataconnect/generated';
import { useCreateHorario } from '@dataconnect/generated/react'

export default function CreateHorarioComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateHorario();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateHorario(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateHorario(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateHorario(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateHorario` Mutation requires an argument of type `CreateHorarioVariables`:
  const createHorarioVars: CreateHorarioVariables = {
    horarioId: ..., 
    cursoId: ..., 
    diaSemana: ..., 
    fechaInicio: ..., 
    fechaFin: ..., 
    horaInicio: ..., 
    horaFin: ..., 
    cupoMaximo: ..., 
    cupoActual: ..., // optional
    estado: ..., // optional
  };
  mutation.mutate(createHorarioVars);
  // Variables can be defined inline as well.
  mutation.mutate({ horarioId: ..., cursoId: ..., diaSemana: ..., fechaInicio: ..., fechaFin: ..., horaInicio: ..., horaFin: ..., cupoMaximo: ..., cupoActual: ..., estado: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createHorarioVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.horario_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateHorario
You can execute the `UpdateHorario` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateHorario(options?: useDataConnectMutationOptions<UpdateHorarioData, FirebaseError, UpdateHorarioVariables>): UseDataConnectMutationResult<UpdateHorarioData, UpdateHorarioVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateHorario(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateHorarioData, FirebaseError, UpdateHorarioVariables>): UseDataConnectMutationResult<UpdateHorarioData, UpdateHorarioVariables>;
```

### Variables
The `UpdateHorario` Mutation requires an argument of type `UpdateHorarioVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateHorarioVariables {
  horarioInternalId: UUIDString;
  horarioId: number;
  cursoId: UUIDString;
  diaSemana: string;
  fechaInicio: DateString;
  fechaFin: DateString;
  horaInicio: string;
  horaFin: string;
  cupoMaximo: number;
  cupoActual: number;
  estado?: string | null;
}
```
### Return Type
Recall that calling the `UpdateHorario` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateHorario` Mutation is of type `UpdateHorarioData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateHorarioData {
  horario_update?: Horario_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateHorario`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateHorarioVariables } from '@dataconnect/generated';
import { useUpdateHorario } from '@dataconnect/generated/react'

export default function UpdateHorarioComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateHorario();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateHorario(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateHorario(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateHorario(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateHorario` Mutation requires an argument of type `UpdateHorarioVariables`:
  const updateHorarioVars: UpdateHorarioVariables = {
    horarioInternalId: ..., 
    horarioId: ..., 
    cursoId: ..., 
    diaSemana: ..., 
    fechaInicio: ..., 
    fechaFin: ..., 
    horaInicio: ..., 
    horaFin: ..., 
    cupoMaximo: ..., 
    cupoActual: ..., 
    estado: ..., // optional
  };
  mutation.mutate(updateHorarioVars);
  // Variables can be defined inline as well.
  mutation.mutate({ horarioInternalId: ..., horarioId: ..., cursoId: ..., diaSemana: ..., fechaInicio: ..., fechaFin: ..., horaInicio: ..., horaFin: ..., cupoMaximo: ..., cupoActual: ..., estado: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateHorarioVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.horario_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteHorario
You can execute the `DeleteHorario` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteHorario(options?: useDataConnectMutationOptions<DeleteHorarioData, FirebaseError, DeleteHorarioVariables>): UseDataConnectMutationResult<DeleteHorarioData, DeleteHorarioVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteHorario(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteHorarioData, FirebaseError, DeleteHorarioVariables>): UseDataConnectMutationResult<DeleteHorarioData, DeleteHorarioVariables>;
```

### Variables
The `DeleteHorario` Mutation requires an argument of type `DeleteHorarioVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteHorarioVariables {
  horarioInternalId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteHorario` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteHorario` Mutation is of type `DeleteHorarioData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteHorarioData {
  horario_delete?: Horario_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteHorario`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteHorarioVariables } from '@dataconnect/generated';
import { useDeleteHorario } from '@dataconnect/generated/react'

export default function DeleteHorarioComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteHorario();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteHorario(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteHorario(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteHorario(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteHorario` Mutation requires an argument of type `DeleteHorarioVariables`:
  const deleteHorarioVars: DeleteHorarioVariables = {
    horarioInternalId: ..., 
  };
  mutation.mutate(deleteHorarioVars);
  // Variables can be defined inline as well.
  mutation.mutate({ horarioInternalId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteHorarioVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.horario_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ActualizarCupoHorario
You can execute the `ActualizarCupoHorario` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useActualizarCupoHorario(options?: useDataConnectMutationOptions<ActualizarCupoHorarioData, FirebaseError, ActualizarCupoHorarioVariables>): UseDataConnectMutationResult<ActualizarCupoHorarioData, ActualizarCupoHorarioVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useActualizarCupoHorario(dc: DataConnect, options?: useDataConnectMutationOptions<ActualizarCupoHorarioData, FirebaseError, ActualizarCupoHorarioVariables>): UseDataConnectMutationResult<ActualizarCupoHorarioData, ActualizarCupoHorarioVariables>;
```

### Variables
The `ActualizarCupoHorario` Mutation requires an argument of type `ActualizarCupoHorarioVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ActualizarCupoHorarioVariables {
  horarioInternalId: UUIDString;
  cupoActual: number;
}
```
### Return Type
Recall that calling the `ActualizarCupoHorario` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `ActualizarCupoHorario` Mutation is of type `ActualizarCupoHorarioData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ActualizarCupoHorarioData {
  horario_update?: Horario_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `ActualizarCupoHorario`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ActualizarCupoHorarioVariables } from '@dataconnect/generated';
import { useActualizarCupoHorario } from '@dataconnect/generated/react'

export default function ActualizarCupoHorarioComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useActualizarCupoHorario();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useActualizarCupoHorario(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useActualizarCupoHorario(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useActualizarCupoHorario(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useActualizarCupoHorario` Mutation requires an argument of type `ActualizarCupoHorarioVariables`:
  const actualizarCupoHorarioVars: ActualizarCupoHorarioVariables = {
    horarioInternalId: ..., 
    cupoActual: ..., 
  };
  mutation.mutate(actualizarCupoHorarioVars);
  // Variables can be defined inline as well.
  mutation.mutate({ horarioInternalId: ..., cupoActual: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(actualizarCupoHorarioVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.horario_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateReporteEstadistica
You can execute the `CreateReporteEstadistica` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateReporteEstadistica(options?: useDataConnectMutationOptions<CreateReporteEstadisticaData, FirebaseError, CreateReporteEstadisticaVariables>): UseDataConnectMutationResult<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateReporteEstadistica(dc: DataConnect, options?: useDataConnectMutationOptions<CreateReporteEstadisticaData, FirebaseError, CreateReporteEstadisticaVariables>): UseDataConnectMutationResult<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;
```

### Variables
The `CreateReporteEstadistica` Mutation requires an argument of type `CreateReporteEstadisticaVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateReporteEstadisticaVariables {
  reporteId: number;
  cursoInternalId: UUIDString;
  periodoAnio: string;
  totalInscritos: number;
  totalBajas: number;
  porcentajeAsistencia: number;
  calificacionPromedio?: number | null;
  ingresosGenerados?: number | null;
}
```
### Return Type
Recall that calling the `CreateReporteEstadistica` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateReporteEstadistica` Mutation is of type `CreateReporteEstadisticaData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateReporteEstadisticaData {
  reporteEstadistica_insert: ReporteEstadistica_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateReporteEstadistica`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateReporteEstadisticaVariables } from '@dataconnect/generated';
import { useCreateReporteEstadistica } from '@dataconnect/generated/react'

export default function CreateReporteEstadisticaComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateReporteEstadistica();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateReporteEstadistica(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateReporteEstadistica(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateReporteEstadistica(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateReporteEstadistica` Mutation requires an argument of type `CreateReporteEstadisticaVariables`:
  const createReporteEstadisticaVars: CreateReporteEstadisticaVariables = {
    reporteId: ..., 
    cursoInternalId: ..., 
    periodoAnio: ..., 
    totalInscritos: ..., 
    totalBajas: ..., 
    porcentajeAsistencia: ..., 
    calificacionPromedio: ..., // optional
    ingresosGenerados: ..., // optional
  };
  mutation.mutate(createReporteEstadisticaVars);
  // Variables can be defined inline as well.
  mutation.mutate({ reporteId: ..., cursoInternalId: ..., periodoAnio: ..., totalInscritos: ..., totalBajas: ..., porcentajeAsistencia: ..., calificacionPromedio: ..., ingresosGenerados: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createReporteEstadisticaVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.reporteEstadistica_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateReporteEstadistica
You can execute the `UpdateReporteEstadistica` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateReporteEstadistica(options?: useDataConnectMutationOptions<UpdateReporteEstadisticaData, FirebaseError, UpdateReporteEstadisticaVariables>): UseDataConnectMutationResult<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateReporteEstadistica(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateReporteEstadisticaData, FirebaseError, UpdateReporteEstadisticaVariables>): UseDataConnectMutationResult<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;
```

### Variables
The `UpdateReporteEstadistica` Mutation requires an argument of type `UpdateReporteEstadisticaVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateReporteEstadisticaVariables {
  reporteInternalId: UUIDString;
  totalInscritos: number;
  totalBajas: number;
  porcentajeAsistencia: number;
  calificacionPromedio?: number | null;
  ingresosGenerados?: number | null;
}
```
### Return Type
Recall that calling the `UpdateReporteEstadistica` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateReporteEstadistica` Mutation is of type `UpdateReporteEstadisticaData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateReporteEstadisticaData {
  reporteEstadistica_update?: ReporteEstadistica_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateReporteEstadistica`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateReporteEstadisticaVariables } from '@dataconnect/generated';
import { useUpdateReporteEstadistica } from '@dataconnect/generated/react'

export default function UpdateReporteEstadisticaComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateReporteEstadistica();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateReporteEstadistica(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateReporteEstadistica(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateReporteEstadistica(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateReporteEstadistica` Mutation requires an argument of type `UpdateReporteEstadisticaVariables`:
  const updateReporteEstadisticaVars: UpdateReporteEstadisticaVariables = {
    reporteInternalId: ..., 
    totalInscritos: ..., 
    totalBajas: ..., 
    porcentajeAsistencia: ..., 
    calificacionPromedio: ..., // optional
    ingresosGenerados: ..., // optional
  };
  mutation.mutate(updateReporteEstadisticaVars);
  // Variables can be defined inline as well.
  mutation.mutate({ reporteInternalId: ..., totalInscritos: ..., totalBajas: ..., porcentajeAsistencia: ..., calificacionPromedio: ..., ingresosGenerados: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateReporteEstadisticaVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.reporteEstadistica_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## InsscribirEstudiante
You can execute the `InsscribirEstudiante` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useInsscribirEstudiante(options?: useDataConnectMutationOptions<InsscribirEstudianteData, FirebaseError, InsscribirEstudianteVariables>): UseDataConnectMutationResult<InsscribirEstudianteData, InsscribirEstudianteVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useInsscribirEstudiante(dc: DataConnect, options?: useDataConnectMutationOptions<InsscribirEstudianteData, FirebaseError, InsscribirEstudianteVariables>): UseDataConnectMutationResult<InsscribirEstudianteData, InsscribirEstudianteVariables>;
```

### Variables
The `InsscribirEstudiante` Mutation requires an argument of type `InsscribirEstudianteVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface InsscribirEstudianteVariables {
  inscripcionId: string;
  estudianteInternalId: UUIDString;
  horarioInternalId: UUIDString;
}
```
### Return Type
Recall that calling the `InsscribirEstudiante` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `InsscribirEstudiante` Mutation is of type `InsscribirEstudianteData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface InsscribirEstudianteData {
  inscripcion_insert: Inscripcion_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `InsscribirEstudiante`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, InsscribirEstudianteVariables } from '@dataconnect/generated';
import { useInsscribirEstudiante } from '@dataconnect/generated/react'

export default function InsscribirEstudianteComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useInsscribirEstudiante();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useInsscribirEstudiante(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useInsscribirEstudiante(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useInsscribirEstudiante(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useInsscribirEstudiante` Mutation requires an argument of type `InsscribirEstudianteVariables`:
  const insscribirEstudianteVars: InsscribirEstudianteVariables = {
    inscripcionId: ..., 
    estudianteInternalId: ..., 
    horarioInternalId: ..., 
  };
  mutation.mutate(insscribirEstudianteVars);
  // Variables can be defined inline as well.
  mutation.mutate({ inscripcionId: ..., estudianteInternalId: ..., horarioInternalId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(insscribirEstudianteVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.inscripcion_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CancelarInscripcion
You can execute the `CancelarInscripcion` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCancelarInscripcion(options?: useDataConnectMutationOptions<CancelarInscripcionData, FirebaseError, CancelarInscripcionVariables>): UseDataConnectMutationResult<CancelarInscripcionData, CancelarInscripcionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCancelarInscripcion(dc: DataConnect, options?: useDataConnectMutationOptions<CancelarInscripcionData, FirebaseError, CancelarInscripcionVariables>): UseDataConnectMutationResult<CancelarInscripcionData, CancelarInscripcionVariables>;
```

### Variables
The `CancelarInscripcion` Mutation requires an argument of type `CancelarInscripcionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CancelarInscripcionVariables {
  inscripcionInternalId: UUIDString;
}
```
### Return Type
Recall that calling the `CancelarInscripcion` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CancelarInscripcion` Mutation is of type `CancelarInscripcionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CancelarInscripcionData {
  inscripcion_update?: Inscripcion_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CancelarInscripcion`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CancelarInscripcionVariables } from '@dataconnect/generated';
import { useCancelarInscripcion } from '@dataconnect/generated/react'

export default function CancelarInscripcionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCancelarInscripcion();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCancelarInscripcion(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCancelarInscripcion(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCancelarInscripcion(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCancelarInscripcion` Mutation requires an argument of type `CancelarInscripcionVariables`:
  const cancelarInscripcionVars: CancelarInscripcionVariables = {
    inscripcionInternalId: ..., 
  };
  mutation.mutate(cancelarInscripcionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ inscripcionInternalId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(cancelarInscripcionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.inscripcion_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```


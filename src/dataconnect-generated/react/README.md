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
  - [*BuscarEstudiantePorMatricula*](#buscarestudiantepormatricula)
  - [*BuscarEstudiantePorNombre*](#buscarestudiantepornombre)
  - [*ListarEstudiantes*](#listarestudiantes)
  - [*ListInstructors*](#listinstructors)
  - [*GetRolByNumero*](#getrolbynumero)
- [**Mutations**](#mutations)
  - [*CreateInstructor*](#createinstructor)
  - [*UpdateInstructor*](#updateinstructor)
  - [*DeleteInstructor*](#deleteinstructor)

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
    usuarioId: string;
    nombreCompleto: string;
    correo: string;
    passwordHash: string;
    rol: {
      nombre: string;
    };
  })[];
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

## BuscarEstudiantePorMatricula
You can execute the `BuscarEstudiantePorMatricula` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useBuscarEstudiantePorMatricula(dc: DataConnect, vars: BuscarEstudiantePorMatriculaVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorMatriculaData>): UseDataConnectQueryResult<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useBuscarEstudiantePorMatricula(vars: BuscarEstudiantePorMatriculaVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorMatriculaData>): UseDataConnectQueryResult<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;
```

### Variables
The `BuscarEstudiantePorMatricula` Query requires an argument of type `BuscarEstudiantePorMatriculaVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface BuscarEstudiantePorMatriculaVariables {
  matricula: string;
}
```
### Return Type
Recall that calling the `BuscarEstudiantePorMatricula` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `BuscarEstudiantePorMatricula` Query is of type `BuscarEstudiantePorMatriculaData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface BuscarEstudiantePorMatriculaData {
  estudiantes: ({
    matricula: string;
    usuario: {
      usuarioId: string;
      nombreCompleto: string;
      correo: string;
      activo: boolean;
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `BuscarEstudiantePorMatricula`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, BuscarEstudiantePorMatriculaVariables } from '@dataconnect/generated';
import { useBuscarEstudiantePorMatricula } from '@dataconnect/generated/react'

export default function BuscarEstudiantePorMatriculaComponent() {
  // The `useBuscarEstudiantePorMatricula` Query hook requires an argument of type `BuscarEstudiantePorMatriculaVariables`:
  const buscarEstudiantePorMatriculaVars: BuscarEstudiantePorMatriculaVariables = {
    matricula: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useBuscarEstudiantePorMatricula(buscarEstudiantePorMatriculaVars);
  // Variables can be defined inline as well.
  const query = useBuscarEstudiantePorMatricula({ matricula: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useBuscarEstudiantePorMatricula(dataConnect, buscarEstudiantePorMatriculaVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useBuscarEstudiantePorMatricula(buscarEstudiantePorMatriculaVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useBuscarEstudiantePorMatricula(dataConnect, buscarEstudiantePorMatriculaVars, options);

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

## BuscarEstudiantePorNombre
You can execute the `BuscarEstudiantePorNombre` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useBuscarEstudiantePorNombre(dc: DataConnect, vars: BuscarEstudiantePorNombreVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorNombreData>): UseDataConnectQueryResult<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useBuscarEstudiantePorNombre(vars: BuscarEstudiantePorNombreVariables, options?: useDataConnectQueryOptions<BuscarEstudiantePorNombreData>): UseDataConnectQueryResult<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;
```

### Variables
The `BuscarEstudiantePorNombre` Query requires an argument of type `BuscarEstudiantePorNombreVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface BuscarEstudiantePorNombreVariables {
  nombre: string;
}
```
### Return Type
Recall that calling the `BuscarEstudiantePorNombre` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `BuscarEstudiantePorNombre` Query is of type `BuscarEstudiantePorNombreData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface BuscarEstudiantePorNombreData {
  estudiantes: ({
    matricula: string;
    usuario: {
      nombreCompleto: string;
      correo: string;
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `BuscarEstudiantePorNombre`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, BuscarEstudiantePorNombreVariables } from '@dataconnect/generated';
import { useBuscarEstudiantePorNombre } from '@dataconnect/generated/react'

export default function BuscarEstudiantePorNombreComponent() {
  // The `useBuscarEstudiantePorNombre` Query hook requires an argument of type `BuscarEstudiantePorNombreVariables`:
  const buscarEstudiantePorNombreVars: BuscarEstudiantePorNombreVariables = {
    nombre: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useBuscarEstudiantePorNombre(buscarEstudiantePorNombreVars);
  // Variables can be defined inline as well.
  const query = useBuscarEstudiantePorNombre({ nombre: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useBuscarEstudiantePorNombre(dataConnect, buscarEstudiantePorNombreVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useBuscarEstudiantePorNombre(buscarEstudiantePorNombreVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useBuscarEstudiantePorNombre(dataConnect, buscarEstudiantePorNombreVars, options);

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
    matricula: string;
    usuario: {
      nombreCompleto: string;
      correo: string;
      activo: boolean;
    };
  })[];
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


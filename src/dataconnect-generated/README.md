# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUsuarioByCorreo*](#getusuariobycorreo)
  - [*BuscarEstudiantePorMatricula*](#buscarestudiantepormatricula)
  - [*BuscarEstudiantePorNombre*](#buscarestudiantepornombre)
  - [*ListarEstudiantes*](#listarestudiantes)
  - [*ListInstructors*](#listinstructors)
  - [*GetRolByNumero*](#getrolbynumero)
  - [*ListCursos*](#listcursos)
  - [*BuscarCursoPorNombre*](#buscarcursopornombre)
  - [*CursosPorCategoria*](#cursosporcategoria)
  - [*CursosPorEstado*](#cursosporestado)
- [**Mutations**](#mutations)
  - [*CreateInstructor*](#createinstructor)
  - [*UpdateInstructor*](#updateinstructor)
  - [*DeleteInstructor*](#deleteinstructor)
  - [*CreateCurso*](#createcurso)
  - [*UpdateCurso*](#updatecurso)
  - [*DeleteCurso*](#deletecurso)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUsuarioByCorreo
You can execute the `GetUsuarioByCorreo` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUsuarioByCorreo(vars: GetUsuarioByCorreoVariables, options?: ExecuteQueryOptions): QueryPromise<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;

interface GetUsuarioByCorreoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUsuarioByCorreoVariables): QueryRef<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;
}
export const getUsuarioByCorreoRef: GetUsuarioByCorreoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUsuarioByCorreo(dc: DataConnect, vars: GetUsuarioByCorreoVariables, options?: ExecuteQueryOptions): QueryPromise<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;

interface GetUsuarioByCorreoRef {
  ...
  (dc: DataConnect, vars: GetUsuarioByCorreoVariables): QueryRef<GetUsuarioByCorreoData, GetUsuarioByCorreoVariables>;
}
export const getUsuarioByCorreoRef: GetUsuarioByCorreoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUsuarioByCorreoRef:
```typescript
const name = getUsuarioByCorreoRef.operationName;
console.log(name);
```

### Variables
The `GetUsuarioByCorreo` query requires an argument of type `GetUsuarioByCorreoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUsuarioByCorreoVariables {
  correo: string;
}
```
### Return Type
Recall that executing the `GetUsuarioByCorreo` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUsuarioByCorreoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `GetUsuarioByCorreo`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUsuarioByCorreo, GetUsuarioByCorreoVariables } from '@dataconnect/generated';

// The `GetUsuarioByCorreo` query requires an argument of type `GetUsuarioByCorreoVariables`:
const getUsuarioByCorreoVars: GetUsuarioByCorreoVariables = {
  correo: ..., 
};

// Call the `getUsuarioByCorreo()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUsuarioByCorreo(getUsuarioByCorreoVars);
// Variables can be defined inline as well.
const { data } = await getUsuarioByCorreo({ correo: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUsuarioByCorreo(dataConnect, getUsuarioByCorreoVars);

console.log(data.usuarios);

// Or, you can use the `Promise` API.
getUsuarioByCorreo(getUsuarioByCorreoVars).then((response) => {
  const data = response.data;
  console.log(data.usuarios);
});
```

### Using `GetUsuarioByCorreo`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUsuarioByCorreoRef, GetUsuarioByCorreoVariables } from '@dataconnect/generated';

// The `GetUsuarioByCorreo` query requires an argument of type `GetUsuarioByCorreoVariables`:
const getUsuarioByCorreoVars: GetUsuarioByCorreoVariables = {
  correo: ..., 
};

// Call the `getUsuarioByCorreoRef()` function to get a reference to the query.
const ref = getUsuarioByCorreoRef(getUsuarioByCorreoVars);
// Variables can be defined inline as well.
const ref = getUsuarioByCorreoRef({ correo: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUsuarioByCorreoRef(dataConnect, getUsuarioByCorreoVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.usuarios);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.usuarios);
});
```

## BuscarEstudiantePorMatricula
You can execute the `BuscarEstudiantePorMatricula` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
buscarEstudiantePorMatricula(vars: BuscarEstudiantePorMatriculaVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;

interface BuscarEstudiantePorMatriculaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: BuscarEstudiantePorMatriculaVariables): QueryRef<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;
}
export const buscarEstudiantePorMatriculaRef: BuscarEstudiantePorMatriculaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
buscarEstudiantePorMatricula(dc: DataConnect, vars: BuscarEstudiantePorMatriculaVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;

interface BuscarEstudiantePorMatriculaRef {
  ...
  (dc: DataConnect, vars: BuscarEstudiantePorMatriculaVariables): QueryRef<BuscarEstudiantePorMatriculaData, BuscarEstudiantePorMatriculaVariables>;
}
export const buscarEstudiantePorMatriculaRef: BuscarEstudiantePorMatriculaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the buscarEstudiantePorMatriculaRef:
```typescript
const name = buscarEstudiantePorMatriculaRef.operationName;
console.log(name);
```

### Variables
The `BuscarEstudiantePorMatricula` query requires an argument of type `BuscarEstudiantePorMatriculaVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface BuscarEstudiantePorMatriculaVariables {
  matricula: string;
}
```
### Return Type
Recall that executing the `BuscarEstudiantePorMatricula` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `BuscarEstudiantePorMatriculaData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `BuscarEstudiantePorMatricula`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, buscarEstudiantePorMatricula, BuscarEstudiantePorMatriculaVariables } from '@dataconnect/generated';

// The `BuscarEstudiantePorMatricula` query requires an argument of type `BuscarEstudiantePorMatriculaVariables`:
const buscarEstudiantePorMatriculaVars: BuscarEstudiantePorMatriculaVariables = {
  matricula: ..., 
};

// Call the `buscarEstudiantePorMatricula()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await buscarEstudiantePorMatricula(buscarEstudiantePorMatriculaVars);
// Variables can be defined inline as well.
const { data } = await buscarEstudiantePorMatricula({ matricula: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await buscarEstudiantePorMatricula(dataConnect, buscarEstudiantePorMatriculaVars);

console.log(data.estudiantes);

// Or, you can use the `Promise` API.
buscarEstudiantePorMatricula(buscarEstudiantePorMatriculaVars).then((response) => {
  const data = response.data;
  console.log(data.estudiantes);
});
```

### Using `BuscarEstudiantePorMatricula`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, buscarEstudiantePorMatriculaRef, BuscarEstudiantePorMatriculaVariables } from '@dataconnect/generated';

// The `BuscarEstudiantePorMatricula` query requires an argument of type `BuscarEstudiantePorMatriculaVariables`:
const buscarEstudiantePorMatriculaVars: BuscarEstudiantePorMatriculaVariables = {
  matricula: ..., 
};

// Call the `buscarEstudiantePorMatriculaRef()` function to get a reference to the query.
const ref = buscarEstudiantePorMatriculaRef(buscarEstudiantePorMatriculaVars);
// Variables can be defined inline as well.
const ref = buscarEstudiantePorMatriculaRef({ matricula: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = buscarEstudiantePorMatriculaRef(dataConnect, buscarEstudiantePorMatriculaVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.estudiantes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.estudiantes);
});
```

## BuscarEstudiantePorNombre
You can execute the `BuscarEstudiantePorNombre` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
buscarEstudiantePorNombre(vars: BuscarEstudiantePorNombreVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;

interface BuscarEstudiantePorNombreRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: BuscarEstudiantePorNombreVariables): QueryRef<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;
}
export const buscarEstudiantePorNombreRef: BuscarEstudiantePorNombreRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
buscarEstudiantePorNombre(dc: DataConnect, vars: BuscarEstudiantePorNombreVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;

interface BuscarEstudiantePorNombreRef {
  ...
  (dc: DataConnect, vars: BuscarEstudiantePorNombreVariables): QueryRef<BuscarEstudiantePorNombreData, BuscarEstudiantePorNombreVariables>;
}
export const buscarEstudiantePorNombreRef: BuscarEstudiantePorNombreRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the buscarEstudiantePorNombreRef:
```typescript
const name = buscarEstudiantePorNombreRef.operationName;
console.log(name);
```

### Variables
The `BuscarEstudiantePorNombre` query requires an argument of type `BuscarEstudiantePorNombreVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface BuscarEstudiantePorNombreVariables {
  nombre: string;
}
```
### Return Type
Recall that executing the `BuscarEstudiantePorNombre` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `BuscarEstudiantePorNombreData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `BuscarEstudiantePorNombre`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, buscarEstudiantePorNombre, BuscarEstudiantePorNombreVariables } from '@dataconnect/generated';

// The `BuscarEstudiantePorNombre` query requires an argument of type `BuscarEstudiantePorNombreVariables`:
const buscarEstudiantePorNombreVars: BuscarEstudiantePorNombreVariables = {
  nombre: ..., 
};

// Call the `buscarEstudiantePorNombre()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await buscarEstudiantePorNombre(buscarEstudiantePorNombreVars);
// Variables can be defined inline as well.
const { data } = await buscarEstudiantePorNombre({ nombre: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await buscarEstudiantePorNombre(dataConnect, buscarEstudiantePorNombreVars);

console.log(data.estudiantes);

// Or, you can use the `Promise` API.
buscarEstudiantePorNombre(buscarEstudiantePorNombreVars).then((response) => {
  const data = response.data;
  console.log(data.estudiantes);
});
```

### Using `BuscarEstudiantePorNombre`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, buscarEstudiantePorNombreRef, BuscarEstudiantePorNombreVariables } from '@dataconnect/generated';

// The `BuscarEstudiantePorNombre` query requires an argument of type `BuscarEstudiantePorNombreVariables`:
const buscarEstudiantePorNombreVars: BuscarEstudiantePorNombreVariables = {
  nombre: ..., 
};

// Call the `buscarEstudiantePorNombreRef()` function to get a reference to the query.
const ref = buscarEstudiantePorNombreRef(buscarEstudiantePorNombreVars);
// Variables can be defined inline as well.
const ref = buscarEstudiantePorNombreRef({ nombre: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = buscarEstudiantePorNombreRef(dataConnect, buscarEstudiantePorNombreVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.estudiantes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.estudiantes);
});
```

## ListarEstudiantes
You can execute the `ListarEstudiantes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listarEstudiantes(options?: ExecuteQueryOptions): QueryPromise<ListarEstudiantesData, undefined>;

interface ListarEstudiantesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListarEstudiantesData, undefined>;
}
export const listarEstudiantesRef: ListarEstudiantesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listarEstudiantes(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListarEstudiantesData, undefined>;

interface ListarEstudiantesRef {
  ...
  (dc: DataConnect): QueryRef<ListarEstudiantesData, undefined>;
}
export const listarEstudiantesRef: ListarEstudiantesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listarEstudiantesRef:
```typescript
const name = listarEstudiantesRef.operationName;
console.log(name);
```

### Variables
The `ListarEstudiantes` query has no variables.
### Return Type
Recall that executing the `ListarEstudiantes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListarEstudiantesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListarEstudiantes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listarEstudiantes } from '@dataconnect/generated';


// Call the `listarEstudiantes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listarEstudiantes();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listarEstudiantes(dataConnect);

console.log(data.estudiantes);

// Or, you can use the `Promise` API.
listarEstudiantes().then((response) => {
  const data = response.data;
  console.log(data.estudiantes);
});
```

### Using `ListarEstudiantes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listarEstudiantesRef } from '@dataconnect/generated';


// Call the `listarEstudiantesRef()` function to get a reference to the query.
const ref = listarEstudiantesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listarEstudiantesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.estudiantes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.estudiantes);
});
```

## ListInstructors
You can execute the `ListInstructors` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listInstructors(options?: ExecuteQueryOptions): QueryPromise<ListInstructorsData, undefined>;

interface ListInstructorsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListInstructorsData, undefined>;
}
export const listInstructorsRef: ListInstructorsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listInstructors(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListInstructorsData, undefined>;

interface ListInstructorsRef {
  ...
  (dc: DataConnect): QueryRef<ListInstructorsData, undefined>;
}
export const listInstructorsRef: ListInstructorsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listInstructorsRef:
```typescript
const name = listInstructorsRef.operationName;
console.log(name);
```

### Variables
The `ListInstructors` query has no variables.
### Return Type
Recall that executing the `ListInstructors` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListInstructorsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListInstructors`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listInstructors } from '@dataconnect/generated';


// Call the `listInstructors()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listInstructors();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listInstructors(dataConnect);

console.log(data.instructors);

// Or, you can use the `Promise` API.
listInstructors().then((response) => {
  const data = response.data;
  console.log(data.instructors);
});
```

### Using `ListInstructors`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listInstructorsRef } from '@dataconnect/generated';


// Call the `listInstructorsRef()` function to get a reference to the query.
const ref = listInstructorsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listInstructorsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.instructors);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.instructors);
});
```

## GetRolByNumero
You can execute the `GetRolByNumero` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getRolByNumero(vars: GetRolByNumeroVariables, options?: ExecuteQueryOptions): QueryPromise<GetRolByNumeroData, GetRolByNumeroVariables>;

interface GetRolByNumeroRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetRolByNumeroVariables): QueryRef<GetRolByNumeroData, GetRolByNumeroVariables>;
}
export const getRolByNumeroRef: GetRolByNumeroRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getRolByNumero(dc: DataConnect, vars: GetRolByNumeroVariables, options?: ExecuteQueryOptions): QueryPromise<GetRolByNumeroData, GetRolByNumeroVariables>;

interface GetRolByNumeroRef {
  ...
  (dc: DataConnect, vars: GetRolByNumeroVariables): QueryRef<GetRolByNumeroData, GetRolByNumeroVariables>;
}
export const getRolByNumeroRef: GetRolByNumeroRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getRolByNumeroRef:
```typescript
const name = getRolByNumeroRef.operationName;
console.log(name);
```

### Variables
The `GetRolByNumero` query requires an argument of type `GetRolByNumeroVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetRolByNumeroVariables {
  rolId: number;
}
```
### Return Type
Recall that executing the `GetRolByNumero` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetRolByNumeroData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetRolByNumeroData {
  rols: ({
    id: UUIDString;
    rolId: number;
    nombre: string;
  } & Rol_Key)[];
}
```
### Using `GetRolByNumero`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getRolByNumero, GetRolByNumeroVariables } from '@dataconnect/generated';

// The `GetRolByNumero` query requires an argument of type `GetRolByNumeroVariables`:
const getRolByNumeroVars: GetRolByNumeroVariables = {
  rolId: ..., 
};

// Call the `getRolByNumero()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getRolByNumero(getRolByNumeroVars);
// Variables can be defined inline as well.
const { data } = await getRolByNumero({ rolId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getRolByNumero(dataConnect, getRolByNumeroVars);

console.log(data.rols);

// Or, you can use the `Promise` API.
getRolByNumero(getRolByNumeroVars).then((response) => {
  const data = response.data;
  console.log(data.rols);
});
```

### Using `GetRolByNumero`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getRolByNumeroRef, GetRolByNumeroVariables } from '@dataconnect/generated';

// The `GetRolByNumero` query requires an argument of type `GetRolByNumeroVariables`:
const getRolByNumeroVars: GetRolByNumeroVariables = {
  rolId: ..., 
};

// Call the `getRolByNumeroRef()` function to get a reference to the query.
const ref = getRolByNumeroRef(getRolByNumeroVars);
// Variables can be defined inline as well.
const ref = getRolByNumeroRef({ rolId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getRolByNumeroRef(dataConnect, getRolByNumeroVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.rols);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.rols);
});
```

## ListCursos
You can execute the `ListCursos` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCursos(options?: ExecuteQueryOptions): QueryPromise<ListCursosData, undefined>;

interface ListCursosRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCursosData, undefined>;
}
export const listCursosRef: ListCursosRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCursos(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCursosData, undefined>;

interface ListCursosRef {
  ...
  (dc: DataConnect): QueryRef<ListCursosData, undefined>;
}
export const listCursosRef: ListCursosRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCursosRef:
```typescript
const name = listCursosRef.operationName;
console.log(name);
```

### Variables
The `ListCursos` query has no variables.
### Return Type
Recall that executing the `ListCursos` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCursosData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListCursos`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCursos } from '@dataconnect/generated';


// Call the `listCursos()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCursos();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCursos(dataConnect);

console.log(data.cursos);

// Or, you can use the `Promise` API.
listCursos().then((response) => {
  const data = response.data;
  console.log(data.cursos);
});
```

### Using `ListCursos`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCursosRef } from '@dataconnect/generated';


// Call the `listCursosRef()` function to get a reference to the query.
const ref = listCursosRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCursosRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cursos);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cursos);
});
```

## BuscarCursoPorNombre
You can execute the `BuscarCursoPorNombre` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
buscarCursoPorNombre(vars: BuscarCursoPorNombreVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;

interface BuscarCursoPorNombreRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: BuscarCursoPorNombreVariables): QueryRef<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;
}
export const buscarCursoPorNombreRef: BuscarCursoPorNombreRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
buscarCursoPorNombre(dc: DataConnect, vars: BuscarCursoPorNombreVariables, options?: ExecuteQueryOptions): QueryPromise<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;

interface BuscarCursoPorNombreRef {
  ...
  (dc: DataConnect, vars: BuscarCursoPorNombreVariables): QueryRef<BuscarCursoPorNombreData, BuscarCursoPorNombreVariables>;
}
export const buscarCursoPorNombreRef: BuscarCursoPorNombreRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the buscarCursoPorNombreRef:
```typescript
const name = buscarCursoPorNombreRef.operationName;
console.log(name);
```

### Variables
The `BuscarCursoPorNombre` query requires an argument of type `BuscarCursoPorNombreVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface BuscarCursoPorNombreVariables {
  nombre: string;
}
```
### Return Type
Recall that executing the `BuscarCursoPorNombre` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `BuscarCursoPorNombreData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `BuscarCursoPorNombre`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, buscarCursoPorNombre, BuscarCursoPorNombreVariables } from '@dataconnect/generated';

// The `BuscarCursoPorNombre` query requires an argument of type `BuscarCursoPorNombreVariables`:
const buscarCursoPorNombreVars: BuscarCursoPorNombreVariables = {
  nombre: ..., 
};

// Call the `buscarCursoPorNombre()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await buscarCursoPorNombre(buscarCursoPorNombreVars);
// Variables can be defined inline as well.
const { data } = await buscarCursoPorNombre({ nombre: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await buscarCursoPorNombre(dataConnect, buscarCursoPorNombreVars);

console.log(data.cursos);

// Or, you can use the `Promise` API.
buscarCursoPorNombre(buscarCursoPorNombreVars).then((response) => {
  const data = response.data;
  console.log(data.cursos);
});
```

### Using `BuscarCursoPorNombre`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, buscarCursoPorNombreRef, BuscarCursoPorNombreVariables } from '@dataconnect/generated';

// The `BuscarCursoPorNombre` query requires an argument of type `BuscarCursoPorNombreVariables`:
const buscarCursoPorNombreVars: BuscarCursoPorNombreVariables = {
  nombre: ..., 
};

// Call the `buscarCursoPorNombreRef()` function to get a reference to the query.
const ref = buscarCursoPorNombreRef(buscarCursoPorNombreVars);
// Variables can be defined inline as well.
const ref = buscarCursoPorNombreRef({ nombre: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = buscarCursoPorNombreRef(dataConnect, buscarCursoPorNombreVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cursos);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cursos);
});
```

## CursosPorCategoria
You can execute the `CursosPorCategoria` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
cursosPorCategoria(vars: CursosPorCategoriaVariables, options?: ExecuteQueryOptions): QueryPromise<CursosPorCategoriaData, CursosPorCategoriaVariables>;

interface CursosPorCategoriaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CursosPorCategoriaVariables): QueryRef<CursosPorCategoriaData, CursosPorCategoriaVariables>;
}
export const cursosPorCategoriaRef: CursosPorCategoriaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
cursosPorCategoria(dc: DataConnect, vars: CursosPorCategoriaVariables, options?: ExecuteQueryOptions): QueryPromise<CursosPorCategoriaData, CursosPorCategoriaVariables>;

interface CursosPorCategoriaRef {
  ...
  (dc: DataConnect, vars: CursosPorCategoriaVariables): QueryRef<CursosPorCategoriaData, CursosPorCategoriaVariables>;
}
export const cursosPorCategoriaRef: CursosPorCategoriaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the cursosPorCategoriaRef:
```typescript
const name = cursosPorCategoriaRef.operationName;
console.log(name);
```

### Variables
The `CursosPorCategoria` query requires an argument of type `CursosPorCategoriaVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CursosPorCategoriaVariables {
  categoria: string;
}
```
### Return Type
Recall that executing the `CursosPorCategoria` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CursosPorCategoriaData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `CursosPorCategoria`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, cursosPorCategoria, CursosPorCategoriaVariables } from '@dataconnect/generated';

// The `CursosPorCategoria` query requires an argument of type `CursosPorCategoriaVariables`:
const cursosPorCategoriaVars: CursosPorCategoriaVariables = {
  categoria: ..., 
};

// Call the `cursosPorCategoria()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await cursosPorCategoria(cursosPorCategoriaVars);
// Variables can be defined inline as well.
const { data } = await cursosPorCategoria({ categoria: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await cursosPorCategoria(dataConnect, cursosPorCategoriaVars);

console.log(data.cursos);

// Or, you can use the `Promise` API.
cursosPorCategoria(cursosPorCategoriaVars).then((response) => {
  const data = response.data;
  console.log(data.cursos);
});
```

### Using `CursosPorCategoria`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, cursosPorCategoriaRef, CursosPorCategoriaVariables } from '@dataconnect/generated';

// The `CursosPorCategoria` query requires an argument of type `CursosPorCategoriaVariables`:
const cursosPorCategoriaVars: CursosPorCategoriaVariables = {
  categoria: ..., 
};

// Call the `cursosPorCategoriaRef()` function to get a reference to the query.
const ref = cursosPorCategoriaRef(cursosPorCategoriaVars);
// Variables can be defined inline as well.
const ref = cursosPorCategoriaRef({ categoria: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = cursosPorCategoriaRef(dataConnect, cursosPorCategoriaVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cursos);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cursos);
});
```

## CursosPorEstado
You can execute the `CursosPorEstado` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
cursosPorEstado(vars: CursosPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<CursosPorEstadoData, CursosPorEstadoVariables>;

interface CursosPorEstadoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CursosPorEstadoVariables): QueryRef<CursosPorEstadoData, CursosPorEstadoVariables>;
}
export const cursosPorEstadoRef: CursosPorEstadoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
cursosPorEstado(dc: DataConnect, vars: CursosPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<CursosPorEstadoData, CursosPorEstadoVariables>;

interface CursosPorEstadoRef {
  ...
  (dc: DataConnect, vars: CursosPorEstadoVariables): QueryRef<CursosPorEstadoData, CursosPorEstadoVariables>;
}
export const cursosPorEstadoRef: CursosPorEstadoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the cursosPorEstadoRef:
```typescript
const name = cursosPorEstadoRef.operationName;
console.log(name);
```

### Variables
The `CursosPorEstado` query requires an argument of type `CursosPorEstadoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CursosPorEstadoVariables {
  estado: string;
}
```
### Return Type
Recall that executing the `CursosPorEstado` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CursosPorEstadoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CursosPorEstadoData {
  cursos: ({
    id: UUIDString;
    nombre: string;
    estado?: string | null;
  } & Curso_Key)[];
}
```
### Using `CursosPorEstado`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, cursosPorEstado, CursosPorEstadoVariables } from '@dataconnect/generated';

// The `CursosPorEstado` query requires an argument of type `CursosPorEstadoVariables`:
const cursosPorEstadoVars: CursosPorEstadoVariables = {
  estado: ..., 
};

// Call the `cursosPorEstado()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await cursosPorEstado(cursosPorEstadoVars);
// Variables can be defined inline as well.
const { data } = await cursosPorEstado({ estado: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await cursosPorEstado(dataConnect, cursosPorEstadoVars);

console.log(data.cursos);

// Or, you can use the `Promise` API.
cursosPorEstado(cursosPorEstadoVars).then((response) => {
  const data = response.data;
  console.log(data.cursos);
});
```

### Using `CursosPorEstado`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, cursosPorEstadoRef, CursosPorEstadoVariables } from '@dataconnect/generated';

// The `CursosPorEstado` query requires an argument of type `CursosPorEstadoVariables`:
const cursosPorEstadoVars: CursosPorEstadoVariables = {
  estado: ..., 
};

// Call the `cursosPorEstadoRef()` function to get a reference to the query.
const ref = cursosPorEstadoRef(cursosPorEstadoVars);
// Variables can be defined inline as well.
const ref = cursosPorEstadoRef({ estado: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = cursosPorEstadoRef(dataConnect, cursosPorEstadoVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cursos);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cursos);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateInstructor
You can execute the `CreateInstructor` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createInstructor(vars: CreateInstructorVariables): MutationPromise<CreateInstructorData, CreateInstructorVariables>;

interface CreateInstructorRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInstructorVariables): MutationRef<CreateInstructorData, CreateInstructorVariables>;
}
export const createInstructorRef: CreateInstructorRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createInstructor(dc: DataConnect, vars: CreateInstructorVariables): MutationPromise<CreateInstructorData, CreateInstructorVariables>;

interface CreateInstructorRef {
  ...
  (dc: DataConnect, vars: CreateInstructorVariables): MutationRef<CreateInstructorData, CreateInstructorVariables>;
}
export const createInstructorRef: CreateInstructorRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createInstructorRef:
```typescript
const name = createInstructorRef.operationName;
console.log(name);
```

### Variables
The `CreateInstructor` mutation requires an argument of type `CreateInstructorVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
Recall that executing the `CreateInstructor` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateInstructorData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateInstructorData {
  usuario_insert: Usuario_Key;
  instructor_insert: Instructor_Key;
}
```
### Using `CreateInstructor`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createInstructor, CreateInstructorVariables } from '@dataconnect/generated';

// The `CreateInstructor` mutation requires an argument of type `CreateInstructorVariables`:
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

// Call the `createInstructor()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createInstructor(createInstructorVars);
// Variables can be defined inline as well.
const { data } = await createInstructor({ usuarioInternalId: ..., usuarioId: ..., rolInternalId: ..., nombreCompleto: ..., correo: ..., passwordHash: ..., telefono: ..., especialidad: ..., instructorId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createInstructor(dataConnect, createInstructorVars);

console.log(data.usuario_insert);
console.log(data.instructor_insert);

// Or, you can use the `Promise` API.
createInstructor(createInstructorVars).then((response) => {
  const data = response.data;
  console.log(data.usuario_insert);
  console.log(data.instructor_insert);
});
```

### Using `CreateInstructor`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createInstructorRef, CreateInstructorVariables } from '@dataconnect/generated';

// The `CreateInstructor` mutation requires an argument of type `CreateInstructorVariables`:
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

// Call the `createInstructorRef()` function to get a reference to the mutation.
const ref = createInstructorRef(createInstructorVars);
// Variables can be defined inline as well.
const ref = createInstructorRef({ usuarioInternalId: ..., usuarioId: ..., rolInternalId: ..., nombreCompleto: ..., correo: ..., passwordHash: ..., telefono: ..., especialidad: ..., instructorId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createInstructorRef(dataConnect, createInstructorVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.usuario_insert);
console.log(data.instructor_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.usuario_insert);
  console.log(data.instructor_insert);
});
```

## UpdateInstructor
You can execute the `UpdateInstructor` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateInstructor(vars: UpdateInstructorVariables): MutationPromise<UpdateInstructorData, UpdateInstructorVariables>;

interface UpdateInstructorRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateInstructorVariables): MutationRef<UpdateInstructorData, UpdateInstructorVariables>;
}
export const updateInstructorRef: UpdateInstructorRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateInstructor(dc: DataConnect, vars: UpdateInstructorVariables): MutationPromise<UpdateInstructorData, UpdateInstructorVariables>;

interface UpdateInstructorRef {
  ...
  (dc: DataConnect, vars: UpdateInstructorVariables): MutationRef<UpdateInstructorData, UpdateInstructorVariables>;
}
export const updateInstructorRef: UpdateInstructorRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateInstructorRef:
```typescript
const name = updateInstructorRef.operationName;
console.log(name);
```

### Variables
The `UpdateInstructor` mutation requires an argument of type `UpdateInstructorVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
Recall that executing the `UpdateInstructor` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateInstructorData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateInstructorData {
  usuario_update?: Usuario_Key | null;
  instructor_update?: Instructor_Key | null;
}
```
### Using `UpdateInstructor`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateInstructor, UpdateInstructorVariables } from '@dataconnect/generated';

// The `UpdateInstructor` mutation requires an argument of type `UpdateInstructorVariables`:
const updateInstructorVars: UpdateInstructorVariables = {
  usuarioInternalId: ..., 
  instructorInternalId: ..., 
  nombreCompleto: ..., 
  correo: ..., 
  telefono: ..., 
  activo: ..., 
  especialidad: ..., 
};

// Call the `updateInstructor()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateInstructor(updateInstructorVars);
// Variables can be defined inline as well.
const { data } = await updateInstructor({ usuarioInternalId: ..., instructorInternalId: ..., nombreCompleto: ..., correo: ..., telefono: ..., activo: ..., especialidad: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateInstructor(dataConnect, updateInstructorVars);

console.log(data.usuario_update);
console.log(data.instructor_update);

// Or, you can use the `Promise` API.
updateInstructor(updateInstructorVars).then((response) => {
  const data = response.data;
  console.log(data.usuario_update);
  console.log(data.instructor_update);
});
```

### Using `UpdateInstructor`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateInstructorRef, UpdateInstructorVariables } from '@dataconnect/generated';

// The `UpdateInstructor` mutation requires an argument of type `UpdateInstructorVariables`:
const updateInstructorVars: UpdateInstructorVariables = {
  usuarioInternalId: ..., 
  instructorInternalId: ..., 
  nombreCompleto: ..., 
  correo: ..., 
  telefono: ..., 
  activo: ..., 
  especialidad: ..., 
};

// Call the `updateInstructorRef()` function to get a reference to the mutation.
const ref = updateInstructorRef(updateInstructorVars);
// Variables can be defined inline as well.
const ref = updateInstructorRef({ usuarioInternalId: ..., instructorInternalId: ..., nombreCompleto: ..., correo: ..., telefono: ..., activo: ..., especialidad: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateInstructorRef(dataConnect, updateInstructorVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.usuario_update);
console.log(data.instructor_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.usuario_update);
  console.log(data.instructor_update);
});
```

## DeleteInstructor
You can execute the `DeleteInstructor` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteInstructor(vars: DeleteInstructorVariables): MutationPromise<DeleteInstructorData, DeleteInstructorVariables>;

interface DeleteInstructorRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteInstructorVariables): MutationRef<DeleteInstructorData, DeleteInstructorVariables>;
}
export const deleteInstructorRef: DeleteInstructorRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteInstructor(dc: DataConnect, vars: DeleteInstructorVariables): MutationPromise<DeleteInstructorData, DeleteInstructorVariables>;

interface DeleteInstructorRef {
  ...
  (dc: DataConnect, vars: DeleteInstructorVariables): MutationRef<DeleteInstructorData, DeleteInstructorVariables>;
}
export const deleteInstructorRef: DeleteInstructorRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteInstructorRef:
```typescript
const name = deleteInstructorRef.operationName;
console.log(name);
```

### Variables
The `DeleteInstructor` mutation requires an argument of type `DeleteInstructorVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteInstructorVariables {
  instructorInternalId: UUIDString;
  usuarioInternalId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteInstructor` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteInstructorData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteInstructorData {
  instructor_delete?: Instructor_Key | null;
  usuario_delete?: Usuario_Key | null;
}
```
### Using `DeleteInstructor`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteInstructor, DeleteInstructorVariables } from '@dataconnect/generated';

// The `DeleteInstructor` mutation requires an argument of type `DeleteInstructorVariables`:
const deleteInstructorVars: DeleteInstructorVariables = {
  instructorInternalId: ..., 
  usuarioInternalId: ..., 
};

// Call the `deleteInstructor()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteInstructor(deleteInstructorVars);
// Variables can be defined inline as well.
const { data } = await deleteInstructor({ instructorInternalId: ..., usuarioInternalId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteInstructor(dataConnect, deleteInstructorVars);

console.log(data.instructor_delete);
console.log(data.usuario_delete);

// Or, you can use the `Promise` API.
deleteInstructor(deleteInstructorVars).then((response) => {
  const data = response.data;
  console.log(data.instructor_delete);
  console.log(data.usuario_delete);
});
```

### Using `DeleteInstructor`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteInstructorRef, DeleteInstructorVariables } from '@dataconnect/generated';

// The `DeleteInstructor` mutation requires an argument of type `DeleteInstructorVariables`:
const deleteInstructorVars: DeleteInstructorVariables = {
  instructorInternalId: ..., 
  usuarioInternalId: ..., 
};

// Call the `deleteInstructorRef()` function to get a reference to the mutation.
const ref = deleteInstructorRef(deleteInstructorVars);
// Variables can be defined inline as well.
const ref = deleteInstructorRef({ instructorInternalId: ..., usuarioInternalId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteInstructorRef(dataConnect, deleteInstructorVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.instructor_delete);
console.log(data.usuario_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.instructor_delete);
  console.log(data.usuario_delete);
});
```

## CreateCurso
You can execute the `CreateCurso` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCurso(vars: CreateCursoVariables): MutationPromise<CreateCursoData, CreateCursoVariables>;

interface CreateCursoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCursoVariables): MutationRef<CreateCursoData, CreateCursoVariables>;
}
export const createCursoRef: CreateCursoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCurso(dc: DataConnect, vars: CreateCursoVariables): MutationPromise<CreateCursoData, CreateCursoVariables>;

interface CreateCursoRef {
  ...
  (dc: DataConnect, vars: CreateCursoVariables): MutationRef<CreateCursoData, CreateCursoVariables>;
}
export const createCursoRef: CreateCursoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCursoRef:
```typescript
const name = createCursoRef.operationName;
console.log(name);
```

### Variables
The `CreateCurso` mutation requires an argument of type `CreateCursoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
Recall that executing the `CreateCurso` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCursoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCursoData {
  curso_insert: Curso_Key;
}
```
### Using `CreateCurso`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCurso, CreateCursoVariables } from '@dataconnect/generated';

// The `CreateCurso` mutation requires an argument of type `CreateCursoVariables`:
const createCursoVars: CreateCursoVariables = {
  cursoId: ..., 
  nombre: ..., 
  descripcion: ..., // optional
  categoria: ..., // optional
  urlImagen: ..., // optional
  estado: ..., // optional
  instructorId: ..., // optional
};

// Call the `createCurso()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCurso(createCursoVars);
// Variables can be defined inline as well.
const { data } = await createCurso({ cursoId: ..., nombre: ..., descripcion: ..., categoria: ..., urlImagen: ..., estado: ..., instructorId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCurso(dataConnect, createCursoVars);

console.log(data.curso_insert);

// Or, you can use the `Promise` API.
createCurso(createCursoVars).then((response) => {
  const data = response.data;
  console.log(data.curso_insert);
});
```

### Using `CreateCurso`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCursoRef, CreateCursoVariables } from '@dataconnect/generated';

// The `CreateCurso` mutation requires an argument of type `CreateCursoVariables`:
const createCursoVars: CreateCursoVariables = {
  cursoId: ..., 
  nombre: ..., 
  descripcion: ..., // optional
  categoria: ..., // optional
  urlImagen: ..., // optional
  estado: ..., // optional
  instructorId: ..., // optional
};

// Call the `createCursoRef()` function to get a reference to the mutation.
const ref = createCursoRef(createCursoVars);
// Variables can be defined inline as well.
const ref = createCursoRef({ cursoId: ..., nombre: ..., descripcion: ..., categoria: ..., urlImagen: ..., estado: ..., instructorId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCursoRef(dataConnect, createCursoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.curso_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.curso_insert);
});
```

## UpdateCurso
You can execute the `UpdateCurso` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateCurso(vars: UpdateCursoVariables): MutationPromise<UpdateCursoData, UpdateCursoVariables>;

interface UpdateCursoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCursoVariables): MutationRef<UpdateCursoData, UpdateCursoVariables>;
}
export const updateCursoRef: UpdateCursoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateCurso(dc: DataConnect, vars: UpdateCursoVariables): MutationPromise<UpdateCursoData, UpdateCursoVariables>;

interface UpdateCursoRef {
  ...
  (dc: DataConnect, vars: UpdateCursoVariables): MutationRef<UpdateCursoData, UpdateCursoVariables>;
}
export const updateCursoRef: UpdateCursoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateCursoRef:
```typescript
const name = updateCursoRef.operationName;
console.log(name);
```

### Variables
The `UpdateCurso` mutation requires an argument of type `UpdateCursoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
Recall that executing the `UpdateCurso` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateCursoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateCursoData {
  curso_update?: Curso_Key | null;
}
```
### Using `UpdateCurso`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateCurso, UpdateCursoVariables } from '@dataconnect/generated';

// The `UpdateCurso` mutation requires an argument of type `UpdateCursoVariables`:
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

// Call the `updateCurso()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateCurso(updateCursoVars);
// Variables can be defined inline as well.
const { data } = await updateCurso({ cursoInternalId: ..., cursoId: ..., nombre: ..., descripcion: ..., categoria: ..., urlImagen: ..., estado: ..., instructorId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateCurso(dataConnect, updateCursoVars);

console.log(data.curso_update);

// Or, you can use the `Promise` API.
updateCurso(updateCursoVars).then((response) => {
  const data = response.data;
  console.log(data.curso_update);
});
```

### Using `UpdateCurso`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateCursoRef, UpdateCursoVariables } from '@dataconnect/generated';

// The `UpdateCurso` mutation requires an argument of type `UpdateCursoVariables`:
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

// Call the `updateCursoRef()` function to get a reference to the mutation.
const ref = updateCursoRef(updateCursoVars);
// Variables can be defined inline as well.
const ref = updateCursoRef({ cursoInternalId: ..., cursoId: ..., nombre: ..., descripcion: ..., categoria: ..., urlImagen: ..., estado: ..., instructorId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateCursoRef(dataConnect, updateCursoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.curso_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.curso_update);
});
```

## DeleteCurso
You can execute the `DeleteCurso` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteCurso(vars: DeleteCursoVariables): MutationPromise<DeleteCursoData, DeleteCursoVariables>;

interface DeleteCursoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCursoVariables): MutationRef<DeleteCursoData, DeleteCursoVariables>;
}
export const deleteCursoRef: DeleteCursoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteCurso(dc: DataConnect, vars: DeleteCursoVariables): MutationPromise<DeleteCursoData, DeleteCursoVariables>;

interface DeleteCursoRef {
  ...
  (dc: DataConnect, vars: DeleteCursoVariables): MutationRef<DeleteCursoData, DeleteCursoVariables>;
}
export const deleteCursoRef: DeleteCursoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteCursoRef:
```typescript
const name = deleteCursoRef.operationName;
console.log(name);
```

### Variables
The `DeleteCurso` mutation requires an argument of type `DeleteCursoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteCursoVariables {
  cursoInternalId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteCurso` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteCursoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteCursoData {
  curso_delete?: Curso_Key | null;
}
```
### Using `DeleteCurso`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteCurso, DeleteCursoVariables } from '@dataconnect/generated';

// The `DeleteCurso` mutation requires an argument of type `DeleteCursoVariables`:
const deleteCursoVars: DeleteCursoVariables = {
  cursoInternalId: ..., 
};

// Call the `deleteCurso()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteCurso(deleteCursoVars);
// Variables can be defined inline as well.
const { data } = await deleteCurso({ cursoInternalId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteCurso(dataConnect, deleteCursoVars);

console.log(data.curso_delete);

// Or, you can use the `Promise` API.
deleteCurso(deleteCursoVars).then((response) => {
  const data = response.data;
  console.log(data.curso_delete);
});
```

### Using `DeleteCurso`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteCursoRef, DeleteCursoVariables } from '@dataconnect/generated';

// The `DeleteCurso` mutation requires an argument of type `DeleteCursoVariables`:
const deleteCursoVars: DeleteCursoVariables = {
  cursoInternalId: ..., 
};

// Call the `deleteCursoRef()` function to get a reference to the mutation.
const ref = deleteCursoRef(deleteCursoVars);
// Variables can be defined inline as well.
const ref = deleteCursoRef({ cursoInternalId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteCursoRef(dataConnect, deleteCursoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.curso_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.curso_delete);
});
```


# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*BuscarEstudiantePorMatricula*](#buscarestudiantepormatricula)
  - [*BuscarEstudiantePorNombre*](#buscarestudiantepornombre)
  - [*ListarEstudiantes*](#listarestudiantes)
- [**Mutations**](#mutations)

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
    id: UUIDString;
    matricula: string;
    nombreCompleto: string;
    correo: string;
    activo: boolean;
  } & Estudiante_Key)[];
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
    nombreCompleto: string;
    correo: string;
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
    nombreCompleto: string;
    correo: string;
    activo: boolean;
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

# Mutations

No mutations were generated for the `example` connector.

If you want to learn more about how to use mutations in Data Connect, you can follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).


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
  - [*ListarEstudiantes*](#listarestudiantes)
  - [*ListInstructors*](#listinstructors)
  - [*GetRolByNumero*](#getrolbynumero)
  - [*ListCursos*](#listcursos)
  - [*BuscarCursoPorNombre*](#buscarcursopornombre)
  - [*CursosPorCategoria*](#cursosporcategoria)
  - [*CursosPorEstado*](#cursosporestado)
  - [*ListCursosEstadisticas*](#listcursosestadisticas)
  - [*ListHorarios*](#listhorarios)
  - [*ListHorariosPorEstado*](#listhorariosporestado)
  - [*ListInscripciones*](#listinscripciones)
  - [*ListInscripcionesPorEstado*](#listinscripcionesporestado)
  - [*ListAsistencias*](#listasistencias)
  - [*ListAsistenciasPorEstado*](#listasistenciasporestado)
  - [*ListReportesEstadisticas*](#listreportesestadisticas)
  - [*ListReportesPorPeriodo*](#listreportesporperiodo)
  - [*ListReportesPorCurso*](#listreportesporcurso)
  - [*GetCursoInternalId*](#getcursointernalid)
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
  - [*CreateReporteEstadistica*](#createreporteestadistica)
  - [*UpdateReporteEstadistica*](#updatereporteestadistica)

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

## ListCursosEstadisticas
You can execute the `ListCursosEstadisticas` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCursosEstadisticas(options?: ExecuteQueryOptions): QueryPromise<ListCursosEstadisticasData, undefined>;

interface ListCursosEstadisticasRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCursosEstadisticasData, undefined>;
}
export const listCursosEstadisticasRef: ListCursosEstadisticasRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCursosEstadisticas(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCursosEstadisticasData, undefined>;

interface ListCursosEstadisticasRef {
  ...
  (dc: DataConnect): QueryRef<ListCursosEstadisticasData, undefined>;
}
export const listCursosEstadisticasRef: ListCursosEstadisticasRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCursosEstadisticasRef:
```typescript
const name = listCursosEstadisticasRef.operationName;
console.log(name);
```

### Variables
The `ListCursosEstadisticas` query has no variables.
### Return Type
Recall that executing the `ListCursosEstadisticas` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCursosEstadisticasData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListCursosEstadisticas`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCursosEstadisticas } from '@dataconnect/generated';


// Call the `listCursosEstadisticas()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCursosEstadisticas();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCursosEstadisticas(dataConnect);

console.log(data.cursos);

// Or, you can use the `Promise` API.
listCursosEstadisticas().then((response) => {
  const data = response.data;
  console.log(data.cursos);
});
```

### Using `ListCursosEstadisticas`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCursosEstadisticasRef } from '@dataconnect/generated';


// Call the `listCursosEstadisticasRef()` function to get a reference to the query.
const ref = listCursosEstadisticasRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCursosEstadisticasRef(dataConnect);

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

## ListHorarios
You can execute the `ListHorarios` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listHorarios(options?: ExecuteQueryOptions): QueryPromise<ListHorariosData, undefined>;

interface ListHorariosRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHorariosData, undefined>;
}
export const listHorariosRef: ListHorariosRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listHorarios(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListHorariosData, undefined>;

interface ListHorariosRef {
  ...
  (dc: DataConnect): QueryRef<ListHorariosData, undefined>;
}
export const listHorariosRef: ListHorariosRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listHorariosRef:
```typescript
const name = listHorariosRef.operationName;
console.log(name);
```

### Variables
The `ListHorarios` query has no variables.
### Return Type
Recall that executing the `ListHorarios` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListHorariosData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListHorariosData {
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
### Using `ListHorarios`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listHorarios } from '@dataconnect/generated';


// Call the `listHorarios()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listHorarios();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listHorarios(dataConnect);

console.log(data.horarios);

// Or, you can use the `Promise` API.
listHorarios().then((response) => {
  const data = response.data;
  console.log(data.horarios);
});
```

### Using `ListHorarios`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listHorariosRef } from '@dataconnect/generated';


// Call the `listHorariosRef()` function to get a reference to the query.
const ref = listHorariosRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listHorariosRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.horarios);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.horarios);
});
```

## ListHorariosPorEstado
You can execute the `ListHorariosPorEstado` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listHorariosPorEstado(vars: ListHorariosPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;

interface ListHorariosPorEstadoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListHorariosPorEstadoVariables): QueryRef<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;
}
export const listHorariosPorEstadoRef: ListHorariosPorEstadoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listHorariosPorEstado(dc: DataConnect, vars: ListHorariosPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;

interface ListHorariosPorEstadoRef {
  ...
  (dc: DataConnect, vars: ListHorariosPorEstadoVariables): QueryRef<ListHorariosPorEstadoData, ListHorariosPorEstadoVariables>;
}
export const listHorariosPorEstadoRef: ListHorariosPorEstadoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listHorariosPorEstadoRef:
```typescript
const name = listHorariosPorEstadoRef.operationName;
console.log(name);
```

### Variables
The `ListHorariosPorEstado` query requires an argument of type `ListHorariosPorEstadoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListHorariosPorEstadoVariables {
  estado: string;
}
```
### Return Type
Recall that executing the `ListHorariosPorEstado` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListHorariosPorEstadoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListHorariosPorEstado`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listHorariosPorEstado, ListHorariosPorEstadoVariables } from '@dataconnect/generated';

// The `ListHorariosPorEstado` query requires an argument of type `ListHorariosPorEstadoVariables`:
const listHorariosPorEstadoVars: ListHorariosPorEstadoVariables = {
  estado: ..., 
};

// Call the `listHorariosPorEstado()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listHorariosPorEstado(listHorariosPorEstadoVars);
// Variables can be defined inline as well.
const { data } = await listHorariosPorEstado({ estado: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listHorariosPorEstado(dataConnect, listHorariosPorEstadoVars);

console.log(data.horarios);

// Or, you can use the `Promise` API.
listHorariosPorEstado(listHorariosPorEstadoVars).then((response) => {
  const data = response.data;
  console.log(data.horarios);
});
```

### Using `ListHorariosPorEstado`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listHorariosPorEstadoRef, ListHorariosPorEstadoVariables } from '@dataconnect/generated';

// The `ListHorariosPorEstado` query requires an argument of type `ListHorariosPorEstadoVariables`:
const listHorariosPorEstadoVars: ListHorariosPorEstadoVariables = {
  estado: ..., 
};

// Call the `listHorariosPorEstadoRef()` function to get a reference to the query.
const ref = listHorariosPorEstadoRef(listHorariosPorEstadoVars);
// Variables can be defined inline as well.
const ref = listHorariosPorEstadoRef({ estado: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listHorariosPorEstadoRef(dataConnect, listHorariosPorEstadoVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.horarios);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.horarios);
});
```

## ListInscripciones
You can execute the `ListInscripciones` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listInscripciones(options?: ExecuteQueryOptions): QueryPromise<ListInscripcionesData, undefined>;

interface ListInscripcionesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListInscripcionesData, undefined>;
}
export const listInscripcionesRef: ListInscripcionesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listInscripciones(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListInscripcionesData, undefined>;

interface ListInscripcionesRef {
  ...
  (dc: DataConnect): QueryRef<ListInscripcionesData, undefined>;
}
export const listInscripcionesRef: ListInscripcionesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listInscripcionesRef:
```typescript
const name = listInscripcionesRef.operationName;
console.log(name);
```

### Variables
The `ListInscripciones` query has no variables.
### Return Type
Recall that executing the `ListInscripciones` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListInscripcionesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListInscripciones`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listInscripciones } from '@dataconnect/generated';


// Call the `listInscripciones()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listInscripciones();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listInscripciones(dataConnect);

console.log(data.inscripcions);

// Or, you can use the `Promise` API.
listInscripciones().then((response) => {
  const data = response.data;
  console.log(data.inscripcions);
});
```

### Using `ListInscripciones`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listInscripcionesRef } from '@dataconnect/generated';


// Call the `listInscripcionesRef()` function to get a reference to the query.
const ref = listInscripcionesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listInscripcionesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.inscripcions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.inscripcions);
});
```

## ListInscripcionesPorEstado
You can execute the `ListInscripcionesPorEstado` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listInscripcionesPorEstado(vars: ListInscripcionesPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;

interface ListInscripcionesPorEstadoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListInscripcionesPorEstadoVariables): QueryRef<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;
}
export const listInscripcionesPorEstadoRef: ListInscripcionesPorEstadoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listInscripcionesPorEstado(dc: DataConnect, vars: ListInscripcionesPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;

interface ListInscripcionesPorEstadoRef {
  ...
  (dc: DataConnect, vars: ListInscripcionesPorEstadoVariables): QueryRef<ListInscripcionesPorEstadoData, ListInscripcionesPorEstadoVariables>;
}
export const listInscripcionesPorEstadoRef: ListInscripcionesPorEstadoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listInscripcionesPorEstadoRef:
```typescript
const name = listInscripcionesPorEstadoRef.operationName;
console.log(name);
```

### Variables
The `ListInscripcionesPorEstado` query requires an argument of type `ListInscripcionesPorEstadoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListInscripcionesPorEstadoVariables {
  estado: string;
}
```
### Return Type
Recall that executing the `ListInscripcionesPorEstado` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListInscripcionesPorEstadoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListInscripcionesPorEstado`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listInscripcionesPorEstado, ListInscripcionesPorEstadoVariables } from '@dataconnect/generated';

// The `ListInscripcionesPorEstado` query requires an argument of type `ListInscripcionesPorEstadoVariables`:
const listInscripcionesPorEstadoVars: ListInscripcionesPorEstadoVariables = {
  estado: ..., 
};

// Call the `listInscripcionesPorEstado()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listInscripcionesPorEstado(listInscripcionesPorEstadoVars);
// Variables can be defined inline as well.
const { data } = await listInscripcionesPorEstado({ estado: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listInscripcionesPorEstado(dataConnect, listInscripcionesPorEstadoVars);

console.log(data.inscripcions);

// Or, you can use the `Promise` API.
listInscripcionesPorEstado(listInscripcionesPorEstadoVars).then((response) => {
  const data = response.data;
  console.log(data.inscripcions);
});
```

### Using `ListInscripcionesPorEstado`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listInscripcionesPorEstadoRef, ListInscripcionesPorEstadoVariables } from '@dataconnect/generated';

// The `ListInscripcionesPorEstado` query requires an argument of type `ListInscripcionesPorEstadoVariables`:
const listInscripcionesPorEstadoVars: ListInscripcionesPorEstadoVariables = {
  estado: ..., 
};

// Call the `listInscripcionesPorEstadoRef()` function to get a reference to the query.
const ref = listInscripcionesPorEstadoRef(listInscripcionesPorEstadoVars);
// Variables can be defined inline as well.
const ref = listInscripcionesPorEstadoRef({ estado: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listInscripcionesPorEstadoRef(dataConnect, listInscripcionesPorEstadoVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.inscripcions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.inscripcions);
});
```

## ListAsistencias
You can execute the `ListAsistencias` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAsistencias(options?: ExecuteQueryOptions): QueryPromise<ListAsistenciasData, undefined>;

interface ListAsistenciasRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAsistenciasData, undefined>;
}
export const listAsistenciasRef: ListAsistenciasRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAsistencias(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAsistenciasData, undefined>;

interface ListAsistenciasRef {
  ...
  (dc: DataConnect): QueryRef<ListAsistenciasData, undefined>;
}
export const listAsistenciasRef: ListAsistenciasRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAsistenciasRef:
```typescript
const name = listAsistenciasRef.operationName;
console.log(name);
```

### Variables
The `ListAsistencias` query has no variables.
### Return Type
Recall that executing the `ListAsistencias` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAsistenciasData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListAsistencias`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAsistencias } from '@dataconnect/generated';


// Call the `listAsistencias()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAsistencias();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAsistencias(dataConnect);

console.log(data.asistencias);

// Or, you can use the `Promise` API.
listAsistencias().then((response) => {
  const data = response.data;
  console.log(data.asistencias);
});
```

### Using `ListAsistencias`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAsistenciasRef } from '@dataconnect/generated';


// Call the `listAsistenciasRef()` function to get a reference to the query.
const ref = listAsistenciasRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAsistenciasRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.asistencias);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.asistencias);
});
```

## ListAsistenciasPorEstado
You can execute the `ListAsistenciasPorEstado` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAsistenciasPorEstado(vars: ListAsistenciasPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;

interface ListAsistenciasPorEstadoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListAsistenciasPorEstadoVariables): QueryRef<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;
}
export const listAsistenciasPorEstadoRef: ListAsistenciasPorEstadoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAsistenciasPorEstado(dc: DataConnect, vars: ListAsistenciasPorEstadoVariables, options?: ExecuteQueryOptions): QueryPromise<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;

interface ListAsistenciasPorEstadoRef {
  ...
  (dc: DataConnect, vars: ListAsistenciasPorEstadoVariables): QueryRef<ListAsistenciasPorEstadoData, ListAsistenciasPorEstadoVariables>;
}
export const listAsistenciasPorEstadoRef: ListAsistenciasPorEstadoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAsistenciasPorEstadoRef:
```typescript
const name = listAsistenciasPorEstadoRef.operationName;
console.log(name);
```

### Variables
The `ListAsistenciasPorEstado` query requires an argument of type `ListAsistenciasPorEstadoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListAsistenciasPorEstadoVariables {
  estado: string;
}
```
### Return Type
Recall that executing the `ListAsistenciasPorEstado` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAsistenciasPorEstadoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListAsistenciasPorEstado`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAsistenciasPorEstado, ListAsistenciasPorEstadoVariables } from '@dataconnect/generated';

// The `ListAsistenciasPorEstado` query requires an argument of type `ListAsistenciasPorEstadoVariables`:
const listAsistenciasPorEstadoVars: ListAsistenciasPorEstadoVariables = {
  estado: ..., 
};

// Call the `listAsistenciasPorEstado()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAsistenciasPorEstado(listAsistenciasPorEstadoVars);
// Variables can be defined inline as well.
const { data } = await listAsistenciasPorEstado({ estado: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAsistenciasPorEstado(dataConnect, listAsistenciasPorEstadoVars);

console.log(data.asistencias);

// Or, you can use the `Promise` API.
listAsistenciasPorEstado(listAsistenciasPorEstadoVars).then((response) => {
  const data = response.data;
  console.log(data.asistencias);
});
```

### Using `ListAsistenciasPorEstado`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAsistenciasPorEstadoRef, ListAsistenciasPorEstadoVariables } from '@dataconnect/generated';

// The `ListAsistenciasPorEstado` query requires an argument of type `ListAsistenciasPorEstadoVariables`:
const listAsistenciasPorEstadoVars: ListAsistenciasPorEstadoVariables = {
  estado: ..., 
};

// Call the `listAsistenciasPorEstadoRef()` function to get a reference to the query.
const ref = listAsistenciasPorEstadoRef(listAsistenciasPorEstadoVars);
// Variables can be defined inline as well.
const ref = listAsistenciasPorEstadoRef({ estado: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAsistenciasPorEstadoRef(dataConnect, listAsistenciasPorEstadoVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.asistencias);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.asistencias);
});
```

## ListReportesEstadisticas
You can execute the `ListReportesEstadisticas` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listReportesEstadisticas(options?: ExecuteQueryOptions): QueryPromise<ListReportesEstadisticasData, undefined>;

interface ListReportesEstadisticasRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListReportesEstadisticasData, undefined>;
}
export const listReportesEstadisticasRef: ListReportesEstadisticasRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listReportesEstadisticas(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListReportesEstadisticasData, undefined>;

interface ListReportesEstadisticasRef {
  ...
  (dc: DataConnect): QueryRef<ListReportesEstadisticasData, undefined>;
}
export const listReportesEstadisticasRef: ListReportesEstadisticasRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listReportesEstadisticasRef:
```typescript
const name = listReportesEstadisticasRef.operationName;
console.log(name);
```

### Variables
The `ListReportesEstadisticas` query has no variables.
### Return Type
Recall that executing the `ListReportesEstadisticas` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListReportesEstadisticasData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListReportesEstadisticas`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listReportesEstadisticas } from '@dataconnect/generated';


// Call the `listReportesEstadisticas()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listReportesEstadisticas();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listReportesEstadisticas(dataConnect);

console.log(data.reporteEstadisticas);

// Or, you can use the `Promise` API.
listReportesEstadisticas().then((response) => {
  const data = response.data;
  console.log(data.reporteEstadisticas);
});
```

### Using `ListReportesEstadisticas`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listReportesEstadisticasRef } from '@dataconnect/generated';


// Call the `listReportesEstadisticasRef()` function to get a reference to the query.
const ref = listReportesEstadisticasRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listReportesEstadisticasRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reporteEstadisticas);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reporteEstadisticas);
});
```

## ListReportesPorPeriodo
You can execute the `ListReportesPorPeriodo` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listReportesPorPeriodo(vars: ListReportesPorPeriodoVariables, options?: ExecuteQueryOptions): QueryPromise<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;

interface ListReportesPorPeriodoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListReportesPorPeriodoVariables): QueryRef<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;
}
export const listReportesPorPeriodoRef: ListReportesPorPeriodoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listReportesPorPeriodo(dc: DataConnect, vars: ListReportesPorPeriodoVariables, options?: ExecuteQueryOptions): QueryPromise<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;

interface ListReportesPorPeriodoRef {
  ...
  (dc: DataConnect, vars: ListReportesPorPeriodoVariables): QueryRef<ListReportesPorPeriodoData, ListReportesPorPeriodoVariables>;
}
export const listReportesPorPeriodoRef: ListReportesPorPeriodoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listReportesPorPeriodoRef:
```typescript
const name = listReportesPorPeriodoRef.operationName;
console.log(name);
```

### Variables
The `ListReportesPorPeriodo` query requires an argument of type `ListReportesPorPeriodoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListReportesPorPeriodoVariables {
  periodo: string;
}
```
### Return Type
Recall that executing the `ListReportesPorPeriodo` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListReportesPorPeriodoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListReportesPorPeriodo`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listReportesPorPeriodo, ListReportesPorPeriodoVariables } from '@dataconnect/generated';

// The `ListReportesPorPeriodo` query requires an argument of type `ListReportesPorPeriodoVariables`:
const listReportesPorPeriodoVars: ListReportesPorPeriodoVariables = {
  periodo: ..., 
};

// Call the `listReportesPorPeriodo()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listReportesPorPeriodo(listReportesPorPeriodoVars);
// Variables can be defined inline as well.
const { data } = await listReportesPorPeriodo({ periodo: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listReportesPorPeriodo(dataConnect, listReportesPorPeriodoVars);

console.log(data.reporteEstadisticas);

// Or, you can use the `Promise` API.
listReportesPorPeriodo(listReportesPorPeriodoVars).then((response) => {
  const data = response.data;
  console.log(data.reporteEstadisticas);
});
```

### Using `ListReportesPorPeriodo`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listReportesPorPeriodoRef, ListReportesPorPeriodoVariables } from '@dataconnect/generated';

// The `ListReportesPorPeriodo` query requires an argument of type `ListReportesPorPeriodoVariables`:
const listReportesPorPeriodoVars: ListReportesPorPeriodoVariables = {
  periodo: ..., 
};

// Call the `listReportesPorPeriodoRef()` function to get a reference to the query.
const ref = listReportesPorPeriodoRef(listReportesPorPeriodoVars);
// Variables can be defined inline as well.
const ref = listReportesPorPeriodoRef({ periodo: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listReportesPorPeriodoRef(dataConnect, listReportesPorPeriodoVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reporteEstadisticas);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reporteEstadisticas);
});
```

## ListReportesPorCurso
You can execute the `ListReportesPorCurso` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listReportesPorCurso(vars: ListReportesPorCursoVariables, options?: ExecuteQueryOptions): QueryPromise<ListReportesPorCursoData, ListReportesPorCursoVariables>;

interface ListReportesPorCursoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListReportesPorCursoVariables): QueryRef<ListReportesPorCursoData, ListReportesPorCursoVariables>;
}
export const listReportesPorCursoRef: ListReportesPorCursoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listReportesPorCurso(dc: DataConnect, vars: ListReportesPorCursoVariables, options?: ExecuteQueryOptions): QueryPromise<ListReportesPorCursoData, ListReportesPorCursoVariables>;

interface ListReportesPorCursoRef {
  ...
  (dc: DataConnect, vars: ListReportesPorCursoVariables): QueryRef<ListReportesPorCursoData, ListReportesPorCursoVariables>;
}
export const listReportesPorCursoRef: ListReportesPorCursoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listReportesPorCursoRef:
```typescript
const name = listReportesPorCursoRef.operationName;
console.log(name);
```

### Variables
The `ListReportesPorCurso` query requires an argument of type `ListReportesPorCursoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListReportesPorCursoVariables {
  cursoId: number;
}
```
### Return Type
Recall that executing the `ListReportesPorCurso` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListReportesPorCursoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `ListReportesPorCurso`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listReportesPorCurso, ListReportesPorCursoVariables } from '@dataconnect/generated';

// The `ListReportesPorCurso` query requires an argument of type `ListReportesPorCursoVariables`:
const listReportesPorCursoVars: ListReportesPorCursoVariables = {
  cursoId: ..., 
};

// Call the `listReportesPorCurso()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listReportesPorCurso(listReportesPorCursoVars);
// Variables can be defined inline as well.
const { data } = await listReportesPorCurso({ cursoId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listReportesPorCurso(dataConnect, listReportesPorCursoVars);

console.log(data.reporteEstadisticas);

// Or, you can use the `Promise` API.
listReportesPorCurso(listReportesPorCursoVars).then((response) => {
  const data = response.data;
  console.log(data.reporteEstadisticas);
});
```

### Using `ListReportesPorCurso`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listReportesPorCursoRef, ListReportesPorCursoVariables } from '@dataconnect/generated';

// The `ListReportesPorCurso` query requires an argument of type `ListReportesPorCursoVariables`:
const listReportesPorCursoVars: ListReportesPorCursoVariables = {
  cursoId: ..., 
};

// Call the `listReportesPorCursoRef()` function to get a reference to the query.
const ref = listReportesPorCursoRef(listReportesPorCursoVars);
// Variables can be defined inline as well.
const ref = listReportesPorCursoRef({ cursoId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listReportesPorCursoRef(dataConnect, listReportesPorCursoVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reporteEstadisticas);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reporteEstadisticas);
});
```

## GetCursoInternalId
You can execute the `GetCursoInternalId` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCursoInternalId(vars: GetCursoInternalIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetCursoInternalIdData, GetCursoInternalIdVariables>;

interface GetCursoInternalIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCursoInternalIdVariables): QueryRef<GetCursoInternalIdData, GetCursoInternalIdVariables>;
}
export const getCursoInternalIdRef: GetCursoInternalIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCursoInternalId(dc: DataConnect, vars: GetCursoInternalIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetCursoInternalIdData, GetCursoInternalIdVariables>;

interface GetCursoInternalIdRef {
  ...
  (dc: DataConnect, vars: GetCursoInternalIdVariables): QueryRef<GetCursoInternalIdData, GetCursoInternalIdVariables>;
}
export const getCursoInternalIdRef: GetCursoInternalIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCursoInternalIdRef:
```typescript
const name = getCursoInternalIdRef.operationName;
console.log(name);
```

### Variables
The `GetCursoInternalId` query requires an argument of type `GetCursoInternalIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCursoInternalIdVariables {
  cursoId: number;
}
```
### Return Type
Recall that executing the `GetCursoInternalId` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCursoInternalIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCursoInternalIdData {
  cursos: ({
    id: UUIDString;
    cursoId: number;
    nombre: string;
  } & Curso_Key)[];
}
```
### Using `GetCursoInternalId`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCursoInternalId, GetCursoInternalIdVariables } from '@dataconnect/generated';

// The `GetCursoInternalId` query requires an argument of type `GetCursoInternalIdVariables`:
const getCursoInternalIdVars: GetCursoInternalIdVariables = {
  cursoId: ..., 
};

// Call the `getCursoInternalId()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCursoInternalId(getCursoInternalIdVars);
// Variables can be defined inline as well.
const { data } = await getCursoInternalId({ cursoId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCursoInternalId(dataConnect, getCursoInternalIdVars);

console.log(data.cursos);

// Or, you can use the `Promise` API.
getCursoInternalId(getCursoInternalIdVars).then((response) => {
  const data = response.data;
  console.log(data.cursos);
});
```

### Using `GetCursoInternalId`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCursoInternalIdRef, GetCursoInternalIdVariables } from '@dataconnect/generated';

// The `GetCursoInternalId` query requires an argument of type `GetCursoInternalIdVariables`:
const getCursoInternalIdVars: GetCursoInternalIdVariables = {
  cursoId: ..., 
};

// Call the `getCursoInternalIdRef()` function to get a reference to the query.
const ref = getCursoInternalIdRef(getCursoInternalIdVars);
// Variables can be defined inline as well.
const ref = getCursoInternalIdRef({ cursoId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCursoInternalIdRef(dataConnect, getCursoInternalIdVars);

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

## CrearEstudiante
You can execute the `CrearEstudiante` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
crearEstudiante(vars: CrearEstudianteVariables): MutationPromise<CrearEstudianteData, CrearEstudianteVariables>;

interface CrearEstudianteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CrearEstudianteVariables): MutationRef<CrearEstudianteData, CrearEstudianteVariables>;
}
export const crearEstudianteRef: CrearEstudianteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
crearEstudiante(dc: DataConnect, vars: CrearEstudianteVariables): MutationPromise<CrearEstudianteData, CrearEstudianteVariables>;

interface CrearEstudianteRef {
  ...
  (dc: DataConnect, vars: CrearEstudianteVariables): MutationRef<CrearEstudianteData, CrearEstudianteVariables>;
}
export const crearEstudianteRef: CrearEstudianteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the crearEstudianteRef:
```typescript
const name = crearEstudianteRef.operationName;
console.log(name);
```

### Variables
The `CrearEstudiante` mutation requires an argument of type `CrearEstudianteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
Recall that executing the `CrearEstudiante` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CrearEstudianteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CrearEstudianteData {
  usuario_insert: Usuario_Key;
  estudiante_insert: Estudiante_Key;
}
```
### Using `CrearEstudiante`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, crearEstudiante, CrearEstudianteVariables } from '@dataconnect/generated';

// The `CrearEstudiante` mutation requires an argument of type `CrearEstudianteVariables`:
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

// Call the `crearEstudiante()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await crearEstudiante(crearEstudianteVars);
// Variables can be defined inline as well.
const { data } = await crearEstudiante({ usuarioInternalId: ..., usuarioId: ..., rolInternalId: ..., nombreCompleto: ..., correo: ..., passwordHash: ..., telefono: ..., matricula: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await crearEstudiante(dataConnect, crearEstudianteVars);

console.log(data.usuario_insert);
console.log(data.estudiante_insert);

// Or, you can use the `Promise` API.
crearEstudiante(crearEstudianteVars).then((response) => {
  const data = response.data;
  console.log(data.usuario_insert);
  console.log(data.estudiante_insert);
});
```

### Using `CrearEstudiante`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, crearEstudianteRef, CrearEstudianteVariables } from '@dataconnect/generated';

// The `CrearEstudiante` mutation requires an argument of type `CrearEstudianteVariables`:
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

// Call the `crearEstudianteRef()` function to get a reference to the mutation.
const ref = crearEstudianteRef(crearEstudianteVars);
// Variables can be defined inline as well.
const ref = crearEstudianteRef({ usuarioInternalId: ..., usuarioId: ..., rolInternalId: ..., nombreCompleto: ..., correo: ..., passwordHash: ..., telefono: ..., matricula: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = crearEstudianteRef(dataConnect, crearEstudianteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.usuario_insert);
console.log(data.estudiante_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.usuario_insert);
  console.log(data.estudiante_insert);
});
```

## ActualizarEstudiante
You can execute the `ActualizarEstudiante` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
actualizarEstudiante(vars: ActualizarEstudianteVariables): MutationPromise<ActualizarEstudianteData, ActualizarEstudianteVariables>;

interface ActualizarEstudianteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ActualizarEstudianteVariables): MutationRef<ActualizarEstudianteData, ActualizarEstudianteVariables>;
}
export const actualizarEstudianteRef: ActualizarEstudianteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
actualizarEstudiante(dc: DataConnect, vars: ActualizarEstudianteVariables): MutationPromise<ActualizarEstudianteData, ActualizarEstudianteVariables>;

interface ActualizarEstudianteRef {
  ...
  (dc: DataConnect, vars: ActualizarEstudianteVariables): MutationRef<ActualizarEstudianteData, ActualizarEstudianteVariables>;
}
export const actualizarEstudianteRef: ActualizarEstudianteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the actualizarEstudianteRef:
```typescript
const name = actualizarEstudianteRef.operationName;
console.log(name);
```

### Variables
The `ActualizarEstudiante` mutation requires an argument of type `ActualizarEstudianteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ActualizarEstudianteVariables {
  usuarioInternalId: UUIDString;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  activo: boolean;
}
```
### Return Type
Recall that executing the `ActualizarEstudiante` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ActualizarEstudianteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ActualizarEstudianteData {
  usuario_update?: Usuario_Key | null;
}
```
### Using `ActualizarEstudiante`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, actualizarEstudiante, ActualizarEstudianteVariables } from '@dataconnect/generated';

// The `ActualizarEstudiante` mutation requires an argument of type `ActualizarEstudianteVariables`:
const actualizarEstudianteVars: ActualizarEstudianteVariables = {
  usuarioInternalId: ..., 
  nombreCompleto: ..., 
  correo: ..., 
  telefono: ..., 
  activo: ..., 
};

// Call the `actualizarEstudiante()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await actualizarEstudiante(actualizarEstudianteVars);
// Variables can be defined inline as well.
const { data } = await actualizarEstudiante({ usuarioInternalId: ..., nombreCompleto: ..., correo: ..., telefono: ..., activo: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await actualizarEstudiante(dataConnect, actualizarEstudianteVars);

console.log(data.usuario_update);

// Or, you can use the `Promise` API.
actualizarEstudiante(actualizarEstudianteVars).then((response) => {
  const data = response.data;
  console.log(data.usuario_update);
});
```

### Using `ActualizarEstudiante`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, actualizarEstudianteRef, ActualizarEstudianteVariables } from '@dataconnect/generated';

// The `ActualizarEstudiante` mutation requires an argument of type `ActualizarEstudianteVariables`:
const actualizarEstudianteVars: ActualizarEstudianteVariables = {
  usuarioInternalId: ..., 
  nombreCompleto: ..., 
  correo: ..., 
  telefono: ..., 
  activo: ..., 
};

// Call the `actualizarEstudianteRef()` function to get a reference to the mutation.
const ref = actualizarEstudianteRef(actualizarEstudianteVars);
// Variables can be defined inline as well.
const ref = actualizarEstudianteRef({ usuarioInternalId: ..., nombreCompleto: ..., correo: ..., telefono: ..., activo: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = actualizarEstudianteRef(dataConnect, actualizarEstudianteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.usuario_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.usuario_update);
});
```

## ActualizarEstudianteSinCorreo
You can execute the `ActualizarEstudianteSinCorreo` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
actualizarEstudianteSinCorreo(vars: ActualizarEstudianteSinCorreoVariables): MutationPromise<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;

interface ActualizarEstudianteSinCorreoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ActualizarEstudianteSinCorreoVariables): MutationRef<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;
}
export const actualizarEstudianteSinCorreoRef: ActualizarEstudianteSinCorreoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
actualizarEstudianteSinCorreo(dc: DataConnect, vars: ActualizarEstudianteSinCorreoVariables): MutationPromise<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;

interface ActualizarEstudianteSinCorreoRef {
  ...
  (dc: DataConnect, vars: ActualizarEstudianteSinCorreoVariables): MutationRef<ActualizarEstudianteSinCorreoData, ActualizarEstudianteSinCorreoVariables>;
}
export const actualizarEstudianteSinCorreoRef: ActualizarEstudianteSinCorreoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the actualizarEstudianteSinCorreoRef:
```typescript
const name = actualizarEstudianteSinCorreoRef.operationName;
console.log(name);
```

### Variables
The `ActualizarEstudianteSinCorreo` mutation requires an argument of type `ActualizarEstudianteSinCorreoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ActualizarEstudianteSinCorreoVariables {
  usuarioInternalId: UUIDString;
  nombreCompleto: string;
  telefono: string;
  activo: boolean;
}
```
### Return Type
Recall that executing the `ActualizarEstudianteSinCorreo` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ActualizarEstudianteSinCorreoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ActualizarEstudianteSinCorreoData {
  usuario_update?: Usuario_Key | null;
}
```
### Using `ActualizarEstudianteSinCorreo`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, actualizarEstudianteSinCorreo, ActualizarEstudianteSinCorreoVariables } from '@dataconnect/generated';

// The `ActualizarEstudianteSinCorreo` mutation requires an argument of type `ActualizarEstudianteSinCorreoVariables`:
const actualizarEstudianteSinCorreoVars: ActualizarEstudianteSinCorreoVariables = {
  usuarioInternalId: ..., 
  nombreCompleto: ..., 
  telefono: ..., 
  activo: ..., 
};

// Call the `actualizarEstudianteSinCorreo()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await actualizarEstudianteSinCorreo(actualizarEstudianteSinCorreoVars);
// Variables can be defined inline as well.
const { data } = await actualizarEstudianteSinCorreo({ usuarioInternalId: ..., nombreCompleto: ..., telefono: ..., activo: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await actualizarEstudianteSinCorreo(dataConnect, actualizarEstudianteSinCorreoVars);

console.log(data.usuario_update);

// Or, you can use the `Promise` API.
actualizarEstudianteSinCorreo(actualizarEstudianteSinCorreoVars).then((response) => {
  const data = response.data;
  console.log(data.usuario_update);
});
```

### Using `ActualizarEstudianteSinCorreo`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, actualizarEstudianteSinCorreoRef, ActualizarEstudianteSinCorreoVariables } from '@dataconnect/generated';

// The `ActualizarEstudianteSinCorreo` mutation requires an argument of type `ActualizarEstudianteSinCorreoVariables`:
const actualizarEstudianteSinCorreoVars: ActualizarEstudianteSinCorreoVariables = {
  usuarioInternalId: ..., 
  nombreCompleto: ..., 
  telefono: ..., 
  activo: ..., 
};

// Call the `actualizarEstudianteSinCorreoRef()` function to get a reference to the mutation.
const ref = actualizarEstudianteSinCorreoRef(actualizarEstudianteSinCorreoVars);
// Variables can be defined inline as well.
const ref = actualizarEstudianteSinCorreoRef({ usuarioInternalId: ..., nombreCompleto: ..., telefono: ..., activo: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = actualizarEstudianteSinCorreoRef(dataConnect, actualizarEstudianteSinCorreoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.usuario_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.usuario_update);
});
```

## ActualizarPasswordUsuario
You can execute the `ActualizarPasswordUsuario` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
actualizarPasswordUsuario(vars: ActualizarPasswordUsuarioVariables): MutationPromise<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;

interface ActualizarPasswordUsuarioRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ActualizarPasswordUsuarioVariables): MutationRef<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;
}
export const actualizarPasswordUsuarioRef: ActualizarPasswordUsuarioRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
actualizarPasswordUsuario(dc: DataConnect, vars: ActualizarPasswordUsuarioVariables): MutationPromise<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;

interface ActualizarPasswordUsuarioRef {
  ...
  (dc: DataConnect, vars: ActualizarPasswordUsuarioVariables): MutationRef<ActualizarPasswordUsuarioData, ActualizarPasswordUsuarioVariables>;
}
export const actualizarPasswordUsuarioRef: ActualizarPasswordUsuarioRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the actualizarPasswordUsuarioRef:
```typescript
const name = actualizarPasswordUsuarioRef.operationName;
console.log(name);
```

### Variables
The `ActualizarPasswordUsuario` mutation requires an argument of type `ActualizarPasswordUsuarioVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ActualizarPasswordUsuarioVariables {
  usuarioInternalId: UUIDString;
  passwordHash: string;
}
```
### Return Type
Recall that executing the `ActualizarPasswordUsuario` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ActualizarPasswordUsuarioData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ActualizarPasswordUsuarioData {
  usuario_update?: Usuario_Key | null;
}
```
### Using `ActualizarPasswordUsuario`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, actualizarPasswordUsuario, ActualizarPasswordUsuarioVariables } from '@dataconnect/generated';

// The `ActualizarPasswordUsuario` mutation requires an argument of type `ActualizarPasswordUsuarioVariables`:
const actualizarPasswordUsuarioVars: ActualizarPasswordUsuarioVariables = {
  usuarioInternalId: ..., 
  passwordHash: ..., 
};

// Call the `actualizarPasswordUsuario()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await actualizarPasswordUsuario(actualizarPasswordUsuarioVars);
// Variables can be defined inline as well.
const { data } = await actualizarPasswordUsuario({ usuarioInternalId: ..., passwordHash: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await actualizarPasswordUsuario(dataConnect, actualizarPasswordUsuarioVars);

console.log(data.usuario_update);

// Or, you can use the `Promise` API.
actualizarPasswordUsuario(actualizarPasswordUsuarioVars).then((response) => {
  const data = response.data;
  console.log(data.usuario_update);
});
```

### Using `ActualizarPasswordUsuario`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, actualizarPasswordUsuarioRef, ActualizarPasswordUsuarioVariables } from '@dataconnect/generated';

// The `ActualizarPasswordUsuario` mutation requires an argument of type `ActualizarPasswordUsuarioVariables`:
const actualizarPasswordUsuarioVars: ActualizarPasswordUsuarioVariables = {
  usuarioInternalId: ..., 
  passwordHash: ..., 
};

// Call the `actualizarPasswordUsuarioRef()` function to get a reference to the mutation.
const ref = actualizarPasswordUsuarioRef(actualizarPasswordUsuarioVars);
// Variables can be defined inline as well.
const ref = actualizarPasswordUsuarioRef({ usuarioInternalId: ..., passwordHash: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = actualizarPasswordUsuarioRef(dataConnect, actualizarPasswordUsuarioVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.usuario_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.usuario_update);
});
```

## EliminarEstudiante
You can execute the `EliminarEstudiante` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
eliminarEstudiante(vars: EliminarEstudianteVariables): MutationPromise<EliminarEstudianteData, EliminarEstudianteVariables>;

interface EliminarEstudianteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: EliminarEstudianteVariables): MutationRef<EliminarEstudianteData, EliminarEstudianteVariables>;
}
export const eliminarEstudianteRef: EliminarEstudianteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
eliminarEstudiante(dc: DataConnect, vars: EliminarEstudianteVariables): MutationPromise<EliminarEstudianteData, EliminarEstudianteVariables>;

interface EliminarEstudianteRef {
  ...
  (dc: DataConnect, vars: EliminarEstudianteVariables): MutationRef<EliminarEstudianteData, EliminarEstudianteVariables>;
}
export const eliminarEstudianteRef: EliminarEstudianteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the eliminarEstudianteRef:
```typescript
const name = eliminarEstudianteRef.operationName;
console.log(name);
```

### Variables
The `EliminarEstudiante` mutation requires an argument of type `EliminarEstudianteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface EliminarEstudianteVariables {
  usuarioInternalId: UUIDString;
}
```
### Return Type
Recall that executing the `EliminarEstudiante` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `EliminarEstudianteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface EliminarEstudianteData {
  usuario_delete?: Usuario_Key | null;
}
```
### Using `EliminarEstudiante`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, eliminarEstudiante, EliminarEstudianteVariables } from '@dataconnect/generated';

// The `EliminarEstudiante` mutation requires an argument of type `EliminarEstudianteVariables`:
const eliminarEstudianteVars: EliminarEstudianteVariables = {
  usuarioInternalId: ..., 
};

// Call the `eliminarEstudiante()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await eliminarEstudiante(eliminarEstudianteVars);
// Variables can be defined inline as well.
const { data } = await eliminarEstudiante({ usuarioInternalId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await eliminarEstudiante(dataConnect, eliminarEstudianteVars);

console.log(data.usuario_delete);

// Or, you can use the `Promise` API.
eliminarEstudiante(eliminarEstudianteVars).then((response) => {
  const data = response.data;
  console.log(data.usuario_delete);
});
```

### Using `EliminarEstudiante`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, eliminarEstudianteRef, EliminarEstudianteVariables } from '@dataconnect/generated';

// The `EliminarEstudiante` mutation requires an argument of type `EliminarEstudianteVariables`:
const eliminarEstudianteVars: EliminarEstudianteVariables = {
  usuarioInternalId: ..., 
};

// Call the `eliminarEstudianteRef()` function to get a reference to the mutation.
const ref = eliminarEstudianteRef(eliminarEstudianteVars);
// Variables can be defined inline as well.
const ref = eliminarEstudianteRef({ usuarioInternalId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = eliminarEstudianteRef(dataConnect, eliminarEstudianteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.usuario_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.usuario_delete);
});
```

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

## CreateReporteEstadistica
You can execute the `CreateReporteEstadistica` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createReporteEstadistica(vars: CreateReporteEstadisticaVariables): MutationPromise<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;

interface CreateReporteEstadisticaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReporteEstadisticaVariables): MutationRef<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;
}
export const createReporteEstadisticaRef: CreateReporteEstadisticaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createReporteEstadistica(dc: DataConnect, vars: CreateReporteEstadisticaVariables): MutationPromise<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;

interface CreateReporteEstadisticaRef {
  ...
  (dc: DataConnect, vars: CreateReporteEstadisticaVariables): MutationRef<CreateReporteEstadisticaData, CreateReporteEstadisticaVariables>;
}
export const createReporteEstadisticaRef: CreateReporteEstadisticaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createReporteEstadisticaRef:
```typescript
const name = createReporteEstadisticaRef.operationName;
console.log(name);
```

### Variables
The `CreateReporteEstadistica` mutation requires an argument of type `CreateReporteEstadisticaVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
Recall that executing the `CreateReporteEstadistica` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateReporteEstadisticaData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateReporteEstadisticaData {
  reporteEstadistica_insert: ReporteEstadistica_Key;
}
```
### Using `CreateReporteEstadistica`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createReporteEstadistica, CreateReporteEstadisticaVariables } from '@dataconnect/generated';

// The `CreateReporteEstadistica` mutation requires an argument of type `CreateReporteEstadisticaVariables`:
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

// Call the `createReporteEstadistica()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createReporteEstadistica(createReporteEstadisticaVars);
// Variables can be defined inline as well.
const { data } = await createReporteEstadistica({ reporteId: ..., cursoInternalId: ..., periodoAnio: ..., totalInscritos: ..., totalBajas: ..., porcentajeAsistencia: ..., calificacionPromedio: ..., ingresosGenerados: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createReporteEstadistica(dataConnect, createReporteEstadisticaVars);

console.log(data.reporteEstadistica_insert);

// Or, you can use the `Promise` API.
createReporteEstadistica(createReporteEstadisticaVars).then((response) => {
  const data = response.data;
  console.log(data.reporteEstadistica_insert);
});
```

### Using `CreateReporteEstadistica`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createReporteEstadisticaRef, CreateReporteEstadisticaVariables } from '@dataconnect/generated';

// The `CreateReporteEstadistica` mutation requires an argument of type `CreateReporteEstadisticaVariables`:
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

// Call the `createReporteEstadisticaRef()` function to get a reference to the mutation.
const ref = createReporteEstadisticaRef(createReporteEstadisticaVars);
// Variables can be defined inline as well.
const ref = createReporteEstadisticaRef({ reporteId: ..., cursoInternalId: ..., periodoAnio: ..., totalInscritos: ..., totalBajas: ..., porcentajeAsistencia: ..., calificacionPromedio: ..., ingresosGenerados: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createReporteEstadisticaRef(dataConnect, createReporteEstadisticaVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.reporteEstadistica_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.reporteEstadistica_insert);
});
```

## UpdateReporteEstadistica
You can execute the `UpdateReporteEstadistica` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateReporteEstadistica(vars: UpdateReporteEstadisticaVariables): MutationPromise<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;

interface UpdateReporteEstadisticaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReporteEstadisticaVariables): MutationRef<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;
}
export const updateReporteEstadisticaRef: UpdateReporteEstadisticaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateReporteEstadistica(dc: DataConnect, vars: UpdateReporteEstadisticaVariables): MutationPromise<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;

interface UpdateReporteEstadisticaRef {
  ...
  (dc: DataConnect, vars: UpdateReporteEstadisticaVariables): MutationRef<UpdateReporteEstadisticaData, UpdateReporteEstadisticaVariables>;
}
export const updateReporteEstadisticaRef: UpdateReporteEstadisticaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateReporteEstadisticaRef:
```typescript
const name = updateReporteEstadisticaRef.operationName;
console.log(name);
```

### Variables
The `UpdateReporteEstadistica` mutation requires an argument of type `UpdateReporteEstadisticaVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
Recall that executing the `UpdateReporteEstadistica` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateReporteEstadisticaData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateReporteEstadisticaData {
  reporteEstadistica_update?: ReporteEstadistica_Key | null;
}
```
### Using `UpdateReporteEstadistica`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateReporteEstadistica, UpdateReporteEstadisticaVariables } from '@dataconnect/generated';

// The `UpdateReporteEstadistica` mutation requires an argument of type `UpdateReporteEstadisticaVariables`:
const updateReporteEstadisticaVars: UpdateReporteEstadisticaVariables = {
  reporteInternalId: ..., 
  totalInscritos: ..., 
  totalBajas: ..., 
  porcentajeAsistencia: ..., 
  calificacionPromedio: ..., // optional
  ingresosGenerados: ..., // optional
};

// Call the `updateReporteEstadistica()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateReporteEstadistica(updateReporteEstadisticaVars);
// Variables can be defined inline as well.
const { data } = await updateReporteEstadistica({ reporteInternalId: ..., totalInscritos: ..., totalBajas: ..., porcentajeAsistencia: ..., calificacionPromedio: ..., ingresosGenerados: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateReporteEstadistica(dataConnect, updateReporteEstadisticaVars);

console.log(data.reporteEstadistica_update);

// Or, you can use the `Promise` API.
updateReporteEstadistica(updateReporteEstadisticaVars).then((response) => {
  const data = response.data;
  console.log(data.reporteEstadistica_update);
});
```

### Using `UpdateReporteEstadistica`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateReporteEstadisticaRef, UpdateReporteEstadisticaVariables } from '@dataconnect/generated';

// The `UpdateReporteEstadistica` mutation requires an argument of type `UpdateReporteEstadisticaVariables`:
const updateReporteEstadisticaVars: UpdateReporteEstadisticaVariables = {
  reporteInternalId: ..., 
  totalInscritos: ..., 
  totalBajas: ..., 
  porcentajeAsistencia: ..., 
  calificacionPromedio: ..., // optional
  ingresosGenerados: ..., // optional
};

// Call the `updateReporteEstadisticaRef()` function to get a reference to the mutation.
const ref = updateReporteEstadisticaRef(updateReporteEstadisticaVars);
// Variables can be defined inline as well.
const ref = updateReporteEstadisticaRef({ reporteInternalId: ..., totalInscritos: ..., totalBajas: ..., porcentajeAsistencia: ..., calificacionPromedio: ..., ingresosGenerados: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateReporteEstadisticaRef(dataConnect, updateReporteEstadisticaVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.reporteEstadistica_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.reporteEstadistica_update);
});
```


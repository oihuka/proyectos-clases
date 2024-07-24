# PROYECTO 6: API REST

## 1) Requisitos

- Servidor con express
- Conexión a una base de datos de Mongo Atlas mediante mongoose
- Creación de dos modelos
- Una semilla que suba datos a una de las colecciones
- Una relación entre colecciones, un array de datos relacionados
- CRUD completo de ambas colecciones
- README.md con la documentación del proyecto, indicando los endpoints y que hace cada uno
- Al actualizar una colección que tenga un array de datos relacionados, no queremos que estos datos se borren
- Evitaremos duplicados en el array relacionado

## 2) Sumario

Esta API REST se compone de dos colecciones (Juegos y Plataformas). El objetivo de este proyecto es implementar los correspondientes endpoints (CRUD) para ambas colecciones, así como añadir la relación correspondiente entre ambas; siendo en este caso, la colección Plataformas quien contendrá el array de juegos disponibles.

## 3) Módulos

A continuación se detallan los diferentes módulos empleados para la ejecución de la API REST.

| NPM                    |
| ---------------------- |
| [Mongoose][PlMongoose] |
| [Express][PlExpress]   |
| [Nodemon][PlNodemon]   |
| [DotEnv][PlDotEnv]     |

## 4) Instalación

Con la siguiente secuencia de comandos, NPM descarga e instala todas las dependencias listadas bajo _dependencies_ y _devDependencies_ en el directorio _node_modules_ si el archivo _package-lock.json_ está presente, de no ser así, NPM lo creará a partir de _package.json_.

```sh
npm i
```

Una vez finalizada la instalación, procederemos con la ejecución monitorizada _nodemon_, definida en el archivo _package.json_.

```sh
node run dev
```

## 4) Referencias API

Emplearemos para todas la referencias a **${BASE_PATH}** como "http://localhost:3000/api/v1"

### 4.1) Juegos

#### 4.1.1) Obtener todos los juegos (getJuegos)

```http
  GET ${BASE_PATH}/juegos
```

| Parameter | Type | Description                            |
| :-------- | :--- | :------------------------------------- |
| `-`       | `-`  | Lista todos los juegos de la colección |

#### 4.1.2) Buscar juego por id (getJuegoById)

```http
  GET ${BASE_PATH}/juegos/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Requerido**. Id del juego a buscar |

#### 4.1.3) Buscar juegos por categoria (getJuegosByCategory)

```http
  GET ${BASE_PATH}/juegos/categoria/${categoria}
```

| Parameter   | Type     | Description                                 |
| :---------- | :------- | :------------------------------------------ |
| `categoria` | `string` | **Requerido**. Categoría del juego a buscar |

#### 4.1.4) Buscar juegos por precio (getJuegosByPrice)

```http
  GET ${BASE_PATH}/juegos/precio/${precio}
```

| Parameter | Type     | Description                                         |
| :-------- | :------- | :-------------------------------------------------- |
| `precio`  | `string` | **Requerido**. Precio maximo de los juegos a buscar |

#### 4.1.5) Publicar juego (postJuego)

```http
  POST ${BASE_PATH}/juegos
```

| JSON Body Parameter | Type     | Description                |
| :------------------ | :------- | :------------------------- |
| `nombre`            | `string` | Nombre del juego           |
| `imagen`            | `string` | URL de la imagen del juego |
| `precio`            | `number` | Precio del juego           |
| `categoria`         | `string` | Categoria del juego        |

#### 4.1.6) Actualizar juego (putJuego)

```http
  PUT ${BASE_PATH}/juegos/${id}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Requerido**. Id del juego a actualizar |

| JSON Body Parameter | Type     | Description                |
| :------------------ | :------- | :------------------------- |
| `nombre`            | `string` | Nombre del juego           |
| `imagen`            | `string` | URL de la imagen del juego |
| `precio`            | `number` | Precio del juego           |
| `categoria`         | `string` | Categoria del juego        |

#### 4.1.7) Eliminar juego (deleteJuego)

```http
  DELETE ${BASE_PATH}/juegos/${id}
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Requerido**. Id del juego a eliminar |

### 4.2) Plataformas

#### 4.2.1) Obtener todas las plataformas (getPlataformas)

```http
  GET ${BASE_PATH}/plataformas
```

| Parameter | Type | Description                                 |
| :-------- | :--- | :------------------------------------------ |
| `-`       | `-`  | Lista todas las plataformas de la colección |

#### 4.2.2) Buscar plataforma por id (getPlataformaById)

```http
  GET ${BASE_PATH}/plataformas/${id}
```

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `id`      | `string` | **Requerido**. Id de la plataforma a buscar |

#### 4.2.3) Publicar plataforma (postPlataforma)

```http
  POST ${BASE_PATH}/plataformas
```

| JSON Body Parameter | Type     | Description                                    |
| :------------------ | :------- | :--------------------------------------------- |
| `nombre`            | `string` | Nombre de la plataforma                        |
| `imagen`            | `string` | URL de la imagen de la plataforma              |
| `juegos`            | `array`  | Listado de juegos disponibles en la plataforma |

#### 4.2.4) Actualizar plataforma (putPlataforma)

```http
  PUT ${BASE_PATH}/plataformas/${id}
```

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| `id`      | `string` | **Requerido**. Id de la plataforma a actualizar |

| JSON Body Parameter | Type     | Description                                    |
| :------------------ | :------- | :--------------------------------------------- |
| `nombre`            | `string` | Nombre de la plataforma                        |
| `imagen`            | `string` | URL de la imagen de la plataforma              |
| `juegos`            | `array`  | Listado de juegos disponibles en la plataforma |

#### 4.2.5) Eliminar plataforma (deletePlataforma)

```http
  DELETE ${BASE_PATH}/plataformas/${id}
```

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| `id`      | `string` | **Requerido**. Id de la plataforma a eliminar |

## 5) Licencia

[MIT](https://choosealicense.com/licenses/mit/)

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[PlMongoose]: https://www.npmjs.com/package/mongoose
[PlExpress]: https://www.npmjs.com/package/express
[PlNodemon]: https://www.npmjs.com/package/nodemon
[PlDotEnv]: https://www.npmjs.com/package/dotenv

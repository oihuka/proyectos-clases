# PROYECTO 8: API REST - AUTH + FILES

## 1) Requisitos

- Servidor con express
- Conexión a una base de datos de Mongo Atlas mediante mongoose
- Creación de dos modelos, ambos, con un campo que nos permita almacenar un archivo
- Una semilla que suba datos a una de las colecciones
- Una relación entre colecciones
- CRUD completo de todas las colecciones
- README.md con la documentación del proyecto, indicando los endpoints y que hace cada uno
- Subida de archivos mediante cloudinary a ambas colecciones
- Eliminación de archivos en cloudinary cuando se borra el dato en la BBDD
- Intento de reutilización del storage de cloudinary cambiando la carpeta (puede estar comentado)

## 2) Sumario

Esta API REST se compone de tres colecciones (Autores, Libros y Users). El objetivo de este proyecto es implementar los correspondientes endpoints (CRUD) para las colecciones, así como añadir las relaciones correspondientes; siendo en este caso, la colección Autores quien contendrá el array de Libros disponibles. Además de ello, se añade la funcionalidad necesaria para poder subir archivos mediante el servicio cloudinary.

## 3) Módulos

A continuación se detallan los diferentes módulos empleados para la ejecución de la API REST.

| NPM                                                    |
| ------------------------------------------------------ |
| [Mongoose][PlMongoose]                                 |
| [Express][PlExpress]                                   |
| [Nodemon][PlNodemon]                                   |
| [DotEnv][PlDotEnv]                                     |
| [Bcrypt][PlBcrypt]                                     |
| [CORS][PlCORS]                                         |
| [JsonWebToken][PlJwt]                                  |
| [Multer][PlMulter]                                     |
| [Multer-storage-cloudinary][PlMulterStorageCloudinary] |
| [Cloudinary][PlCloudinary]                             |

## 4) Instalación

Con la siguiente secuencia de comandos, NPM descarga e instala todas las dependencias listadas bajo _dependencies_ y _devDependencies_ en el directorio _node_modules_ si el archivo _package-lock.json_ está presente, de no ser así, NPM lo creará a partir de _package.json_.

```sh
npm i
```

Una vez finalizada la instalación, procederemos con la ejecución monitorizada _nodemon_, definida en el archivo _package.json_.

```sh
node run dev
```

Para poblar la base de datos con unos datos de muestra, procederemos con la ejecución del script _seed_, definida en el archivo _package.json_.

```sh
npm run seed
```

## 4) Referencias API

Emplearemos para todas la referencias a **${BASE_PATH}** como "http://localhost:3000/api/v1"

### 4.1) Users

#### 4.1.1) Obtener todos los usuarios (getUsers) - Exclusivo para rol: 'admin'

```
  GET ${BASE_PATH}/users
```

❗Token obtenido al realizar el 'login'

| Parameter | Type | Description                              |
| :-------- | :--- | :--------------------------------------- |
| `-`       | `-`  | Lista todos los usuarios de la colección |

#### 4.1.2) Registrar usuario (register)

```
  POST ${BASE_PATH}/users/register
```

| JSON Body Parameter | Type     | Description           |
| :------------------ | :------- | :-------------------- |
| `userName`          | `string` | Nombre de usuario     |
| `password`          | `string` | Contraseña de usuario |

❗ El rol por defecto para cualquier nuevo usuario será 'user'.

#### 4.1.3) Login (login)

```
  POST ${BASE_PATH}/users/login
```

| JSON Body Parameter | Type     | Description                          |
| :------------------ | :------- | :----------------------------------- |
| `userName`          | `string` | **Requerido**. Nombre de usuario     |
| `password`          | `string` | **Requerido**. Contraseña de usuario |

#### 4.1.4) Actualizar usuario (putUser) - Exclusivo para rol: 'admin'

```
  PUT ${BASE_PATH}/users/${id}
```

❗Token obtenido al realizar el 'login'

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | **Requerido**. Id del usuario a actualizar |

| JSON Body Parameter | Type     | Description            |
| :------------------ | :------- | :--------------------- |
| `userName`          | `string` | Nombre de usuario      |
| `password`          | `string` | Contraseña del usuario |
| `rol`               | `string` | Rol del usuario        |

#### 4.1.5) Eliminar usuario (deleteUser) - Exclusivo para rol: 'admin' y 'user'

```
  DELETE ${BASE_PATH}/users/${id}
```

❗Token obtenido al realizar el 'login'

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Requerido**. Id del usuario a eliminar |

#### 4.1.6) Obtener libros favoritos del usuario (getFavoritos) - Exclusivo para rol: 'admin' y 'user'

```
  GET ${BASE_PATH}/users/favoritos
```

❗Token obtenido al realizar el 'login'

| Parameter | Type | Description                                  |
| :-------- | :--- | :------------------------------------------- |
| `-`       | `-`  | Lista todos los libros favoritos del usuario |

#### 4.1.7) Añadir libro favorito al usuario (addFavorito) - Exclusivo para rol: 'admin' y 'user'

```
  POST ${BASE_PATH}/users/favoritos
```

❗Token obtenido al realizar el 'login'

| JSON Body Parameter | Type     | Description                      |
| :------------------ | :------- | :------------------------------- |
| `id`                | `string` | Id del libro favorito a insertar |

#### 4.1.8) Eliminar libro favorito del usuario (deleteFavorito) - Exclusivo para rol: 'admin' y 'user'

```
  DELETE ${BASE_PATH}/users/favoritos/${id}
```

❗Token obtenido al realizar el 'login'

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| `id`      | `string` | **Requerido**. Id del libro favorito a eliminar |

### 5.1) Libros

#### 5.1.1) Obtener todos los libros no verificados (getLibros) - Exclusivo para rol: 'admin'

```
  GET ${BASE_PATH}/libros/not-verified
```

❗Token obtenido al realizar el 'login'

| Parameter | Type | Description                                                        |
| :-------- | :--- | :----------------------------------------------------------------- |
| `-`       | `-`  | Lista todos los libros de la colección que no han sido verificados |

#### 5.1.2) Obtener todos los libros que han sido verificados (getLibros)

```
  GET ${BASE_PATH}/libros
```

| Parameter | Type | Description                                                     |
| :-------- | :--- | :-------------------------------------------------------------- |
| `-`       | `-`  | Lista todos los libros de la colección que han sido verificados |

#### 5.1.3) Buscar libro por id (getLibroById)

```
  GET ${BASE_PATH}/libros/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Requerido**. Id del libro a buscar |

#### 5.1.4) Buscar libros por género (getLibrosByGenre)

```
  GET ${BASE_PATH}/libros/genero/${genero}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `genero`  | `string` | **Requerido**. Género de libros a buscar |

#### 5.1.5) Buscar libros por fecha de publicación (getLibrosByPubDate)

```
  GET ${BASE_PATH}/libros/fecha_publicacion/${año}
```

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `año`     | `number` | **Requerido**. Año de publicación del libro |

#### 5.1.6) Publicar libro (postLibro) - Exclusivo para rol: 'admin' y 'user'

```
  POST ${BASE_PATH}/libros
```

❗Token obtenido al realizar el 'login'

| JSON Body Parameter | Type     | Description                  |
| :------------------ | :------- | :--------------------------- |
| `titulo`            | `string` | Nombre del libro             |
| `genero`            | `string` | Género del libro             |
| `fecha_publicacion` | `number` | Año de publicación del libro |
| `imagen`            | `string` | Portada del libro            |

❗ Si el rol es 'admin', establece el libro como verificado.
❗ Si el rol es 'user', establece el libro como no verificado.

#### 5.1.7) Actualizar libro (putLibro) - Exclusivo para rol: 'admin'

```
  PUT ${BASE_PATH}/libros/${id}
```

❗Token obtenido al realizar el 'login'

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Requerido**. Id del libro a actualizar |

| JSON Body Parameter | Type      | Description                   |
| :------------------ | :-------- | :---------------------------- |
| `titulo`            | `string`  | Nombre del libro              |
| `genero`            | `string`  | Género del libro              |
| `fecha_publicacion` | `number`  | Año de publicación del libro  |
| `imagen`            | `string`  | Portada del libro             |
| `verified`          | `boolean` | Estado verificación del libro |

#### 5.1.8) Eliminar libro (deleteLibro) - Exclusivo para rol: 'admin'

```
  DELETE ${BASE_PATH}/libros/${id}
```

❗Token obtenido al realizar el 'login'

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Requerido**. Id del libro a eliminar |

### 5.2) Autores

#### 5.2.1) Obtener todos los autores (getAutores)

```
  GET ${BASE_PATH}/autores
```

| Parameter | Type | Description                             |
| :-------- | :--- | :-------------------------------------- |
| `-`       | `-`  | Lista todos los autores de la colección |

#### 5.2.2) Buscar autor por id (getAutorById)

```
  GET ${BASE_PATH}/autores/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Requerido**. Id del autor a buscar |

#### 5.2.3) Publicar autor (postAutor) - Exclusivo para rol: 'admin'

```
  POST ${BASE_PATH}/autores
```

❗Token obtenido al realizar el 'login'

| JSON Body Parameter | Type     | Description                               |
| :------------------ | :------- | :---------------------------------------- |
| `nombre`            | `string` | Nombre del autor                          |
| `nacionalidad`      | `string` | Nacionalidad del autor                    |
| `imagen`            | `string` | Imagen del autor                          |
| `libros`            | `array`  | Listado de libros publicados por el autor |

#### 5.2.4) Actualizar autor (putAutor) - Exclusivo para rol: 'admin'

```
  PUT ${BASE_PATH}/autores/${id}
```

❗Token obtenido al realizar el 'login'

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Requerido**. Id del autor a actualizar |

| JSON Body Parameter | Type     | Description                               |
| :------------------ | :------- | :---------------------------------------- |
| `nombre`            | `string` | Nombre del autor                          |
| `nacionalidad`      | `string` | Nacionalidad del autor                    |
| `imagen`            | `string` | Imagen del autor                          |
| `libros`            | `array`  | Listado de libros publicados por el autor |

#### 5.2.5) Eliminar autor (deleteAutor) - Exclusivo para rol: 'admin'

```
  DELETE ${BASE_PATH}/autores/${id}
```

❗Token obtenido al realizar el 'login'

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Requerido**. Id del autor a eliminar |

## 6) Licencia

[MIT](https://choosealicense.com/licenses/mit/)

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[PlMongoose]: https://www.npmjs.com/package/mongoose
[PlExpress]: https://www.npmjs.com/package/express
[PlNodemon]: https://www.npmjs.com/package/nodemon
[PlDotEnv]: https://www.npmjs.com/package/dotenv
[PlBcrypt]: https://www.npmjs.com/package/bcrypt
[PlCORS]: https://www.npmjs.com/package/cors
[PlJwt]: https://www.npmjs.com/package/jsonwebtoken
[PlMulter]: https://www.npmjs.com/package/multer
[PlMulterStorageCloudinary]: https://www.npmjs.com/package/multer-storage-cloudinary
[PlCloudinary]: https://www.npmjs.com/package/cloudinary

# PROYECTO 9: WEB SCRAPPING

## 1) Requisitos

✔ Web scrapping con puppeteer a una página que tenga paginación de datos.

✔ Se deben quitar siempre los modales que van apareciendo y nos molestan

✔ El scrapper debe seleccionar todos los productos de cada página

✔ El scrapper debe pasar a la siguiente página hasta llegar al final y recoger todos los datos de todas las páginas

✔ Debemos guardar el precio, el nombre y la imagen del producto

✔ Cuando se hayan recogido todos los datos de todas las páginas, se generará un archivo llamado products.json que aloje todos los datos recogidos

✔ En el package.json existirá un script que nos permita ejecutar el scrapper de manera sencilla

## 2) Sumario

Este proyecto se compone de 2 partes: semilla dedicada a hacer scrapping (parte principal) y una breve API REST para la visualización de los datos obtenidos.

## 3) Módulos

A continuación se detallan los diferentes módulos empleados para la ejecución de la API REST.

| NPM                           |
| ----------------------------- |
| [Mongoose][PlMongoose]        |
| [Express][PlExpress]          |
| [Nodemon][PlNodemon]          |
| [DotEnv][PlDotEnv]            |
| [CORS][PlCORS]                |
| [Puppeteer][PlPuppeteer]      |
| [Cli-Progress][PlCliProgress] |
| [Ansi-Colors][PlAnsiColors]   |

## 4) Instalación

Con la siguiente secuencia de comandos, NPM descarga e instala todas las dependencias listadas bajo _dependencies_ y _devDependencies_ en el directorio _node_modules_ si el archivo _package-lock.json_ está presente, de no ser así, NPM lo creará a partir de _package.json_.

```sh
npm i
```

Una vez finalizada la instalación, procederemos con la ejecución monitorizada _nodemon_, definida en el archivo _package.json_.

```sh
node run dev
```

Para realizar el web scrapping que generará el correspondiente fichero 'products.json' y además poblar la base de datos con los datos obtenidos, procederemos con la ejecución del script _seed_, definida en el archivo _package.json_.

```sh
npm run seed
```

## 4) Referencias API

Emplearemos para todas la referencias a **${BASE_PATH}** como "http://localhost:3000/api/v1"

### 4.1) Shelvings

#### 4.1.1) Obtener todas las estanterías/librerías (getShelvings)

```
  GET ${BASE_PATH}/
```

| Parameter | Type | Description                                           |
| :-------- | :--- | :---------------------------------------------------- |
| `-`       | `-`  | Lista todas las estanterías/librerías de la colección |

#### 4.1.2) Publicar estantería/librería (postShelving)

```
  POST ${BASE_PATH}/
```

| JSON Body Parameter | Type      | Description                                        |
| :------------------ | :-------- | :------------------------------------------------- |
| `cleanImage`        | `string`  | Imagen de referencia de la estantería/librería     |
| `exampleImage`      | `string`  | Imagen alternativa de la estantería/librería       |
| `name`              | `string`  | Nombre de la estantería/librería                   |
| `offer`             | `boolean` | Valor para determinar si está en oferta            |
| `price`             | `string`  | Precio de la estantería/librería                   |
| `stars`             | `number`  | Valoración dada a la estantería/librería           |
| `opinions`          | `number`  | Número de opiniones dadas a la estantería/librería |

## 5) Licencia

[MIT](https://choosealicense.com/licenses/mit/)

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[PlMongoose]: https://www.npmjs.com/package/mongoose
[PlExpress]: https://www.npmjs.com/package/express
[PlNodemon]: https://www.npmjs.com/package/nodemon
[PlDotEnv]: https://www.npmjs.com/package/dotenv
[PlCORS]: https://www.npmjs.com/package/cors
[PlPuppeteer]: https://www.npmjs.com/package/puppeteer
[PlCliProgress]: https://www.npmjs.com/package/cli-progress
[PlAnsiColors]: https://www.npmjs.com/package/ansi-colors

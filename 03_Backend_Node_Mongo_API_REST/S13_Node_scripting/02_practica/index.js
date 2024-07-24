const fs = require("fs");

// Ejemplo de estado inicial
const array = [
  {
    DNI: "23984723D",
    Nombre: "Paquito",
    Apellidos: "García"
  },
  {
    DNI: "2398233F",
    Nombre: "Juanito",
    Apellidos: "García"
  },
];

// proceso intermedio ----------

// 1. Creamos el string en el que iremos plasmando los datos.
let stringFinal = ``;

// 2. Creamos la primera fila añadiendo las claves separadas por comas al string, ya que es el formato que nos pide un csv
for (const key in array[0]) {
  stringFinal += `${key},`;
}

// 3. Quitamos la última coma
stringFinal = stringFinal.slice(0, stringFinal.length - 1);

// 4. Añadimos el caracter especial \n para dar un salto de línea en nuestro string para crear una fila nueva en el formato csv
stringFinal += "\n";

// 5. Añadiremos ahora los valores en direferentes filas
for (const elemento of array) {
  stringFinal += `${elemento.DNI},${elemento.Nombre},${elemento.Apellidos}\n`
}

// 6. En este punto habremos conseguido el ejemplo de formato csv, lo podemos comprobar con un log
console.log(stringFinal);

// proceso final ---------
// 7. Utilizamos el método writeFile para crear el archivo.csv con el contenido generado
fs.writeFile("archivo.csv", stringFinal, (err, data) => {
  console.log("Escrito!");
})
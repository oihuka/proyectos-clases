/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array: */
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const findArrayIndex = (array, text) => {
  return array.indexOf(text);
}

console.log(findArrayIndex(mainCharacters, "Chewbacca")); // 3
console.log(findArrayIndex(mainCharacters, "Darth Vader")); // Debería devolver -1, ya que no está en el array
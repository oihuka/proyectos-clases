// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
// pista (typeof)
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
  // insert code
  let sumNumbers = 0;
  let sumLengths = 0;
  let countWords = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sumNumbers += array[i];
    } else if (typeof array[i] === 'string') {
      sumLengths += array[i].length;
      countWords++;
    }
  }

  const averageNumbers = countWords > 0 ? sumNumbers / countWords : 0;
  const averageLengths = countWords > 0 ? sumLengths / countWords : 0;

  return averageNumbers, averageLengths;
}

const result = averageWord(mixedElements);
console.log(result);

// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
  // insert code
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

const result = average(numbers);
console.log(result);
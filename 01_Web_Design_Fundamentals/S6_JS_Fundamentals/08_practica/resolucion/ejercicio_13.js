function finderName(array, element) {
  if (array.includes(element)) {
    return `${true}, posicion: ${array.indexOf(element)}`
  } else {
    return false;
  }
}

function finderName_v2(array, element) {
  for (let i = 0; i < array.length; i++) {
    console.log(element);
    console.log(array[i]);
    if (element === array[i]) {
      return `${true}, posicion: ${i}`
    }
  }
  return false;
}

console.log(finderName(nameFinder, "Steve")) // true, posición 1
function removeDuplicates(param) {

  for (let i = 0; i < param.length; i++) {
    const primerPuntero = param[i]

    // empezamos en la siguiente a la i para no comprobar la misma con la misma
    for (let j = i + 1; j < param.length; j++) {
      const segundoPuntero = param[j];

      // hemos encontrado un duplicado!
      if (primerPuntero === segundoPuntero) {
        // método splice para eliminar uno
        param.splice(j, 1);
        // damos un pasito atrás para no saltarnos ninguna comprobación
        j--;
      }
    }
  }

  console.log(param);

}

removeDuplicates(duplicates)

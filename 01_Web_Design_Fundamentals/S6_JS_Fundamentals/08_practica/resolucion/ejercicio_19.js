for (let i = 0; i < toys.length; i++) {

  if (toys[i].includes("gato")) {
    toys.splice(i, 1),
      i--;
  }

}

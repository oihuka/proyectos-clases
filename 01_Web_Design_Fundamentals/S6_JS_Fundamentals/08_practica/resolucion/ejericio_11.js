const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
  let sum = 0;

  for (let i = 0; i < param.length; i++) {
    const element = param[i];

    if (typeof element === "string") {
      sum += element.length;
    } else {
      sum += element;
    }
  }

  return sum
}

averageWord(mixedElements);
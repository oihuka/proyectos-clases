function sumAll(param) {
  let sum = 0;

  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    sum += element;
  }

  return sum;
}

sumAll(numbers);
function repeatCounter(array) {
  const count = {}
  for (let i = 0; i < array.length; i++) {

    if (count[array[i]] >= 1) {
      count[array[i]]++;
    } else {
      count[array[i]] = 1;
    }

  }

  console.log(count);
}

repeatCounter(counterWords) // { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }
function findLongestWord(param) {
  let longestWord = param[0];

  for (let i = 1; i < param.length; i++) {
    const element = param[i];

    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }

  return longestWord;
}

findLongestWord(avengers)
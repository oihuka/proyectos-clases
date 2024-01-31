const shortMovies = [];
const mediumMovies = [];
const longMovies = [];

for (let i = 0; i < movies.length; i++) {

  if (movies[i].durationInMinutes < 100) {
    shortMovies.push(movies[i]);
  } else if (movies[i].durationInMinutes > 200) {
    longMovies.push(movies[i]);
  } else {
    mediumMovies.push(movies[i]);
  }

}

console.log(shortMovies);
console.log(mediumMovies);
console.log(longMovies);
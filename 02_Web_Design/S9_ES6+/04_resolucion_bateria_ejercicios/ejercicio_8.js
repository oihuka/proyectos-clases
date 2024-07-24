/* 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
array .gender.
 */
const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  { name: "Legend of Zelda: Breath of the wild", genders: ["RPG"], score: 10 },
];

// Filtrar videojuegos por género 'RPG'
const rpgGames = videogames.filter((game) => game.genders.includes("RPG"));

// Calcular la media de los puntajes de los videojuegos RPG
const totalScore = rpgGames.reduce(
  (accumulator, game) => accumulator + game.score,
  0
);
const averageScore = totalScore / rpgGames.length;

console.log(
  "La media de los puntajes de los videojuegos RPG es:",
  averageScore
);
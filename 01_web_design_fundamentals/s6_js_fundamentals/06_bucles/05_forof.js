//! yo no puedo utilizar el bucle forof para hacer vueltas específicas sin tener un array o string de apoyo

const emojis = ["🎅", "🤶", "👼", "🕵️‍♂️", "👷‍♀️", "👩‍🌾"]; // 6
// posiciones     0     1      2     3     4      5

for (let i = emojis.length / 2; i < emojis.length; i++) {
  let emoji = emojis[i];

  console.log(emoji);
}


console.log("--------------------------");

//! recorrer arrays o strings

for (const emoji of emojis) {
  console.log(emoji);
}
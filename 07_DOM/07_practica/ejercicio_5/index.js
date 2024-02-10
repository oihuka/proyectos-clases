// Basándote en el array siguiente, crea una lista ul > li dinámicamente en el HTML que imprima cada uno de los álbumes.
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ulList = document.createElement("ul");
document.body.appendChild(ulList);

for (const album of albums) {
  const listItem = document.createElement("li");
  listItem.textContent = album;
  ulList.appendChild(listItem);
}

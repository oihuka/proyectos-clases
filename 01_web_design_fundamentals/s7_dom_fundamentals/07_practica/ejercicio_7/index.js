// Utiliza el array para crear dinámicamente una lista ul > li de elementos en el div de HTML 
// con el atributo data-function="printHere".
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const printHereDiv = document.querySelector("[data-function='printHere']");
const ulList = document.createElement("ul");

for (const place of places) {
  const listItem = document.createElement("li");
  listItem.textContent = place;
  ulList.appendChild(listItem);
}

printHereDiv.appendChild(ulList);

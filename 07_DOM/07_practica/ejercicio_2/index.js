// 1.1 Inserta dinámicamente en el HTML un div vacío con JavaScript.
const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

// 1.2 Inserta dinámicamente en el HTML un div que contenga un párrafo con JavaScript.
const divWithP = document.createElement("div");
document.body.appendChild(divWithP);

const pInDiv = document.createElement("p");
divWithP.appendChild(pInDiv);

// 1.3 Inserta dinámicamente en el HTML un div que contenga 6 párrafos utilizando un bucle con JavaScript.
const multipleDiv = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const newP = document.createElement("p");
  multipleDiv.appendChild(newP);
}

document.body.appendChild(multipleDiv);

// 1.4 Inserta dinámicamente con JavaScript en el HTML un párrafo con el texto 'Soy dinámico!'.
const dynamicP = document.createElement("p");
dynamicP.textContent = "Soy dinámico!";
document.body.appendChild(dynamicP);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2WithText = document.querySelector(".fn-insert-here");
h2WithText.textContent = "Wubba Lubba dub dub";

// 1.6 Basándote en el siguiente array, crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ulList = document.createElement("ul");

for (const app of apps) {
  const liInUl = document.createElement("li");
  liInUl.textContent = app;
  ulList.appendChild(liInUl);
}

document.body.appendChild(ulList);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me.
const elementsToRemove = document.querySelectorAll(".fn-remove-me");

elementsToRemove.forEach(element => element.remove());

// 1.8 Inserta un párrafo con el texto 'Voy en medio!' entre los dos divs.
// Recuerda que no solo puedes insertar elementos con .appendChild.
const allDivs = document.querySelectorAll("div");

const newPBetweenDivs = document.createElement("p");
newPBetweenDivs.textContent = "Voy en medio!";

document.body.insertBefore(newPBetweenDivs, allDivs[1].nextSibling);

// 1.9 Inserta un párrafo con el texto 'Voy dentro!', dentro de todos los divs con la clase .fn-insert-here.
const allInsertedDivs = document.querySelectorAll(".fn-insert-here");

for (const elementInserted of allInsertedDivs) {
  const pInserted = document.createElement("p");
  pInserted.textContent = "Voy dentro!";
  elementInserted.appendChild(pInserted);
}

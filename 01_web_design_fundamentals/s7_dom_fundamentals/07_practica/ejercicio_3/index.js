// 1.1 Basándote en el array siguiente, crea una lista ul > li dinámicamente en el HTML que imprima cada uno de los países.
const countriesSetOne = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countryList = document.createElement("ul");
document.body.appendChild(countryList);

for (const country of countriesSetOne) {
  const countryLi = document.createElement("li");
  countryLi.textContent = country;
  countryList.appendChild(countryLi);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementsToRemove = document.querySelectorAll(".fn-remove-me");
elementsToRemove.forEach(element => element.remove());

// 1.3 Utiliza el array para crear dinámicamente una lista ul > li de elementos en el div de HTML con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corolla'];

const divPrintHere = document.querySelector("[data-function=printHere]");
const carList = document.createElement("ul");
divPrintHere.appendChild(carList);

for (const car of cars) {
  const carLi = document.createElement("li");
  carLi.textContent = car;
  carList.appendChild(carLi);
}

// 1.4 Crea dinámicamente en el HTML una serie de divs que contenga un elemento h4 para el título y otro elemento img para la imagen.
const countriesSetTwo = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (const country of countriesSetTwo) {
  const setOfDivs = document.createElement("div");
  const titleH4 = document.createElement("h4");
  const randomImg = document.createElement("img");

  titleH4.textContent = country.title;
  randomImg.src = country.imgUrl;

  setOfDivs.appendChild(titleH4);
  setOfDivs.appendChild(randomImg);
  document.body.appendChild(setOfDivs);
}

// 1.5 Basándote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const deleteLastDivButton = document.createElement("button");
deleteLastDivButton.textContent = "Elimina último div";
document.body.appendChild(deleteLastDivButton);

deleteLastDivButton.addEventListener("click", () => {
  const lastDiv = document.querySelector("div:last-child");
  if (lastDiv) {
    lastDiv.remove();
  }
});

// 1.6 Basándote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del HTML.
const divsToDelete = document.querySelectorAll("div");

divsToDelete.forEach((div, index) => {
  const deleteThisDivButton = document.createElement("button");
  deleteThisDivButton.textContent = `Elimino este div ${index + 1}`;
  div.appendChild(deleteThisDivButton);
  deleteThisDivButton.addEventListener("click", () => {
    div.remove();
  });
});

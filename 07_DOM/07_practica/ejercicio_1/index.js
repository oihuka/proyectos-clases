// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const buttonShowme = document.querySelector(".showme");
console.log(buttonShowme);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const showH1 = document.querySelector("#pillado");
console.log(showH1);

// 1.3 Usa querySelectorAll para mostrar por consola todos los p
const showAllP = document.querySelectorAll("p");
console.log(showAllP);

// 1.4 Usa querySelectorAll para mostrar por consola todos los elementos con la clase .pokemon
const showAllPokemon = document.querySelectorAll(".pokemon");
console.log(showAllPokemon);

// 1.5 Usa querySelectorAll para mostrar por consola todos los elementos con el atributo data-function="testMe".
const showAllElementsTestMe = document.querySelectorAll("[data-function='testMe']");
console.log(showAllElementsTestMe);

// 1.6 Usa querySelector para mostrar por consola el tercer elemento con el atributo data-function="testMe".
const showElementThirdTestMe = document.querySelector("[data-function='testMe']:nth-of-type(3)");
console.log(showElementThirdTestMe);

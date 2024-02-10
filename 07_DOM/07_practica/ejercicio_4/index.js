// 1.1 Añade un botón a tu HTML con el id btnToClick y en tu JavaScript añade el evento click que ejecute un console.log con la información del evento del click.
const buttonToClick = document.createElement("button");
buttonToClick.id = "btnToClick";
buttonToClick.textContent = "Click Here";

buttonToClick.addEventListener("click", (event) => console.log(event));
document.body.appendChild(buttonToClick);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event) => console.log(event.target.value));

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue = document.querySelector(".value");
inputValue.addEventListener("input", (event) => console.log(event.target.value));

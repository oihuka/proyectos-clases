fetch("https://thronesapi.com/api/v2/Characters")
  .then((res) => res.json())
  .then((characters) => {
    const select = document.querySelector("#character-list");
    for (const character of characters) {
      select.innerHTML += `<option value="${character.firstName} ${character.lastName}">${character.firstName} ${character.lastName}</option>`;
    }
    select.addEventListener("change", (e) => {
      const image = document.querySelector(".character-image");
      image.src = characters.find(
        (character) =>
          e.target.value.includes(character.firstName) &&
          e.target.value.includes(character.lastName)
      ).imageUrl;
    });
  });

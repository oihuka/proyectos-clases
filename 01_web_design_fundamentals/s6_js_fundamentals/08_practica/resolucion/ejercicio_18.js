for (let i = 0; i < placesToTravel.length; i++) {

  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1);
    i--;
  }

}

console.log(placesToTravel);
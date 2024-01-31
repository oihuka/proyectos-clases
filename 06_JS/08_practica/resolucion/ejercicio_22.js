for (let i = 0; i < foodSchedule.length; i++) {

  if (foodSchedule[i].isVegan === false) {
    foodSchedule[i].name = fruits.splice(0, 1)[0];
    foodSchedule.isVegan = true;
  }

}

console.log(foodSchedule);
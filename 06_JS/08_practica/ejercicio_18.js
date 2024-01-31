// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:
const placesToTravel = [{ id: 5, name: 'Japan' }, { id: 11, name: 'Venecia' }, { id: 23, name: 'Murcia' }, { id: 40, name: 'Santander' }, { id: 44, name: 'Filipinas' }, { id: 59, name: 'Madagascar' }]

for (let i = placesToTravel.length - 1; i >= 0; i--) {
  const currentPlace = placesToTravel[i];
  if (currentPlace.id === 11 || currentPlace.id === 40) {
    placesToTravel.splice(i, 1);
  }
}

console.log(placesToTravel);
const mayores = [];
const menores = [];

for (const user of users) {
  if (user.years < 18) {
    menores.push(user);
  }
  if (user.years >= 18) {
    mayores.push(user);
  }
}

console.log("Usuarios menores de edad:", menores);
console.log("Usuarios mayores de edad:", mayores);
// Crea una arrow function que tenga dos parametros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
// por consola la suma de los dos parametros.
const sumaParametros = (a = 10, b = 5) => {
  console.log("La suma de los dos parámetros es:", a + b);
};

// 1.1 Ejecuta esta función sin pasar ningún parametro
console.log("1.1 Ejecución sin pasar ningún parámetro:");
sumaParametros();

// 1.2 Ejecuta esta función pasando un solo parametro
console.log("\n1.2 Ejecución pasando un solo parámetro:");
sumaParametros(9);

// 1.3 Ejecuta esta función pasando dos parametros
console.log("\n1.3 Ejecución pasando dos parámetros:");
sumaParametros(2, 7);

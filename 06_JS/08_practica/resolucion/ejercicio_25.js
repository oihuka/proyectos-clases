let sum = 0;

for (const product of products) {
  sum += product.sellCount;
}

console.log(sum / products.length);
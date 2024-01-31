for (const product of products) {
  if (product.sellCount > 20) {
    goodProducts.push(product)
  } else {
    badProducts.push(product)
  }
}

console.log(goodProducts);
console.log(badProducts);
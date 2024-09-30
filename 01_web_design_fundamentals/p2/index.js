const products = [
  { id: 1, name: "Smartphone", price: 299, category: "electronica", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Laptop", price: 999, category: "electronica", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 3, name: "Camiseta", price: 19, category: "ropa", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 4, name: "Pantalón", price: 49, category: "ropa", image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 5, name: "Lámpara", price: 39, category: "hogar", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 6, name: "Silla", price: 79, category: "hogar", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
];

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementsByClassName("close")[0];
const applyFiltersBtn = document.getElementById("applyFilters");
const clearFiltersBtn = document.getElementById("clearFilters");
const productContainer = document.getElementById("productContainer");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function displayProducts(productsToShow) {
  productContainer.innerHTML = "";
  productsToShow.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>Precio: $${product.price}</p>
        <p>Categoría: ${product.category}</p>
      </div>
    `;
    productContainer.appendChild(productElement);
  });
}

function applyFilters() {
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  const category = document.getElementById("category").value;

  let filteredProducts = products.filter(product => {
      return ((!minPrice || product.price >= minPrice) &&
              (!maxPrice || product.price <= maxPrice) &&
              (!category || product.category === category));
  });

  if (filteredProducts.length === 0) {
      alert("No se encontraron productos. Mostrando productos sugeridos.");
      filteredProducts = getRandomProducts(3);
  }

  displayProducts(filteredProducts);
  closeModal();
}

function clearFilters() {
  document.getElementById("filterForm").reset();
  displayProducts(products);
  closeModal();
}

function getRandomProducts(count) {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
applyFiltersBtn.addEventListener("click", applyFilters);
clearFiltersBtn.addEventListener("click", clearFilters);

displayProducts(products);
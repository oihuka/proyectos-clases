const products = [
  { id: 1, name: "Smartphone", price: 299, category: "electronica", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Laptop", price: 999, category: "electronica", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 3, name: "Camiseta", price: 19, category: "ropa", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 4, name: "Pantalón", price: 49, category: "ropa", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 5, name: "Lámpara", price: 39, category: "hogar", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 6, name: "Silla", price: 79, category: "hogar", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 7, name: "Tablet", price: 199, category: "electronica", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 8, name: "Sudadera", price: 39, category: "ropa", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 9, name: "Mesa", price: 129, category: "hogar", image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 10, name: "Auriculares", price: 59, category: "electronica", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 11, name: "Zapatillas", price: 89, category: "ropa", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
  { id: 12, name: "Espejo", price: 45, category: "hogar", image: "https://images.unsplash.com/photo-1560828343-a0b3d8864d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
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

function displayProducts(products) {
  const container = document.getElementById('productContainer');
  container.innerHTML = '';

  if (products.length === 0) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'no-products-message';
    messageDiv.innerHTML = `
      <h2>No se encontraron productos con los filtros seleccionados</h2>
      <div class="suggested-products">
        <h3>Productos sugeridos que te podrían interesar:</h3>
        <div id="suggestedProducts" class="product-grid"></div>
      </div>
    `;
    container.appendChild(messageDiv);
    // Mostrar 3 productos aleatorios
    const randomProducts = getRandomProducts(3);
    const suggestedContainer = document.getElementById('suggestedProducts');
    randomProducts.forEach(product => {
      // Usar la misma función que ya tienes para crear las tarjetas de producto
      const productCard = createProductCard(product);
      suggestedContainer.appendChild(productCard);
    });
    return;
  }

  products.forEach(product => {
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
    container.appendChild(productElement);
  });
}

function showToast(message, duration = 3000) {
  // Eliminar toast anterior si existe
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) {
    existingToast.remove();
  }

  // Crear nuevo toast
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Mostrar el toast
  setTimeout(() => toast.classList.add('show'), 100);

  // Ocultar y eliminar el toast
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function applyFilters() {
  const minPrice = Number(document.getElementById("minPrice").value);
  const maxPrice = Number(document.getElementById("maxPrice").value);
  const category = document.getElementById("category").value;

  // Validación de precios
  if (minPrice && maxPrice && minPrice > maxPrice) {
    showToast("El precio mínimo no puede ser mayor que el precio máximo");
    return;
  }

  let filteredProducts = products.filter(product => {
    return ((!minPrice || product.price >= minPrice) &&
            (!maxPrice || product.price <= maxPrice) &&
            (!category || product.category === category));
  });

  if (filteredProducts.length === 0) {
    showToast("No se encontraron productos. Mostrando sugerencias...");
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
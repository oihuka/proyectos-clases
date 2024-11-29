import './style.css';
import { Header } from './src/components/Header/Header.js';
import { SearchBar } from './src/components/SearchBar/SearchBar.js';
import { ImageGrid } from './src/components/ImageGrid/ImageGrid.js';
import { showToast } from './src/components/Toast/Toast.js';

const API_KEY = import.meta.env.VITE_API_KEY || 'PTosorsxg9Hv5LQGF5-QBMAGZ5JtYBDXOXTu8pdRuZg';
const API_URL = import.meta.env.VITE_API_URL || 'https://api.unsplash.com/search/photos';

async function fetchImages(query) {
  try {
    const response = await fetch(`${API_URL}?query=${query}&client_id=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    showToast('Error al cargar las imágenes. Por favor, inténtalo de nuevo.', 'error');
    console.error('Error:', error);
    return [];
  }
}

async function init() {
  const app = document.querySelector('#app');
  app.innerHTML = Header();

  const searchBar = SearchBar(async (query) => {
    let images = await fetchImages(query);
    if (images.length === 0) {
      showToast('No se encontraron resultados para tu búsqueda', 'error');
      return;
    }
    const imageGrid = ImageGrid(images);
    const existingGrid = document.querySelector('.image-grid');
    if (existingGrid) {
      existingGrid.replaceWith(imageGrid);
    } else {
      app.appendChild(imageGrid);
    }
  });

  app.appendChild(searchBar);

  // Carga inicial de imágenes
  const initialImages = await fetchImages('random');
  app.appendChild(ImageGrid(initialImages));
}

init();
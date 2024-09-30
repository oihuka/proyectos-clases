import './style.css';
import { Header } from './src/components/Header/Header.js';
import { SearchBar } from './src/components/SearchBar/SearchBar.js';
import { ImageGrid } from './src/components/ImageGrid/ImageGrid.js';

const API_KEY = 'PTosorsxg9Hv5LQGF5-QBMAGZ5JtYBDXOXTu8pdRuZg';
const API_URL = 'https://api.unsplash.com/search/photos';

async function fetchImages(query) {
  const response = await fetch(`${API_URL}?query=${query}&client_id=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

async function init() {
  const app = document.querySelector('#app');
  app.innerHTML = Header();

  const searchBar = SearchBar(async (query) => {
    let images = await fetchImages(query);
    if (images.length === 0) {
      alert('No se encontraron imágenes. Mostrando gatos como alternativa.');
      images = await fetchImages('cats');
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
import './SearchBar.css';

export function SearchBar(onSearch) {
  const searchBar = document.createElement('div');
  searchBar.className = 'search-bar';
  searchBar.innerHTML = `
    <input type="text" placeholder="Buscar imágenes...">
    <button>Buscar</button>
  `;

  const input = searchBar.querySelector('input');
  const button = searchBar.querySelector('button');

  button.addEventListener('click', () => {
    onSearch(input.value);
    input.value = '';
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      onSearch(input.value);
      input.value = '';
    }
  });

  return searchBar;
}
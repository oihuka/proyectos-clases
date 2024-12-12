import './Header.css';

export function Header(onSearch) {
  return `
    <header class="header">
      <div class="header-container">
        <div class="header-left">
          <button class="pinterest-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest Logo">
          </button>
          <nav class="main-nav">
            <button class="nav-button active">Inicio</button>
            <button class="nav-button">Explorar</button>
            <button class="nav-button">Crear</button>
          </nav>
        </div>
        
        <div class="header-center">
          <div class="search-wrapper">
            <span class="material-icons">search</span>
            <input type="text" placeholder="Buscar" id="search-input">
          </div>
        </div>
        
        <div class="header-right">
          <button class="icon-button notification-button">
            <span class="material-icons">notifications</span>
          </button>
          <button class="icon-button message-button">
            <span class="material-icons">chat</span>
          </button>
          <button class="icon-button profile-button">
            <span class="material-icons">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  `;
}
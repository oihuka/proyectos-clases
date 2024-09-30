import './Header.css';

export function Header() {
  return `
    <header class="header">
      <div class="logo" onclick="window.location.reload()">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest Logo">
      </div>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#explore">Explorar</a></li>
          <li><a href="#create">Crear</a></li>
        </ul>
      </nav>
    </header>
  `;
}
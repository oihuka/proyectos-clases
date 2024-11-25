export function renderHeader() {
  return `
      <header>
          <h1>Portal de Juegos</h1>
          <nav>
              <ul>
                  <li><a href="/" data-navigo>Inicio</a></li>
                  <li><a href="/tictactoe" data-navigo>Tres en Raya</a></li>
                  <li><a href="/battleship" data-navigo>Hundir la Flota</a></li>
                  <li><a href="/snake" data-navigo>Snake</a></li>
              </ul>
          </nav>
      </header>
  `;
}
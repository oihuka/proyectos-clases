import './Header.css';

export function Header() {
  const header = document.getElementById('header');
  header.innerHTML = `
    <nav>
      <button class="menu-button">☰</button>
      <ul>
        <li><a href="#about"><span>01.</span> Sobre mí</a></li>
        <li><a href="#experience"><span>02.</span> Experiencia</a></li>
        <li><a href="#projects"><span>03.</span> Proyectos</a></li>
        <li><a href="#contact"><span>04.</span> Contacto</a></li>
      </ul>
    </nav>
  `;

  const menuButton = header.querySelector('.menu-button');
  const nav = header.querySelector('nav ul');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}
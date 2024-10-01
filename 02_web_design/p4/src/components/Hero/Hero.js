import './Hero.css';

export function Hero() {
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <h1>Hola, mi nombre es</h1>
    <h2 class="big-heading">Iker</h2>
    <h3 class="big-heading">Bienvenid@ a mi sitio en la web</h3>
    <p>
      Soy un desarrollador full stack especializado en crear experiencias digitales excepcionales. 
      Actualmente, estoy enfocado en construir productos accesibles y centrados en el usuario.
    </p>
    <a href="#contact" class="button">Contáctame</a>
  `;
}
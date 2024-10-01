import './About.css';

export function About() {
  const about = document.getElementById('about');
  about.innerHTML = `
    <h2 class="numbered-heading" data-number="01.">Sobre mí</h2>
    <div class="inner">
      <div class="about-text">
        <p>
          Hola! Mi nombre es Iker y disfruto aprendiendo y creando cosas que viven en internet. Mi interés en el desarrollo web comenzó en 2015 cuando descubrí las 2 caras de la web (frontend y backend). Poco a poco fui dedicando mis esfuerzos  en este amplio mundo y actualmente estoy formalizando dicho conocimiento con <a href="https://thepower.education/master-fullstack" target="_blank" class="rock-the-code">Rock{theCode}</a>.
        </p>
        <p>
          Hoy en día, tengo el privilegio de trabajar en una empresa de tecnología dedicada al IoT. Mi enfoque principal estos días es construir soluciones Full Stack para una variedad de clientes y dispositivos.
        </p>
        <p>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
        <ul class="skills-list">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>MongoDB</li>
          <li>C</li>
          <li>PHP</li>
        </ul>
      </div>
      <div class="about-image">
        <div class="wrapper">
          <img src="https://media.licdn.com/dms/image/v2/C4D03AQH798B9IHy9zQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517849745580?e=1733356800&v=beta&t=enunhw4SOwbRifD3YTG_2u-eAPNuvbi_mDZa-qJA3Xw" alt="Oihuka" />
        </div>
      </div>
    </div>
  `;
}
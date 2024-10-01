import './Experience.css';

export function Experience() {
  const experience = document.getElementById('experience');
  experience.innerHTML = `
    <h2 class="numbered-heading" data-number="02.">Dónde he trabajado</h2>
    <div class="inner">
      <div class="tab-list" role="tablist">
        <button class="tab-button active" role="tab">TST</button>
        <button class="tab-button" role="tab">Kube GmbH Ingenieurbüro</button>
      </div>
      <div class="tab-panels">
        <div class="tab-panel active" role="tabpanel">
          <h3>
            <span>Ingeniero de Software</span>
            <span class="company">@ TST</span>
          </h3>
          <p class="range">Octubre 2020 - Presente</p>
          <ul>
            <li>Desarrollo Full Stack utilizando tecnologías como Python, C, PHP, JS Vanilla y MySQL.</li>
            <li>Implementación de nuevas funcionalidades y mantenimiento de aplicaciones existentes.</li>
            <li>Colaboración en equipos multidisciplinarios utilizando metodologías ágiles.</li>
          </ul>
        </div>
        <div class="tab-panel" role="tabpanel">
          <h3>
            <span>Ingeniero de Software</span>
            <span class="company">@ Kube GmbH Ingenieurbüro</span>
          </h3>
          <p class="range">Julio 2014 - Septiembre 2020</p>
          <ul>
            <li>Desarrollo de un controlador SafetyHub de seguridad Profisafe IO-Link que puede alcanzar SIL 3 según EN/IEC 62061 o PLe según ISO 13849-1.</li>
            <li>Colaboración en la integración de un sistema ADAS en un vehículo autónomo.</li>
            <li>Colaboración en el análisis del software de una unidad de telepeaje a bordo (OBU).</li>
            <li>Colaboración en el montaje de servidores rack para la instalación de unidades de telepeaje a bordo (OBU).</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  const tabButtons = experience.querySelectorAll('.tab-button');
  const tabPanels = experience.querySelectorAll('.tab-panel');

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      button.classList.add('active');
      tabPanels[index].classList.add('active');
    });
  });
}
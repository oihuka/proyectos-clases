import './Contact.css';

export function Contact() {
  const contact = document.getElementById('contact');
  contact.innerHTML = `
    <h2 class="numbered-heading" data-number="04.">Contacto</h2>
    <p>
      Aunque no estoy buscando nuevas oportunidades en este momento, mi bandeja de entrada siempre está abierta. 
      Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré todo lo posible por responderte!
    </p>
    <a href="mailto:iker.vera@gmail.com" class="email-link">Di Hola</a>
  `;
}
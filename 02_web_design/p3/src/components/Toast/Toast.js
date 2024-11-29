export const showToast = (message, type = 'error') => {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <p>${message}</p>
  `;
  
  document.body.appendChild(toast);
  
  // Añadir clase para la animación de entrada
  setTimeout(() => toast.classList.add('show'), 100);
  
  // Remover el toast después de 3 segundos
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

import './ImageGrid.css';

export function ImageGrid(images) {
  const grid = document.createElement('div');
  grid.className = 'image-grid';

  const avatarColors = ['#E60023', '#0076D3', '#2EA44F', '#9146FF', '#F24E1E'];

  // Función para generar números aleatorios dentro de un rango
  const getRandomStat = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleCardClick = (e) => {
    if (window.innerWidth <= 768) {
      const cards = grid.querySelectorAll('.image-card');
      cards.forEach(card => card.classList.remove('active'));
      
      const clickedCard = e.currentTarget;
      clickedCard.classList.add('active');
      
      // Cerrar al hacer click fuera
      const closeOverlay = (event) => {
        if (!clickedCard.contains(event.target)) {
          clickedCard.classList.remove('active');
          document.removeEventListener('click', closeOverlay);
        }
      };
      
      setTimeout(() => {
        document.addEventListener('click', closeOverlay);
      }, 0);
    }
  };

  images.forEach((image, index) => {
    const card = document.createElement('div');
    card.className = 'image-card';
    const colorIndex = index % avatarColors.length;
    
    // Generamos estadísticas aleatorias para cada imagen
    const photos = getRandomStat(10, 5000);
    const likes = getRandomStat(30, 10000);
    
    card.innerHTML = `
      <div class="image-overlay">
        <div class="stats-buttons">
          <button class="stat-button">
            <span class="material-icons">photo_camera</span>
            <span>${photos}</span>
          </button>
          <button class="stat-button">
            <span class="material-icons">favorite</span>
            <span>${likes}</span>
          </button>
        </div>
        <button class="visit-button">Visitar</button>
      </div>
      <img src="${image.urls.small}" alt="${image.alt_description}" class="main-image">
      <div class="image-info">
        <div class="avatar" style="border-color: ${avatarColors[colorIndex]}">
          <img src="${image.user.profile_image.small}" alt="${image.user.name}">
        </div>
        <span class="username">${image.user.name}</span>
      </div>
    `;
    card.addEventListener('click', handleCardClick);
    grid.appendChild(card);
  });

  return grid;
}
import './ImageGrid.css';

export function ImageGrid(images) {
  const grid = document.createElement('div');
  grid.className = 'image-grid';

  images.forEach(image => {
    const card = document.createElement('div');
    card.className = 'image-card';
    card.innerHTML = `
      <img src="${image.urls.small}" alt="${image.alt_description}">
      <div class="image-info">
        <img src="${image.user.profile_image.small}" alt="${image.user.name}" class="user-avatar">
        <span>${image.user.name}</span>
      </div>
    `;
    grid.appendChild(card);
  });

  return grid;
}
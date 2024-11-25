import { renderHeader } from './components/Header.js';
import { initRouter } from './utils/router.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    // Render header
    app.innerHTML = renderHeader();
    
    // Main content container
    const main = document.createElement('main');
    app.appendChild(main);
    
    // Initialize router
    console.log('Initializing router');
    initRouter(main);
    console.log('Router initialized');
    
    console.log('Main content:', main.innerHTML);
    console.log('App content:', app.innerHTML);
});

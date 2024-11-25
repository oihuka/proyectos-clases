import { renderHome } from '../pages/Home.js';
import { renderTicTacToe, initTicTacToe } from '../pages/TicTacToe.js';
import { renderBattleship, initBattleship } from '../pages/Battleship.js';
import { renderSnake, initSnake } from '../pages/Snake.js';

const routes = {
    '/': renderHome,
    '/tictactoe': renderTicTacToe,
    '/battleship': renderBattleship,
    '/snake': renderSnake
};

export function initRouter(container) {
    let currentCleanup = null;

    function navigate(path) {
        console.log('Navigating to:', path);
        
        // Limpiar el componente anterior si existe
        if (currentCleanup) {
            currentCleanup();
            currentCleanup = null;
        }

        const render = routes[path] || routes['/'];
        container.innerHTML = render();
        
        // Inicializar el nuevo componente
        if (path === '/tictactoe') {
            initTicTacToe();
        } else if (path === '/battleship') {
            initBattleship();
        } else if (path === '/snake') {
            currentCleanup = initSnake();
        }
        
        console.log('Rendered content:', container.innerHTML);
    }

    // Handle navigation
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-navigo]')) {
            e.preventDefault();
            const path = e.target.getAttribute('href');
            history.pushState(null, '', path);
            navigate(path);
        }
    });

    // Handle back/forward buttons
    window.addEventListener('popstate', () => {
        navigate(window.location.pathname);
    });

    // Initial route
    navigate(window.location.pathname);
}

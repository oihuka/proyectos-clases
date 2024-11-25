export function renderSnake() {
    return `
        <div class="game-container">
            <div class="game-info">
                <div class="info-item">
                    <span>Puntuación: </span><span id="current-score">0</span>
                </div>
                <div class="info-item">
                    <span>Mejor Puntuación: </span><span id="high-score">0</span>
                </div>
                <div class="game-controls">
                    <button id="start-snake" class="control-button">Iniciar</button>
                    <button id="pause-snake" class="control-button" disabled>Pausar</button>
                    <button id="reset-snake" class="reset-button">Reiniciar</button>
                </div>
            </div>
            <div id="snake-board" class="snake-board"></div>
            <div class="controls-info">
                <p>Controles: Usa las flechas del teclado para mover la serpiente</p>
            </div>
        </div>
    `;
}

export function initSnake() {
    const board = document.getElementById('snake-board');
    const scoreSpan = document.getElementById('current-score');
    const highScoreSpan = document.getElementById('high-score');
    const resetButton = document.getElementById('reset-snake');

    const BOARD_SIZE = 20;
    const INITIAL_SNAKE = [{x: 10, y: 10}];
    const INITIAL_DIRECTION = {x: 1, y: 0};
    const GAME_SPEED = 150;

    let snake = [...INITIAL_SNAKE];
    let direction = {...INITIAL_DIRECTION};
    let food = null;
    let gameInterval = null;
    let score = 0;
    let highScore = parseInt(localStorage.getItem('snakeHighScore') || '0');

    const startButton = document.getElementById('start-snake');
    const pauseButton = document.getElementById('pause-snake');
    let isGameRunning = false;
    let isPaused = false;

    function createBoard() {
        board.innerHTML = '';
        board.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, 20px)`;
        
        for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
            const cell = document.createElement('div');
            cell.classList.add('snake-cell');
            board.appendChild(cell);
        }
    }

    function updateGame() {
        const newHead = {
            x: snake[0].x + direction.x,
            y: snake[0].y + direction.y
        };

        // Colisión con paredes o con sí misma
        if (checkCollision(newHead)) {
            gameOver();
            return;
        }

        snake.unshift(newHead);

        // Comprobar si come
        if (newHead.x === food.x && newHead.y === food.y) {
            score += 10;
            scoreSpan.textContent = score;
            generateFood();
        } else {
            snake.pop();
        }

        updateBoard();
    }

    function checkCollision(position) {
        // Colisión con paredes
        if (position.x < 0 || position.x >= BOARD_SIZE || 
            position.y < 0 || position.y >= BOARD_SIZE) {
            return true;
        }

        // Colisión con sí misma
        return snake.some(segment => 
            segment.x === position.x && segment.y === position.y
        );
    }

    function generateFood() {
        do {
            food = {
                x: Math.floor(Math.random() * BOARD_SIZE),
                y: Math.floor(Math.random() * BOARD_SIZE)
            };
        } while (snake.some(segment => 
            segment.x === food.x && segment.y === food.y
        ));
    }

    function updateBoard() {
        const cells = board.getElementsByClassName('snake-cell');
        
        // Limpiar tablero
        Array.from(cells).forEach(cell => {
            cell.classList.remove('snake', 'food');
        });

        // Dibujar serpiente
        snake.forEach(segment => {
            const index = segment.y * BOARD_SIZE + segment.x;
            cells[index].classList.add('snake');
        });

        // Dibujar comida
        const foodIndex = food.y * BOARD_SIZE + food.x;
        cells[foodIndex].classList.add('food');
    }

    function handleKeyPress(e) {
        const newDirection = {...direction};

        switch(e.key) {
            case 'ArrowUp':
                if (direction.y !== 1) {
                    newDirection.x = 0;
                    newDirection.y = -1;
                }
                break;
            case 'ArrowDown':
                if (direction.y !== -1) {
                    newDirection.x = 0;
                    newDirection.y = 1;
                }
                break;
            case 'ArrowLeft':
                if (direction.x !== 1) {
                    newDirection.x = -1;
                    newDirection.y = 0;
                }
                break;
            case 'ArrowRight':
                if (direction.x !== -1) {
                    newDirection.x = 1;
                    newDirection.y = 0;
                }
                break;
        }

        direction = newDirection;
    }

    function gameOver() {
        clearInterval(gameInterval);
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('snakeHighScore', highScore.toString());
            highScoreSpan.textContent = highScore;
        }
        alert(`¡Juego terminado! Puntuación: ${score}`);
        resetGame();
    }

    function startGame() {
        if (!isGameRunning && !isPaused) {
            isGameRunning = true;
            gameInterval = setInterval(updateGame, GAME_SPEED);
            startButton.disabled = true;
            pauseButton.disabled = false;
            startButton.textContent = 'Jugando...';
        } else if (isPaused) {
            isPaused = false;
            gameInterval = setInterval(updateGame, GAME_SPEED);
            startButton.disabled = true;
            pauseButton.disabled = false;
            startButton.textContent = 'Jugando...';
        }
    }

    function pauseGame() {
        if (isGameRunning) {
            clearInterval(gameInterval);
            isPaused = true;
            isGameRunning = false;
            startButton.disabled = false;
            pauseButton.disabled = true;
            startButton.textContent = 'Continuar';
        }
    }

    function resetGame() {
        clearInterval(gameInterval);
        isGameRunning = false;
        isPaused = false;
        snake = [...INITIAL_SNAKE];
        direction = {...INITIAL_DIRECTION};
        score = 0;
        scoreSpan.textContent = score;
        highScoreSpan.textContent = highScore;
        startButton.disabled = false;
        pauseButton.disabled = true;
        startButton.textContent = 'Iniciar';
        generateFood();
        updateBoard();
    }

    function cleanup() {
        clearInterval(gameInterval);
        document.removeEventListener('keydown', handleKeyPress);
        startButton.removeEventListener('click', startGame);
        pauseButton.removeEventListener('click', pauseGame);
        resetButton.removeEventListener('click', resetGame);
    }

    // Event Listeners
    document.addEventListener('keydown', handleKeyPress);
    startButton.addEventListener('click', startGame);
    pauseButton.addEventListener('click', pauseGame);
    resetButton.addEventListener('click', resetGame);

    // Inicialización
    createBoard();
    resetGame();

    return cleanup;
}

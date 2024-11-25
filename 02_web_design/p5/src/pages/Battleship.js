export function renderBattleship() {
    return `
        <div class="game-container">
            <div class="game-info">
                <div class="info-item">
                    <span>Turno: </span><span id="current-player">Jugador</span>
                </div>
                <div class="info-item">
                    <span>Barcos: </span>
                    <span id="player-ships">5</span> | <span id="opponent-ships">5</span>
                </div>
                <div class="info-item">
                    <span>Puntos: </span>
                    <span id="player-score">0</span> | <span id="opponent-score">0</span>
                </div>
                <button id="reset-battleship" class="reset-button">Reiniciar</button>
            </div>
            <div class="battleship-game">
                <div class="battleship-boards">
                    <div>
                        <h3>Tablero del oponente</h3>
                        <div id="opponent-board" class="battleship-board opponent-board"></div>
                    </div>
                    <div>
                        <h3>Tu tablero</h3>
                        <div id="player-board" class="battleship-board player-board"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function initBattleship() {
    const playerBoard = document.getElementById('player-board');
    const opponentBoard = document.getElementById('opponent-board');
    const resetButton = document.getElementById('reset-battleship');
    const currentPlayerSpan = document.getElementById('current-player');
    const playerShipsSpan = document.getElementById('player-ships');
    const opponentShipsSpan = document.getElementById('opponent-ships');

    const BOARD_SIZE = 10;
    const SHIP_TYPES = [
        { name: 'Portaaviones', size: 5 },
        { name: 'Acorazado', size: 4 },
        { name: 'Crucero', size: 3 },
        { name: 'Submarino', size: 3 },
        { name: 'Destructor', size: 2 }
    ];

    let playerShips = SHIP_TYPES.length;
    let opponentShips = SHIP_TYPES.length;
    let isPlayerTurn = true;
    let playerGrid = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(0));
    let opponentGrid = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(0));

    let playerScore = parseInt(localStorage.getItem('battleshipPlayerScore') || '0');
    let opponentScore = parseInt(localStorage.getItem('battleshipOpponentScore') || '0');

    const playerScoreSpan = document.getElementById('player-score');
    const opponentScoreSpan = document.getElementById('opponent-score');

    function createBoard(board) {
        board.innerHTML = '';
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                board.appendChild(cell);
            }
        }
    }

    function placeShipsRandomly(grid) {
        SHIP_TYPES.forEach(ship => {
            let placed = false;
            while (!placed) {
                const row = Math.floor(Math.random() * BOARD_SIZE);
                const col = Math.floor(Math.random() * BOARD_SIZE);
                const isHorizontal = Math.random() < 0.5;

                if (canPlaceShip(grid, row, col, ship.size, isHorizontal)) {
                    placeShip(grid, row, col, ship.size, isHorizontal);
                    placed = true;
                }
            }
        });
    }

    function canPlaceShip(grid, row, col, size, isHorizontal) {
        if (isHorizontal) {
            if (col + size > BOARD_SIZE) return false;
            for (let i = 0; i < size; i++) {
                if (grid[row][col + i] !== 0) return false;
            }
        } else {
            if (row + size > BOARD_SIZE) return false;
            for (let i = 0; i < size; i++) {
                if (grid[row + i][col] !== 0) return false;
            }
        }
        return true;
    }

    function placeShip(grid, row, col, size, isHorizontal) {
        if (isHorizontal) {
            for (let i = 0; i < size; i++) {
                grid[row][col + i] = 1;
            }
        } else {
            for (let i = 0; i < size; i++) {
                grid[row + i][col] = 1;
            }
        }
    }

    function handleCellClick(e) {
        if (!isPlayerTurn) return;

        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);

        if (opponentGrid[row][col] === 2 || opponentGrid[row][col] === 3) return;

        if (opponentGrid[row][col] === 1) {
            e.target.classList.add('hit');
            opponentGrid[row][col] = 2;
            opponentShips--;
            opponentShipsSpan.textContent = opponentShips;
        } else {
            e.target.classList.add('miss');
            opponentGrid[row][col] = 3;
        }

        if (opponentShips === 0) {
            alert('¡Has ganado!');
            updateScore('player');
            return;
        }

        isPlayerTurn = false;
        currentPlayerSpan.textContent = 'Oponente';
        setTimeout(computerTurn, 1000);
    }

    function computerTurn() {
        let row, col;
        do {
            row = Math.floor(Math.random() * BOARD_SIZE);
            col = Math.floor(Math.random() * BOARD_SIZE);
        } while (playerGrid[row][col] === 2 || playerGrid[row][col] === 3);

        const cell = playerBoard.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        if (playerGrid[row][col] === 1) {
            cell.classList.add('hit');
            playerGrid[row][col] = 2;
            playerShips--;
            playerShipsSpan.textContent = playerShips;
        } else {
            cell.classList.add('miss');
            playerGrid[row][col] = 3;
        }

        if (playerShips === 0) {
            alert('¡Has perdido!');
            updateScore('opponent');
            return;
        }

        isPlayerTurn = true;
        currentPlayerSpan.textContent = 'Jugador';
    }

    function updateGameInfo() {
        currentPlayerSpan.textContent = isPlayerTurn ? 'Jugador' : 'Oponente';
        playerShipsSpan.textContent = playerShips;
        opponentShipsSpan.textContent = opponentShips;
    }

    function resetGame() {
        playerShips = 5;
        opponentShips = 5;
        isPlayerTurn = true;
        playerGrid = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(0));
        opponentGrid = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(0));
        createBoard(playerBoard);
        createBoard(opponentBoard);
        placeShipsRandomly(playerGrid);
        placeShipsRandomly(opponentGrid);
        updateGameInfo();
        updateScoreDisplay();

        // Mostrar los barcos del jugador
        playerGrid.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell === 1) {
                    playerBoard.querySelector(`[data-row="${i}"][data-col="${j}"]`).classList.add('ship');
                }
            });
        });
    }

    function updateScore(winner) {
        if (winner === 'player') {
            playerScore++;
            localStorage.setItem('battleshipPlayerScore', playerScore.toString());
        } else {
            opponentScore++;
            localStorage.setItem('battleshipOpponentScore', opponentScore.toString());
        }
        updateScoreDisplay();
    }

    function updateScoreDisplay() {
        playerScoreSpan.textContent = playerScore;
        opponentScoreSpan.textContent = opponentScore;
    }

    opponentBoard.addEventListener('click', handleCellClick);
    resetButton.addEventListener('click', resetGame);

    resetGame();
    updateScoreDisplay();
}
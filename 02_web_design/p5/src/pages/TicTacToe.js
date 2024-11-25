export function renderTicTacToe() {
    return `
        <div class="game-container">
            <div class="game-info">
                <div class="info-item">
                    <span>Turno: </span><span id="current-player">X</span>
                </div>
                <div class="info-item">
                    <span>Puntuación: </span>
                    <span>X <span id="score-x">0</span> | O <span id="score-o">0</span></span>
                </div>
                <button id="reset-tictactoe" class="reset-button">Reiniciar</button>
            </div>
            <div id="tictactoe-board" class="tictactoe-board"></div>
        </div>
    `;
}

export function initTicTacToe() {
    const board = document.getElementById('tictactoe-board');
    const resetButton = document.getElementById('reset-tictactoe');
    const currentPlayerSpan = document.getElementById('current-player');
    const scoreXSpan = document.getElementById('score-x');
    const scoreOSpan = document.getElementById('score-o');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    // Cargar puntuaciones del localStorage
    let scoreX = parseInt(localStorage.getItem('tictactoeScoreX') || '0');
    let scoreO = parseInt(localStorage.getItem('tictactoeScoreO') || '0');
    updateScoreDisplay();

    function createBoard() {
        board.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
        }
    }

    function handleCellClick(e) {
        const index = e.target.dataset.index;
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            e.target.textContent = currentPlayer;
            if (checkWin()) {
                gameActive = false;
                updateScore(currentPlayer);
                setTimeout(() => alert(`¡Jugador ${currentPlayer} gana!`), 100);
            } else if (gameBoard.every(cell => cell !== '')) {
                gameActive = false;
                setTimeout(() => alert('¡Empate!'), 100);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                currentPlayerSpan.textContent = currentPlayer;
            }
        }
    }

    function checkWin() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
            [0, 4, 8], [2, 4, 6] // Diagonales
        ];

        return winConditions.some(condition => {
            return condition.every(index => {
                return gameBoard[index] === currentPlayer;
            });
        });
    }

    function updateScore(winner) {
        if (winner === 'X') {
            scoreX++;
            localStorage.setItem('tictactoeScoreX', scoreX.toString());
        } else {
            scoreO++;
            localStorage.setItem('tictactoeScoreO', scoreO.toString());
        }
        updateScoreDisplay();
    }

    function updateScoreDisplay() {
        scoreXSpan.textContent = scoreX;
        scoreOSpan.textContent = scoreO;
    }

    function resetGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        currentPlayerSpan.textContent = currentPlayer;
        createBoard();
    }

    resetButton.addEventListener('click', resetGame);
    createBoard();
}

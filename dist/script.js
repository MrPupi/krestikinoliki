var cells = document.querySelectorAll('.cell');
var gameboard = document.getElementById('game_board');
var currentPlayer = 'X';
cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

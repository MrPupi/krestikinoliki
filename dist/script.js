var cells = document.querySelectorAll('.cell');
var currentPlayer = 'X';
cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

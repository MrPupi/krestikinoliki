const cells = document.querySelectorAll('.cell')
const gameboard = document.getElementById('game_board')
let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', () => { 
    if (cell.textContent==='') {
      cell.textContent=currentPlayer
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    }
  })
})
 

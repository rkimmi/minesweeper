document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [ // 6 x 6 board
  {row: 0, col: 0, isMine: true, hidden: true},
  {row: 0, col: 1, isMine: true, hidden: true},
  {row: 0, col: 2, isMine: false, hidden: true},
  {row: 0, col: 3, isMine: true, hidden: true},
  {row: 0, col: 4, isMine: true, hidden: true},
  {row: 0, col: 5, isMine: false, hidden: true},
  {row: 1, col: 0, isMine: true, hidden: true},
  {row: 1, col: 1, isMine: false, hidden: true},
  {row: 1, col: 2, isMine: false, hidden: true},
  {row: 1, col: 3, isMine: false, hidden: true},
  {row: 1, col: 4, isMine: false, hidden: true},
  {row: 1, col: 5, isMine: false, hidden: true},
  {row: 2, col: 0, isMine: false, hidden: true},
  {row: 2, col: 1, isMine: false, hidden: true},
  {row: 2, col: 2, isMine: true, hidden: true},
  {row: 2, col: 3, isMine: false, hidden: true},
  {row: 2, col: 4, isMine: false, hidden: true},
  {row: 2, col: 5, isMine: true, hidden: true},
  {row: 3, col: 0, isMine: false, hidden: true},
  {row: 3, col: 1, isMine: true, hidden: true},
  {row: 3, col: 2, isMine: false, hidden: true},
  {row: 3, col: 3, isMine: true, hidden: true},
  {row: 3, col: 4, isMine: false, hidden: true},
  {row: 3, col: 5, isMine: false, hidden: true},
  {row: 4, col: 0, isMine: false, hidden: true},
  {row: 4, col: 1, isMine: false, hidden: true},
  {row: 4, col: 2, isMine: false, hidden: true},
  {row: 4, col: 3, isMine: true, hidden: true},
  {row: 4, col: 4, isMine: false, hidden: true},
  {row: 4, col: 5, isMine: false, hidden: true},
  {row: 5, col: 0, isMine: false, hidden: true},
  {row: 5, col: 1, isMine: false, hidden: true},
  {row: 5, col: 2, isMine: true, hidden: true},
  {row: 5, col: 3, isMine: false, hidden: true},
  {row: 5, col: 4, isMine: true, hidden: true},
  {row: 5, col: 5, isMine: false, hidden: true}
]
};


/*function generateBoard () {
  var board {
    cells: [

  ]
  }
}
*/


function startGame () {
  for (var i = 0; i < board.cells.length; i++) { // loop through each cell on board
  board.cells[i]["surroundingMines"] = countSurroundingMines(board.cells[i]); // surroundingMines equal to countSurroundMines function, w/ parathesis of board.cell -> not completely sure / have forgotten why this works?

  document.addEventListener('click', checkForWin); // call check for win function on click
  document.addEventListener('contextmenu', checkForWin); // call check for win function on right click
}
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) { // loop through each cell on board
    if (board.cells[i].isMine && board.cells[i].isMarked) { // if all cells that are mines are marked, move to next function
      return;
    }
  }
  for (var i = 0; i < board.cells.length; i++) { // loop through each cell on board
     if (board.cells[i].isMine == false && board.cells[i].hidden) { // if exposed cells are not mines but still some hidden cells exist, return to start of function?
      return;
    }
}

 lib.displayMessage('You win!') // if all above criteria is true — 1) all cells that are mines are marked, 2) all not-mine cells are visible (non hidden!), then 'You Win!'
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surroundingo
// cells yourself! Just use `lib.getSurroundingCells`:
//
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count = 0; // define count, starts at 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col) // var surrounding equal to lib.

for (var i = 0; i < surrounding.length; i++) { // loop through all surrounding mines
  if (surrounding[i].isMine) { // if is mine, count increase + 1
    count++;
  }
}
return count;
}

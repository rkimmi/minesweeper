document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!


var board =[];

function generateBoard () {
  var newBoard = {
    cells: []
  }
  for (noRows = 0; noRows < 6; noRows++) { // loop through total rows on board
    for (noCols = 0; noCols < 6; noCols++) { // loop through total columns on board
      // made 6 x 6 cells on board
      var hasMine = Math.random() < 0.15; // whether cell has mine is randomised — 15% of time is mine
      newBoard.cells.push({row: noRows, col: noCols, isMine: hasMine, hidden: true}); // push cell array onto empty newBoard.cells array
    }
  }
  return newBoard;
}



function startGame () {
  board = generateBoard ();
  for (var i = 0; i < board.cells.length; i++) { // loop through each cell on board
  board.cells[i]["surroundingMines"] = countSurroundingMines(board.cells[i]); // surroundingMines equal to countSurroundMines function, w/ parathesis of board.cell -> not completely sure / have forgotten why this works?

  document.addEventListener('click', checkForWin); // call check for win function on click
  document.addEventListener('contextmenu', checkForWin); // call check for win function on right click
  var sndMarina = new Audio("./sounds/animefilmscore.wav");
  sndMarina.play();
}
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

function checkForWin () { // check conditions for win
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

 lib.displayMessage('You win!') // if all above criteria is true then 'You Win!'
 playAgain(); // once won, run the function playAgain (defined below)
}

function playAgain () {
  if (confirm("do you want to play again?")) { // ask user if they want to play again
   startGame(); // if wants to play again, run function startGame
  }
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

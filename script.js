const player1 = "X";
const player2 = "O";

let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = player1;

const cells = document.querySelectorAll("div");

cells.forEach((cell) => cell.addEventListener("click", cellClicked));

// trying to add a reset funtion to the board but only seeing a reset button way - keep searching for option
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", resetGame);

function cellClicked() {
  const index = parseInt(this.id) - 1;

  if (gameState[index] !== "") {
    return;
  }

  gameState[index] = currentPlayer;
  this.textContent = currentPlayer;

  if (checkWin()) {
    const result = document.querySelector(".text");
    result.textContent = `${currentPlayer} wins!`;
    return;
  }

  if (isDraw()) {
    const result = document.querySelector(".text");
    result.textContent = "It's a draw!";
    return;
  }

  currentPlayer = currentPlayer === player1 ? player2 : player1;

  const result = document.querySelector(".text");
  result.textContent = `${currentPlayer}'s turn`;
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return gameState[index] === currentPlayer;
    });
  });
}

function isDraw() {
  return gameState.every((cell) => {
    return cell !== "";
  });
}

function resetGame() {
  gameState = ["", "", "", "", "", "", "", "", ""];

  cells.forEach((cell) => (cell.textContent = ""));

  currentPlayer = player1;

  const result = document.querySelector(".text");
  result.textContent = "Tic Tac Toe";
}
// trying to take the reset button function and make it invisible and only work once a game has been won
function myFunction() {
  var x = document.getElementById("resetButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

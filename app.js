let cells = document.querySelectorAll(".row > div");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}


function cellClicked () {
  Event.target.textContent = "X"
}
//if else statments are your friends!
cells[2].textContent



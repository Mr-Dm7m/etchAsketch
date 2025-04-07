// Sets important constants and variables
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
  addCellEventListeners();
  resetGrid();
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  container.innerHTML = ''; // Clear previous grid, important for dynamic resizing
  // Creates rows
  for (let r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    row.className = "gridRow";
    container.appendChild(row);
  }
}

// Creates columns
function makeColumns(cellNum) {
  rows = document.getElementsByClassName("gridRow"); //Get the rows *after* they are created
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      newCell.className = "cell";
      rows[i].appendChild(newCell);
    }
  }
}


// Adds event listeners to each cell using spread syntax and forEach
function addCellEventListeners() {
  cells = document.getElementsByClassName("cell"); // Get the latest set of cells
  [...cells].forEach(cell => {
    cell.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black"; // Change color on hover
    });
  });
}

defaultGrid(); // Call defaultGrid to create the grid on page load

// Resets the grid to default
function resetGrid() {
  btn = document.getElementById("reset");
  btn.addEventListener("click", function () {
   
    [...cells].forEach(cell => {
      cell.style.backgroundColor = "white"; // Reset color to white
    });
    });
  }
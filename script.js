// Sets important constants and variables
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
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

defaultGrid(); // Call defaultGrid to create the grid on page load

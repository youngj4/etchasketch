const container = document.querySelector("#container");
const gridSquare = document.createElement("div");

gridSquare.classList.add("square");

function createGrid() {
    container.appendChild(gridSquare)
};

createGrid();
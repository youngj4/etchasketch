const container = document.querySelector("#container");

function createGrid(input) {
    gridSize = input * input;
    for (let i = 0; i < gridSize; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        container.appendChild(gridSquare);
    };
};

createGrid(16);
const container = document.querySelector("#container");

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        container.appendChild(gridSquare);
    };
};

createGrid(10);
const container = document.querySelector("#container");

function createGrid(input) {
    gridSize = input * input;
    for (let i = 0; i < gridSize; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        container.appendChild(gridSquare);
        gridSquare.addEventListener("mouseover", function () {
            setColor(gridSquare);
        });
    };
};

createGrid(16);

function setColor(square) {
    square.setAttribute("style", "background-color: black");
};

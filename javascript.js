const container = document.querySelector("#container");
const btn = document.querySelector("#user-input");
let input;

btn.addEventListener("click", () => {
    input = prompt("Please choose grid size (Max. 100)");
    if (input > 100) {
        input = prompt("Please choose again (Max. 100")
    }
});


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

createGrid(input);

function setColor(square) {
    square.setAttribute("style", "background-color: black");
};

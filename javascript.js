document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const btn = document.querySelector("#user-input");
    let input;

    btn.addEventListener("click", () => {
        // if (container) {
        //     clearGrid();
        // }
        input = prompt("Please choose grid size (Max. 100)");
        if (input > 100) {
            input = prompt("Please choose again (Max. 100)")
        }
        const flexBasis = 100 / input + "%";
        createGrid(input, flexBasis);
        const currentGrid = document.querySelectorAll(".square");
        console.log(currentGrid.parentNode)
    });




    function createGrid(input, flexBasis) {
        gridSize = input * input;
        for (let i = 0; i < gridSize; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("square");
            gridSquare.style.flex = (`1 1 ${flexBasis}`);
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.classList.add("hover-color")
            });
            container.appendChild(gridSquare);
        };
    };

    //     function clearGrid() {
    //         const currentGrid = document.querySelectorAll(".square");
    //         console.log(currentGrid.parentNode)
    //     }
});
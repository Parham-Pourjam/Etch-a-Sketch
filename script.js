
let containerSelect = document.querySelector('.game-board');
let clearButton = document.querySelector('.clear');


function populateGrid(howManySquares) {
    let totalSquares = howManySquares ** 2;

    for (let i = 0; i < totalSquares; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-square');
        containerSelect.appendChild(div);
    }
}

populateGrid(16);

// event listener which clears screen when clear button is clicked
clearButton.addEventListener('click', clearScreen);


function clearScreen() {
    // remove all grid squares when user clicks button
    while (containerSelect.firstChild) {
        containerSelect.removeChild(containerSelect.lastChild);
    }

    let newDimension = prompt("How many squares per side?");
    // update grid-template-columns of game-board to match requested # of rows/columns 
    containerSelect.style.gridTemplateColumns = `repeat(${newDimension}, auto)`;

    populateGrid(newDimension);

    gridEventListener();
}

function changeColor() {
    this.style.backgroundColor = 'black';
}

// event listener which calls changeColor function whenever mouse hovers over square
function gridEventListener() {
    document.querySelectorAll('.grid-square').forEach(square => {
        square.addEventListener('mouseover', changeColor);
    });
}

gridEventListener();
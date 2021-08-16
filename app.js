const container = document.getElementById('grid');

// Make cells:

const makeCell = function (cells) {
    for (let i = 0; i < cells; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

const makeGrid = function (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < rows; i++) {
        makeCell(cols);
    }
}

const gridSetup = function () {
    let number = prompt('Set up your grid size between 16 and 64!', 16);
    if (number >= 16 && number <= 64) {
        makeGrid(number, number);
    } else {
        while (number < 16 || number > 64) {
            number = prompt('Invalid size - try again and make sure your the size is betwen 16 and 64!');
        }
        makeGrid(number, number);
    }
}

container.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'black';
})


const button = document.querySelector('.button');

button.addEventListener('click', function () {
    window.location.reload();
});

gridSetup();
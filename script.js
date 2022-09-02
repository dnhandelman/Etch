const container = document.querySelector('.container');
const body = document.querySelector('body')
let gridItems = document.querySelectorAll('.grid-item');


const buttons = document.createElement('div');
buttons.id = 'btnContainer'
body.appendChild(buttons)

const btn1 = document.createElement('button');
btn1.id = 'btn1';
btn1.textContent = 'Create a custom grid';
buttons.appendChild(btn1);

btn1.addEventListener('click', () => {
    let customSize = parseFloat(prompt('Enter number for custom grid (e.g. for 32 x 32, enter 32'));
    makeCustomGrid(customSize)
})


function makeCustomGrid(customSize) {
    container.style.gridTemplateColumns = `repeat(${customSize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${customSize}, 1fr)`


/* const square = document.createElement('div');

square.setAttribute('id', 'box') */

/* function createCustomGrid(customSize) {
    grid.style.gridTemplateColumns = `repeat(${customSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${customSize}, 1fr)`;

    for (let i = 0; i < customSize*customSize; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem); 
    }
    reset();
    colorGrid();
} */

for (let i = 0; i < customSize*customSize; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
    
}
}

makeCustomGrid(32)



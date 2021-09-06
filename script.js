const container = document.createElement('div');
const grid = document.createElement('div');
const button = document.createElement('button');

document.body.style.width = 'auto';

container.classList.add('container');
container.style.background = "black";
container.style.display = "inline-block";
container.style.border = "5px solid black";
container.style.width = "100%";

grid.classList.add('grid');
grid.style.display = 'grid';
grid.style.gridTemplateColumns = "repeat(16, 80px)";
grid.style.gridTemplateRows = "repeat(16, 80px)";
grid.style.gridGap = "5px";
let initGrid = 256;

button.style.display = 'inline-block';
button.style.width = '500px;';
button.style.height = '150px';
button.textContent = 'CLEAR GRID';

// CREATE GRID CELLS
function createGridCell(gridCount){
for(let i = 0; i < gridCount; i++) {
    const element = document.createElement('div');
    element.classList.add('cell');
    element.setAttribute('id', i + 1);
    //element.textContent = i + 1;
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    element.style.fontFamily = "Arial";
    element.style.fontSize = "3rem";
    element.style.fontWeight = "bold";
    element.style.background = "white";
    element.addEventListener('mouseover', () => {
        element.style.background = "green";
        //console.log("forEach worked");
    });

    grid.appendChild(element);
}}

createGridCell(initGrid);

// CLEAR GRID BUTTON
button.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.background = 'white';
        
    });
    let newGridCount = Number(window.prompt("Type a number up to 100", ""));
        if (newGridCount > 100 || newGridCount !== typeof number) {
            newGridCount = 100;
        }
        removeCells();
        grid.style.gridTemplateColumns = `repeat(${newGridCount}, 80px)`;
        grid.style.gridTemplateRows = `repeat(${newGridCount}, 80px)`;
        createGridCell(newGridCount);
        container.appendChild(grid);
        console.log(' fix here');
});

// REMOVE CELL ELEMENTS
function removeCells(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell =>{
        cell.remove();
    });
}

// const cells = document.querySelectorAll('cell');
// cells.forEach((cell) => {
//     cell.addEventListener('mouseover', () => {
//         console.log("forEach worked");
//     })
// })
document.body.appendChild(button);
container.appendChild(grid);
document.body.appendChild(container);
console.log('a');

// TODO 
// - Cannot create cells
// - Center clear button 
// - 
const container = document.createElement('div');
const grid = document.createElement('div');

container.classList.add('container');
container.style.background = "black";
container.style.display = "inline-block";
container.style.border = "5px solid black";

grid.classList.add('grid');
grid.style.display = 'grid';
grid.style.gridTemplateColumns = "repeat(16, 80px)";
grid.style.gridTemplateRows = "repeat(16, 80px)";
grid.style.gridGap = "5px";
let gridCount = 256;

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
        console.log("forEach worked");
    });

    grid.appendChild(element);
}

// const cells = document.querySelectorAll('cell');
// cells.forEach((cell) => {
//     cell.addEventListener('mouseover', () => {
//         console.log("forEach worked");
//     })
// })

container.appendChild(grid);
document.body.appendChild(container);
console.log('a');

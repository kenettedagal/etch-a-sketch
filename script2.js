let gridCountInit = Number(prompt("Enter grid size"));
const btnClearGrid = document.createElement('button');
const gridContainer = document.createElement('div');

gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = `repeat(${gridCountInit}, 1fr`;
gridContainer.style.gridTemplateRows = `repeat(${gridCountInit}, 1fr`;
gridContainer.style.gridGap = '5px';

function createGrid(inputGridCount){
for(let i = 1; i <= inputGridCount*inputGridCount; i++){
    const gridItem = document.createElement('div');
    gridItem.addEventListener('mouseover', () => {
        gridItem.style.background = "red";
    });
    gridItem.style.backgroundColor ='green';
    gridItem.classList.add('item');
    gridItem.textContent = i;
    gridContainer.appendChild(gridItem);
}}

// ADD GRID TO BODY
createGrid(gridCountInit);
document.body.appendChild(gridContainer);

btnClearGrid.textContent = 'Clear';
btnClearGrid.addEventListener('click', function(){
    gridContainer.remove();
    console.log('clear?');
    let newGridCount = Number(prompt('Enter new grid count'));
    
        missingCell(newGridCount);
        gridContainer.style.gridTemplateColumns = `repeat(${newGridCount}, 1fr`;
        gridContainer.style.gridTemplateRows = `repeat(${newGridCount}, 1fr`;
        document.body.appendChild(gridContainer);
    
});

function missingCell(newGridCount){
    const currentItems =  newGridCount*newGridCount - Number(gridContainer.querySelectorAll('.item').length);
    console.log(document.querySelectorAll('.item').length);
    for(let i = 1; i <= currentItems; i++){
        const gridItem = document.createElement('div');
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.background = "red";
        });
        gridItem.style.backgroundColor ='green';
        gridItem.classList.add('item');
        gridItem.textContent = 'new cells';
        gridContainer.appendChild(gridItem);
    }
}
document.body.appendChild(btnClearGrid);

console.log('pass');
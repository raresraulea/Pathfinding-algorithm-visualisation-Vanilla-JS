var rows = 20;
var cols = 20;
var number = 1;
let startXGlobal = 1;
let startYGlobal = 1;
let finalXGlobal = 12;
let finalYGlobal = 12;
let delay =250;

var board = [
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0,1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0,1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
]
var boardCopy = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

]
dirX = [0, 0, 1, -1]
dirY = [1, -1, 0, 0]
var divMatrix = []

//Selectors
const startXInput = document.querySelector('.start-X-input');
const startYInput = document.querySelector('.start-Y-input');

const finalXInput = document.querySelector('.final-X-input');
const finalYInput = document.querySelector('.final-Y-input');

const setStartBtn = document.querySelector('.setStart');
const setFinalBtn = document.querySelector('.setFinal');

const VerySlowBtn = document.querySelector('.VerySlowBtn');
const SlowBtn = document.querySelector('.SlowBtn');
const MediumBtn = document.querySelector('.MediumBtn');
const FastBtn = document.querySelector('.FastBtn');

//EventListener

setStartBtn.addEventListener('click', ()=>{
    let startX = startXInput.value;
    //console.log(startX);
    let startY = startYInput.value;
    //console.log(startY);
    if(startX >= 0 && startX < rows && startY >= 0 && startY < cols){
        divMatrix[startX][startY].style.background = 'blue'
        divMatrix[startX][startY].style.border = '3px solid black'
        startXGlobal = startX;
        startYGlobal = startY;
        console.log('startXGlobal setat: ' + startXGlobal);
        console.log('startYGlobal setat: ' + startYGlobal);
    }
})

setFinalBtn.addEventListener('click', ()=>{
    let finalX = finalXInput.value;
    let finalY = finalYInput.value;
    if(finalX >= 0 && finalX < rows && finalY >= 0 && finalY < cols){
        divMatrix[finalX][finalY].style.background = 'blue'
        divMatrix[finalX][finalY].style.border = '3px solid black'
        finalXGlobal = finalX;
        finalYGlobal = finalY;
        console.log('finalXGlobal setat: ' + finalXGlobal);
        console.log('finalYGlobal setat: ' + finalYGlobal);
    }
})

VerySlowBtn.addEventListener('click', ()=>{
    if(startXGlobal == undefined || startYGlobal == undefined || finalXGlobal == undefined || finalYGlobal == undefined){
        alert('Introduceti datele necesare!');
        return;
    }
    delay = 1000;
    resetGrid();
    Lee(parseInt(startXGlobal), parseInt(startYGlobal), parseInt(finalXGlobal),
    parseInt(finalYGlobal));
    })

SlowBtn.addEventListener('click', ()=>{
    if(startXGlobal == undefined || startYGlobal == undefined || finalXGlobal == undefined || finalYGlobal == undefined){
        alert('Introduceti datele necesare!');
        return;
    }
    delay = 500;
    resetGrid();
    Lee(parseInt(startXGlobal), parseInt(startYGlobal), parseInt(finalXGlobal),
    parseInt(finalYGlobal));
})

MediumBtn.addEventListener('click', ()=>{
    if(startXGlobal == undefined || startYGlobal == undefined || finalXGlobal == undefined || finalYGlobal == undefined){
        alert('Introduceti datele necesare!');
        return;
    }
    delay = 100;
    resetGrid();
    Lee(parseInt(startXGlobal), parseInt(startYGlobal), parseInt(finalXGlobal),
    parseInt(finalYGlobal));
})

FastBtn.addEventListener('click', ()=>{
    if(startXGlobal == undefined || startYGlobal == undefined || finalXGlobal == undefined || finalYGlobal == undefined){
        alert('Introduceti datele necesare!');
        return;
    }
    delay = 10;
    resetGrid();
    Lee(parseInt(startXGlobal), parseInt(startYGlobal), parseInt(finalXGlobal),
    parseInt(finalYGlobal));
    //Lee(1, 2, 12, 7);
})
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function drawGrid() {
    let grid = document.querySelector('.main-container')
    for (let i = 0; i < rows; i++) {
        divMatrix[i] = []
        for (let j = 0; j < cols; j++) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('rect')
            if (board[i][j] === 1) {
                newDiv.style.background = 'red'
            }
            grid.appendChild(newDiv)
            divMatrix[i][j] = newDiv
        }
    }
}
function resetGrid(){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            divMatrix[i][j].remove();
        }
    }
    drawGrid();
}
function OK(i, j) {
    return (i >= 0) && (i < rows) && (j >= 0) && (j < cols)
        && (divMatrix[i][j].style.background != 'brown') && (divMatrix[i][j].style.background != 'red')
        && (divMatrix[i][j].style.background != 'blue');
}
async function Lee(xs, ys, xf, yf) {
    divMatrix[xs][ys].style.background = 'blue';
    divMatrix[xs][ys].style.border = '3px solid black';
    divMatrix[xs][ys].innerHTML = '<span>S</span>';
    divMatrix[xf][yf].style.background = 'orange';
    divMatrix[xf][yf].innerHTML = '<span>F</span>';

    await sleep(1000)

    let queue = []
    let startPos = {
        i: xs,
        j: ys
    };
    queue.push(startPos)
    while (queue.length > 0) {
        let current = queue.shift();
        for (let dir = 0; dir < 4; dir++) {
            let next_i = current["i"] + dirX[dir]
            let next_j = current["j"] + dirY[dir]
            if (OK(next_i, next_j)) {
                if (next_i == xf && next_j == yf) {
                    divMatrix[next_i][next_j].style.background = 'blue';
                    divMatrix[next_i][next_j].style.border = '3px solid black';
                    divMatrix[next_i][next_j].innerHTML = '<span>' + (boardCopy[current["i"]][current["j"]] + 1) + '</span>';
                    return;
                }
                divMatrix[next_i][next_j].style.background = 'brown';
                divMatrix[next_i][next_j].innerHTML = '<span>' + (boardCopy[current["i"]][current["j"]] + 1) + '</span>';
                boardCopy[next_i][next_j] = boardCopy[current["i"]][current["j"]] + 1;
                let neighbour = {
                    i: next_i,
                    j: next_j
                };
                queue.push(neighbour);
                await sleep(delay);
            }
        }
    }


}
function valid(is, js, i, j) {
    return (i >= 0) && (i < rows) && (j >= 0) && (j < cols)
        && boardCopy[i][j] === 1 + boardCopy[is][js]
        && divMatrix[i][j].style.background == 'brown';
}

function drawPathOnGrid(xs, ys, xf, yf) {

    if (xs === xf && ys === yf) {
        divMatrix[xs][ys].style.background = 'green';
        return;
    }
    divMatrix[xs][ys].style.background = 'green';
    for (let dir = 0; dir < 4; dir++) {
        let next_i = xs + dirX[dir];
        let next_j = ys + dirY[dir];

        if (valid(xs, ys, next_i, next_j)) {
            console.log('validez: ' + xs + ' ' + ys)
            divMatrix[xs][ys].style.background = 'green';
            drawPathOnGrid(next_i, next_j, xf, yf);
            divMatrix[xs][ys].style.background = 'brown';
        }
    }
}

drawGrid();
//Lee(9, 10, 1,2);
//Lee(1, 1,19, 18);

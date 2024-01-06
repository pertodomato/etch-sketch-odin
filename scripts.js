let board = document.querySelector('.drawingBoard')
let userInput = window.prompt('Please enter grid size:');
let tool = 'pen'
let color = 'black'
let selectorColor = 'black'
let eraser = document.querySelector('.eraser')
let pen = document.querySelector('.pen')
let colorSelector = document.querySelector('.color')
let displayTool = document.querySelector('.tool')

let isMouseDown = false;

document.addEventListener('mousedown', function () {
    isMouseDown = true;
});

document.addEventListener('mouseup', function () {
    isMouseDown = false;
});

eraser.addEventListener('click', function() {
    tool = 'eraser'
    color = 'white'
    displayTool.textContent = 'eraser'
});

pen.addEventListener('click', function() {
    tool = 'pen' 
    color = selectorColor
    displayTool.textContent = 'pen'
});


colorSelector.addEventListener("change",function(event) {
    selectorColor = event.target.value;
    color = selectorColor
    displayTool.textContent = 'pen'
})

function createBoard(size) {
    for(let i = 0; i < (size*size); i++){
        let block = document.createElement('div')
        block.classList.add('blocks');
        let blockSize = ((500/size)-0)+ 'px'
        block.style.width = blockSize;
        block.style.height = blockSize;
        block.addEventListener('mouseover',function (){
            if(isMouseDown){
                block.style.backgroundColor = color
                
            }
        })
        board.appendChild(block)
    }
}





createBoard(userInput)

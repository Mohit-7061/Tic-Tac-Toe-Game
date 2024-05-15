let boxes = document.querySelectorAll('.box');

let btn = document.querySelector('.reset-btn');
let msgContainer = document.querySelector('.msg-container');
let newButton = document.querySelector('#new-btn');
let msg = document.querySelector('.msg')

let turnO = true;
let count = 0;

let win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };


  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  

boxes.forEach(element => {
    element.addEventListener('click', () => {
        if(turnO){
            
            element.innerHTML = 'O';
            turnO = false;
            
        }else{
            element.innerHTML = 'X';
            turnO = true;
        }
        element.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const checkWinner = () => {
    for(let pattern of win){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != '' && pos2val != '' && pos3val != ''){
            if(pos1val === pos2val && pos2val === pos3val){
               
                showWinner(pos1val);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
    
}

newButton.addEventListener("click", resetGame);
btn.addEventListener("click", resetGame);
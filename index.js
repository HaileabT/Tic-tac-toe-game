let current = 0;
let winner = 0;
let players = ['X', 'O'];
let playersWon = [0, 0];
let occupied= [0, 0, 0, 0, 0, 0, 0, 0, 0];


let gameBoard = document.querySelector(".game-container");
let winnerScreen = document.querySelector(".winner-screen");
let winscr = document.getElementById("win-scr");
let box = document.querySelectorAll(".box");
let boxcon = document.getElementById("board");
let curPlayer = document.querySelector(".current-player");

let resetBtn = document.getElementById("reset-btn");

resetBtn.onclick = () =>{
    resetGame(occupied, box);
    playersWon[0] = 0;
    playersWon[1] = 0;
    document.querySelectorAll(".scores")[0].innerHTML = `Player X  &nbsp;&nbsp;&nbsp;&nbsp; <span>${playersWon[0]} - ${playersWon[1]}</span>  &nbsp;&nbsp;&nbsp;&nbsp; Player O`;

}

gameBoard.classList.add("blur");
for(let i = 0; i<9; i++){

    box[i].addEventListener("click", () => {

        if (occupied[i] === 0){
            box[i].classList.add("clicked");
            addEventListener("animationend", () =>{
                box[i].classList.remove("clicked");
            })
            box[i].innerText = `${players[current]}`;
            occupied[i] = 1;
            if (hasWinner(box, occupied)){
                winner = current;
                winnerScr(winner);
            }
            if(current === 0){
                current = 1;
            }
            else{
                current = 0;
            }
        }
    
        curPlayer.innerText = `Player ${players[current]}`;
    
        if (checkGame(occupied) && !hasWinner(box, occupied)){
            winner = -1;
            winnerScr(winner);
        }
    })
}

function checkGame(array){
    for (let i = 0; i<9; i++){
        if (array[i] === 0){
            return false;
        }
    }
    return true;
} 

function resetGame(array, anotherArray){
    for (let i = 0; i<9; i++){
        array[i] = 0;
        anotherArray[i].innerText = "";
    }
    current = 0;
    curPlayer.innerText = `Player ${players[current]}`;
    
}


function hasWinner(array, checker){
    
    if (array[0].innerText === array[1].innerText && array[0].innerText === array[2].innerText){
        if (checker[0] != 0 && checker[1] != 0 && checker[2] != 0){
            return true;
        }
    }
    if (array[0].innerText === array[4].innerText && array[0].innerText === array[8].innerText){
        if (checker[0] != 0 && checker[4] != 0 && checker[8] != 0){
            return true;
        }
    }
    if (array[0].innerText === array[3].innerText && array[0].innerText === array[6].innerText){
        if (checker[0] != 0 && checker[3] != 0 && checker[6] != 0){
            return true;
        }
    }
    if (array[2].innerText === array[4].innerText && array[2].innerText === array[6].innerText){
        if (checker[2] != 0 && checker[4] != 0 && checker[6] != 0){
            return true;
        }
    }
    if (array[2].innerText === array[5].innerText && array[2].innerText === array[8].innerText){
        if (checker[2] != 0 && checker[5] != 0 && checker[8] != 0){
            return true;
        }
    }
    if (array[6].innerText === array[7].innerText && array[6].innerText === array[8].innerText){
        if (checker[6] != 0 && checker[7] != 0 && checker[8] != 0){
            return true;
        }
    }
    if (array[1].innerText === array[4].innerText && array[1].innerText === array[7].innerText){
        if (checker[1] != 0 && checker[4] != 0 && checker[7] != 0){
            return true;
        }
    }
    if (array[3].innerText === array[4].innerText && array[3].innerText === array[5].innerText){
        if (checker[3] != 0 && checker[4] != 0 && checker[5] != 0){
            return true;
        }
    }
    return false;

}

let goBk = document.getElementById("go-bk");

goBk.onclick = () => {
    gameBoard.classList.remove("blur");
    winnerScreen.style.display = "none";
    resetBtn.disabled = false;
resetBtn.style.cursor = "pointer";
    resetGame(occupied, box);
}

function winnerScr(winner){
    gameBoard.classList.add("blur");
    winnerScreen.style.display = "grid";
    resetBtn.disabled = true;
    resetBtn.style.cursor = "default";
    goBk.innerText = "Play Again";
    if (winner === -1){
        document.querySelectorAll(".scores")[1].style.display = "none";
        document.querySelector(".player-won").innerText = `It's a draw!`; 
    }
    else{
        playersWon[winner]++;
        document.querySelectorAll(".scores")[1].style.display = "block";
        document.querySelectorAll(".scores")[0].innerHTML = `Player X  &nbsp;&nbsp;&nbsp;&nbsp; <span>${playersWon[0]} - ${playersWon[1]}</span>  &nbsp;&nbsp;&nbsp;&nbsp; Player O`;
        document.querySelectorAll(".scores")[1].innerHTML = `Player X  &nbsp;&nbsp;&nbsp;&nbsp; <span>${playersWon[0]} - ${playersWon[1]}</span>  &nbsp;&nbsp;&nbsp;&nbsp; Player O`;
        document.querySelector(".player-won").innerText = `Player ${players[winner]} has won!`;
    }
}
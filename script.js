let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let newBtn = document.getElementById("new-game");
let msgContainer = document.querySelector(".msg-box");
let msg = document.getElementById("msg")

let turnO = true;

const winPatterns = [
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
    enabledButtons();
    msgContainer.classList.add("hide");
}

boxes.forEach((e) => {

    e.addEventListener("click", () => {
        let count = 0;
        if (turnO) {
            e.innerText = "O";
            turnO = false;
            count += 1;

        } else {
            e.innerText = "X";
            turnO = true;
            count+=1;

        }
        if(count === 9){
            console.log("It is nine");
        }
        e.disabled = true;
        checkWinner();
    })
    
})

const disabledButtons = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledButtons = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congrulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // console.log("Winner");
                disabledButtons();
                showWinner(pos1);
            }
        }


    }
}

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
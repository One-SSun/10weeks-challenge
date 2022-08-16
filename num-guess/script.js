const rangeNum = document.querySelector(".input-range input");
const guessNum = document.querySelector(".input-guess input");
const gameForm = document.querySelector(".game-form");
const chooseResult = document.querySelector("#choose-num");
const gameResult = document.querySelector("#game-result");

function formSubmit(event){
    event.preventDefault();
    gameResultFunc();
}

function gameResultFunc(){
    const rangeValue = rangeNum.value;
    const guessValue = guessNum.value;
    const randomNum = Math.ceil(Math.random() * rangeValue);
    chooseResult.innerText = `you choose ${guessValue}, the machine choose ${randomNum}`;
    chooseResult.classList.remove("hidden");

    if(parseInt(guessValue) === randomNum){
        gameResult.innerText = `you won!`;
    }else{
        gameResult.innerText = `you lost!`;
    }
    gameResult.classList.remove("hidden");
}

gameForm.addEventListener("submit", formSubmit);

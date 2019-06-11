const name = document.querySelector('#name');
const pointsToWin = document.querySelector('#points');
const startButton = document.querySelector('.form__input--button');
let formOutput = document.querySelector('.form__output');
const gamePanel = document.querySelector('#game-panel');

startButton.addEventListener('click',validateForm);

function validateForm(){
    if(name.value=="" || pointsToWin.value==""){
        formOutput.innerHTML = "You must insert informations to all inputs";
    }
    else {
        formOutput.innerHTML = "";
        for(let i=0; i<=pointsToWin.value.length; i++){
            if(isNaN(pointsToWin.value.charAt(i))){
                formOutput.innerHTML = "Points to win is not a number";
            }
        }
        openGamePanel();
    }
    
};

function openGamePanel(){
    
};

const name = document.querySelector('#name');
const pointsToWin = document.querySelector('#points');
const startButton = document.querySelector('.form__input--button');
let formOutput = document.querySelector('.form__output');
const gamePanel = document.querySelector('#game-panel');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const comment = document.querySelector('#comment-output');
let computerMove;
let userPoints = 0;
let compPoints = 0;
let round = 1;
const roundContainer = document.querySelector('#round');
const compPointsContainer = document.querySelector('#comp-points');
const userPointsContainer = document.querySelector('#user-points');

startButton.addEventListener('click',validateForm);

function validateForm(){
    if(name.value=="" || pointsToWin.value==""){
        formOutput.innerHTML = "You must insert informations to all inputs";
    }
    else if(pointsToWin.value <= 0){
        formOutput.innerHTML = "Points to win can't be less or equal to zero";
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
    document.querySelector('#main-container').style.display = "none";
    gamePanel.style.right = 0;
    document.querySelector('#user-name').innerHTML = name.value;
    paper.addEventListener("click", checkMove);
    rock.addEventListener("click", checkMove);
    scissors.addEventListener("click", checkMove);
    comment.innerHTML = '<p class="comment__output--tip">To start the game chose what hand would you chose and click on it on the left side</p>';
};

function computerDraw(){
    let random = Math.floor(Math.random()*3+1);
    switch(random){
        case 1: computerMove = "paper"; break;
        case 2: computerMove = "rock"; break;
        case 3: computerMove = "scissors"; break;
    }
    animateCompMove(computerMove);
};

function checkMove(){
    computerDraw();
    let userMove = this.getAttribute('id');
    animateUserMove(userMove);

    if(userMove == "paper"){
        if(computerMove == "paper")
            comment.innerHTML = "It's a draw";
        else if(computerMove == "rock"){
            comment.innerHTML = name.value+" win!";
            userPoints += 1;
            userPointsContainer.innerHTML = userPoints;
        }
        else if(computerMove == "scissors"){
            comment.innerHTML = "Computer win!";
            compPoints += 1;
            compPointsContainer.innerHTML = compPoints;
        }
    }
    else if(userMove == "rock"){
        if(computerMove == "rock")
            comment.innerHTML = "It's a draw";
        else if(computerMove == "scissors"){
            comment.innerHTML = name.value+" win!";
            userPoints += 1;
            userPointsContainer.innerHTML = userPoints;
        }
        else if(computerMove == "paper"){
            comment.innerHTML = "Computer win!";
            compPoints += 1;
            compPointsContainer.innerHTML = compPoints;
        }
    }
    else if(userMove == "scissors"){
        if(computerMove == "scissors")
            comment.innerHTML = "It's a draw";
        else if(computerMove == "paper"){
            comment.innerHTML = name.value+" win!";
            userPoints += 1;
            userPointsContainer.innerHTML = userPoints;
        }
        else if(computerMove == "rock"){
            comment.innerHTML = "Computer win!";
            compPoints += 1;
            compPointsContainer.innerHTML = compPoints;
        }
    }

    round += 1;
    roundContainer.innerHTML = round;
    checkIfEnd();
};

function checkIfEnd(){
    if(userPoints == pointsToWin.value){
        paper.removeEventListener("click", checkMove);
        rock.removeEventListener("click", checkMove);
        scissors.removeEventListener("click", checkMove);
        showPopup("user");
    }
    else if(compPoints == pointsToWin.value){
        paper.removeEventListener("click", checkMove);
        rock.removeEventListener("click", checkMove);
        scissors.removeEventListener("click", checkMove);
        showPopup("comp");
    }
}

function showPopup(winner) {
    document.querySelector('#popup-window').style.display = "flex";
    if(winner == "user")
        document.querySelector('#winner').innerHTML = name.value;
    else if(winner == "comp")
        document.querySelector('#winner').innerHTML = "Computer";
    document.querySelector('#runds-end').innerHTML = "Rounds: " + round;
    document.querySelector('#user-score').innerHTML = name.value + ": " + userPoints;
    document.querySelector('#comp-score').innerHTML = "Computer: " + compPoints;
    document.querySelector('#new-game').addEventListener('click',function(){
        location.reload();
    });
}

function animateCompMove(chosenHand){
    document.querySelector('#comp-chosen-hand').className = '';
    document.querySelector('#comp-chosen-hand').classList.add("fas");
    if(chosenHand == 'paper')
        document.querySelector('#comp-chosen-hand').classList.add("fa-hand-paper");
    else if(chosenHand == 'rock')
        document.querySelector('#comp-chosen-hand').classList.add("fa-hand-rock");
    else if(chosenHand == 'scissors')
        document.querySelector('#comp-chosen-hand').classList.add("fa-hand-scissors");
    document.querySelector('#comp-chose').style.transform = "scale(1)";
};
function animateUserMove(chosenHand){
    document.querySelector('#user-chosen-hand').className = '';
    document.querySelector('#user-chosen-hand').classList.add("fas");
    if(chosenHand == 'paper')
        document.querySelector('#user-chosen-hand').classList.add("fa-hand-paper");
    else if(chosenHand == 'rock')
        document.querySelector('#user-chosen-hand').classList.add("fa-hand-rock");
    else if(chosenHand == 'scissors')
        document.querySelector('#user-chosen-hand').classList.add("fa-hand-scissors");
    document.querySelector('#user-chose').style.transform = "scale(1)";
};

var playerName;
var numberOfRounds;
var winner = 'computer';
var computerPick;
var playerPick;
var comment = document.getElementById("comment");
var commentIcons = document.getElementById("commentIcons");
var winnerText = document.getElementById("winner");
var vs = " vs ";
var canPlay = false;
var playerPoints = 0;
var computerPoints = 0;
//Icons with class .win //
var paperW = '<i class="fas fa-hand-paper win"></i>';
var stoneW = '<i class="fas fa-hand-rock win"></i>';
var scissorsW = '<i class="fas fa-hand-scissors win"></i>';
//Icons with class .lose //
var paperL = '<i class="fas fa-hand-paper lose"></i>';
var stoneL = '<i class="fas fa-hand-rock lose"></i>';
var scissorsL = '<i class="fas fa-hand-scissors lose"></i>';
//Icons with class .draw //
var paper = '<i class="fas fa-hand-paper draw"></i>';
var stone = '<i class="fas fa-hand-rock draw"></i>';
var scissors = '<i class="fas fa-hand-scissors draw"></i>';

/* Kolejne zadania: 
tryb gry multiplayer
///////////////////////////////////////////////
*/

function start(){
    getPlayerName();
    getRoundNumber();
    canPlay = true;
}
function getRoundNumber(){
    numberOfRounds = document.querySelector('input').value;
}
function getPlayerName(){
    playerName = prompt("Type your name");
    document.querySelector("#playerName").innerHTML = playerName;
}
function checkTyping(e){
    computerPick = Math.floor(Math.random()*3);
    if(canPlay == true){
        switch(e) {
            case 0: //paper
                if(computerPick == 0){
                    comment.innerHTML = "Draw!";
                    commentIcons.innerHTML = paper+vs+paper; 
                }else if(computerPick == 1){
                    comment.innerHTML = playerName + " win this round!";
                    playerPoints++;
                    commentIcons.innerHTML = paperW+vs+stoneL; 
                }else {
                    comment.innerHTML = "Computer win this round!";
                    computerPoints++;
                    commentIcons.innerHTML = paperL+vs+scissorsW; 
                }
                break;
            case 1: //stone
                if(computerPick == 0){
                    comment.innerHTML = "Computer win this round!";
                    computerPoints++;
                    commentIcons.innerHTML = stoneL+vs+paperW; 
                }else if(computerPick == 1){
                    comment.innerHTML = "Draw!";
                    commentIcons.innerHTML = stone+vs+stone;
                }else {
                    comment.innerHTML = playerName + " win this round!";
                    playerPoints++;
                    commentIcons.innerHTML = stoneW+vs+scissorsL;
                }
                break;
            case 2: //scissors
                if(computerPick == 0){
                    comment.innerHTML = playerName + " win this round!";
                    playerPoints++;
                    commentIcons.innerHTML = scissorsW+vs+paperL;
                }else if(computerPick == 1){
                    comment.innerHTML = "Computer win this round!";
                    computerPoints++;
                    commentIcons.innerHTML = scissorsL+vs+stoneW;
                }else {
                    comment.innerHTML = "Draw!";
                    commentIcons.innerHTML = scissors+vs+scissors;
                }
                break;
        }
    }else
        comment.innerHTML = 'You must type number of round and hit "Start" button!';
    
    document.getElementById("computerPoints").innerHTML = computerPoints;
    document.getElementById("playerPoints").innerHTML = playerPoints;
    
    checkPoints();
}
//Keyboard events
document.onkeydown = function(event){
    switch(event.keyCode){
        case 65: checkTyping(0);break; //a
        case 83: checkTyping(1);break; //s
        case 68: checkTyping(2);break; //d
    }
}

//Checkinf if points are the same as number of points to win //
function checkPoints(){
    if(playerPoints == numberOfRounds){
        winnerText.innerHTML = playerName + " win!";
        $("#winner").animate({
            fontSize: "4rem"
        }, 700);
        canPlay = false;
    }
    else if(computerPoints == numberOfRounds){
        winnerText.innerHTML= "Computer win!";
        $("#winner").animate({
            fontSize: "4rem"
        }, 700);
        canPlay = false;
    }
}
////////////////////////////////////
$("#start").click(function(){
    $("#version").css("display", "none");
    $("#nav").css("display", "block");
    $("#withComputer").css("display", "block");
});
$("#firstPage").click(function(){
    $("#version").css("display", "block");
    $("#nav").css("display", "none");
    $("#withComputer").css("display", "none");
});


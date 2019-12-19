var gameMoney
var dice1
var dice2

function play(){
gameMoney = document.getElementById("startBet").value;
if (checkMoney()){
    alert("Hey, you can't play without a bet");
}
else{
    while (gameMoney>0){
        console.log(gameMoney)
        if (rollDiceSum() === 7){
            gameMoney = gameMoney + 4; 
        } else{
            gameMoney = gameMoney - 1;
        } 

    } 
    
}
}


function checkMoney(){
if (gameMoney <= 0){
    return true
}else{
    return false    
}
}

function rollDiceSum(){
    dice1 = Math.floor(Math.random()*6)+1
    dice2 = Math.floor(Math.random()*6)+1
    return(dice1 + dice2)
}
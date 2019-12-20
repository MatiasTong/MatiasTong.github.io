var gameMoney
var dice1
var dice2
var startingBet
var rollsTotal
var maxAmount
var array
var array2


function play(){
startingBet = Number(document.getElementById("startBet").value);
gameMoney = startingBet;
rollsTotal = 0;
maxAmount = 0;
array = [];


if (checkMoney()){
    alert("Hey, you can't play without a bet");
}
else{
    while (gameMoney>0){
        array[array.length] = gameMoney;
        rollsTotal += 1;
        recordGameMoneyMax()
        console.log(gameMoney);
        if (rollDiceSum() === 7){
            gameMoney = gameMoney + 4;
        } else{
            gameMoney = gameMoney - 1;
        }
    }
}
document.getElementById("start").innerHTML = "$" + startingBet;
document.getElementById("rolls").innerHTML = rollsTotal;
document.getElementById("maxAmount").innerHTML = "$" + maxAmount;
document.getElementById("rollsHigh").innerHTML = findMaxRoll(array, maxAmount);
document.getElementById("results").style.display = "block"
console.log(array)
}

function rollDiceSum(){
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;
    return(dice1 + dice2);
}

function checkMoney(){
if (gameMoney <= 0){
    return true;
}else{
    return false;
}
}

function recordGameMoneyMax(){
  if(gameMoney>maxAmount){
    maxAmount = gameMoney;
  }
}

function findMaxRoll(num, max){
  array2 = []
  for(i=0; i<num.length; i++){
  if(num[i] === max){
  array2[array2.length]= i+1
}
}
return array2;
}

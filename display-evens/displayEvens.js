function findevens(){
var startNumber = document.getElementById("startNum").value;
var endNumber = document.getElementById("endNum").value;
var step = document.getElementById("step").value;
var nextNumber = 0;
var array = [];
var array2 = [];

startNumber = Number(startNumber);
endNumber = Number(endNumber);
step = Number(step);

for (i=0; nextNumber < endNumber; i++){
    nextNumber = startNumber + i*step
    array[i] = nextNumber
}

for (i=0; i < array.length; i++ ){
    if (array[i] % 2 === 0){
       array2.push(array[i])
    }
}


document.getElementById("sequence").innerHTML = array2;
document.getElementById("result-table").style.display = "block";

return false;

}



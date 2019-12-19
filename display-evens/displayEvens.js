function findevens(){
<<<<<<< HEAD
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

=======
// var startNumber = Number(document.getElementById("startNum").value)
// var endNumber = Number(document.getElementById("endNum").value)
// var step = Number(document.getElementById("step").value)
// var array = []

var startNumber = document.getElementById("startNum").value
var endNumber = document.getElementById("endNum").value
var step = document.getElementById("step").value
var array = []
console.log(startNumber)
//find errors
if (startNumber === "" || isNaN(startNumber) || endNumber === "" || isNaN(endNumber) || step === "" || isNaN(step)){
    alert("Entry must be numeric")
    for (i=0; i<document.getElementsByClassName("form-control").length; i++){
        document.getElementsByClassName("form-control")[i].style.borderColor = "red"
    }
    return false;
}

startNumber =Number(startNumber)
endNumber =Number(endNumber)
step =Number(step)

if(startNumber > endNumber){
    alert("End number must be greater than start number");
    document.getElementById("endNum").style.borderColor = "red";
    document.getElementById("startNum").style.borderColor = "red";
    return false;
}


if(step < 0){
    alert("Step must be positive")
    document.getElementById("step").style.borderColor = "red";
    return false;
}

for (i=startNumber; i < endNumber; i = i + step){
    if (i % 2 === 0){
    array.push(i);
    }
}

document.getElementById("sequence").innerHTML = array
document.getElementById("table-result").style.display = "block"

return false;
}

function resetform(){
document.getElementById("startNum").value = "";
document.getElementById("endNum").value = "";
document.getElementById("step").value = "";
document.getElementById("table-result").style.display = "none";
for (i=0; i<document.getElementsByClassName("form-control").length; i++){
    document.getElementsByClassName("form-control")[i].style.borderColor = ""
}
}
>>>>>>> 6390c8b9b16fd226f48aacfaed69fb1bfc77db47


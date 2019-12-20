var name
var email
var phone
console.log("hello world");

function submit(){
    validateForm();
}

function validateForm(){
name = document.getElementById("name").value;
email = document.getElementById("email").value;
phone = document.getElementById("phone").value;

if (name == ""||email == ""||phone == "" ){
alert ("Please fill required fields")
    if(name == ""){
    document.getElementById("name").style.borderColor = "red";
    }
    if(email == ""){
    document.getElementById("email").style.borderColor = "red";
    }
    if(phone == ""){
    document.getElementById("phone").style.borderColor = "red";
}
}
}

        
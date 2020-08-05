var name
var email
var phone
console.log("hello world");

function submit(){
    clearForm();
    validateForm();
}

function validateForm(){
name = document.getElementById("name").value;
email = document.getElementById("email").value;
phone = document.getElementById("phone").value;

    if (name == ""||email == ""||phone == "" ){
    alert ("Please fill required fields")
        if(name == ""){
        document.getElementById("name").style.border = "2px solid red";
        }
        if(email == ""){
        document.getElementById("email").style.border = "2px solid red";
        }
        if(phone == ""){
        document.getElementById("phone").style.border = "2px solid red";
        }
    }else{
    alert("Thank You for your submission!")
    document.getElementById("submitResult").style.display="block";
    document.getElementById("form").style.display ="none"
    }
}

function clearForm(){
    document.getElementById("name").style.border= ""
    document.getElementById("email").style.border= ""
    document.getElementById("phone").style.border= ""

}

        
function readyLunch(){
document.getElementById("lunch-image").style.display="none"

// loop to clear cached results(images) every time the submit button is pressed
for (i=0; i<document.getElementsByClassName("result").length; i++){
    document.getElementsByClassName("result")[i].style.display= "none"
}

carb = document.getElementById("carb").value
protein = document.getElementById("protein").value
greens = document.getElementById("greens").value
fat = document.getElementById("fat").value
spicy = document.getElementById("spicy").value

carb = Number(carb)
protein = Number(protein)
greens = Number(greens)
fat = Number(fat)
spicy = Number(spicy)

//Case 1: Vegetarian, only green, there is input for greens but not for the other fields
if(greens <= 10 && greens >= 1 && carb === 0 && protein === 0 && fat === 0 && spicy ===0){
    document.getElementById("garden-salad").style.display="block"
    document.getElementById("garden-salad-caption").innerHTML="Garden Salad"
return false

}
//if all items are less than 5 than the person is not hungry
else if(spicy < 5 && greens <5 && carb <5 && fat <5 && protein <5){
    document.getElementById("not-hungry").style.display="block"
    document.getElementById("not-hungry-caption").innerHTML="..."
    return false;
}
//if all items are greater than 8 than the person is not hungry
else if(spicy > 8 && greens >8 && carb >8 && fat >8 && protein >8){
    document.getElementById("very-hungry").style.display="block"
    document.getElementById("very-hungry-caption").innerHTML="..."
    return false;
}
//Spiciness
else if(spicy === 10){
    document.getElementById("spicy-max").style.display="block"
    document.getElementById("spicy-max-caption").innerHTML="hint: lower the heat"
    return false;
}
else if(spicy === 9){
    document.getElementById("bucket-hot-sauce").style.display="block"
    document.getElementById("bucket-hot-sauce-caption").innerHTML=
    "A bucket of hot sauce for you <br/> hint: lower the heat"
    return false;
}
// If one input is highest
//Case 2: Max Carb
else if(carb > 8 && carb > protein && carb > greens && carb > fat && carb > spicy){
  document.getElementById("mashed-potatoes").style.display="block"
  document.getElementById("mashed-potatoes-caption").innerHTML="Mashed Potatoes"
  return false;
}
//Case 3: Max Protein
else if(protein > 8 && protein > carb && protein > greens && protein > fat && protein > spicy){
    document.getElementById("steak").style.display="block"
    document.getElementById("steak-caption").innerHTML="Steak Medium Rare"
    return false;
  }
//Case 4: Max Greens, output same as case 1
else if(greens > 8 && greens > carb && greens > protein && greens > fat && greens > spicy){
    document.getElementById("garden-salad").style.display="block"
    document.getElementById("garden-salad-caption").innerHTML="Garden Salad"
    return false
  }
//Case 5: Max Fat
else if(fat > 8 && fat > protein && fat > greens && fat > carb && fat > spicy){
    document.getElementById("macdonalds").style.display="block"
    document.getElementById("macdonalds-caption").innerHTML="MacDonalds"
    return false;
  }
//If two values are higher than the others
//Case 7:  
else if((carb + protein) > (greens + fat + spicy) || (carb + fat) > 
(greens + protein + spicy)){
    document.getElementById("hamburger").style.display="block"
    document.getElementById("hamburger-caption").innerHTML="Juicy Burger"
    return false;
}
//Case 8:  
else if((carb + greens) > (protein + fat + spicy)|| (protein +greens) >
(carb + fat + spicy)){
    document.getElementById("tofu-bowl").style.display="block"
    document.getElementById("tofu-bowl-caption").innerHTML="Tofu Sweet Potato Bowl"
    return false;
}
//Case 9:  
else if((spicy + protein) > (greens + carb)){
    document.getElementById("buffalo-wings").style.display="block"
    document.getElementById("buffalo-wings-caption").innerHTML="Hot Buffalo Wings"
    return false;
}
//Case 10:  
else if((protein + fat) > (greens + carb + spicy)){
    document.getElementById("cheeseburger").style.display="block"
    document.getElementById("cheesburger-caption").innerHTML="Jumbo Cheeseburger"
    return false;
}
//Case 11: random assigment of food 
else if((protein + fat + greens + carb + spicy)<=26){
    document.getElementById("pizza").style.display="block"
    document.getElementById("pizza-caption").innerHTML="There's nothing better than pineapple pizza"
    return false;
}
else if((protein + fat + greens + carb + spicy)<=31){
    document.getElementById("spaghetti").style.display="block"
    document.getElementById("spaghetti-caption").innerHTML="Spaghetti"
    return false;
}
else if((protein + fat + greens + carb + spicy)<=36){
    document.getElementById("empanadas").style.display="block"
    document.getElementById("empanadas-caption").innerHTML="Empanadas with Salsa Verde"
    return false;
}
else if((protein + fat + greens + carb + spicy)<=41){
    document.getElementById("halal-food").style.display="block"
    document.getElementById("halal-food-caption").innerHTML="Halal Food"
    return false;
}
else if((protein + fat + greens + carb + spicy)<=48){
    document.getElementById("stir-fry").style.display="block"
    document.getElementById("stir-fry-caption").innerHTML="Hot and Spicy Stir-Fry"
    return false;
}
}

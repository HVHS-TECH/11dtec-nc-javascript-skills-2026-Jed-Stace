/****************************
Name of Task: Data Types
****************************/
console.log("Running t11_data_types.js")
console.log("Hello!")

// Variables
let username = "Jed"
let age = 15;
let year= 2025;
let pocketMoney = 20;
let newAge = age + 10;
let halfMoney = pocketMoney / 2;

/****************************
Main Code:
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

start()
/****************************
Functions:

****************************/

function start(){
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML += ("<p>Hi " + username + "</p>")
OUTPUT.innerHTML += ("<p>As of " + year + " you are " + age + " years old" + "</p>")
OUTPUT.innerHTML += ("<p>You were born in " + (year - age) + "</p>")
OUTPUT.innerHTML += ("<p>In 10 years you will be " + newAge + " years old" + "</p>")
OUTPUT.innerHTML += ("<p>You have " + pocketMoney + " dollars" + "</p>")
OUTPUT.innerHTML += ("<p>You spend half of your money, now you have " + halfMoney + "</p>")
OUTPUT.innerHTML += ("<p>Then you get $3, now you have " + (halfMoney + 3) + "</p>")
displayProduct("Chocolate bar", "4")
displayProduct("Chips", "3")
displayProduct("Drink", "2.50")
OUTPUT.innerHTML += "<p>Less code matters</p>"
}



function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>"
}
/*
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
}
*/

function getFormInput(){
    const ageField = document.getElementById("ageField");
    let userAge = Number(Age_FIELD.value);
}

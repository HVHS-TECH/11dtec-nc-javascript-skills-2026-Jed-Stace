/****************************
Name of Task: Functions
****************************/
console.log("Running t06_functions.js")
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
const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

OUTPUT.innerHTML += ("<p>Hi " + username + "</p>")
OUTPUT.innerHTML += ("<p>As of " + year + " you are " + age + " years old" + "</p>")
OUTPUT.innerHTML += ("<p>You were born in " + (year - age) + "</p>")
OUTPUT.innerHTML += ("<p>In 10 years you will be " + newAge + " years old" + "</p>")
OUTPUT.innerHTML += ("<p>You have " + pocketMoney + " dollars" + "</p>")
OUTPUT.innerHTML += ("<p>You spend half of your money, now you have " + halfMoney + "</p>")
OUTPUT.innerHTML += ("<p>Then you get $3, now you have " + (halfMoney + 3) + "</p>")
/****************************
Functions:

****************************/

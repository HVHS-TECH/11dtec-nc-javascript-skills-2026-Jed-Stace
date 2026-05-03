/****************************
Name of Task: Javascript_and_html
****************************/
console.log("Running t01_introduction.js")
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

OUTPUT.innerHTML += ("Hi " + username )
OUTPUT.innerHTML += ("As of " + year + " you are " + age + " years old")
OUTPUT.innerHTML += ("You were born in " + (year - age))
OUTPUT.innerHTML += ("In 10 years you will be " + newAge + " years old")
OUTPUT.innwe("You have " + pocketMoney + " dollars")
console.log("You spend half of your money, now you have " + halfMoney)
console.log("Then you get $3, now you have " + (halfMoney + 3))
/****************************
Functions:

****************************/

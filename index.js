"use strict";



let operator = prompt('Please enter operator \n \n +, -, *, /', "");

let firstNumber = prompt('Please enter first number', "");

let secondNumber = prompt('Please enter second number', "");

if (operator === "+") {
    alert(`result = ${parseInt( firstNumber) + parseInt(secondNumber)}`);
} else if (operator === "-") {
    alert(`result = ${parseInt( firstNumber) - parseInt(secondNumber)}`);

} else if (operator === "*") {
    alert(`result = ${parseInt( firstNumber) * parseInt(secondNumber)}`);

} else if (operator === "/") {
    alert(`result = ${parseInt( firstNumber) / parseInt(secondNumber)}`);

}
// Exercise 2: Basic Calculator
let num1 = parseFloat(prompt("20:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = parseFloat(prompt("9:"));
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  result = "Invalid operator";
}
alert("Result: " + result);
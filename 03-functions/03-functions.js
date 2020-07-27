// Functions

// 2
/*
function greeter(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = greeter('What is your first name?\n'); // invoking...
let lastName = greeter('What is your last name?\n');
console.log(`Hi, ${firstName} ${lastName}`);
*/

// 3
// function multiply() {
//   let rlSync = require('readline-sync');
//   let firstNumber = rlSync.question('Enter the first number: ');
//   let secondNumber = rlSync.question('Enter the second number: ');
//   console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// }
//
// multiply();

function multiply(first, second) {
  return first * second;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return rlSync.question(prompt);
}

let firstNumber = getNumber('Enter the first number: '); // invoking...
let secondNumber = getNumber('Enter the second number: ');
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);

// 4
function factorial(num) {
  for (let i = num - 1; i >= 2; i--) {
    num *= i;
  }
  return num;
}

console.log(factorial(5));
console.log(factorial(4));

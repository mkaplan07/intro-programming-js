// Functions 2

// 2
let rlSync = require('readline-sync'); // global
/*
function getName(text) {
  return rlSync.question(`${text}:\n`);
}

console.log(`Hi, ${getName('first name')} ${getName('last name')}`);
*/

// 3
// function multiply() {
//   let num1 = rlSync.question('Enter the first number:\n');
//   let num2 = rlSync.question('Enter the second number:\n');
//   return `${num1} * ${num2} = ${num1 * num2}`;
// }
//
// console.log(multiply());

/*
function multiply(num1, num2) {
  return num1 * num2;
}

function getNumber(text) {
  return rlSync.question(`${text}:\n`);
}

let uno = getNumber('First number');
let dos = getNumber('Second number');
console.log(`${uno} * ${dos} = ${multiply(uno, dos)}`);
*/

// 4
function factorial() {
  let input = rlSync.question('Let\'s factorialize:\n');
  let result = input;
  for (let i = 2; i < input; i++) {
    result *= i;
  }
  console.log(`${input}! is ${result}`);
}

factorial();

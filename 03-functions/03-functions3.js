// Functions 3

let rlSync = require('readline-sync');

// 2
// function getName(text) {
//   return rlSync.question(`${text}:\n`);
// }
//
// let firstName = getName('First name');
// let lastName = greeter('Last name');
// console.log(`Good morning, ${firstName} ${lastName}!`);

// 3
function multiply(a, b) {
  return a * b;
}

function getNumber(text) {
  return parseFloat(rlSync.question(`${text}:\n`))
  /*
  don't need Number bc * implicitly coerces,
  but what about typos? '3w' * '3' --> parseInt()
  but Int() stops at decimals --> parseFloat()
  */
}

let num1 = getNumber('Number one');
let num2 = getNumber('Number two');
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

// 4
function getNumero(text) {
  return Number(rlSync.question(`${text}:\n`));
}

function factorialize(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

let input = getNumero('Number please');
console.log(`${input} factorialized is ${factorialize(input)}`);

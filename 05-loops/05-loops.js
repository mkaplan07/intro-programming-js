// Loops
let rlSync = require('readline-sync');

// 1
// function ager() {
//   let age = parseInt(rlSync.question('How old are you?\n'));
//   console.log(`Today, you are ${age} years old.`);
//   for (let i = 10; i <= 40; i += 10) {
//     console.log(`In ${i} years, you will be ${i + age} years old.`);
//   }
// }
// ager();

// 2
// function factorial() {
//   let num = parseInt(rlSync.question('Enter a number:\n'));
//   let result = 1;
//   for (let i = num; i >= 2; i--) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial());

//  5
// function genRand(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// let roll; // declare here so I can access outside the block: while (roll <= 4)
// let tries = 0; // same, for console.log
//
// do {
//   roll = genRand(1, 6) // generates a number between 1 & 6, assigns it to roll
//   console.log(`We rolled a ${roll}`);
//   tries++; // increments tries
// } while (roll <= 4);
//
// console.log(`It took ${tries} tries to roll a number higher than 4.`)

// 6
function ractorial(n) {
  if (n <= 1) {
    return 1; // both factorial(0) & factorial(1) = 1
  }

  return n * ractorial(n - 1);
}
console.log(ractorial(5), ractorial(0), ractorial(1));
/*
f(5) --> f(4) --> f(3) --> f(2) --> f(1)
At f(2), we get 2 * 1 (2 * 1)
At f(3), we get 3 * 2
At f(4), we get 4 * 3
At f(5), we get 5 * 4
So 5 * 4 * 3 * 2 = 120
*/

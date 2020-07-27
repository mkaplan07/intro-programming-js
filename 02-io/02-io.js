// Input/Output

// 3
let rlSync = require('readline-sync');
/*
use Node's built-in require fn to import readline-sync
returns the library as an object, assigns to rlSync
*/
function ager() {
  let age = Number(rlSync.question('How old are you?\n'));
    console.log(`You are ${age} years old.`)
  for (let i = 10; i <= 40; i += 10) {
    let counter = i;
    console.log(`In ${counter} years, you will be ${age + counter} years old.`);
  }
}
ager();

// 1 & 2 -- rlSync already declared
let firstName = rlSync.question('What is your first name?\n'); // answer on next line
let lastName = rlSync.question('What is your last name? '); // answer after space
console.log(`Hello, ${firstName} ${lastName}!`);

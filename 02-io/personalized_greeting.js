let rlSync = require('readline-sync');
/*
use Node's built-in require fn to import readline-sync
returns the library as an object, assigns to rlSync
*/

let name = rlSync.question("What's your name?\n");
console.log(`Good morning, ${name}!`);

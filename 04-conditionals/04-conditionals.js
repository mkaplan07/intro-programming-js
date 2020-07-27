// Conditionals

/*
// 1
false || (true && false); // false
true || (1 + 2); // short-circuit true
(1 + 2) || true; // short-circuit 3
true && (1 + 2); // 3
false && (1 + 2); // short-circuit false
(1 + 2) && true; // true
(32 * 4) >= 129; // false – comparison operators return a boolean
false !== !true; // false – true to false, false === false, true to false
true === 4; // false – 4 is truthy, not true
false === (847 === '847'); // true (type & value)
false === (847 == '847') // false – w/ loose equality, 1 op's type is implicitly coerced
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true
//  false ||     false        ||        true         || false;
//       false                ||        true
//                           true                    || false
//                                      true
// !(100 / 5) returns a boolean, which can't === 20, a number
*/

let rlSync = require('readline-sync');

// 2 & 3
function evenOrOdd() {
  let num = parseFloat(rlSync.question('What\'s your number?\n'));
  if (!Number.isInteger(num)) { // NaN (strings), 0.1 & 5.1 should all fail (see MDN)
    console.log('That\'s not an integer.');
    return;
  } else { // otherwise use if/else if/else (vs. nested if)
    num % 2 === 0 ? console.log('even') : console.log('odd');
  }
}
evenOrOdd();

// 5
function foo() {
  if (true) {
    return 'bar';
  } else {
    return qux();
  }
}
console.log(foo()); // Run a file w/ Node, output-only

// 6  unlike '', [] is not a falsy value

// 7
function capper() {
  let str = rlSync.question('Pls enter a string:\n');
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}
console.log(capper()); // Run a file w/ Node, output-only

// 8
function findRange() {
  let num = rlSync.question('What\'s your number?\n');
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num <= 50) { // if clause picked up < 0
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100) { // 1st else if picked up <= 50
    console.log(`${num} is between 51 and 100`);
  } else { // previous clauses picked up <= 100
    console.log(`${num} is greater than 100`);
  }
}
findRange(); // don't have to console.log bc fn console.logs

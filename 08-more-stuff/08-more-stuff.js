// More Stuff

// 2
/*
Js indicates (^) that the error occurred at (greeting)
I also get a ReferenceError that greeting is not defined
More info: the error occurred in hello (fn) at line 4, column 15 of exercise2.js
  This is the same place as the ^
*/

// 3
console.log(Math.sqrt(37));

// 4
console.log(Math.max(1, 6, 3, 2)); // 6
console.log(Math.max(-1, -6, -3, -2)); // -1
console.log(Math.max(2, 2)); // 2

// 5
function revLengths(str) {
  return str.split(' ').reverse().map(el => el.length);
}
console.log(revLengths('What does the following function do?')); // [3, 8, 9, 3, 4, 4]

// 6
let words = ['laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear'];

function matcher(arr) {
  return arr.filter(el => el.match(/lab/)); // true when substr lab (case sens)
}
console.log(matcher(words)); // ['laboratory', 'flab.', 'elaborate']

// 7
/*
"Exception handling is a process that deals with errors in a mangeable and predictable manner."
Exception handling lets a program run through an error (non-silent)
Try block throws an error, caught by the catch block:
*/
let mot = ['ab', 'can', undefined, 'def'];
function lens(arr) {
  arr.forEach(function(el) { // arr.forEach(el => { 
    try {
      console.log(el.length);
    } catch (exception) {
      console.log(`${el} has no length`);
    }
  });
}
lens(mot); // 2, 2, 'undefined has no length', 3

// 8
function isNotANumber(x) {
  return x !== x ? true : false; // NaN is the only Js value that isn't equal to itself
  // solution: return x !== x;
}
console.log(isNotANumber(NaN)); // true

// 9
function negativeZero(x) {
  return 1/x === -Infinity;
  // return (x === 0) && (1 / x === -Infinity); eliminates unnecessary / (performance)
}
console.log(negativeZero(-0)); // true
console.log(negativeZero(0)); //false

// 10
let y = '5';
y++;
/*
++ implicity coerces to number – when possible, otherwise NaN
returns 5 bc y++ evaluates before it increments (vs. ++y or y += 1)
returns 5 then increments to 6 –
y + 1 // 7

let x = '1';
1 += 2 // 3
*/

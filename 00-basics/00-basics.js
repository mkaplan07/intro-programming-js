// The Basics

// 1
console.log('Mike ' + 'Kaplan');

// 2
let number = 4936;
let ones = number % 10; // 6
number = (number - ones) / 10; // 4930 / 10 = 493
let tens = number % 10; // 3
number = (number - tens) / 10; // 490 / 10 = 49
let hundreds = number % 10; // 9
let thousands = (number - hundreds) / 10; // (49 - 9) / 10 = 4
console.log(`Thousands = ${thousands}, hundreds = ${hundreds}, tens = ${tens}, ones = ${ones}.`);

// 5
console.log('5' + 10);
/*
evaluates to '510' – w/ string operands, + is used for string concatenation.
10 is implicitly coerced to '10' then concatenated with '5'
*/

// 6
console.log(Number('5') + 10); // 15

// 7
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// 9
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];
console.log(names);

// 10
let pets = {
  asta : 'dog',
  butterscotch : 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard'
}
console.log(pets);

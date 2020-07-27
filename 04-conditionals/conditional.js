let a = prompt('Enter a number');

if (a == 3) { // prompt returns a string, hence non-strict/loose equality operator
  console.log('a is 3');
} else if (a == 4) {
  console.log('a is 4');
} else {
  console.log('a is neither 3 nor 4');
}

/*
=== strict equality/identity operator
returns true when operands have the same value and type

!== strict inequality returns opposite of ===

== non-strict/loose equality operator
coerces one of the operands to the other's type before comparison

!= non-strict/loose inequality returns opposite of ==
*/

let x; // undefined
if (x = 5) { // x = 5 returns 5 (assignment) & that's a truthy value
  console.log('How can this be true?');
} else {
  console.log('it is not true');
}

/*
Conditional operators return a boolean
Logical operators return the value of the last operand evaulated –
either its value or return value:
0 && '3' // 0 (short-circuit false)
(4 === 4) || (3 === 4) // true, return val of (4 === 4) – also short-circuit
*/

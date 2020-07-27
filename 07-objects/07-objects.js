// Objects

// 1
let person = {
  name: 'Bob',
  occupation: 'web developer',
  hobbies: 'painting'
}
console.log(person.name);

// 2
/*
Js coerces non-str keys to strings
obj['1'] = 'hello';
obj[1] = 'world';
obj['1'] // 'world'
*/

// 3
let fake = {
  0: 'ab',
  1: 'can',
  2: 'def',
  length: 3
}
console.log(`Object.entries(fake): ${Object.entries(fake)}`);
console.log('console.log(fake):', fake);
console.log(`template literal interpolates fake: ${fake}`);
/*
// => [object Object] bc placeholder vals implicitly coerced to strings.
same behavior w/ arrays
*/

let util = require('util');
console.log(`template literal int's util.inspect(fake): ${util.inspect(fake)}`);
console.log(`template literal int's JSON.stringify(fake): ${JSON.stringify(fake)}`);

fake['3'] = 'eggo'; // seems to sort itself
fake.length += 1;

for (let i = 0; i < fake.length; i++) {
  console.log(fake[i]);
}

// 4
let three = { b: 2, a: 1, c: 3 };
let caps = Object.keys(three).map(el => el.toUpperCase());
console.log(`three: ${Object.keys(three)}, caps: ${caps}`);

// 5 & 6
let myProto = {
  foo: 1,
  bar: 2
}
let myObj = Object.create(myProto);
myObj.qux = 3;

for (let k in myObj) {
  if (myObj.hasOwnProperty(k)) {
    console.log(`${k}: ${myObj[k]}`);
  }
}

// 7
let objToCopy = {
  foo: 1,
  bar: 2
}
function copier(obj, keys) {
  let result = {};
  if (keys) {
    keys.forEach(k => result[k] = obj[k]);
  } else {
    Object.assign(result, obj);
  }
  return result;
}
let copy1 = copier(objToCopy, Object.keys(objToCopy)); // foo: 1, bar: 2
let copy2 = copier(objToCopy, ['foo']); // foo: 1, bar: undefined
let copy3 = copier(objToCopy) // foo: 1, bar: 2
console.log(`obj & keys – foo: ${copy1.foo}, bar: ${copy1.bar}`);
console.log(`obj & ['foo'] – foo: ${copy2.foo}, bar: ${copy2.bar}`);
console.log(`obj only – foo: ${copy3.foo}, bar: ${copy3.bar}`);

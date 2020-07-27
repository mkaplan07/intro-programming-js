let names = ['ab', 'can', 'def', 'eggo'];
let upperNames = [];

let idx = 0;
while (idx < names.length) {
  upperNames.push(names[idx].toUpperCase());
  idx += 1;
}

console.log(`names array: ${names}`);
console.log(`upperNames array: ${upperNames}`);
console.log(`iteration #5 is not truthy. idx is ${idx}`);

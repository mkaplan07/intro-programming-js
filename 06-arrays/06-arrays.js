// Arrays

// 2
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// log even elements
myArray.forEach(function(el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

// log an array of evens
let evens = myArray.filter(function(el) {
  return el % 2 === 0;
});
console.log(evens);

// 3
let outer = [[1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0]];
outer.forEach(function(inner) {
  // for (let i = 0; i < inner.length; i++) {
  //   if (inner[i] % 2 === 0) {
  //     console.log(inner[i]);
  //   }
  // }
  inner.forEach(function(el) {
    if (el % 2 === 0) {
      console.log(el);
    }
  })
});

// 4
let nums = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let words = nums.map(function(el) {
  return el % 2 === 0 ? 'even' : 'odd';
});
console.log(words);

// 5
let diverse = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
function getInts(arr) {
  return arr.filter(el => Number.isInteger(el));
}
console.log(getInts(diverse));

// 6
let strings = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function findOddLengths(arr) {
  let lengths = arr.map(el => el.length); // [1, 4, 5, 3, 2]
  return lengths.filter(el => el % 2 !== 0); // [1, 5, 3]
}
console.log(findOddLengths(strings));

// 7
let numbers = [3, 5, 7];
let squares = numbers.reduce((acc, el) => acc + (el * el), 0);
console.log(squares); // no initialValue, uses arr[0] --> 77

// 8
let alphas = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(arr) {
  return arr.reduce(function(acc, el) {
    if (el.length % 2 !== 0) {
      acc.push(el.length);
    }
    return acc;
  }, []);
}
console.log(oddLengths(alphas));

// 9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
function checker(arr, val) {
  return arr.includes(val);
}
console.log(checker(numbers1, 3)); // true
console.log(checker(numbers2, 3));
console.log(checker(numbers3, 3));

// 10
let nest = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
let mem = nest[1].splice(2, 1); // starting idx, delete count
console.log(mem);

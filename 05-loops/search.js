let nums = [1, 2, 3, 4, 2];
let rlSync = require('readline-sync');

function finder(arr) {
  let flag = true; // 'no matches' enabled by default
  let input = parseInt(rlSync.question('Lookup:\n'));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
      console.log(`match at array[${i}]!`);
      flag = false; // disables 'no matches'
      break;
    }
  }
  if (flag) { console.log('no matches'); }
}
finder(nums);

let a = 5;
switch (a) {
  case '5': // case '5' not 5, see below
    console.log('a is 5'); // case 5: clause in switch statement (returns undefined)
    break;
  case 6:
    console.log('a is 6'); // case 6: clause
    break;
  default:
    console.log('a is neither 5 nor 6'); // default: clause
    break;
}
// logs 'a is neither...' bc switch statements use === (same value AND type)

let fallThru = 8;
switch (fallThru) {
  case 5:
  case 6:
  case 7:
    console.log('fallThru is 5, 6 or 7');
    break;
  case 8:
  case 9:
    console.log('fallThru is 8 or 9');
    break;
  default:
    console.log('It all happened so fast.');
    break;
}
// useful when multiple matches have the same consequence

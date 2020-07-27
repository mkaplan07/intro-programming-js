function foo() {
  console.log(bar);
}

foo();

/*
ReferenceError: bar is not defined
at foo (error.js:2:15) – line 2, column 15
at Object.<anonymous> (error.js:5:1)
* * * note that lines are not 0-indexed * * *
*/

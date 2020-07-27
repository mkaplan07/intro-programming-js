function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6)); // 8

/*
                    6
            5               4 returns 3 (1, 1, 1)
       4        3
    3    2    2   (1)
  2(1) (1)0 (1)0
(1)0
*/

function doMath(x, znak, y) {
  if (znak == '+') {
    return x + y;
  }
  if (znak == '-') {
    return x - y;
  }
  if (znak == '*') {
    return x * y;
  }
  if (znak == '/') {
    return x / y;
  }
  if (znak == '%') {
    return x % y;
  }
  if (znak == '^') {
    var result = 1;
    for (var i = 0; i < y; i++) {
      result *= x;
    }
    return result;
  }
  if (znak == '!') {
    fact(x);
    fact(y);
    // fact(y);
  }
}

function fact(n) {
  var res = 1;
  for (var i = 1; i <= n; i++) {
    res *= i;
  }
  console.log(res);
}
console.log(doMath(5, '+', 2));
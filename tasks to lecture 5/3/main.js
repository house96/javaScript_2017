var arr1 = ['eeee', 56, 64, 2, 'yooou', 0, 300000],
    arr2 = [100, 12, 44, 'www', 'html', 77, 588],
    result = 0;

function comparisonArrays(x, y) {
  var a = sum(x);
  var b = sum(y);
  // console.log(a);
  // console.log(b);

  if (a > b) {
    return x;
  } else {
    return y;
  }
}

function sum(g) {
  var x = new Array(g);
  console.log(g.lenght);
  for (var i = 0; i < x.lenght; i++) {
    if (typeof x[i] === 'number') {
      console.log(x[i]);
      result += x[i];
    }
    // console.log(result);
    return result;
  }
}

console.log(comparisonArrays(arr1, arr2));
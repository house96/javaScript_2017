function map(fn, array) {
  var arr = [];
  arr = arr.concat(array);
  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    console.log(fn(arr[i]));
  }

  return arr;
}

function square(x) {
  return x * x;
}


map(square, [5, 10, 30, 4, 27]);
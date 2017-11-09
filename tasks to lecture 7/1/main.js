function sequence(x, y) {
  var start = x || 0,
    step = y || 1;

  return increment(start, step);
}

function increment(start, step) {
  console.log(start += step);
  return sequence(start, step);
}


//
sequence(2, 3);
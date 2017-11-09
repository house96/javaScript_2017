function sequence(x, y) {
  var start = x || 0,
    step = y || 1;

  if (step == 1) {
    increment(start, step);

  } else {
    for (var i = 0; i < step; i++) {

      start = increment(start, step);
    }
  }

}

function increment(start, step) {

  console.log(start += step);
  return start;

}

//
sequence(2, 3);
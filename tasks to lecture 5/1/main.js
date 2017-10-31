
function fillingArray(arr, m) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
    for(var j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random()*50);
    }
  }
console.log(arr);
}

function creatArray(n, m) {
  var arr = new Array(n);
    fillingArray(arr, m);
}
creatArray(9, 6);
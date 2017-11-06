function fofoFunction() {
<<<<<<< HEAD
  var result = new Array();

  for (var i = 0; i < arguments.length; i++) {
    var centr = Math.ceil(arguments[i].length / 2 - 1);

    if (arguments[i].length % 2 !== 0) {
      result.push(arguments[i][centr]);
    }
    else {
      result = result.concat(arguments[i].splice(centr, 2));
    }

  }
      return result;
}

console.log(fofoFunction([1, 2, 3], [3, 6, 3223], [2, 8, 5, 7, 457, 457, 4], [22, 77, 99, 44]));
=======
  result = new Array();

  for (var i = 0; i <  arguments.length; i++) {
    var centr = Math.ceil(arguments[i].length / 2 - 1);

    if(arguments[i].length % 2 !== 0) {
       result.push(arguments[i][centr]);
    } if(arguments[i].length % 2 == 0) {
      result = result.concat(arguments[i].splice(centr, 2));
    }
  
}

}

fofoFunction([1, 2, 3], [3, 6, 3223], [2, 8, 5, 7, 457, 457, 4], [22, 77, 99, 44]);
console.log(result);
>>>>>>> 9878ed490dc0a78a249fb5f736919df6695f24b1

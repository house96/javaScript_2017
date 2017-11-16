function Calc(x) {
  
  }
  Calc.prototype.render = function(x) {
    console.log(x);
  }

  Calc.prototype.clear = function(x) {
   return this.render(0);
  }

function Calc2(x, y) {
  this.Sum = function(x, y) {
    var n = x + y;
    return n*n;
  }
  this.Div = function(x, y) {
    var n = x / y;
    return n*n;
  }
  this.Mul = function(x, y) {
    var n = x * y;
    return n*n;
  }
}
Calc2.prototype = new Calc;

function Calc3() {
  this.arr = function(x){
  var x = new Array(200);
  for(var i = 0; i <x.length; i++) {
    x[i] = Math.floor(Math.random() * 50);
    }
    return x;
  }
  this.reinit = function(){
    return this.arr.reverse();
  }
}

Calc3.prototype = new Calc2;

function Calc4() {}
Calc4.prototype = new Calc3;


Sum(3);

var n = 15,
    m = 10,
    A = new Array(n),
    sum = [];
    max = 0;
    min = Infinity;
    
for(var i = 0; i < A.length; i++){
  A[i] = new Array(m);
  sum[i] = 0;

  for(var j = 0; j < A[i].length; j++){
    A[i][j] = Math.floor(Math.random()*101);
    sum[i] += A[i][j];
  } 
  
  if(max < sum[i]){
    max = sum[i];
    var g = i;
  }

   if(min > sum[i]){
    min = sum[i];
    var h = i; 
  }
}

var hub = A[g];
A[g] = A[h];
A[h] = hub;


 console.log(sum);
 console.log(max);
 console.log(min);

 console.log(A[g]);
 console.log(A[h]);
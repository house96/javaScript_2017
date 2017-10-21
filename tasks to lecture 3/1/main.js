var A = [23,1,2,52,5,34,23,6,246,436],
    B = [],
    g =  0;

for(var i = 0; i < A.length; i++){
  for(var j = 2; j < A[i] || A[i] == 2; j++){
    if(A[i]%j == 0 && A[i] != 2) {
      break;
    }

      B[g] = A[i];
      g++;
      break;
     
    }
  }
console.log(B);
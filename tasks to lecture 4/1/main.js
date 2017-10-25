var A = [23,1,2,52,5,34,23,6,246],
    hub;

for(var i = 0; i < A.length-1; i++){
  hub = A[i];
  A[i] = A[i + 1];
  A[i + 1] = hub;
  i++;
}

console.log(A);
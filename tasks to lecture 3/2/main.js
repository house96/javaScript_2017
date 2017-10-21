var A = [23,1,2,52,5,34,23,6,246,436],
    B = [],
    max = 0,
    min = Infinity,
    g = 0;

  
    for(var i = 0; i < A.length; i++){
      if(A[i] > max){
        max = A[i];
      }

      else if(A[i] < min){
        min = A[i];
      }
    }
    
    for(var j = 0; j < A.length; j++){
      if(A[j] == min){
          do{
            B[g] = A[j];
            g++;
            j++;
          }while(A[j] <= max);
          break;
      }
    }

  for(var h = 0; h < A.length; h++){
    if(A[h] == min){
      A[h] = max;
    }
    else if(A[h] == max){
      A[h] = min;
    }

  }
console.log(A, B, min, max);
var A = [23,1,2,52,5,34,23,6,246,436],
    min = Infinity,
    result = 0;
    


for(var i = 0; i < A.length; i++){
    if(A[i] < min){
        min = A[i];

    }
    var differsFromMin = min + 5;
}

for(var j = 0; j < A.length; j++){
    if(A[j] == differsFromMin){
        result += 1;
    }
}
console.log(result);
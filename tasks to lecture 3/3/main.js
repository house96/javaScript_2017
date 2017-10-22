var A = [23,1,2,52,5,34,23,6,246,436],
    save;
for(var i=0,j=A.length-1; i<j; i++,j--)
{
    save = A[j];
    A[j] = A[i];
    A[i] = save;
}
   console.log(A);        

  
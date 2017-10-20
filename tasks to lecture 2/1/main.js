var A = +prompt('Введите первое число ...'),
    B = +prompt('Введите второе число, оно должно быть больше чем первое ...'),
    sum = 0;

  if(A >= B || isNaN(A) || isNaN(B)) {
    sum = 'Данние введено не коректно ¯\_(ツ)_/¯';
  }
  else {
    for(var i = A;  i <= B; i++){
      sum = sum + i;
      if(i%2 != 0){
        console.log('нечетное число: ' + i);
      }
    }
  }
alert(sum);




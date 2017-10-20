var inputValue = +prompt('Введите номер товара...'),
    result = 1;

  if(isNaN(inputValue)) {
    result = 'Данние введено не коректно ¯\_(ツ)_/¯';
  }
  else {
    for(var i= 1; i <= inputValue; i++) {
      result *= i;
    }
  }
alert(result);




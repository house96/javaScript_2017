var height = +prompt('Введите висоту прямоугольника '),
    width = +prompt('Введите ширину прямоугольника ');

for(var i = 0; i<height; i++) {
  for(var j = 0; j<width; j++){
    document.write('<span>*&nbsp</span>');
  }
document.write('<br/>');
}



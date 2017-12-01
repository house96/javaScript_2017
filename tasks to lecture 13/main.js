(function () {
  var btn = document.querySelector('.btn');
  var input = document.querySelectorAll('.input');
  var redCheckbox = document.querySelectorAll('.input-red');
  var blueCheckbox = document.querySelectorAll('.input-blue');
  var isBlue = true;

  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('change', function inputStatus(e) {
      if (this.classList.contains('input-red')) {
        statRed();
      }
      if (this.classList.contains('input-blue')) {
        statBlue();
      }
    })
  };


  function statBlue() {
    for (var i = 0; i < blueCheckbox.length; i++) {

      if (blueCheckbox[i].checked) {
        removeEventBtn();
        return isBlue = false;

      }
      isBlue = true;
      statRed();
    }
  };


  function statRed() {
    var sumRed = 0;

    for (var i = 0; i < redCheckbox.length; i++) {
      if (redCheckbox[i].checked) {

        sumRed += 1;
      }
    }
    analisis(sumRed);
  };


  function analisis(sumRed) {
    if (sumRed > 1 && isBlue) {

      return btn.addEventListener('click', printSomeText);
    }
    removeEventBtn();
  };


  function printSomeText() {
    console.log("My code works, but I don't know why");
  };

  function removeEventBtn() {
    btn.removeEventListener('click', printSomeText);
  };
})();

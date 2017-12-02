(function () {
  var block = document.querySelector('.block');
  var btn = document.querySelector('.btn');
  var input = document.querySelectorAll('.input');
  var redCheckbox = document.querySelectorAll('.input-red');
  var blueCheckbox = document.querySelectorAll('.input-blue');
  var isBlue = true;


  window.addEventListener("load", function () {
    for (var i = 0; i < input.length; i++) {
      input[i].addEventListener('change', function inputStatus(e) {
        this.classList.contains('input-red') ? statRed() : statBlue();
      });
    };
    block.addEventListener('mousedown', clickBlock);
  });

  function statBlue() {
    for (var i = 0; i < blueCheckbox.length; i++) {

      if (blueCheckbox[i].checked) {
        removeEventBtn();
        return isBlue = false;
      };
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
    };
    analisis(sumRed);
  };

  function analisis(sumRed) {
    (sumRed > 1 && isBlue)? btn.addEventListener('click', printSomeText) : removeEventBtn();
  };

  function printSomeText() {
    console.log("My code works, but I don't know why");
  };

  function removeEventBtn() {
    btn.removeEventListener('click', printSomeText);
  };

  function clickBlock() {
    if (event.shiftKey) {
      drag(event);
      block.addEventListener('mouseup', onmouseup);
    }
  };

  function drag(e) {
    block.style.left = e.pageX - block.offsetWidth / 2 + 'px';
    block.style.top = e.pageY - block.offsetHeight / 2 + 'px';

    document.addEventListener('mousemove', drag)
  };

  function onmouseup() {
    document.removeEventListener('mousemove', drag);

  };
})();

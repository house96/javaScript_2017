(function () {

  window.onload = function () {
    var position = {};
    var block = document.querySelector('.block');


    block.addEventListener('click', function (event) {

      position.startX = event.clientX;
      position.startY = event.clientY;
      position.blockX = event.target.offsetLeft;
      position.blockY = event.target.offsetTop;

      document.addEventListener('mousemove', move);

      document.addEventListener('contextmenu', function (event) {
        event.preventDefault();

        document.removeEventListener('mousemove', move);
      });
    });



    function move(event) {
      console.log('mousemove');

      var diffX = event.clientX - position.startX,
        diffY = event.clientY - position.startY;

      block.style.left = (position.blockX + diffX) + "px";
      block.style.top = (position.blockY + diffY) + "px";
    }

    document.addEventListener('mousemove', function (event) {
      var ckickY = event.clientY;
      var ckickX = event.clientX;

      var blockH = block.offsetHeight;
      var blockW = block.offsetWidth;
      var offsetBlockLeft = block.offsetLeft;
      var offsetBlockTop = block.offsetTop;
      var offsetBlockRight = block.offsetLeft + blockW;
      var offsetBlockBottom = block.offsetTop + blockH;

      var marginTop = offsetBlockTop - ckickY;
      var marginLeft = offsetBlockLeft - ckickX;
      var marginRight = ckickX - offsetBlockRight;
      var marginBottom = ckickY - offsetBlockBottom;



      if (marginLeft < 20 && marginLeft >= 0 && ckickY > block.offsetTop && ckickY < block.offsetTop + blockH) {
        if ((offsetBlockLeft + blockW) >= (window.innerWidth - marginLeft)) {
          return;
        }
        block.style.left = offsetBlockLeft + marginLeft + 'px';
      }


      if (marginRight < 20 && marginRight >= 0 && ckickY > block.offsetTop && ckickY < block.offsetTop + blockH) {
        if ((offsetBlockLeft - marginRight) <= 0) {
          return;
        }
        block.style.left = offsetBlockLeft - marginRight + 'px';
      }


      if (marginTop < 20 && marginTop >= 0 && ckickX > block.offsetLeft && ckickX < block.offsetLeft + blockW) {
        if ((offsetBlockTop + blockH) >= (window.innerHeight - marginTop)) {
          return;

        }
        block.style.top = offsetBlockTop + marginTop + 'px';

      }

      if (marginBottom < 20 && marginBottom >= 0 && ckickX > block.offsetLeft && ckickX < block.offsetLeft + blockW) {
        if ((offsetBlockTop - marginBottom) <= 0) {
          return;
        }
        block.style.top = offsetBlockTop - marginBottom + 'px';
      }
    })
  }

})();

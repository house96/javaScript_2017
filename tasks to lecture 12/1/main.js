(function () {
  var block = document.querySelector('.block');
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  var blockHeight = block.style.height = Math.floor(Math.random() * windowHeight) + "px";
  var blockWidth = block.style.width = Math.floor(Math.random() * windowWidth) + "px";
  block.style.position = "fixed";

  block.style.top = windowHeight / 2 - parseInt(blockHeight) / 2 + "px";
  block.style.left = windowWidth / 2 - parseInt(blockWidth) / 2 + "px";

  setInterval(function color() {
    var fill = '#' + (Math.floor(Math.random() * 1000000))
    return block.style.backgroundColor = fill;
  }, 500);
})();

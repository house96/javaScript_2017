window.onload = function () {
  var sum = {};

  var control = document.querySelectorAll('.input');
  var view = document.querySelector('#view');

  for (var i = 0; i < control.length; i++) {
    control[i].addEventListener('click', function () {

      var key = event.target.dataset.index;
      if (sum[key] == undefined) {
        sum[key] = 0;
      }

      sum[key] += 1;

      render()
    })
  }

  function render() {
    var str = "";
    for (item in sum) {
      str += '<p>' + item + ' : ' + sum[item] + ' <button class="remove"' + 'data-attr="' + item + '"' + '>-</button>' + '</p>' + '<hr>';
    }
    view.innerHTML = str;
    console.log(item);
    remove();
  }



  function remove() {

    var btn = document.querySelectorAll('.remove');
    // console.log(item);
    for (var i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function () {

        var key = event.target.dataset.attr;
        sum[key] -= 1;
        if (sum[key] <= 0) {
          delete sum[key];
        }
        render()
      })
    }
  }


}

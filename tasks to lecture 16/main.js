window.onload = function () {
  var sum = {};

  var control = document.querySelectorAll('.input');
  var view = document.querySelector('#view');

  for (var i = 0; i < control.length; i++) {
    control[i].addEventListener('click', function(){

     var key = event.target.dataset.index;
      if(sum[key] == undefined) {
        sum[key] = 0;
      }

      sum[key] += 1;

      render()
    })
  }
  function render() {
    var str = "";
    for (item in sum) {
      str += item +' : ' + sum[item] + '   <button class="remove" data-index ="'+item+'">-</button>' +'<hr>'
      
    }
    view.innerHTML = str;
  }
  // var btn = document.querySelector('.remove');
  // for(var j = 0; j < btn; j++){
  //   btn[j].addEventListener('click', remove);
  //   console.log(count);
  // }

  // function remove() {
  //   var count = event.target.dataset.index;
  //   console.log(count);
  // }
}

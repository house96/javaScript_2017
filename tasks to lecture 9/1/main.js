 const reverse = (n) => {
  var result = ""
  for(i = n.length -1; i >= 0; i--) {
    result += n[i];
  }
  return result;
}

console.log(reverse('парад'));

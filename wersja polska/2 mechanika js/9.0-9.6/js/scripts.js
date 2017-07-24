  var add = document.getElementById('addElem');
  var list = document.getElementById('list');

add.addEventListener('click', function(add) {
  var element = document.createElement('li');
  var number = document.getElementsByTagName('li');
  element.innerHTML = 'item ' + (number.length);
  list.appendChild(element);
});
  
  
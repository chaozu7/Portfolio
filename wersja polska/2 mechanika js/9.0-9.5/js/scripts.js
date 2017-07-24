document.addEventListener("DOMContentLoaded", function() {
  var batony = document.getElementsByTagName('button');
  
  for (var i = 0; i < batony.length; i++) {
    batony[i].classList.add('button');
    console.log(batony[i].innerText);
  }
});

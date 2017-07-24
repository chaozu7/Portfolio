function drawTree(rows) {

var i = 1, tree;

while (i <= rows) {
  var tree = '';

  for (var j=0; j < rows - i; j++) {
  	tree +=' ';
  }
  
  for (var x=0; x < i * 2 - 1; x++) {
    tree += '*';
    
  }
  
  console.log(tree);
  i++;
  
  }
}

drawTree(6)
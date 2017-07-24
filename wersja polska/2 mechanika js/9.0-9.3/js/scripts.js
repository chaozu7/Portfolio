var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur ="triceratops"
var dinosaurUpper = dinosaur.toUpperCase();


var textChanged = text.replace( 'Velociraptor', dinosaurUpper );


// console.log(textChanged.length);

var partOf = textChanged.slice(0,72);

console.log(partOf);


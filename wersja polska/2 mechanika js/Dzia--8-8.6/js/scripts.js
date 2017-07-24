var a = prompt('Select number a:');
var b = prompt('Select number b:');
var value = (a*a)+(2*a*b)-(b*b);

if (value < 0) {
  alert('Negative value:' +value);
  console.log('Negative value');
} else if (value > 0) {
  alert('Plus Value:' +value);
  console.log('Plus Value:');
} else {
  alert('Value is zero');
  console.log('Value is zero');
}
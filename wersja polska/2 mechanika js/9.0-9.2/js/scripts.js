var femaleName = ['Kamila', 'Beata', 'Maria', 'Jola', 'Natalia', 'Weronika'];
var maleName = ['Norbert', 'Jan', 'Alcio', 'Darek', 'Krzysiek', 'Marcin', 'Karol'];
var commonTable = femaleName.concat(maleName);

console.log(commonTable);



var girlName = 'Wanda';

if (commonTable.indexOf(girlName) === -1){
  var x= commonTable.push('Wanda');
}

var boyName = 'Jasper';

if (commonTable.indexOf(boyName) === -1) {
  var x = commonTable.push('Jasper');
  
}


console.log(commonTable);


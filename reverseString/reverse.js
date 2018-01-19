var allArguments = process.argv.slice(2);

var revArguments = [];
var string = '';
function reverse(allArguments) {
  for (var i = 0; i <= allArguments.length - 1; i++) {
    string = allArguments[i];
    var stringRev = '';
    for (var j = string.length - 1; j >= 0 ; j--) {
      stringRev += string[j];
    }
    revArguments.push(stringRev);

  }
return revArguments;
}

console.log(reverse(allArguments));
/*console.log(revArguments)*/
/*console.log(reverse(string));*/









/*var test = 'house';
var reverse = '';
for (var i = test.length - 1; i >= 0 ; i--) {
      reverse += test[i];
    }
var test2 = [];
test2.push(reverse);
console.log(test2)*/
/*var reverse += ;
reverse.push(test[1]);
reverse.push(test[2]);*/


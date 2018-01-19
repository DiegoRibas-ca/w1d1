var allArguments = process.argv.slice(2);

var pigLatinFinal = [];
var string = '';
function pigLatin(allArguments) {
  for (var i = 0; i <= allArguments.length - 1; i++) {
    string = allArguments[i];
    var stringRev = [];
    for (var j = 0;j <= string.length - 1; j++) {
      stringRev.push(string[j]);
    }
    stringRev.push(stringRev[0]);
    stringRev.shift();
    stringRev.push('ay');
    pigLatinFinal.push(stringRev.join(''));

  }

return pigLatinFinal;
}

console.log(pigLatin(allArguments));


/* transform the word in a array
push the first element to be the last
shift first element
push ay
use join to become a string and give it to a new array
*/

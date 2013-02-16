/*
The maker function that returns instances of the word object.
If an argument is given, the letters property will be initialized
to that. Else, the letters property is initialized to an empty
string.
*/

var makeWord = function (initialLetters) {
  //Defining the word object that is to be returned.
  var word = {
    letters : initialLetters || ""
  };
  _.extend(word, makeWord.sharedWordMethods);
  return word;
};

/*The methods that are shared between all instances of the word 
object.
*/
makeWord.sharedWordMethods = {
  add: function (lettersToAdd) {
    this.letters += lettersToAdd;
  }
};

//Testing the function.
var testWord = makeWord("What up cuz.");
alert(testWord.letters);
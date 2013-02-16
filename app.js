/*
The maker function that returns instances of the word object.
If an argument is given, the letters property will be initialized
to that. Else, the letters property is initialized to an empty
string.
*/

var makeWord = function (initialLetters) {
  //Defining the word object that is to be returned.
  var word = {
    letters : initialLetters || "",
    add : sharedWordMethods.add
  };
  return word;
};

/*The methods that are shared between all instances of the word 
object.
*/
var sharedWordMethods = {
  add: function (lettersToAdd) {
    this.letters += lettersToAdd;
  }
};

//Testing the function.
var testWord = makeWord("What up cuz.");
alert(testWord.letters);
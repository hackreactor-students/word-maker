/*
The maker function that returns instances of the word object.
If an argument is given, the letters property will be initialized
to that. Else, the letters property is initialized to an empty
string.
*/

var makeWord = function (initialLetters) {
  //Defining the word object that is to be returned.
  var word = Object.create(wordPrototype);
  word.letters = initialLetters || "";
  return word;
};
/*The prototype that word objects delegate failed look-ups to.
letters is a property that should not be taken from the property because
each instance of the word object should have its own letters property.
*/
var wordPrototype = {
  add: function (lettersToAdd) {
    this.letters += lettersToAdd;
  }
};

//Testing the function.
var testWord = makeWord("What up cuz.");
alert(testWord.letters);
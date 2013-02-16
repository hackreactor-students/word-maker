/*
The maker function that returns instances of the word object.
If an argument is given, the letters property will be initialized
to that. Else, the letters property is initialized to an empty
string.
*/
var Word = function (initialLetters) {
  this.letters = initialLetters || "";
  this.add = add;
};

var add = function (lettersToAdd) {
  this.letters += lettersToAdd;
};

//Testing the function.
var testWord = new Word();
alert(testWord.letters);
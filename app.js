var makeWord = function (initialLetters) {
  var word = {
    letters : initialLetters,
    add : function (lettersToAdd) {
      letters += lettersToAdd;
    }
  };
  return word;
}

var testWord = makeWord("The makeWord function worked.");
alert(testWord.letters);
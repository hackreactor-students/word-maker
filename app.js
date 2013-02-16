var makeWord = function (initialLetters) {
  var word = {
    letters : initialLetters || "",
    add : function (lettersToAdd) {
      letters += lettersToAdd;
    }
  };
  return word;
}

var testWord = makeWord();
alert(testWord.letters);
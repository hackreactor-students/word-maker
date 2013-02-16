var makeWord = function () {
  var word = {
    letters : "",
    add : function (lettersToAdd) {
      return letters += lettersToAdd;
    }
  };
  return word;
}
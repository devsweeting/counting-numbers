var array = [];

var vowels = ["a", "e", "o", "u", "i"]
// count numbers
function countsByOne(userInputStop, userInputCount) {
  for (var i = 0; i <= userInputStop; i += userInputCount) {
    array.push(i);
  };
};

// Word puzzle function
function removeVowels(sentence) {
  var sentenceArray = sentence.split('');
    for (var i = 0; i < sentenceArray.length; i++) {
      if(vowels.indexOf(sentenceArray[i])>=0)
      {sentenceArray[i] = "-"}

      }

      // if (sentenceArray[i] === "a" || sentenceArray[i] ===  "e"  || sentenceArray[i] ===  "i"  || sentenceArray[i] ===  "o"  || sentenceArray[i] ===  "u") {
      //   sentenceArray[i] = "-";
      // }
    console.log(sentenceArray);
    return sentenceArray.join('');
  };

// count numbers
$(document).ready(function() {
  $("#userInput").submit(function(event) {
     countsByOne($("input#inputCountTo").val(), parseInt($("input#inputCountBy").val()));

     $("#output").text(array.join(' '));

     event.preventDefault();
  });

  // Word puzzle
  $("#Sentence").submit(function(event) {
    var result = removeVowels($("input#userSentence").val());
    console.log(result);
    $("#outputSentence").text(result)
    event.preventDefault();
  });
});

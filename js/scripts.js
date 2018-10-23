
function countsByOne(userInputStop, userInputCount) {
  console.log("Stop " + userInputStop);
  console.log("Count by " + userInputCount);
  for (var i = 0; i <= userInputStop; i += userInputCount) {
    console.log(i);
  };
};


$(document).ready(function() {
  $("#userInput").submit(function(event) {
     countsByOne($("input#inputCountTo").val(), parseInt($("input#inputCountBy").val()));

    event.preventDefault();
  });
});

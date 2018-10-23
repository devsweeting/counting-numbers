var array = [];

function countsByOne(userInputStop, userInputCount) {
  for (var i = 0; i <= userInputStop; i += userInputCount) {
    array.push(i);
  };
};


$(document).ready(function() {
  $("#userInput").submit(function(event) {
     countsByOne($("input#inputCountTo").val(), parseInt($("input#inputCountBy").val()));

     $("#output").text(array.join(' '));
    
     event.preventDefault();
  });
});

$(document).ready(function(){
  $("#blanks form").submit(function(event){

    var sentenceInput = $("#sentence").val().split(" ");
    var finalSentence = [];
    sentenceInput.forEach(function(word){
      if (word.length >= 3) {
        finalSentence.push(word);
      }
    });
    $(".output").text(finalSentence.reverse().join(" "));

    event.preventDefault();
  });
});

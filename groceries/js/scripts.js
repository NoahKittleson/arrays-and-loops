$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var groceries = ["item1", "item2", "item3", "item4"];

    var inputs = groceries.map(function(grocery) {
      return $("#" + grocery).val().sort().toUpperCase();
    });
    // inputs.sort();
    inputs.forEach(function(input) {
      if (input) {
        $(".output").append("<li>" + input + "</li>");
      }
    });
    event.preventDefault();
  });
});

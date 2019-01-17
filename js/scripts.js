$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var music = parseInt($("#music")).val();
    var food = $("input:radio[name=food-type]:checked").val();
    var color = $("#color").val();

    $(".name").text(nameInput);
    $(".music").text(music);
    $(".food").text(food);
    $(".color").text(color);

    $("#results").show();

    event.preventDefault();
  });
});

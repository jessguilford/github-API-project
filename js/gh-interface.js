var getRepos = require("./../js/gh.js").getRepos;
var userArray = require("./../js/gh.js").userArray;

$(document).ready(function() {
  $(".is-error").hide();
  $("#search").submit(function(event) {
    event.preventDefault();
    $("#output").empty();
    var input = $("#search-input").val();
    getRepos(input);

    if(getRepos(input) === false) {
      $(".is-error").fadeToggle();
      // Q: This will trigger if I test for ===true, but not ===false.
    }
  });
});

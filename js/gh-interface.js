var getRepos = require("./../js/gh.js").getRepos;
var userArray = require("./../js/gh.js").userArray;

$(document).ready(function() {
  console.log("basic setup is working");
  $(".is-error").hide();
  $("#search").submit(function(event) {
    event.preventDefault();
    $("#output").empty();
    var input = $("#search-input").val();
    getRepos(input);

    if(!(getRepos(input) === "error")) {
      // This seems to always trigger as being true
    }
    console.log(input);
  });
});

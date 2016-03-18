var getRepos = require("./../js/gh.js").getRepos;
// var printRepos = require("./../js/gh.js").printRepos;
var userArray = require("./../js/gh.js").userArray;

$(document).ready(function() {
  console.log("basic setup is working");
  $(".is-error").hide();
  $("#search-submit").click(function() {
    var input = $("#search-input").val();
    getRepos(input);

    if(!(getRepos(input) === false)) {
      $(".is-error").show();
    }
    console.log(input);
  });
});

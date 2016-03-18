var getRepos = require("./../js/gh.js").getRepos;
// var printRepos = require("./../js/gh.js").printRepos;
var userArray = require("./../js/gh.js").userArray;

$(document).ready(function() {
  console.log("basic setup is working");
  $("#search-submit").click(function() {
    var input = $("#search-input").val();
    getRepos(input);
    console.log(input);
  });
});

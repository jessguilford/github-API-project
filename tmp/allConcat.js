var getRepos = require("./../js/gh.js").getRepos;
// var printRepos = require("./../js/gh.js").printRepos;
var userArray = require("./../js/gh.js").userArray;

$(document).ready(function() {
  var input = "daneden";
  console.log("basic setup is working");
  $("#search-submit").click(function() {
    getRepos(input);
    // printRepos();
  });
});

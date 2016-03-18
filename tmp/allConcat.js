var getRepos = require("./../js/gh.js").getRepos;
var renderInfo = require("./../js/gh.js").renderInfo;

$(document).ready(function() {
  var input = "daneden";
  console.log("basic setup is working");
  $("#search-submit").click(function() {
    getRepos(input);
  });
});

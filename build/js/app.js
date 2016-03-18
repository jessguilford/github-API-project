(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "05666ec5e7c6afa1db533ecb8e369a718bc00b53";

},{}],2:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;

// Create new constructor to hold simplified repository info
function Repo(name, description) {
  this.name = name;
  this.description = description;
}

// Method to print a Repo to document
Repo.prototype.render = function () {
  var output = document.getElementById('output');
  var renderName = this.name;
  if (this.description === "") {
    var renderDesc = "Description not available";
  } else {
    var renderDesc = this.description;
  }
  output.insertAdjacentHTML('afterbegin', '<li><ul class="repo-name">' + '<li><strong>' + renderName + '</strong></li>' + '<li>' + renderDesc + '</li>' + '</ul></li>');
};

exports.getRepos = function(input) {
  var repoArray = [];
  $.get('https://api.github.com/users/' + input + "/repos" + '?access_token=' + apiKey).then(function(response) {
    repoArray.push(response);

    for(var i = 0; i < repoArray.length; i++) {
      for(var j = 0; j < repoArray[i].length; j++) {
        // Loop through the response from the API, and convert to new simplified Repo object
        var repoName = repoArray[i][j].name;
        var repoDescription = repoArray[i][j].description;
        var repoItem = new Repo(repoName, repoDescription);
        repoItem.render();
        // Run render method on each new Repo object
      }
    }

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/gh.js":2}]},{},[3]);

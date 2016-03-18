(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "05666ec5e7c6afa1db533ecb8e369a718bc00b53";

},{}],2:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;

exports.getRepos = function(input) {
  var repoArray = [];
  $.get('https://api.github.com/users/' + input + "/repos" + '?access_token=' + apiKey).then(function(response) {
    repoArray.push(response);

    for(var i = 0; i < repoArray.length; i++) {
      for(var j = 0; j < repoArray[i].length; j++) {
        var output = document.getElementById('output');
        var repoName = repoArray[i][j].name;
        var repoDescription = repoArray[i][j].description;
        // output.innerHTML = output.innerHTML + '<li><ul class="repo-name">' + repoArray[i][j].name + '</ul></li>';
        output.insertAdjacentHTML('afterbegin', '<li><ul class="repo-name">' + '<li>' + repoName + '</li>' + '<li>' + repoDescription + '</li>' + '</ul></li>')
      }
    }

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};


// exports.printRepos = function(userArray) {
//   for(var i=1; i < userArray.length; i++) {
//     console.log(userArray[i]);
//   }
// };

//
// exports.renderInfo = function(response) {
//   var userName = response.name;
//   console.log(userName);
// }
// exports.userArray = userArray;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/gh.js":2}]},{},[3]);

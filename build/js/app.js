(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "05666ec5e7c6afa1db533ecb8e369a718bc00b53";

},{}],2:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;

// Create new constructor to hold simplified repository info
function Repo(name, description, url, watchers) {
  this.name = name;
  this.description = description;
  this.url = url;
  this.watchers = watchers;
}

// Method to print a Repo to document
Repo.prototype.render = function () {
  var output = document.getElementById('output');
  var renderName = this.name;
  var renderUrl = '<a href="' + this.url + '"> View on Github </a>';
  var renderWatchers = (this.watchers).toString();
  if (this.description === "") {
    var renderDesc = "Description not available";
  } else {
    var renderDesc = this.description;
  }

  output.insertAdjacentHTML('afterbegin', '<li><ul class="repo-item">' + '<li class="repo-name">' + renderName + '</li>' + '<li class="repo-info">' + renderDesc + '</li>' + '<li class="repo-url">' + renderUrl + '</li>' + '<li class="repo-watchers">' + renderWatchers + '</li>' + '</ul></li>');
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
        var repoURL = repoArray[i][j].url;
        var repoWatchers = repoArray[i][j].watchers_count;
        var repoItem = new Repo(repoName, repoDescription, repoURL, repoWatchers);
        repoItem.render();
        // Run render method on each new Repo object
      }
    }

  }).fail(function(error) {
    console.log(error.responseJSON.message);
    return false;
  });
  return true;
};

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/gh.js":2}]},{},[3]);

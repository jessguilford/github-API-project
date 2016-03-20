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
        var repoURL = repoArray[i][j].html_url;
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

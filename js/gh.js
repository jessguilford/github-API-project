var apiKey = require("./../.env").apiKey;

// Create object to hold simplified repository info
function Repo(name, description) {
  this.name = name;
  this.description = description;
}

// Method to print a Repo to document
Repo.prototype.render = function () {
  var output = document.getElementById('output');

  output.insertAdjacentHTML('afterbegin', '<li><ul class="repo-name">' + '<li><strong>' + this.name + '</strong></li>' + '<li>' + this.description + '</li>' + '</ul></li>');
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

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

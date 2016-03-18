var apiKey = require("./../.env").apiKey;

exports.getRepos = function(input) {
  var repoArray = [];
  $.get('https://api.github.com/users/' + input + "/repos" + '?access_token=' + apiKey).then(function(response) {
    repoArray.push(response);

    for(var i = 0; i < repoArray.length; i++) {
      console.log(repoArray[i]);
      for(var j = 0; j < repoArray[i].length; j++) {
        console.log(repoArray[i][j].name);
      }
    }

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};


// var output = document.getElementById('output');
// output.innerHTML = output.innerHTML + "<li>" + userArray[i][j].name + "</li>";

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

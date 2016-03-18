var apiKey = require("./../.env").apiKey;

exports.getRepos = function(input) {
  var userArray = [input];
  console.log(userArray);
  $.get('https://api.github.com/users/' + input + '?access_token=' + apiKey).then(function(response) {
    userArray.push(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });

  for(var i = 0; i < userArray.length; i++) {
    console.log(userArray[i]);
  }
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
exports.userArray = userArray;

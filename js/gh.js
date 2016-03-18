var apiKey = require("./../.env").apiKey;

exports.getRepos = function(input) {
  $.get('https://api.github.com/users/' + input + '?access_token=' + apiKey).then(function(response) {
    var userName = response.name;
    console.log(userName);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
//
// exports.renderInfo = function(response) {
//   var userName = response.name;
//   console.log(userName);
// }

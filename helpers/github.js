const request = require('request');
const config = require('../config.js');

let getReposByUsername = (handle, callback) => {
  // Uses the request module to request repos for a specific
  // user from the github API
  let options = {
    url: 'https://api.github.com/users/' + handle + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, callback);
}

module.exports.getReposByUsername = getReposByUsername;
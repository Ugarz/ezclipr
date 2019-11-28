const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

var rp = require('request-promise');

const api = require('../api.js');
const endpoint = api['users'];

/**
 * getUser client
 */
function getUser(token, player){
  console.log('getUser');
  var options = {
    uri: `${endpoint.url}${player}`,
    method: endpoint.method,
    headers: { Authorization: `Bearer ${token}` },
    json: true,
  };

  return rp(options)
    .then(function(infos) { return infos.data[0]; })
    .catch(function(err) { console.error('whoopsy') });
}

module.exports = { getUser };

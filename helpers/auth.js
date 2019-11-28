const fetch = require('node-fetch');
const api = require('../api.js');
const auth = api['auth'];

/**
 * Authenticate client
 */
async function authenticate(){
  console.log('authenticate')
  return await fetch(auth.url, { method: auth.method })
    .then(res => res.json())
    .then(auth => auth.access_token);
}

module.exports = { authenticate };
const fetch = require('node-fetch');
const api = require('../api.js');
const auth = api['auth'];

async function fetchClips(){
  return await fetch(auth.url, {
    method: auth.method,
  })
    .then(res => res.json())
    .then(json => {
      console.log(json.access_token);
      return json.access_token;
    });
}

module.exports = {fetchClips};
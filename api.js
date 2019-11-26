const authBaseUrl = "https://id.twitch.tv/oauth2/token";
const baseUrl = "https://api.twitch.tv";
const credentials = {
  CLIENT_ID,
  SECRET
} = process.env

const api = {
  "auth": {
    "method": "post",
    "url": `${authBaseUrl}?client_id=${CLIENT_ID}&client_secret=${SECRET}&grant_type=client_credentials`
  }
}

module.exports = api;

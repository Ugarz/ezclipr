const cheerio = require('cheerio');
const rp = require('request-promise');
const fs = require('fs');

const api = require( '../api.js' );
const endpoint = api['clips'];


function fetchClips(token, { broadcasterId, gameId, clipId }, user) {
  const options = {
    uri: `${endpoint.url}`,
    method: endpoint.method,
    qs: {
      user_id: user.id,
      broadcaster_id: broadcasterId,
    },
    headers: { Authorization: `Bearer ${token}` },
    json: true,
  };

  return rp(options)
    .then((clips) => {
      return clips.data
    })
    .catch((err) => {
      console.error('whoopsy', err.response.body);
    });
}

function saveClips(clipsList) {
  console.log(`Saving ${clipsList.length} clips`);
  //TODO: Pour chaque url
  for (let index = 0; index < clipsList.length; index++) {
    const element = clipsList[index];
    const webPageUrl = element.url;
    console.log('webPageUrl', webPageUrl);
    const options = {
      uri: webPageUrl,
      method: 'get',
      json: true,
    };

    rp(options)
    .then(html => {
      // TODO: Parser le html de la page
      const $ = cheerio.load(html.toString())
      const src = $('div.highwind-video-player__container')
        .children('video');
      console.log(src)
    })
    .catch(err => console.log('error', error))
    // const dest = fs.createWriteStream(`../clips/${title}.mp4`);
    // buffer.pipe(dest);
  }
}

module.exports = { fetchClips, saveClips };
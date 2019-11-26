require('dotenv').config();

const fs = require('fs');
const fetch = require('node-fetch');

const { fetchClips } = require('./helpers/clips')

fetch(
  'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
).then(res => {
  const dest = fs.createWriteStream('./octocat.png');
  res.body.pipe(dest);
});

fetchClips()

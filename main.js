require('dotenv').config();

(async () => {
  // console.log('♫ I am the night rocker')
  // console.log('I wanna rock you all night long ♫')
  // console.log('♫ I am the night rocker')
  // console.log('I wanna love you in a song ♫')
  const { authenticate } = require('./helpers/auth')
  const { getUser } = require('./helpers/users')
  const { fetchClips, saveClips } = require('./helpers/clips')

  const token = await authenticate()
  const user = await getUser(token, process.env.TWITCH_USER || 'MamieNephy');
  const clips = await fetchClips(token, { broadcasterId: user.id }, user)

  await saveClips(clips);

})()


// highwind-video-player
// highwind-video-player__container
// #root > div > div > div > div.simplebar-scroll-content > div > div > main > div > div > div.tw-c-background-base.tw-elevation-3.tw-flex.tw-flex-column.tw-lg-flex-row > div.tw-flex-grow-1 > div > div.tw-absolute.tw-full-height.tw-full-width > div:nth-child(2) > div > div > div > div > video
const fetch = require('node-fetch');

const CLIENT_ID     = process.env.TWITCH_CLIENT_ID;
const CLIENT_SECRET = process.env.TWITCH_CLIENT_ID_SECRET;
const REDIRECT_URI  = process.env.REDIRECT_URI + "/auth/callback";

exports.callback = (req, res) => {
  fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}`,
    { method: 'POST' })
  .then(resp => resp.json())
  .then(data => {
    console.log("[DATA]: \n" + data);
    res.cookie('twitch_access_token', data.access_token, { expires: new Date(new Date().getTime()+21600000) });
    res.cookie('twitch_refresh_token', data.refresh_token, { expires: new Date(new Date().getTime()+21600000) });
    res.redirect('http://localhost:3001');
  })
  .catch(() => res.json({error: "Error shit !"}) );
}
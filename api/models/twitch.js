const fetch = require('node-fetch');

const CLIENT_ID = process.env.TWITCH_CLIENT_ID;

exports.twitch = (req, endpoint, version = 'helix') => {
  if (version === 'helix') {
    return fetch(endpoint, {
      method: 'GET',
      headers: {
        'Client-ID': CLIENT_ID,
        'Authorization': `Bearer ${req.params.token}`
      }
    });
  } else {
    return fetch(endpoint, {
      method: 'GET',
      headers: {
        'Client-ID': CLIENT_ID,
        'Authorization': `OAuth ${req.params.token}`,
        'Accept': 'application/vnd.twitchtv.v5+json'
      }
    });
  }
}
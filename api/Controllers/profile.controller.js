const fetch = require('node-fetch');
const { twitch } = require('../models/twitch');

exports.profile = (req, res) => {
  twitch(req, 'https://api.twitch.tv/kraken/user', 'kraken')
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    res.send(data);
  })
}
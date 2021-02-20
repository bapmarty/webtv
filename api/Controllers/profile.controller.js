const { twitch } = require('../models/twitch');

exports.profile = (req, res) => {
  twitch(req, 'https://api.twitch.tv/kraken/user', 'kraken')
  .then(resp => resp.json())
  .then(data => {
    res.send(data);
  })
}
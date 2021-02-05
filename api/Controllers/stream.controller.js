const { twitch } = require('../models/twitch');

const CHANNEL_ID = '27446517';

exports.stream = (req, res) => {
  twitch(req, 'https://api.twitch.tv/kraken/streams/' + process.env.CHANNEL_ID, 'kraken')
  .then(response => {return response.json()})
  .then(data => {
    res.status(200).send(data);
  });
}

exports.channel = (req, res) => {
  twitch(req, 'https://api.twitch.tv/kraken/channels/' + process.env.CHANNEL_ID, 'kraken')
  .then(response => {return response.json()})
  .then(data => {
    res.status(200).send(data);
  });
}
const { stream, channel } = require("../Controllers/stream.controller");

module.exports = app => {
  app.get('/stream/:token', stream);
  app.get('/channel/:token', channel);
}
const { stream, channel } = require("../Controllers/stream.controller");

module.exports = app => {
  app.get('/v1/stream/:token', stream);
  app.get('/v1/channel/:token', channel);
}
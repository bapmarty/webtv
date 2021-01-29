const { callback } = require("../Controllers/callback.controller");

module.exports = app => {
  app.get('/auth/callback', callback);
}
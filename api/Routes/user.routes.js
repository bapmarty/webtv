const { profile } = require("../Controllers/profile.controller");

module.exports = app => {
  app.get('/v1/user/profile/:token', profile);
}
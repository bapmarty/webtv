const { profile } = require("../Controllers/profile.controller");

module.exports = app => {
  app.get('/user/profile/:token', profile);
}
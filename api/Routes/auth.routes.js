const { login, register } = require("../Controllers/admin.controller");
const { callback } = require("../Controllers/callback.controller");

const auth = require("../middlewares/auth.middleware");

module.exports = app => {
  app.get('/auth/callback', callback);

  // Panel routes
  app.post('/v1/auth/admin/login', login);

  // Routes using middleware auth
  app.post('/v1/auth/admin/register', auth, register);
}
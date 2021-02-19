const { newProg, weekProg, deleteProg } = require("../Controllers/prog.controller");

const auth = require("../middlewares/auth.middleware");

module.exports = app => {
  // public routes
  app.get('/v1/prog', weekProg);

  // private routes
  app.post('/v1/prog/new', auth, newProg);
  app.get('/v1/prog/delete', auth, deleteProg);
}
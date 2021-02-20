const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const Admin = require('../models/admin');

exports.register = (req, res) => {
  console.log('[REGISTER]');
  console.log(req.body.password + ' ' + req.body.pseudo);
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    const admin = new Admin({
      _uid: uuidv4(),
      pseudo: req.body.pseudo,
      password: hash
    });
    admin.save()
    .then(data => res.send(data))
    .catch(err => console.log(err));
  });
}

exports.login = (req, res) => {
  console.log('[LOGIN]');
  const query = Admin.where({ pseudo: req.body.pseudo });
  query.findOne()
  .then(data => {
    console.log(data);
    bcrypt.compare(req.body.password, data.password, (err, result) => {
      console.log(result);
      if (!result) {
          res.status(401).send({
            auth: false,
            message: "Password incorrect"
          });
      } else {
        const token = jwt.sign(
          { uid: data.uid },
          process.env.SECRET_TOKEN_JWT,
          { expiresIn: "48h" }
        );

        res.status(200).send({
          _uid: data.uid,
          token: token
        });
      }
    });
  });
}
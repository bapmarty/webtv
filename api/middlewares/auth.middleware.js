const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN_JWT);
    const uid = decodedToken.uid;
    if ((req.params.uid || req.body.uid) !== uid) {
      throw  "Invalid uid";
    }
    else {
      next();
    }
  } catch {
    res.status(401).send({
      message: "Invalid request"
    });
  }
};


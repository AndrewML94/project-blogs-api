const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const genToken = (payload) => {
  const token = jwt.sign(payload, jwtSecret, jwtConfig);
  return token;
};

const validateToken = (token) => {
  const verifyToken = jwt.verify(token, jwtSecret);
  return verifyToken;
};

module.exports = {
  genToken,
  validateToken,
};
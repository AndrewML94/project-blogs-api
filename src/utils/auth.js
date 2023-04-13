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

const decodeToken = (token) => {
  const decode = jwt.decode(token);
  return decode;
};

module.exports = {
  genToken,
  validateToken,
  decodeToken,
};
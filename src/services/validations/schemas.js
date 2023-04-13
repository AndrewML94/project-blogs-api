const Joi = require('joi');

const displayName = Joi.string().min(8).required();
const email = Joi.string().email().required();
const password = Joi.string().min(6).required();

module.exports = {
  displayName,
  email,
  password,
};

const { User } = require('../models');
const { genToken } = require('../utils/auth');
const schema = require('./validations/validationsInputValues');

const createUser = async (param1) => {
  const { displayName, email, password, image } = param1;
  const error1 = schema.validateDisplayName(displayName);
  const error2 = schema.validateEmail(email);
  const error3 = schema.validatePassword(password);

  if (error1.type) return error1;
  if (error2.type) return error2;
  if (error3.type) return error3;

  const verifyEmail = await User.findOne({ where: { email } });

  if (verifyEmail) return { type: 'CONFLICT', message: 'User already registered' };

  await User.create({ displayName, email, password, image });

  const newValues = {
    displayName,
    email,
    image,
  };

  return { type: null, message: genToken(newValues) };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  return { type: null, message: allUsers };
};

const getUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  
  if (!user) return { type: 'NOT_FOUND', message: 'User does not exist' };

  return { type: null, message: user };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
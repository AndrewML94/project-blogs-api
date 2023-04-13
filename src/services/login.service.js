const { User } = require('../models');
const { genToken } = require('../utils/auth');

const loginUser = async (param1, param2) => {
  const user = await User.findOne({ where: { email: param1, password: param2 } });

  if (!user) return { type: 'BAD_REQUEST', message: 'Invalid fields' };

  const { id, displayName, email, image } = user.dataValues;
  const newValues = {
    id,
    displayName,
    email,
    image,
  };

  return { type: null, message: genToken(newValues) };
};

module.exports = {
  loginUser,
};
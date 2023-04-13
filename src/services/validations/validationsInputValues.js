const { displayName, email, password } = require('./schemas');

const validateDisplayName = (param) => {
  const { error } = displayName.validate(param);

  if (error) {
    return { 
      type: 'BAD_REQUEST',
      message: '"displayName" length must be at least 8 characters long',
    };
  }

  return { type: null, message: '' };
};

const validateEmail = (param) => {
  const { error } = email.validate(param);

  if (error) {
    return { 
      type: 'BAD_REQUEST',
      message: '"email" must be a valid email',
    };
  }

  return { type: null, message: '' };
};

const validatePassword = (param) => {
  const { error } = password.validate(param);

  if (error) {
    return { 
      type: 'BAD_REQUEST',
      message: '"password" length must be at least 6 characters long',
    };
  }

  return { type: null, message: '' };
};

module.exports = { 
  validateDisplayName,
  validateEmail,
  validatePassword,
};
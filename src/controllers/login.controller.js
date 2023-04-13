const { loginService } = require('../services');
const errorMap = require('../utils/errorMap');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.loginUser(email, password);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json({ token: message });
};

module.exports = {
  loginUser,
};

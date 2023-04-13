const { userService } = require('../services');
const errorMap = require('../utils/errorMap');

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json({ token: message });
};

const getAllUsers = async (_req, res) => {
  const { type, message } = await userService.getAllUsers();

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getUserById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
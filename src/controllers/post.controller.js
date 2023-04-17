const { postService } = require('../services');
const errorMap = require('../utils/errorMap');
const { decodeToken } = require('../utils/auth');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  const userId = decodeToken(authorization);

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { type, message } = await postService.createPost(title, content, categoryIds, userId.id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const getAllPosts = async (_req, res) => {
  const { type, message } = await postService.getAllPosts();

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await postService.getPostById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};
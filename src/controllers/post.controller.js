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

module.exports = {
  createPost,
};
const { BlogPost, Category, PostCategory, User } = require('../models');

const createPost = async (title, content, categories, userId) => {
  const verifyCategory = await Category.count({ where: { id: categories } });

  if (verifyCategory !== categories.length) {
    return { type: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }
  
  const createdPost = await BlogPost.create({ title, content, userId });
  const postId = createdPost.dataValues.id;
  const createdPostCategory = categories.map((elem) => ({ postId, categoryId: elem }));
  await PostCategory.bulkCreate(createdPostCategory);

  return { type: null, message: createdPost };
};

const getAllPosts = async () => {
  const allUsers = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories' },
    ],
  });

  return { type: null, message: allUsers };
};

const getPostById = async (id) => {
  const allUsers = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories', attributes: ['id', 'name'] },
    ],
  });

  if (!allUsers) return { type: 'NOT_FOUND', message: 'Post does not exist' };

  return { type: null, message: allUsers };
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};
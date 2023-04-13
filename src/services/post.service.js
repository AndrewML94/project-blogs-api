const { BlogPost, Category, PostCategory } = require('../models');

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

module.exports = {
  createPost,
};
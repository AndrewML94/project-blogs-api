module.exports = (sequelize, DataTypes) => {
  const postsCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });

  postsCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: postsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });

    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      through: postsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  };

  return postsCategory;
};

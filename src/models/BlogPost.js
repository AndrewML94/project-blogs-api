module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreingKey: 'userId',
      as: 'user'
    });
  };

  return blogPost;
};
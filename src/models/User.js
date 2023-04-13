module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      foreingKey: 'userId',
      as: 'blogPosts'
    });
  };

  return user;
};

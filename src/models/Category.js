module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  });

  return category;
}
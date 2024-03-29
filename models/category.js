const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
  }, {
    timestamps: false,
    hooks: {
      beforeValidate: async (category) => {
        category.updated_at = new Date()
      }
    }
  });

  Category.associate = (models) => {
    Category.hasMany(models.Book, {
      foreignKey: 'category_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return Category;
};


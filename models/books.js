const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_page: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    thickness: {
      type: DataTypes.STRING,
      allowNull: false,
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
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    hooks: {
      beforeValidate: async (book) => {
        book.updated_at = new Date()

        // Set thickness based on total_page
        if (book.total_page <= 100) {
          book.thickness = "tipis";
        } else if (book.total_page >= 101 && book.total_page <= 200) {
          book.thickness = "sedang";
        } else {
          book.thickness = "tebal";
        }
      },
      beforeUpdate: async (book) => {
        book.updated_at = new Date()

        // Set thickness based on total_page
        if (book.total_page <= 100) {
          book.thickness = "tipis";
        } else if (book.total_page >= 101 && book.total_page <= 200) {
          book.thickness = "sedang";
        } else {
          book.thickness = "tebal";
        }

        book.setDataValue('thickness', book.thickness);
      }
    }
  });

  Book.associate = (models) => {
    Book.belongsTo(models.Category, {
      foreignKey: 'category_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Book;
};

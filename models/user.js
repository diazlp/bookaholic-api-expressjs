const cuid = require('cuid')
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    hooks: {
      beforeCreate: async (user) => {
        user.id = cuid()
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
      },
    },
  });

  return User;
};

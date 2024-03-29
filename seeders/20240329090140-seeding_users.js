'use strict';
const cuid = require('cuid')
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert('Users', [{
      id: cuid(),
      username: 'admin',
      password: await bcrypt.hash("admin", 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};

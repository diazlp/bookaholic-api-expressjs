'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    const currentDate = new Date();
    const categories = [
      { name: 'Fiction', created_at: currentDate, updated_at: currentDate },
      { name: 'Non-Fiction', created_at: currentDate, updated_at: currentDate },
      { name: 'Science Fiction', created_at: currentDate, updated_at: currentDate },
      { name: 'Fantasy', created_at: currentDate, updated_at: currentDate },
      { name: 'Mystery', created_at: currentDate, updated_at: currentDate },
      { name: 'Thriller', created_at: currentDate, updated_at: currentDate },
      { name: 'Biography', created_at: currentDate, updated_at: currentDate },
      { name: 'History', created_at: currentDate, updated_at: currentDate },
      { name: 'Self-Help', created_at: currentDate, updated_at: currentDate },
      { name: 'Romance', created_at: currentDate, updated_at: currentDate }
    ];

    await queryInterface.bulkInsert('Categories', categories);
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

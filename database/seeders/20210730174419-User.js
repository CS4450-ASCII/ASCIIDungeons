'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const user = {
      displayName: 'Test User',
      email: 'test@ascii.com',
      password: 'pass123',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);

    await queryInterface.bulkInsert('Users', [user]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  },
};

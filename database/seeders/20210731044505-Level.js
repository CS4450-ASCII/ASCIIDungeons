'use strict';

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
    await queryInterface.bulkInsert('Levels', [
      {
        gameId: 1,
        title: 'Level 1',
        width: 40,
        height: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 1,
        title: 'Level 2',
        width: 30,
        height: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 2,
        title: 'The Beginning',
        width: 20,
        height: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 2,
        title: 'The End',
        width: 20,
        height: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Levels', null, {});
  },
};

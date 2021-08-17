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
     *
     */
    const games = [
      {
        createdById: 1,
        title: 'Test Game',
        description: 'What a great test game.',
        isPublished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        createdById: 2,
        title: "Joe's Amazing Game",
        description: 'What an amazing game.',
        isPublished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Games', games, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Games', null, {});
  },
};

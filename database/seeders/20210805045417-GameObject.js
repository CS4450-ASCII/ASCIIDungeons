'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const getGameObjectsForGame = (gameId) =>
      [...Array(33).keys()].slice(1).map((objectId) => ({
        gameId,
        objectId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

    await queryInterface.bulkInsert(
      'GameObjects',
      [...getGameObjectsForGame(1), ...getGameObjectsForGame(2)],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

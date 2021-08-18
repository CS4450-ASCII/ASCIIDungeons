'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sampleMap = [
      [...new Array(10).fill('_')],
      ['|', '@', ...new Array(7).fill('.'), '|'],
      ['|', ...new Array(8).fill('.'), '|'],
      ['|', ...new Array(8).fill('.'), '|'],
      ['|', ...new Array(8).fill('_'), '|'],
    ];

    let mapData = [];
    sampleMap.forEach((row, y) => {
      row.forEach((character, x) => {
        mapData.push({
          character,
          x,
          y,
          data: {},
        });
      });
    });
    mapData = JSON.stringify(mapData);

    const sharedAttributes = {
      mapData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert('Levels', [
      {
        gameId: 1,
        title: 'Level 1',
        width: 40,
        height: 40,
        ...sharedAttributes,
      },
      {
        gameId: 1,
        title: 'Level 2',
        width: 30,
        height: 30,
        ...sharedAttributes,
      },
      {
        gameId: 2,
        title: 'The Beginning',
        width: 20,
        height: 20,
        ...sharedAttributes,
      },
      {
        gameId: 2,
        title: 'The End',
        width: 20,
        height: 20,
        ...sharedAttributes,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Levels', null, {});
  },
};

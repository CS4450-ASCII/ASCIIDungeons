'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sharedAttributes = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const wallAttributes = {
      baseType: 0,
      gameEngineLayer: 0,
      isPassable: false,
      dataTemplate: null,
      ...sharedAttributes,
    };

    const stairAttributes = {
      baseType: 0,
      gameEngineLayer: 0,
      isPassable: true,
      dataTemplate: JSON.stringify({
        goToLevelId: null,
      }),
      ...sharedAttributes,
    };
    const thickWalls = [
      ['╔', 'Top Left'],
      ['╦', 'Top Center'],
      ['╗', 'Top Right'],
      ['╠', 'Middle Left'],
      ['╬', 'Middle Center'],
      ['╣', 'Middle Right'],
      ['╚', 'Bottom Left'],
      ['╩', 'Bottom Middle'],
      ['╝', 'Bottom Right'],
      ['║', 'Vertical'],
      ['═', 'Horizontal'],
    ].map(([character, subtitle]) => ({
      title: `Thick Wall - ${subtitle}`,
      character,
      ...wallAttributes,
    }));

    const thinWalls = [
      ['┌', 'Top Left'],
      ['┬', 'Top Center'],
      ['┐', 'Top Right'],
      ['├', 'Middle Left'],
      ['┼', 'Middle Center'],
      ['┤', 'Middle Right'],
      ['└', 'Bottom Left'],
      ['┴', 'Bottom Middle'],
      ['┘', 'Bottom Right'],
      ['|', 'Vertical'],
      ['─', 'Horizontal'],
      ['-', 'Horizontal Short'],
    ].map(([character, subtitle]) => ({
      title: `Thin Wall - ${subtitle}`,
      character,
      ...wallAttributes,
    }));

    const otherNonPassables = [
      ['█', 'Tall Block'],
      ['▀', 'Block - Top'],
      ['■', 'Block - Middle'],
      ['▄', 'Block - Bottom'],
    ].map(([character, title]) => ({
      title,
      character,
      ...wallAttributes,
    }));

    const stairs = [
      ['<', 'Up'],
      ['>', 'Down'],
    ].map(([character, subtitle]) => ({
      title: `Stairs - ${subtitle}`,
      character,
      ...stairAttributes,
    }));

    const player = {
      baseType: 0,
      gameEngineLayer: 1,
      title: 'Player Spawn Point',
      character: '@',
      isPassable: true,
      ...sharedAttributes,
    };

    const floor = {
      baseType: 0,
      gameEngineLayer: 1,
      title: 'Floor',
      character: '.',
      isPassable: true,
      ...sharedAttributes,
    };

    await queryInterface.bulkInsert(
      'Objects',
      [
        ...thickWalls,
        ...thinWalls,
        ...otherNonPassables,
        ...stairs,
        player,
        floor,
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Objects', null, {});
  },
};

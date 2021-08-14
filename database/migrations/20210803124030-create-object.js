'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Objects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      baseType: {
        type: Sequelize.SMALLINT,
      },
      gameEngineLayer: {
        type: Sequelize.SMALLINT,
      },
      title: {
        type: Sequelize.STRING(60),
      },
      character: {
        type: Sequelize.STRING(1),
      },
      isPassable: {
        type: Sequelize.BOOLEAN,
      },
      dataTemplate: {
        type: Sequelize.JSONB,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Objects');
  },
};

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Levels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Games',
          key: 'id',
          as: 'gameId',
        },
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING(60),
        defaultValue: 'Untitled Level',
      },
      width: {
        allowNull: false,
        type: Sequelize.SMALLINT,
      },
      height: {
        allowNull: false,
        type: Sequelize.SMALLINT,
      },
      mapData: {
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
    await queryInterface.dropTable('Levels');
  },
};

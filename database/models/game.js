'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.belongsTo(models.User, {
        foreignKey: 'createdById',
        onDelete: 'CASCADE',
      });

      Game.hasMany(models.Level, {
        foreignKey: 'gameId',
        as: 'levels',
      });
    }
  }
  Game.init(
    {
      createdById: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      isPublished: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: 'Game',
    },
  );
  return Game;
};

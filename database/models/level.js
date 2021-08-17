'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Level.belongsTo(models.Game, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
        as: 'game',
      });
    }
  }
  Level.init(
    {
      gameId: DataTypes.INTEGER,
      title: { type: DataTypes.STRING(60), defaultValue: 'Untitled Level' },
      width: DataTypes.SMALLINT,
      height: DataTypes.SMALLINT,
      mapData: DataTypes.JSONB,
    },
    {
      sequelize,
      modelName: 'Level',
    },
  );
  return Level;
};

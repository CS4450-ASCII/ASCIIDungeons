'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameObject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GameObject.belongsTo(models.Game, { foreignKey: 'gameId', as: 'game' });
      GameObject.belongsTo(models.Object, {
        foreignKey: 'objectId',
        as: 'object',
      });
    }
  }
  GameObject.init(
    {
      gameId: DataTypes.INTEGER,
      objectId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'GameObject',
    },
  );
  return GameObject;
};

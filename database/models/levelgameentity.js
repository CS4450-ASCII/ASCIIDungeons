'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LevelGameEntity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Level);
      this.belongsTo(models.GameEntity);
    }
  };
  LevelGameEntity.init({
    levelId: DataTypes.INTEGER,
    gameEntityId: DataTypes.INTEGER,
    x: DataTypes.SMALLINT,
    y: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'LevelGameEntity',
  });
  return LevelGameEntity;
};
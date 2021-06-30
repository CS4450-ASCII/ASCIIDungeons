'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LevelEntity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LevelEntity.init({
    levelID: DataTypes.INTEGER,
    entityID: DataTypes.INTEGER,
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LevelEntity',
  });
  return LevelEntity;
};
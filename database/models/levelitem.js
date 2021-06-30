'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LevelItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LevelItem.init({
    levelItemID: DataTypes.INTEGER,
    levelID: DataTypes.INTEGER,
    itemID: DataTypes.INTEGER,
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LevelItem',
  });
  return LevelItem;
};
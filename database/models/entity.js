'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Entity.init(
    {
      baseType: DataTypes.SMALLINT,
      gameEngineLayer: DataTypes.SMALLINT,
      title: DataTypes.STRING(60),
      character: DataTypes.STRING(1),
      isPassable: DataTypes.BOOLEAN,
      dataTemplate: DataTypes.JSONB
    },
    {
      sequelize,
      modelName: 'Entity'
    }
  );
  return Entity;
};

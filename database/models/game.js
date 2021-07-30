'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: {
          name: 'createdById',
          allowNull: false
        }
      });
      this.hasMany(models.GameEntity, {
        foreignKey: {
          name: 'gameEntityId',
          allowNull: false
        }
      });
    }
  };
  Game.init({
    createdById: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
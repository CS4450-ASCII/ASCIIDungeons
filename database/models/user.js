'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Game, {
        foreignKey: {
          name: 'createdById',
          allowNull: false
        }
      });
    }
  }
  User.init(
    {
      displayName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      hashedPassword: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      salt: {
        type: DataTypes.STRING(128),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};

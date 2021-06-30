'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaveInventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.UserSave);
      this.hasOne(models.Item);
    }
  };
  SaveInventory.init({
    saveID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SaveInventory',
  });
  return SaveInventory;
};
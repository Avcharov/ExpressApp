'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EditView extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EditView.belongsTo(models.User, {
        foreignKey: 'UserId',
        onDelete: 'SET NULL'
      }),
      EditView.hasMany(models.ImageItem, {
        foreignKey: 'ViewId',
      })

    }
  }
  EditView.init({
    Name: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    Base64AttachmentCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EditView',
  });
  return EditView;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImageItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ImageItem.belongsTo(models.EditView, {
        foreignKey: 'ViewId',
        onDelete: 'CASCADE'
      })
    }
  }
  ImageItem.init({
    Name: DataTypes.STRING,
    XPos: DataTypes.DOUBLE,
    YPos: DataTypes.DOUBLE,
    Rotation: DataTypes.DOUBLE,
    ViewId: DataTypes.INTEGER,
    Opacity: DataTypes.DOUBLE,
    ImageWidth: DataTypes.INTEGER,
    ImageHeight: DataTypes.INTEGER,
    ImageRight: DataTypes.INTEGER,
    ImageBottom: DataTypes.INTEGER,
    ImageUrl: DataTypes.STRING,
    ImageData: DataTypes.STRING,
    PdfPage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImageItem',
  });
  return ImageItem;
};
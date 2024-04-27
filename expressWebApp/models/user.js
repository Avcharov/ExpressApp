'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: 'RoleId',
        onDelete: 'CASCADE'
      }),
      User.hasMany(models.EditView, {
        foreignKey: 'UserId',
      })
    }
  }
  User.init({
    UPN: DataTypes.STRING,
    DisplayName: DataTypes.STRING,
    Password: DataTypes.STRING,
    Token: DataTypes.STRING,
    RoleId: DataTypes.INTEGER,
    RefreshToken: DataTypes.STRING,
    RefreshTokenExpiryTime: DataTypes.DATE,
    ResetPasswordToken: DataTypes.STRING,
    ResetPasswordExpiry: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
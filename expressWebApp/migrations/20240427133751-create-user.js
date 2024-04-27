'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UPN: {
        type: Sequelize.STRING
      },
      DisplayName: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Token: {
        type: Sequelize.STRING
      },
      RoleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id',
          as: 'RoleId',
        }

      },
      RefreshToken: {
        type: Sequelize.STRING
      },
      RefreshTokenExpiryTime: {
        type: Sequelize.DATE
      },
      ResetPasswordToken: {
        type: Sequelize.STRING
      },
      ResetPasswordExpiry: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
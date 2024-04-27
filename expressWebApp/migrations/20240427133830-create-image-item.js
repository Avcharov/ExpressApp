'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ImageItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      XPos: {
        type: Sequelize.DOUBLE
      },
      YPos: {
        type: Sequelize.DOUBLE
      },
      Rotation: {
        type: Sequelize.DOUBLE
      },
      ViewId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'EditViews',
          key: 'id',
          as: 'ViewId'
        }
      },
      Opacity: {
        type: Sequelize.DOUBLE
      },
      ImageWidth: {
        type: Sequelize.INTEGER
      },
      ImageHeight: {
        type: Sequelize.INTEGER
      },
      ImageRight: {
        type: Sequelize.INTEGER
      },
      ImageBottom: {
        type: Sequelize.INTEGER
      },
      ImageUrl: {
        type: Sequelize.STRING
      },
      ImageData: {
        type: Sequelize.STRING
      },
      PdfPage: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ImageItems');
  }
};
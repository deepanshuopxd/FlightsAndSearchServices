'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Change column collation first
    await queryInterface.changeColumn('Cities', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      collate: 'utf8mb4_general_ci'
    });

    // Add unique constraint
    await queryInterface.addConstraint('Cities', {
      fields: ['name'],
      type: 'unique',
      name: 'unique_city_name_constraint'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'Cities',
      'unique_city_name_constraint'
    );
  }
};
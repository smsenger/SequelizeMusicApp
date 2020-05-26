'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn( 
      'Tracks', 
      'album_id', 
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Albums', // name of Target model
          key: 'id', // key in Target model
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Tracks', // name of Source model
      'album_id' // key we want to remove
    );
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

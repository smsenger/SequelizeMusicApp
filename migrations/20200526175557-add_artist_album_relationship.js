'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn( 
      'Albums', 
      'artist_id', 
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Artists', // name of Target model
          key: 'id', // key in Target model
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
 

    )
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Albums', // name of Source model
      'artist_id' // key we want to remove
    );
 
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

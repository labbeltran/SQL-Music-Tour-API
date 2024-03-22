'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {

//     await queryInterface.removeColumn(
//       'Todo',
//       'completed'
//       );
      
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });

//   },

  
//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.removeColumn(
    //   'Bands', 
    //   'genre'
    //   );
    // await queryInterface.removeColumn(
    //   'Bands', 
    //   'total_members'
    //     );
  },

  // Corrected down function
  async down(queryInterface, Sequelize) {
    // await queryInterface.addColumn(
    //   'Bands', 
    //   'genre',
    //   Sequelize.STRING
    //   );
    // await queryInterface.addColumn(
    //   'Bands', 
    //   'total_members',
    //   Sequelize.INTEGER
    //     );
  }
};
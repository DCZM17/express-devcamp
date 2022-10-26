'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [{
       username: 'Duvan Zapata',
       email: 'dczapata55@misena.edu.co',
       password: '12345'
      },
      {
        username: 'Jack Gonzalez',
        email: 'jogonzalez@misena.edu.co',
        password: '23456'
       },
       {
        username: 'Juan Madero',
        email: 'jmadero@misena.edu.co',
        password: '34567'
       },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});
     
  }
};

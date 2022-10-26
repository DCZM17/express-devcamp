'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('bootcamps', [{
       name: 'JS Advanced',
       description: 'Bootcamp JS avansado ',
       phone: '3117034623',
       email: 'dczapata55@misena.edu.co',
       averageCost: '3000',
       averageRating: '7'
      },
      {
          name: 'JS Basic',
          description: 'Bootcamp JS basico ',
          phone: '3117034623',
          email: 'dczapata55@misena.edu.co',
          averageCost: '1000',
          averageRating: '8'
         },
         {
            name: 'Python Advanced',
            description: 'Bootcamp Python avansado ',
            phone: '3117034623',
            email: 'dczapata55@misena.edu.co',
            averageCost: '5000',
            averageRating: '6'
           }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('bootcamps', null, {});
     
  }
};

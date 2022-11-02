'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('bootcamps', [{
       name: 'PHP Bootcamp',
       description: 'Bootcamp for PHP learning',
       phone: '(57)3117034623',
       email: 'dczapata55@misena.edu.co',
       averageCost: 3000,
       averageRating: 7,
       user_id: 2
      },
      {
          name: 'JS Basic',
          description: 'Bootcamp JS basic learning ',
          phone: '(57)3118034223',
          email: 'jogonzalez@misena.edu.co',
          averageCost: 1000,
          averageRating: 8,
          user_id: 3
         },
         {
            name: 'Python Advanced',
            description: 'Bootcamp Python avansado ',
            phone: '(57)3137034683',
            email: 'jmadero@misena.edu.co',
            averageCost: 5000,
            averageRating: 6,
            user_id:1
           }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('bootcamps', null, {});
     
  }
};

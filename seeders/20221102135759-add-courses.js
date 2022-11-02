'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('courses', [{
        title: 'Comandos Basicos PHP',
        description: 'basic comands for PHP learning',
        weeks: '1',
        enroll_cost: 100,
        minimum_skill: 'basic',
        bootcamp_id: 1
       },
       {
        title: 'Comandos Basicos JS',
        description: 'basic comands for JS learning',
        weeks: '2',
        enroll_cost: 200,
        minimum_skill: 'medium',
        bootcamp_id: 2
          },
          {
            title: 'Comandos Basicos Python',
            description: 'basic comands for Python learning',
            weeks: '1',
            enroll_cost: 150,
            minimum_skill: 'basic',
            bootcamp_id: 3
            },
            {
              title: 'Comandos Avanzados Python',
              description: 'Advanced comands for Python learning',
              weeks: '3',
              enroll_cost: 500,
              minimum_skill: 'Advanced',
              bootcamp_id: 3
              }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};

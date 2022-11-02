'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [{
      title: 'Bad exercises for PHP',
      text: 'Los ejercicios no corresponden',
      rating: '2',
      bootcamp_id: 1,
      user_id:2
     },
     {
      title: 'Good exercises for Python',
      text: 'Los ejercicios son complementarios a la tematica',
      rating: '8',
      bootcamp_id: 3,
      user_id:3
        },
        {
          title: 'Good Time',
          text: 'Inicio de las esiones al momento exacto',
          rating: '8',
          bootcamp_id: 2,
          user_id:1
          },
          {
            title: 'Good planing',
            text: 'Buena planeacio de los ejercicios',
            rating: '9',
            bootcamp_id: 1,
            user_id:3
            }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};

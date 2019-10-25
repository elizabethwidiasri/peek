'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const trailerData = [
      {
        title : "The Batman (2021)",
        link : "https://www.youtube.com/embed/cElcLipGNIA", 
        category : "action",
        imageSource : "thumbnailbatman.jpg"
      },
      {
        title : "F.r.i.e.n.d.s (2020)",
        link : "https://www.youtube.com/embed/Gpa5S8DgPzs", 
        category : "comedy",
        imageSource : "thumbnailfriend.jpg"

      },
      {
        title : "Bad Boys III (2020)",
        link : "https://www.youtube.com/embed/DjOaTOFgVzg", 
        category : "comedy",
        imageSource : "badboy3.jpg"

      },
      {
        title : "A Quiet Place: Part II (2019)",
        link : "https://www.youtube.com/embed/TpBXUrzq_MY", 
        category : "horror",
        imageSource : "thumbnail4.jpg"

      },
      {
        title : "Gretel & Hansel (2020)",
        link : "https://www.youtube.com/embed/6ZgkHjpUM8w", 
        category : "horror",
        imageSource : "thumbnail5.jpg"
        

      },
      {
        title : "Fast and furious (2020)",
        link : "https://www.youtube.com/embed/SpOdNrZ8WsE", 
        category : "action",
        imageSource : "thumbnail6.jpg"

      }
    ]

    trailerData.forEach(trailer => {
      trailer.createdAt = new Date()
      trailer.updatedAt = new Date()
    })

    return queryInterface.bulkInsert('Trailers', trailerData, {Sequelize})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Trailers', null, {})
  }
};

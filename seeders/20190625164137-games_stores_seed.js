module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Stores', [{
      id: 1,
      name: 'Game Castle',
      phoneNumber: 3033331234,
      createdAt: new Date(),
      updatedAt: new Date()
     },
      {
       id: 2,
       name: 'Dungeon of Games',
       phoneNumber: 3033331234,
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ], {});

    const stores = await queryInterface.sequelize.query(
      `SELECT id from "Stores";`
    );

    await queryInterface.bulkInsert('Games', [{
      title: 'Fix it Felix Jr.',
      price: 50,
      releaseYear: 1982,
      active: true,
      StoreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Ms. Pac Man',
      price: 100,
      releaseYear: 1981,
      active: true,
      StoreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Dig Dug',
      price: 75,
      releaseYear: 1982,
      active: false,
      StoreId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Galaga',
      price: 125,
      releaseYear: 1981,
      active: true,
      StoreId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Games', null, {});
    await queryInterface.bulkDelete('Stores', null, {});
  }
};


module.exports = {
  up(queryInterface) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Role', [
      {
        title: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'regular',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {
      returning: true
    });
  },

  down(queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Role', null, {});
  }
};

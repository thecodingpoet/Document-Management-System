module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('Documents', [
      {
        title: 'Lord of the rings',
        content: `Its a dangerous business, 
          Frodo, going out your door…You step into the Road,
          and if you don’t keep your feet, there is no
          knowing where you might be swept off to.`,
        ownerId: 1,
        ownerRoleId: 1,
        access: 'private',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Alice in the wonderland',
        content: `Alice:How long is forever?
        White Rabbit:Sometimes, just one second.`,
        ownerId: 2,
        ownerRoleId: 2,
        access: 'role',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Harry potter',
        content: `It takes a great deal of bravery to stand up to our enemies,
         but just as much to stand up to our friends`,
        ownerId: 2,
        ownerRoleId: 2,
        access: 'public',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Game of thrones',
        content: `Let me give you some advice, bastard.
         Never forget what you are. The rest of the world will not. 
         Wear it like armor, and it can never be used to hurt you`,
        ownerId: 2,
        ownerRoleId: 2,
        access: 'public',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {
      returning: true
    });
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('Documents', null, {});
  }
};

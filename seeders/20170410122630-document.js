module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('Documents', [
      {
        title: 'Document 1',
        content: 'Lord of the rings',
        ownerId: 1,
        ownerRoleId: 1,
        access: 'private',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Document 2',
        content: 'Alice in the wonderland',
        ownerId: 2,
        ownerRoleId: 2,
        access: 'role',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Document 3',
        content: 'Harry potter and the philosophers stone',
        ownerId: 2,
        ownerRoleId: 2,
        access: 'public',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Document 4',
        content: 'Harry potter and the prisoner',
        ownerId: 2,
        ownerRoleId: 2,
        access: 'public',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Document 5',
        content: 'Your time is limited',
        ownerId: 2,
        ownerRoleId: 2,
        access: 'public',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Document 6',
        content: 'Make the best use of your time',
        ownerId: 2,
        access: 'public',
        ownerRoleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Document 7',
        content: 'I was created to create',
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

const bcrypt = require('bcrypt-nodejs');
const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('Users', [
      {
        email: process.env.ADMIN_EMAIL,
        firstName: process.env.ADMIN_FIRST_NAME,
        lastName: process.env.ADMIN_LAST_NAME,
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD,
                  bcrypt.genSaltSync(8)),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user@test.com',
        firstName: 'user',
        lastName: 'user',
        password: bcrypt.hashSync('test_password', bcrypt.genSaltSync(8)),
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'owner@mail.com',
        firstName: 'owner',
        lastName: 'owner',
        password: bcrypt.hashSync('owner_password', bcrypt.genSaltSync(8)),
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {
      returning: true
    });
  },

  down(queryInterface) {
    queryInterface.bulkDelete('Users', null, {});
  }
};

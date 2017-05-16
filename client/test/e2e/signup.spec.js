import faker from 'faker';

import config from './config';

module.exports = {
  'Sign up': (browser) => {
    browser
        .url(`${config.url}/signup`)
        .pause(2000)
        .setValue('input[name=firstName]', faker.name.firstName())
        .setValue('input[name=lastName]', faker.name.lastName())
        .setValue('input[name="email"]', faker.internet.email())
        .setValue('input[name="password"]', 'password')
        .click('button[name="action"]')
        .pause(3000)
        .assert.urlContains('dashboard')
        .end();
  }
};

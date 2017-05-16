import faker from 'faker';
import config from './config';

module.exports = {
  'Create document': (browser) => {
    browser
     .url(`${config.url}/login`)
     .waitForElementVisible('body')
     .setValue('input[type=email]', 'bola.brown@andela.com')
     .setValue('input[type=password]', 'andela')
     .click('button[type=submit]')
     .pause(1000)
     .assert.urlContains('dashboard')
     .waitForElementVisible('body')
     .assert.elementPresent('.fixed-action-btn')
     .click('a[href="#modal1"]')
     .pause(3000)
     .setValue('input[name=title]', 'Test title')
     .execute(`tinyMCE.activeEditor.setContent('${faker.lorem.words()}')`)
     .pause(2000)
     .click('#createBtn')
     .pause(30000)
     .end();
  }
};

// import config from './config';

// module.exports = {
//   'Login Users': (browser) => {
//     browser
//       .url(`${config.url}/login`)
//       .waitForElementVisible('body')
//       .setValue('input[type=email]', 'tomi@andela.com')
//       .setValue('input[type=password]', 'andela')
//       .click('button[type=submit]')
//       .pause(1000)
//       .assert.urlContains('dashboard')
//       .end();
//   },
//   'Invalid user': (browser) => {
//     browser
//       .url(`${config.url}/login`)
//       .waitForElementVisible('body')
//       .setValue('input[type=email]', 'sese@gmail.com')
//       .setValue('input[type=password]', 'password')
//       .click('button[type=submit]')
//       .pause(1000)
//       .assert.urlEquals(`${config.url}/login`)
//       .end();
//   }
// };
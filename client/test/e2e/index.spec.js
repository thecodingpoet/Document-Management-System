import config from './config';

module.exports = {
  'Go to home page': (browser) => {
    browser
        .url(config.url)
        .waitForElementVisible('body')
        .assert.title('Document Management System')
        .end();
  },
  'Home page': (browser) => {
    browser
        .url(config.url)
        .waitForElementVisible('body')
        .pause(1000)
        .expect
        .element('.nav-wrapper > span').text.to.equal('Document Management System');
  },
  'Home page elements': (browser) => {
    browser
      .url(config.url)
      .waitForElementVisible('body')
      .expect
      .element('#aboutDiv > div > b').text.to.equal('Document management');
  }
};

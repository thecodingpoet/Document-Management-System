import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import sinon from 'sinon';
import chai from 'chai';

const $ = require('jquery');
const jsdom = require('jsdom');
const m = require('module');

const originalLoader = m._load;
 
m._load = function hookedLoader(request, parent, isMain) {
  if (request.match(/.jpeg|.jpg|.png$/)) {
    return { uri: request };
  }
 
  return originalLoader(request, parent, isMain);
};


const doc = jsdom.jsdom(`<!doctype html><html><body></body></html>`,{
  url: 'http://localhost'
});
global.document = doc;
global.window = doc.defaultView;
global.$ = $(global.window);

// mock calls to localStorage
global.window.localStorage = {
  getItem: () => {
    return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjIsIlJvbGVJZCI6MSwidXNlciI6ImFkbWluIiwiaWF0IjoxNDkyODkxNzEzLCJleHAiOjE0OTI5NzgxMTN9.bJ5OMykjtl1xwEwBYK7EJ07qcF95Oi6isIO0PdBwYEQ`;
  },
  setItem: () => {
    // do nothing
  },
  clear: () => {
    // do nothing
  }
};

Object.keys(doc.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = doc.defaultView[property];
  }
});

global.sinon = sinon;
global.expect = chai.expect;
global.thunk = thunk;
global.configureMockStore = configureMockStore;
global.nock = nock;
global.navigator = {
  userAgent: 'node.js'
};

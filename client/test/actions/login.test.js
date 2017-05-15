import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import nock from 'nock';
import * as actions from '../../public/js/actions/login';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login Action', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('creates SET_CURRENT_USER when login has been done',
    () => {
      const user = { email: 'tomi@andela.com', password: 'tomi' };
      nock('http://localhost.com/')
        .post('/users/login', user)
        .reply(200, {
          body: { token: 'fdsffsfsdfsd', user: { email: 'tomi@andela.com', firstName: '' } } });

      const expectedActions = [{ type: actions.LOGIN_USER,
        user: { email: 'tomi@andela.com', firstName: '' } }];

      const store = mockStore({ auth: {} });

      store.dispatch(actions.login(user))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

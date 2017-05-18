import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import nock from 'nock';
import * as actions from '../../public/js/actions/users';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates GET_ALL_USERS when fetching users has been done',
    () => {
      nock('http://localhost.com/')
        .get('/users')
        .reply(200, {
          body: {
            users: [{
              firstName: 'tomi',
              lastName: 'tomi',
              email: 'tomi',
              password: 'tomi' }]
          } });

      const expectedActions = [{ type: actions.GET_ALL_USERS,
        users: [{ firstName: '', lastName: '', email: '', password: '' }] }];

      const store = mockStore({ users: [] });

      store.dispatch(actions.getAllUsers())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  it('creates DELETE_USER_SUCCESS when delete has been done',
    () => {
      const userId = 2;
      nock('http://localhost.com/')
        .delete(`/users/${userId}`)
        .reply(200, {
          body: { message: 'User Deleted' } });

      const expectedActions = [{ type: actions.DELETE_USER_SUCCESS,
        userId }];

      const store = mockStore({ users: {} });

      store.dispatch(actions.deleteUser(userId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

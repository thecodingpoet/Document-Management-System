import expect from 'expect';
import auth from '../../public/js/reducers/auth';
import actions from '../../public/js/actions/actionTypes';

describe('Auth Reducer', () => {
  it('should set user when passed LOGIN_USER', () => {
    const initialState = {};
    const user = { email: 'tomi@andela.com', password: 'tomi' };
    const action = { type: actions.LOGIN_USER, user };
    const newState = auth(initialState, action);
    expect(newState).toEqual(user);
  });

  it('should sign up user when passed SIGN_UP_USER', () => {
    const initialState = {};
    const user = { firstName: 'tomi',
      lastName: 'tomi',
      email: 'tomi@andela.com',
      password: 'tomi' };
    const action = { type: actions.SIGN_UP_USER, user };
    const newState = auth(initialState, action);
    expect(newState).toEqual(user);
  });

  it('should sign up user when passed USER_UPDATED', () => {
    const initialState = {};
    const user = { firstName: 'tomi',
      lastName: 'tomi',
      email: 'tomi@andela.com',
      password: 'tomi' };
    const action = { type: actions.USER_UPDATED, user };
    const newState = auth(initialState, action);
    expect(newState).toEqual(user);
  });
});

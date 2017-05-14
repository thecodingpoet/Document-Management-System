import expect from 'expect';
import auth from '../../public/js/reducers/auth';
import * as actions from '../../public/js/actions/login';

describe('Auth Reducer', () => {
  it('should set user when passed SET_CURRENT_USER', () => {
    // arrange
    const initialState = {};

    const user = { firstName: '', lastName: '', email: '' };

    const action = { type: actions.LOGIN_USER, user };

    // act
    const newState = auth(initialState, action);

    expect(newState).toEqual(user);
  });
  // it('should set clear when passed SET_CURRENT_USER with empty object', () => {
  //   // arrange
  //   const initialState = {
  //     isAuthenticated: false,
  //     user: {},
  //   };

  //   const user = {};

  //   const action = { type: types.SET_CURRENT_USER, user };
  //   // act
  //   const newState = users(initialState, action);

  //   expect(newState.isAuthenticated).toEqual(false);
  //   expect(newState.user).toEqual(user);
  // });
});

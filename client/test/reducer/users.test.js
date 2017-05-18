import expect from 'expect';
import auth from '../../public/js/reducers/users';
import actions from '../../public/js/actions/actionTypes';

describe('Users Reducer', () => {
  it.only('should delete users when passed DELETE_USER_SUCCESS', () => {
    const initialState = [{ firstName: 'Harry',
      lastName: 'potter',
      id: 2 }];

    const users = [];
    const action = { type: actions.DELETE_USER_SUCCESS, id: 2 };
    const newState = auth(initialState, action);
    expect(newState).toEqual(users);
  });
});

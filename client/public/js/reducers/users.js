import actionTypes from '../actions/actionTypes';

/**
 * User reducer
 * @export
 * @param {any} [state={}]
 * @param {any} [action={}]
 * @returns {state} - state
 */
export default function user(state = {}, action = {}) {
  switch (action.type) {
  case actionTypes.GET_ALL_USERS:
    return {
      users: action.users,
      pages: action.pages
    };
  case actionTypes.DELETE_USER_SUCCESS:
    return Object.assign({}, state, {
      users: state.users.filter(item => item.id !== action.id)
    });
  default: return state;
  }
}

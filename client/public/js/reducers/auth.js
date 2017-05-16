import actionTypes from '../actions/actionTypes';

/**
 * Auth Reducer
 * @export
 * @param {any} [state={}]
 * @param {any} [action={}]
 * @returns {state} - state
 */
export default function auth(state = {}, action = {}) {
  switch (action.type) {
  case actionTypes.LOGIN_USER:
    return action.user;
  case actionTypes.SIGN_UP_USER:
    return action.user;
  case actionTypes.USER_UPDATED:
    return action.user;
  default: return state;
  }
}

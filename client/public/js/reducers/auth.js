import { LOGIN_USER } from '../actions/login';
import { SIGN_UP_USER } from '../actions/signup';
import { USER_UPDATED } from '../actions/editProfile';

export default function auth(state = {}, action = {}) {
  switch (action.type) {
  case LOGIN_USER:
    return action.user;
  case SIGN_UP_USER:
    return action.user;
  case USER_UPDATED:
    return action.user;
  default: return state;
  }
}

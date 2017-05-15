import { GET_ALL_USERS, DELETE_USER_SUCCESS } from '../actions/users';

export default function documents(state = [], action = {}) {
  switch (action.type) {
  case GET_ALL_USERS:
    return action.users;
  case DELETE_USER_SUCCESS:
    return state.filter(item => item.id !== action.id);
  default: return state;
  }
}

import { combineReducers } from 'redux';
import documents from './reducers/documents';
import users from './reducers/users';
import auth from './reducers/auth';

export default combineReducers({
  documents,
  users,
  auth
});

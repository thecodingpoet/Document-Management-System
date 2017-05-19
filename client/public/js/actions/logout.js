import actionTypes from './actionTypes';

export /**
 * @param {any} user - user
 * @returns {Object} - Object containing current user and action
 */
const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  user
});

export /**
 * @returns {any} - dispatch logout action
 */
const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setCurrentUser({}));
};


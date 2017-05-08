import axios from 'axios';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

/**
 * setCurrentUser
 * @export
 * @param {any} user
 * @returns {object} object
 */
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

/**
 * logout
 * @export
 * @returns {func} function
 */
export function logout() {
  return (dispatch) => {
    localStorage.removeItem('token');
    setHeaderToken(false);
    dispatch(setCurrentUser({}));
  };
}


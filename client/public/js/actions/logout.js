import actionTypes from './actionTypes';

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  user
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setCurrentUser({}));
};


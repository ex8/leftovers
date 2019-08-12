import { SET_CURRENT_USER, SET_USER_LOCATION, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../types';
import setToken from '../setToken';

export const setCurrentUser = (user, isAuthenticated) => ({
    type: SET_CURRENT_USER,
    isAuthenticated,
    user,
});

export const setUserLocation = (place, coords) => ({
  type: SET_USER_LOCATION,
  place,
  coords,
});

export const logout = history => dispatch => {
  dispatch({ type: LOGOUT_REQUEST });
  setToken(null);
  dispatch(setCurrentUser(null, false));
  // remove localStorage here...
  dispatch({ type: LOGOUT_SUCCESS })
  history.push('/account/login');
};

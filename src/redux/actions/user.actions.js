import { SET_CURRENT_USER, SET_USER_LOCATION, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../types';
import setToken from '../../components/utils/setToken';

export const setCurrentUser = (user, isAuthenticated, isChef) => ({
    type: SET_CURRENT_USER,
    isAuthenticated,
    user,
    isChef,
});

export const setUserLocation = (place, coords) => ({
  type: SET_USER_LOCATION,
  place,
  coords,
});

export const logout = history => dispatch => {
  dispatch({ type: LOGOUT_REQUEST });
  setToken(null);
  dispatch(setCurrentUser(null, false, false));
  dispatch({ type: LOGOUT_SUCCESS })
  history.push('/account/login');
};

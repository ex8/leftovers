import { LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../types';
import setToken from '../setToken';
import { setCurrentUser } from './user.actions';

export const logout = history => dispatch => {
  dispatch({ type: LOGOUT_REQUEST });
  setToken(null);
  dispatch(setCurrentUser(null, false));
  // remove localStorage here...
  dispatch({ type: LOGOUT_SUCCESS })
  history.push('/account/login');
};

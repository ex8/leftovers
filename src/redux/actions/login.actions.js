import jwtDecode from 'jwt-decode';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET, SET_CURRENT_USER } from '../types';
import api from '../api';
import setToken from '../setToken';

export const login = user => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
    loading: true,
  });
  setTimeout(() => {
    api.post('/api/auth/login', user)
    .then(res => {
      if (res.data.success) {
        const { token } = res.data;
        setToken(token);
        const decoded = jwtDecode(token);
        dispatch(setCurrentUser(decoded, true));
        // not storing in localStorage just yet...
        // localStorage.setItem(`jwtToken`, token);
        dispatch({
          type: LOGIN_SUCCESS,
          loading: false,
          successMessage: 'Account successfully logged in.'
        });
        // redirect here
      }
      else {
        dispatch({
          type: LOGIN_FAILURE,
          loading: false,
          errorMessage: `${res.data.message}`
        })
      }
    })
    .catch(() => dispatch({
      type: LOGIN_FAILURE,
      loading: false,
      errorMessage: 'You cannot login at this time.'
    }));
  }, 3000);
};

export const reset = () => {
  return {
    type: LOGIN_RESET,
    loading: false,
    successMessage: '',
    errorMessage: '',
  };
};

export const setCurrentUser = (user, isAuthenticated) => {
  return {
    type: SET_CURRENT_USER,
    isAuthenticated,
    user,
  };
};

import jwtDecode from 'jwt-decode';
import { isEmail } from 'validator';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET } from '../types';
import api from '../api';
import setToken from '../setToken';
import { setCurrentUser } from './user.actions';

export const login = (user, history) => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
    loading: true,
  });
  if (!isEmail(user.email)) {
    return dispatch({
      type: LOGIN_FAILURE,
      errorMessage: 'Please enter a valid e-mail address.',
    });
  }
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
        history.push('/account');
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
};

export const reset = () => {
  return {
    type: LOGIN_RESET,
    loading: false,
    successMessage: '',
    errorMessage: '',
  };
};

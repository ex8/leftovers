import jwtDecode from 'jwt-decode';
import { isEmail } from 'validator';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET } from '../types';
import api from '../api';
import { setCurrentUser } from './user.actions';
import setToken from '../setToken';

export const login = (user, history) => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
    loading: true,
  });
  if (!isEmail(user.email) || user.email === '') {
    return dispatch({
      type: LOGIN_FAILURE,
      errorMessage: 'Please enter a valid e-mail address.',
    });
  }
  if (user.password === '') {
    return dispatch({
      type: LOGIN_FAILURE,
      errorMessage: 'Please enter a password.'
    });
  }
  api.post('/api/auth/login', user)
    .then(res => {
      if (res.data.success) {
        const { token } = res.data;
        const decoded = jwtDecode(token);
        setToken(token);
        dispatch(setCurrentUser(decoded, true));
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

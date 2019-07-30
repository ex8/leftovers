import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP_RESET } from '../types';
import api from '../api';

export const signup = ({ password, password2, ...rest }) => dispatch => {
  dispatch({
    type: SIGNUP_REQUEST,
    loading: true,
  });
  setTimeout(() => {
    if (password === password2) {
      api.post('/api/auth/signup', { password, ...rest })
        .then(res => {
          if (res.data.success) {
            dispatch({
              type: SIGNUP_SUCCESS,
              loading: false,
              successMessage: 'Account successfully created. You may now login.'
            });
          }
          else {
            dispatch({
              type: SIGNUP_FAILURE,
              loading: false,
              errorMessage: res.data.message,
            });
          }
        })
        .catch(() => dispatch({
          type: SIGNUP_FAILURE,
          loading: false,
          errorMessage: 'You cannot signup at this time.',
        }));
    }
    else {
      dispatch({
        type: SIGNUP_FAILURE,
        loading: false,
        errorMessage: 'Passwords do not match. Please try again.',
      });
    }
  }, 3000);
};

export const reset = () => {
  return {
    type: SIGNUP_RESET,
    loading: false,
    successMessage: null,
    errorMessage: null,
  };
};

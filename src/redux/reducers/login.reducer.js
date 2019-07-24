import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET, SET_CURRENT_USER } from '../types';

const INITIAL_STATE = {
  loading: false,
  user: null,
  isAuthenticated: false,
  successMessage: '',
  errorMessage: '',
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: action.loading,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        successMessage: action.successMessage,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: action.loading,
        errorMessage: action.errorMessage,
      };
    case LOGIN_RESET:
      return {
        ...state,
        loading: action.loading,
        successMessage: action.successMessage,
        errorMessage: action.errorMessage,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        user: action.user,
      };
    default:
      return state;
  }
};

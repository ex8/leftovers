import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET } from '../types';

const INITIAL_STATE = {
  loading: false,
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
    default:
      return state;
  }
};

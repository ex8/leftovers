import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP_RESET } from '../types';

const INITIAL_STATE = {
  loading: false,
  successMessage: null,
  errorMessage: null,
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: action.loading,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        successMessage: action.successMessage,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: action.loading,
        errorMessage: action.errorMessage,
      };
    case SIGNUP_RESET:
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

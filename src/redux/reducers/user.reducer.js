import { SET_CURRENT_USER } from '../types';

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
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

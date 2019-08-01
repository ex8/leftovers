import { SET_CURRENT_USER } from '../types';

export const setCurrentUser = (user, isAuthenticated) => {
  return {
    type: SET_CURRENT_USER,
    isAuthenticated,
    user,
  };
};

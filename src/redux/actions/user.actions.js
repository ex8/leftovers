import { SET_CURRENT_USER } from '../types';

export const setCurrentUser = (user, isAuthenticated) => ({
    type: SET_CURRENT_USER,
    isAuthenticated,
    user,
});
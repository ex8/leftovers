import { SET_CURRENT_USER, SET_USER_LOCATION } from '../types';

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
  location: {
    place: '',
    coords: {
      lat: null,
      lng: null,
    },
  },
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        user: action.user,
      };
    case SET_USER_LOCATION:
      return {
        ...state,
        location: {
          place: action.place,
          coords: action.coords,
        }
      };
    default:
      return state;
  }
};

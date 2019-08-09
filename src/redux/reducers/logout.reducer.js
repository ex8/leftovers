import { LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../types';

const INITIAL_STATE = {};

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
      };
    default:
      return state
  };
};

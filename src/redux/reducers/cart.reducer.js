import { CART_ADD_ITEM } from '../types';

const INITIAL_STATE = {
  count: 0,
  chef: null,
  items: {},
};

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        count: action.count,
        chef: action.chef,
        items: action.items,
      };
    default:
      return state;
  };
};

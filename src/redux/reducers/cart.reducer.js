import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QUANTITY } from '../types';

const INITIAL_STATE = {
  totalAmount: 0,
  totalQuanity: 0,
  items: {},
};

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        items: action.items,
      };
    case CART_UPDATE_QUANTITY:
      return {
        ...state,
        items: action.items,
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  };
};

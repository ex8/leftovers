import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QUANTITY, CART_SET_CHEF, CART_CLEAR } from '../types';

const INITIAL_STATE = {
  chefId: null,
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
    case CART_SET_CHEF:
      return {
        ...state,
        chefId: action.chefId,
      };
    case CART_CLEAR:
      return {
        ...state,
        chefId: action.chefId,
        items: action.items,
      };
    default:
      return state;
  };
};

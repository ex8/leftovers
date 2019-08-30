import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_QUANTITY,
  CART_SET_CHEF,
  CART_CLEAR,
  CART_SEND_NOTIFICATION,
  CART_RESET_NOTIFICATION,
} from '../types';

const INITIAL_STATE = {
  chefId: null,
  sendNotification: false,
  notificationMessage: '',
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
    case CART_SEND_NOTIFICATION:
      return {
        ...state,
        sendNotification: action.sendNotification,
        notificationMessage: action.notificationMessage,
      };
    case CART_RESET_NOTIFICATION:
      return {
        ...state,
        sendNotification: action.sendNotification,
        notificationMessage: action.notificationMessage,
      };
    default:
      return state;
  };
};

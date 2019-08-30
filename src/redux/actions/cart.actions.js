import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_QUANTITY,
  CART_SET_CHEF,
  CART_CLEAR,
  CART_SEND_NOTIFICATION,
  CART_RESET_NOTIFICATION,
} from '../types';

export const addItem = dish => (dispatch, getState) => {
  const { chefId, items } = getState().cartReducer;
  if (dish._id in items) {
    dispatch(updateItemQuantity(dish, items[dish._id].quantity + 1))
  }
  else {
    if (chefId) {
      if (dish.chef._id === chefId) {
        dispatch({
          type: CART_ADD_ITEM,
          items: {
            ...items,
            [dish._id]: {
              quantity: 1,
              dish,
            }
          },
        });
        dispatch(sendNotification('Item added to cart.'))
      }
      else {
        // clear and reset b/c new chef
        dispatch(clear());
        dispatch(setChef(dish.chef._id));
        dispatch({
          type: CART_ADD_ITEM,
          items: {
            [dish._id]: {
              quantity: 1,
              dish,
            }
          },
        });
        dispatch(sendNotification('Item added to cart.'))
      }
    }
    else {
      dispatch(setChef(dish.chef._id));
      dispatch({
        type: CART_ADD_ITEM,
        items: {
          ...items,
          [dish._id]: {
            quantity: 1,
            dish,
          }
        },
      });
      dispatch(sendNotification('Item added to cart.'))
    }
  }
};

export const updateItemQuantity = (dish, quantity) => (dispatch, getState) => {
  const { items } = getState().cartReducer;
  dispatch({
    type: CART_UPDATE_QUANTITY,
    items: {
      ...items,
      [dish._id]: {
        quantity,
        dish,
      },
    },
  });
  dispatch(sendNotification('Item updated from cart.'));
};

export const removeItem = dish => (dispatch, getState) => {
  const { items } = getState().cartReducer;
  const { [dish._id]: value, ...rest } = items;
  dispatch({
    type: CART_REMOVE_ITEM,
    items: {
      ...rest,
    },
  });
  dispatch(sendNotification('Item removed from cart.'));
};

export const setChef = chefId => {
  return {
    type: CART_SET_CHEF,
    chefId,
  };
};

export const clear = () => {
  return {
    type: CART_CLEAR,
    chefId: null,
    items: {},
  };
};

export const sendNotification = message => dispatch => {
  dispatch({
    type: CART_SEND_NOTIFICATION,
    sendNotification: true,
    notificationMessage: message,
  })
  setTimeout(() => dispatch(resetNotification()), 2500);
};

export const resetNotification = () => {
  return {
    type: CART_RESET_NOTIFICATION,
    sendNotification: false,
    notificationMessage: '',
  };
};

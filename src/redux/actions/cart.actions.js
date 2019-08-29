import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QUANTITY, CART_SET_CHEF, CART_CLEAR } from '../types';

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
      }
      else {
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

import { CART_ADD_ITEM } from '../types';

export const addItem = dish => (dispatch, getState) => {
  const { count, chef, items } = getState().cartReducer;
  if (dish._id in items) {
    console.log('exists...');
  }
  else {
    dispatch({
      type: CART_ADD_ITEM,
      count: count + 1,
      chef: chef ? chef : null,
      items: {
        ...items,
        [dish._id]: {
          quantity: 1,
          dish,
        }
      },
    });
  }
};

import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import cartReducer from './cart.reducer';

export default combineReducers({
  userReducer,
  cartReducer,
});

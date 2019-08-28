import { combineReducers } from 'redux';

import signupReducer from './signup.reducer';
import loginReducer from './login.reducer';
import userReducer from './user.reducer';
import cartReducer from './cart.reducer';

export default combineReducers({
  signupReducer,
  loginReducer,
  userReducer,
  cartReducer,
});

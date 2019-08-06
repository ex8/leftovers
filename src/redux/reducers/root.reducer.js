import { combineReducers } from 'redux';

import signupReducer from './signup.reducer';
import loginReducer from './login.reducer';
import userReducer from './user.reducer';
import logoutReducer from './logout.reducer';

export default combineReducers({
  signupReducer,
  loginReducer,
  userReducer,
  logoutReducer,
});

import { combineReducers } from 'redux';

import signupReducer from './signup.reducer';
import loginReducer from './login.reducer';

export default combineReducers({
  signupReducer,
  loginReducer,
});

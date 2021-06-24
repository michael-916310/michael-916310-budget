
import { combineReducers } from 'redux';
import { authReducer } from './../components/login/reducers';

export const reducer = combineReducers({
  auth: authReducer,
})
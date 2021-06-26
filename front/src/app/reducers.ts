
import { combineReducers } from 'redux';
import { authReducer } from './../components/login/reducers';
import { expenseItemsListReducer } from './../components/expenseItemsList/reducer';

export const reducer = combineReducers({
  auth: authReducer,
  expenseItemsList: expenseItemsListReducer,
})
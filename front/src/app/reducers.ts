
import { combineReducers } from 'redux';
import { authReducer } from './../components/login/reducers';
import { expenseItemsListReducer } from './../components/expenseItemsList/reducer';
import { expenseGroupListReducer } from './../components/expenseGroupList/reducer';
import { menuReducer } from './../components/layout/reducer';

export const reducer = combineReducers({
  auth: authReducer,
  expenseItemsList: expenseItemsListReducer,
  expenseGroupList: expenseGroupListReducer,
  menu: menuReducer,
})
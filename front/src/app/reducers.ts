
import { combineReducers } from 'redux';
import { authReducer } from './../components/login/reducers';
import { expenseItemsListReducer } from './../components/expenseItemsList/reducer';
import { expenseGroupListReducer } from './../components/expenseGroupList/reducer';
import { menuReducer } from './../components/layout/reducer';
import { expenseListFetchReducer, expenseListDeleteFetchReducer } from './../components/expenseList/reducer';

export const reducer = combineReducers({
  auth: authReducer,
  expenseItemsList: expenseItemsListReducer,
  expenseGroupList: expenseGroupListReducer,
  menu: menuReducer,
  expenseList: expenseListFetchReducer,
  expenseListItemDelete: expenseListDeleteFetchReducer,
})
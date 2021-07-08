import { actions } from './actions';
import { configureFetchReducer } from './../../app/commonFN';
import { TRequestState, requestStateInitial } from './../../app/commonTypes';

export interface IExpenseListItem {
  id: number,
  period: string,
  day: number,
  groupName: string,
  expenseName: string,
  description: string,
  amount: number,
}

interface TStore {
  expenseList: IExpenseListItem[],
  request: TRequestState,
}

const initialState: TStore = {
  expenseList: [],
  request:{
    ...requestStateInitial,
    error: {
      ...requestStateInitial.error,
    }
  }
}

export const expenseListFetchReducer = configureFetchReducer(
  {
    actions,
    initialState,
    successStateChange: (state: TStore, payload:[]) => {
      state.expenseList = payload;
      return state;
    }
  }
);
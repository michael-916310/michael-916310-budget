import { actions, actionsDelete } from './actions';
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

// =======================================

interface TStoreDelete {
  request: TRequestState,
}

const initialStateDelete: TStoreDelete = {
  request:{
    ...requestStateInitial,
    error: {
      ...requestStateInitial.error,
    }
  }
}
export const expenseListDeleteFetchReducer = configureFetchReducer(
  {
    actions:actionsDelete,
    initialState: initialStateDelete,
    successStateChange: (state: TStoreDelete, payload:any) => {
      console.log(payload);
      if (payload.status === -1) {
        state.request.error.message = payload.message;
        state.request.fetchFail = true;
        state.request.fetchSuccess = false;
      }
      return state;
    }
  }
);
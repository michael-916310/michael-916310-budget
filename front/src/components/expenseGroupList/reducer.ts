import { actions } from './actions';
import { configureFetchReducer } from '../../app/commonFN';
import { TRequestState, TExpenseGroupItem } from '../../app/commonTypes';

interface TStore {
  expenseGroup: TExpenseGroupItem [],
  request: TRequestState
}

const initialState: TStore = {
  expenseGroup:[],
  request: {
    fetchStart: false,
    fetchFail: false,
    error: {
      message: '',
    },
    fetchSuccess: false,
  }
}

const expenseGroupListReducer = configureFetchReducer(
  {
    actions,
    initialState,
    successStateChange:(state:TStore, payload: TExpenseGroupItem []) => {
      state.expenseGroup = payload;
      return state;
    }
  }
);

export { expenseGroupListReducer };

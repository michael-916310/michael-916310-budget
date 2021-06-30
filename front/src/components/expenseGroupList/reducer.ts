import { actions } from './actions';
import { TRequestState, configureFetchReducer } from './../../app/common';

interface TStore {
  expenseGroup: {id: number, name: string} [],
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
    successStateChange:(state:TStore, payload) => {
      state.expenseGroup = payload;
      return state;
    }
  }
);

export { expenseGroupListReducer };

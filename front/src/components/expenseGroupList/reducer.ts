import { actions } from './actions';
import { configureFetchReducer } from '../../app/commonFN';
import { TRequestState, TExpenseGroupItem } from '../../app/commonTypes';

interface TStore {
  expenseGroup: TExpenseGroupItem [],
  selectedGroup: {
    id: number,
    name: string,
  } | null
  request: TRequestState
}

const initialState: TStore = {
  expenseGroup:[],
  selectedGroup: null,
  request: {
    fetchStart: false,
    fetchFail: false,
    error: {
      message: '',
    },
    fetchSuccess: false,
  }
}

const expenseGroupFetchReducer = configureFetchReducer(
  {
    actions,
    initialState,
    successStateChange:(state:TStore, payload: TExpenseGroupItem []) => {
      state.expenseGroup = payload;
      return state;
    }
  }
);

function expenseGroupListReducer (state:TStore, action:any) {
  switch(action.type) {
    case actions.const.EXPENSE_GROUP_SELECTED: {
      return {
        ...state,
        ...{ selectedGroup: {
              id: action.payload.selectedId,
              name:state.expenseGroup.filter((item)=>item.id===action.payload.selectedId)[0].name
            }
          }
      }
    }
    default:
      return expenseGroupFetchReducer(state, action)
  }
}

export { expenseGroupListReducer };

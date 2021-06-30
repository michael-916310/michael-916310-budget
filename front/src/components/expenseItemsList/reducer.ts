import { actions } from './actions';
import { TRequestState, TExpenseItem } from '../../app/commonTypes';

interface TStore {
  expenseList: TExpenseItem [],
  selectedExpense: {
    id: number,
    name: string,
  } | null
  request: TRequestState
}

const initialState: TStore = {
  expenseList: [],
  selectedExpense: null,
  request: {
    fetchStart: false,
    fetchFail: false,
    error: {
      message: '',
    },
    fetchSuccess: false,
  }
}

export function expenseItemsListReducer(state: TStore = initialState, action: any):TStore {
  const clone = {
    ...state,
    request: {
      ...state.request,
      error: { ...state.request.error }
    },
  };

  function setStep(start: boolean, fail: boolean, success: boolean) {
    clone.request.fetchStart = start;
    clone.request.fetchFail = fail;
    clone.request.fetchSuccess = success;
    if (!fail) {
      clone.request.error = {
        message: '',
      }
    }
    if (start) {
      clone.expenseList = [];
    }
  }

  switch(action.type) {
    case actions.const.EXPENSE_ITEMS_LIST_FETCH_START: {
      setStep(true, false, false);
      return clone;
    }
    case actions.const.EXPENSE_ITEMS_LIST_FETCH_FAIL: {
      setStep(false, true, false);
      clone.request.error = { message: action.payload.message }
      return clone;
    }
    case actions.const.EXPENSE_ITEMS_LIST_FETCH_SUCCESS: {
      setStep(false, false, true);
      clone.expenseList = [...action.payload.itemsArray];
      return clone;
    }
    case actions.const.EXPENSE_ITEM_SELECTED: {
      clone.selectedExpense = {
        id: action.payload.selectedId,
        name: clone.expenseList.filter((item)=>item.id===action.payload.selectedId)[0].name,
      }
      return clone;
    }
    default:
      return state;
  }
}
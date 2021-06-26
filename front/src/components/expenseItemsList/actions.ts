import type { TRequestActions } from '../../app/common';

const EXPENSE_ITEMS_LIST_FETCH_START = 'EXPENSE_ITEMS_LIST_FETCH_START';
const EXPENSE_ITEMS_LIST_FETCH_FAIL = 'EXPENSE_ITEMS_LIST_FETCH_FAIL';
const EXPENSE_ITEMS_LIST_FETCH_SUCCESS = 'EXPENSE_ITEMS_LIST_FETCH_SUCCESS';

function fetchStartAC(){
  return ({
    type: EXPENSE_ITEMS_LIST_FETCH_START,
  })
}

function fetchFailAC( err: { message: string }) {
  return ({
    type: EXPENSE_ITEMS_LIST_FETCH_FAIL,
    payload: err,
  })
}

function fetchSuccessAC( fetchedData: any ){
  return {
    type: EXPENSE_ITEMS_LIST_FETCH_SUCCESS,
    payload: {
      itemsArray: fetchedData,
    }
  }
}

export const actions: {
  const: any,
  requestStepsAC: TRequestActions,
} = {
  const: {
    EXPENSE_ITEMS_LIST_FETCH_START,
    EXPENSE_ITEMS_LIST_FETCH_FAIL,
    EXPENSE_ITEMS_LIST_FETCH_SUCCESS,
  },
  requestStepsAC: {
    fetchStart: fetchStartAC,
    fetchFail: fetchFailAC,
    fetchSuccess: fetchSuccessAC,
  }
}
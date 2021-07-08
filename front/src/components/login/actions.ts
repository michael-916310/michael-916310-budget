import type { TRequestActions } from '../../app/commonTypes';

const AUTH_FETCH_START = 'AUTH_FETCH_START';
const AUTH_FETCH_FAIL = 'AUTH_FETCH_FAIL';
const AUTH_FETCH_SUCCESS = 'AUTH_FETCH_SUCCESS';
const AUTH_LOGOUT = 'AUTH_LOGOUT';

export interface TAuthLoginPayload {
  userId: number|null,
  userName: string|null,
  isAuthenticated: boolean
}

export interface TAuthLoginAction {
  type: string,
  payload: TAuthLoginPayload | string
}

function authFetchStartAC(){
  return ({
    type: AUTH_FETCH_START,
  })
}

function authFetchFailAC(err: {message: string}){
  return ({
    type: AUTH_FETCH_FAIL,
    payload: err,
  })
}

function authFetchSuccessAC( fetchedData: any ) {
  let payload = {};
  if (fetchedData.userId>0) {
    payload = {
      userId: fetchedData.userId,
      userName: fetchedData.userName,
      isAuthenticated: true,
    }
  }

  return ({
    type: AUTH_FETCH_SUCCESS,
    payload
  })
}

export function authLogoutAC(){
  return {
    type: AUTH_LOGOUT,
  }
}

export const actions: {
  const: any,
  requestStepsAC: TRequestActions,
  other: any,
} = {
  const: {
    AUTH_FETCH_START,
    AUTH_FETCH_FAIL,
    AUTH_FETCH_SUCCESS,
    AUTH_LOGOUT,
  },
  requestStepsAC: {
    fetchStart: authFetchStartAC,
    fetchFail: authFetchFailAC,
    fetchSuccess: authFetchSuccessAC,
  },
  other: {
    authLogoutAC,
  }
}

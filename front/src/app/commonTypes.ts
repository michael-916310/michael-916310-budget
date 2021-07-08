export interface TRequestState {
  fetchStart: boolean,
  fetchFail: boolean,
  error: {
    message: string
  },
  fetchSuccess: boolean,
}

export const requestStateInitial:TRequestState = {
  fetchStart: false,
  fetchFail: false,
  error: {
    message: '',
  },
  fetchSuccess: false,
}

export interface TRequestActions {
  fetchStart: ()=>void,
  fetchFail: (error: {message: string})=>void,
  fetchSuccess: (fetchData: any)=>void,
}

export interface TActions {
  const: any,
  requestStepsAC: TRequestActions,
}

export interface TExpenseItem {
  id: number,
  name: string,
  oftenUsed: number,
}

export interface TExpenseGroupItem {
  id: number,
  name: string,
  obsolete:number,
  defaultSelection: number,
}

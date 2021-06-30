export interface TRequestState {
  fetchStart: boolean,
  fetchFail: boolean,
  error: {
    message: string
  },
  fetchSuccess: boolean,
}

export interface TRequestActions {
  fetchStart: ()=>void,
  fetchFail: (error: {message: string})=>void,
  fetchSuccess: (fetchData: any)=>void,
}

export interface TExpenseItem {
  id: number,
  name: string,
  oftenUsed: number,
}

export interface TExpenseGroupItem {
  id: number,
  name: string,
  obsolete:number
}

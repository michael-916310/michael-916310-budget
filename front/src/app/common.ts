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
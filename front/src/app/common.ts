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


export function isNumeric(n: any) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

type tActions = {
  const: any,
  requestStepsAC: TRequestActions,
}

export function configureFetchActions(
    baseActionName:string,
    getSuccessPayload: (fetchedData: any)=>any)
  {
  const start: string = `${baseActionName.toUpperCase()}_FETCH_START`;
  const fail: string = `${baseActionName.toUpperCase()}_FETCH_FAIL`;
  const success: string = `${baseActionName.toUpperCase()}_FETCH_SUCCESS`;

  const actions: tActions = {
    const: {
      start,
      fail,
      success,
    },
    requestStepsAC: {
      fetchStart:() => ({
          type: actions.const.start,
      }),
      fetchFail:(err: { message: string }) => ({
        type: actions.const.fail,
        payload: err,
      }),
      fetchSuccess:( fetchedData: any ) => ({
        type: actions.const.success,
        payload: getSuccessPayload(fetchedData)
      }),
    }
  }

  return actions;
}

export function configureFetchReducer({
    actions,
    initialState,
    startStateChange = (state:any)=>state,
    successStateChange = (state:any)=>state
  } : {
    actions: tActions,
    initialState: any,
    startStateChange?: (state:any)=>any,
    successStateChange?: (state:any, payload: any)=>any
  }
  ) {

    return function (
      state = initialState,
      action: any
    ){
      switch(action.type) {
        case actions.const.start: {
          return startStateChange({
            ...state,
            ...{
              request:{
                fetchStart: true,
                fetchFail: false,
                fetchSuccess: false,
                error: {
                  message:'',
                }}
              }
          })
        }
        case actions.const.fail: {
          console.log('reducer', actions.const.fail);
          return {
            ...state,
            ...{
              request:{
                fetchStart: false,
                fetchFail: true,
                fetchSuccess: false,
                error: {
                  message: action.payload.message,
                }}
              }
          }
        }
        case actions.const.success: {
          return successStateChange({
            ...state,
            ...{
              request:{
                fetchStart: false,
                fetchFail: false,
                fetchSuccess: true,
                error: {
                  message: '',
                }}
              }
          }, action.payload)
        }
        default:
          return state;
      }
  }
}
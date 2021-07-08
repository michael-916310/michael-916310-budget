
import { actions, TAuthLoginPayload, TAuthLoginAction} from './actions';
import { TRequestState } from '../../app/commonTypes';

interface TAuthStore extends TAuthLoginPayload {
  request: TRequestState,
}

const initialStateAuth: TAuthStore = {
  userId: null,
  userName: null,
  isAuthenticated: false,
  request: {
    fetchStart: false,
    fetchFail: false,
    error: {
      message: '',
    },
    fetchSuccess: false,
  }
}

export function authReducer(state: TAuthStore = initialStateAuth, action: any ):TAuthStore {
  const clone = {
    ...state,
    request: {
      ...state.request,
      error: {...state.request.error}
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
      clone.userId = null;
      clone.userName = null;
      clone.isAuthenticated = false;
    }
  }

  switch (action.type) {
    case actions.const.AUTH_FETCH_START: {
      setStep(true, false, false);

      return clone;
    }
    case actions.const.AUTH_FETCH_FAIL: {
      setStep(false, true, false);

      clone.request.error = {message: action.payload.message};
      console.log(clone);

      return clone;
    }
    case actions.const.AUTH_FETCH_SUCCESS: {
      setStep(false, false, true);

      clone.userId = (action.payload.isAuthenticated) ? action.payload.userId: null;
      clone.userName = (action.payload.isAuthenticated) ? action.payload.userName: null;
      clone.isAuthenticated = action.payload?.isAuthenticated || false;

      return clone;
    }
    case actions.const.AUTH_LOGOUT: {
      clone.isAuthenticated = false;
      clone.userName = null;
      clone.userId = null;
      return clone;
    }
    default:

      return state;
  }
}

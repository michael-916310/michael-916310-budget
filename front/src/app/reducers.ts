
import { actions, TAuthLogin} from './actions';
import { combineReducers } from 'redux';

type TAction = {
  type: string,
  payload: TAuthLogin|undefined|null,
}

const initialStateAuth: TAuthLogin = {
  userId: null,
  userName: null,
  isAuthenticated: false,
}

function authReducer(state: TAuthLogin = initialStateAuth, action: TAction):TAuthLogin {
  switch (action.type) {
    case actions.AUTH_LOGIN_SUCCESS: {
      return {
        userId: (action.payload?.isAuthenticated) ? action.payload?.userId: null,
        userName: (action.payload?.isAuthenticated) ? action.payload.userName: null,
        isAuthenticated: action.payload?.isAuthenticated || false,
      }
    }
    default:
      return state;
  }
}

export const reducer = combineReducers({
  authReducer,
})
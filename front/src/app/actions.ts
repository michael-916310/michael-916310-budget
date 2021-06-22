
/* ----------------
  Authentication
----------------  */

const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';

export type TAuthLogin = {
  userId: number|null,
  userName: string|null,
  isAuthenticated: boolean
}

export function authLoginTryAC ( {userId, userName, isAuthenticated }:TAuthLogin ) :
{ type: string, payload: TAuthLogin}  {
    return {
      type: AUTH_LOGIN_SUCCESS,
      payload: {
        userId,
        userName,
        isAuthenticated,
      }
    }
  }





export const actions = {
  AUTH_LOGIN_SUCCESS,
}

export const actionCreators = {
  authLoginTryAC,
}


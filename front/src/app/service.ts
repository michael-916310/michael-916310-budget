import config from './config';
import { authLoginTryAC } from './actions';
import { appDispatch } from './hooks';

function loadURL(relativePath: string, options:{}={}, callBackList: ((data: any)=>void)[]): void {
  fetch(config.backURL + relativePath, options)
    .then((res)=>{
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
    })
    .then((res)=>{
      callBackList.forEach(element => {
        element(JSON.parse(res));
      });
    })
}

export function checkLogin(userString: string): void {
  loadURL(
    '/user/check',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({userCode: userString})
    },
    [
      (res)=>{
        appDispatch(
          authLoginTryAC({
            userId:res.userId,
            userName:res.userName,
            isAuthenticated: res.userId > 0
          })
        )
      }
    ]
  );
}
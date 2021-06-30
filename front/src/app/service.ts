import config from './config';
import type { TRequestActions } from './commonTypes';
import { appDispatch } from './hooks';

export function loadURL(
    relativePath: string,
    fetchOptions:{}={},
    requestSteps: TRequestActions): void {

  appDispatch(requestSteps.fetchStart());
  fetch(config.backURL + relativePath, fetchOptions)
    .then((res)=>{
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
    })
    .then((res)=>{
      appDispatch(requestSteps.fetchSuccess(JSON.parse(res)));
    }).catch((err)=>{
      appDispatch(requestSteps.fetchFail({message: err.message}));
    })

}

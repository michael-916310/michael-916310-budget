import config from './config';
import type { TRequestActions } from './commonTypes';
import { appDispatch } from './hooks';

export function fetchURL(relativePath: string, fetchOptions:{}={}){
  return fetch(config.backURL + relativePath, fetchOptions)
    .then((res)=>{
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
    })
}

export function loadURLWithSteps(
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

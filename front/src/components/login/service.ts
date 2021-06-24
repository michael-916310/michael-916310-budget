import { loadURL} from './../../app/service';
import { appDispatch } from './../../app/hooks';
import { actions } from './actions';

export function checkLogin( userString: string ): void {
  loadURL(
    '/user/check',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({userCode: userString})
    },
    {...actions.requestStepsAC},
    []
  );
}
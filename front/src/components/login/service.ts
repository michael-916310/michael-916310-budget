import { loadURLWithSteps} from './../../app/service';
import { actions } from './actions';

export function checkLogin( userString: string ): void {
  loadURLWithSteps(
    '/user/check',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({userCode: userString})
    },
    {...actions.requestStepsAC}
  );
}
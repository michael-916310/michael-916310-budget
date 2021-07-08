import { loadURLWithSteps } from '../../app/service';
import { actions } from './actions';

export function loadExpenseList() {
  loadURLWithSteps(
    '/expense/getList',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    },
    {...actions.requestStepsAC}
  );
}
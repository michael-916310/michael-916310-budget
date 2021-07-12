import { loadURLWithSteps } from '../../app/service';
import { actions, actionsDelete } from './actions';

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

export function deleteExpenseItem(id: number) {
  loadURLWithSteps(
    '/expense/delete',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        recordId: id
      })
    },
    { ...actionsDelete.requestStepsAC }
  )
}
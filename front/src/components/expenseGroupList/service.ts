import { loadURLWithSteps} from '../../app/service';
import { actions } from './actions';

export function loadExpenseGroupList() {
  loadURLWithSteps(
    '/references/expenseGroups',
    { method: 'POST' },
    {...actions.requestStepsAC}
  );
}
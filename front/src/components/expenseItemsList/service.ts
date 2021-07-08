import { loadURLWithSteps} from '../../app/service';
import { actions } from './actions';

export function loadExpenseItemsList() {
  loadURLWithSteps(
    '/references/expenseItems',
    { method: 'POST' },
    {...actions.requestStepsAC}
  );
}

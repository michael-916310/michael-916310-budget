import { loadURL} from '../../app/service';
import { actions } from './actions';

export function loadExpenseItemsList() {
  loadURL(
    '/references/expenseItems',
    { method: 'POST' },
    {...actions.requestStepsAC},
    []);
}

import { loadURL} from '../../app/service';
import { actions } from './actions';

export function loadExpenseGroupList() {
  loadURL(
    '/references/expenseGroups',
    { method: 'POST' },
    {...actions.requestStepsAC}
  );
}
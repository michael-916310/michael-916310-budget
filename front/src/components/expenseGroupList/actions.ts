import { configureFetchActions } from '../../app/commonFN';
import { TActions } from '../../app/commonTypes';

interface TExpActions extends TActions {
  otherActionCreators?: any
}

const actions: TExpActions = configureFetchActions(
  'EXPENSE_GROUPS_LIST',
  (fetchedData:any)=>fetchedData
);

actions.const.EXPENSE_GROUP_SELECTED = 'EXPENSE_GROUP_SELECTED';
actions.otherActionCreators = {
  expenseGroupSelectedAC: (id: number) => {
    return {
      type: actions.const.EXPENSE_GROUP_SELECTED,
      payload: {
        selectedId: id,
      }
    }
  }
}

export { actions };
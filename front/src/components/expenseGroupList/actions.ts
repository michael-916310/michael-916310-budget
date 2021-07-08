import { configureFetchActions } from '../../app/commonFN';
import { TOtherActions } from '../../app/commonTypes';

const actions: TOtherActions = configureFetchActions(
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
import { configureFetchActions } from '../../app/commonFN';

export const actions = configureFetchActions(
  'EXPENSE_GROUPS_LIST',
  (fetchedData:any)=>fetchedData
);
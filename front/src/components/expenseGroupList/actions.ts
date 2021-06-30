import { configureFetchActions } from '../../app/common';

export const actions = configureFetchActions(
  'EXPENSE_GROUPS_LIST',
  (fetchedData:any)=>fetchedData
);
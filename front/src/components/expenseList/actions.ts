import { configureFetchActions } from './../../app/commonFN';

const actions = configureFetchActions(
  'EXPENSE_LIST',
  (fetchedData:any)=>fetchedData
)

export { actions };
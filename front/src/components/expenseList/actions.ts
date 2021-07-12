import { configureFetchActions } from './../../app/commonFN';
import { TOtherActions } from './.././../app/commonTypes';

// =======================================
// для списка расходов
const actions = configureFetchActions(
  'EXPENSE_LIST',
  (fetchedData:any)=>fetchedData
)

// =============================================
// для удаления расхода из списка
const actionsDelete:TOtherActions = configureFetchActions(
  'EXPENSE_LIST_ITEM_DELETE',
  (fetchedData:any)=>fetchedData
)

// actionsDelete.const.EXPENSE_LIST_ITEM_DELETE = 'EXPENSE_LIST_ITEM_DELETE';
// actionsDelete.otherActionCreators = {
//   deleteAC: (id: number) => {
//     return {
//       type: actionsDelete.const.EXPENSE_LIST_DELETE,
//       payload: {
//         deletedId: id,
//       }
//     }
//   }
// }
export { actions, actionsDelete };
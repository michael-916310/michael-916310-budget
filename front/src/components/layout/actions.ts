export const MENU_ITEM_SELECTED = 'MENU_ITEM_SELECTED';

export function selectMenuAC(index: string){
  return {
    type: MENU_ITEM_SELECTED,
    payload: index,
  }
}
import { MENU_ITEM_SELECTED } from './actions';

interface TStore {
  selectedIndex: string,
}

const initialState: TStore = {
  selectedIndex: '1'
}

export function menuReducer(
  state = initialState,
  action: {type: string, payload:string})
  {
  switch (action.type) {
    case MENU_ITEM_SELECTED: {
      return {
        selectedIndex: action.payload,
      }
    }
    default:
      return state;
  }
}
import { addElement, likeElement, resetAll } from "./actionTypes";
import { FilmsItemType } from "../film-item/film-item";

const initialState: RootStore = { list: [], liked: [] };

const actionHanlder = new Map<string, RootReducer>([
  [
    addElement,
    (state, action: Action<FilmsItemType>) => {
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    }
  ],
  [
    likeElement,
    (state, action: Action<number>) => {
      const { liked } = state;
      if (liked.includes(action.payload)) {
        return {
          ...state,
          liked: liked.filter(e => e !== action.payload)
        };
      } else {
        return {
          ...state,
          liked: [...state.liked, action.payload]
        };
      }
    }
  ],
  [resetAll, () => initialState],
  ["DEFAULT_PLUG", (state: RootStore) => state]
]);

export function rootReducer(state = initialState, action: Action<ActionsT>) {
  const reducerToFire = (actionHanlder.has(action.type)
    ? actionHanlder.get(action.type)
    : actionHanlder.get("DEFAULT_PLUG")) as RootReducer;

  return reducerToFire(state, action);
}
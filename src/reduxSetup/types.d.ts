type RootStore = { list: FilmsItemType[]; liked: number[] };

type Action<T> = { type: string; payload: T };

type ActionsT =
  | typeof addElement
  | typeof addAllElements
  | typeof likeElement
  | typeof resetAll
  | "DEFAULT_PLUG";

type RootReducer<T = ActionsT> = (
  state: RootStore,
  action: Action<T>
) => RootStore;

import { deriveState } from "./deriveState";

export const enhanceStore = createStore => (
  reducer,
  preloadedState,
  enhancer
) => {
  const store = createStore(reducer, preloadedState, enhancer);
  const _getState = store.getState;
  store.getState = () => deriveState(_getState());
  return store;
};

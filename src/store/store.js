import { createStore, applyMiddleware, compose } from "redux";
import { initialState } from "./initialState";
import { reducer } from "./reducer";
import { enhanceStore } from "./storeEnhancer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(), enhanceStore)
);

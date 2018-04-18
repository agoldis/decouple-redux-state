import { createStore } from "redux";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => state;
export const store = createStore(reducer, initialState);

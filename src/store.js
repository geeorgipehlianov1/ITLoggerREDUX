import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReduce from "./reducers";

const initialState = {};

const middelware = [thunk];

const store = createStore(
  rootReduce,
  initialState,
  composeWithDevTools(applyMiddleware(...middelware))
);

export default store;

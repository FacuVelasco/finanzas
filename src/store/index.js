import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";

// deafultState ???

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

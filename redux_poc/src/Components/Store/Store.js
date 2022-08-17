import { createStore } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "../Reducer/Reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const middleware = [thunk];

const store = createStore(
  rootReducer
  //   composeWithDevTools(applyMiddleware(...middleware))
);
console.log(store.getState());
export default store;

import { combineReducers } from "redux";
import CakeReducer from "./CakeReducer";

const rootReducer = combineReducers({
  cakeReducer: CakeReducer,
});
export default rootReducer;

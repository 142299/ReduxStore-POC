import { combineReducers } from "redux";
import CakeReducer from "./CakeReducer";

const rootReducer = combineReducers({
  noOfCakes: CakeReducer,
});
export default rootReducer;

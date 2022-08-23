import { combineReducers } from "redux";
import CaseReducer from "./CaseReducer";
import CommonReducer from "./CommonReducer";

const rootReducer = combineReducers({
  caseReducer: CaseReducer,
  commonReducer :CommonReducer
});
export default rootReducer;

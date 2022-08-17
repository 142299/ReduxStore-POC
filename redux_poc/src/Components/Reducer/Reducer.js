import { combineReducers } from "redux";
import dataFromReducer from "./CakeReducer";
// import React from "react";

const rootReducer = combineReducers({
  noOfCakes: dataFromReducer,
});
export default rootReducer;

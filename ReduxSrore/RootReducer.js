import { combineReducers } from "@reduxjs/toolkit";
import Apireducer from "./Slices/ApiReducer";
import SelectReducer from "./Slices/SelectReducer";

const rootReducer = combineReducers({
  Select: SelectReducer,
  Api: Apireducer,
});

export default rootReducer;

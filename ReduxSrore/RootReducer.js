import { combineReducers } from "@reduxjs/toolkit";
import Apireducer from "./Slices/ApiReducer";
import SelectReducer from "./Slices/SelectReducer";
import statesReducer from "./Slices/statsReducer";

const rootReducer = combineReducers({
  Select: SelectReducer,
  Api: Apireducer,
  Stats: statesReducer,
});

export default rootReducer;

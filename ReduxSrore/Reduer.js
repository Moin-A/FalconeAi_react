import { combineReducers } from "@reduxjs/toolkit";
import Userreducer from "./Slices/userReducer";

const reducer = combineReducers({
  Users: Userreducer,
});

export default reducer;

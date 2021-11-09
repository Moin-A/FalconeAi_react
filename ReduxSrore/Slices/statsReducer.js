//Game Staes -Success or Failure
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "OutCome",
  initialState: { Result: "", Planet_found: "", Total_hrs: 0 },
  reducers: {
    initSuccess: () => {
      debugger;
    },
    initFailure: () => {
      debugger;
    },
  },
});
export const { initFailure, initSuccess } = slice.actions;

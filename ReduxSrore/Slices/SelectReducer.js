import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Select",
  initialState: {},
  reducers: {
    Planet: (initialState, actions) => {
      debugger;
      initialState.planet = { ...initialState.planet, ...actions.payload };
    },
    Vehicle: (initialState, actions) => {
      initialState.vehicle = { ...initialState.vehicle, ...actions.payload };
    },
  },
});

export const { Planet, Vehicle } = slice.actions;
export default slice.reducer;

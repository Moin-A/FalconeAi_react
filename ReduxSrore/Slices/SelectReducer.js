import { createSlice } from "@reduxjs/toolkit";
var id = 0;
const slice = createSlice({
  name: "Select",
  initialState: { currentPlanet: {}, currentVehicle: {} },
  reducers: {
    Planet: (initialState, actions) => {
      initialState.currentPlanet = Object.values(actions.payload)[0][0];

      initialState.planet = {
        ...initialState.planet,
        ...actions.payload,
      };
      return initialState;
    },
    Vehicle: (initialState, actions) => {
      initialState.currentVehicle = Object.values(actions.payload)[0][0];
      debugger;
      initialState.vehicle = { ...initialState.vehicle, ...actions.payload };
    },
  },
});

export const { Planet, Vehicle } = slice.actions;
export default slice.reducer;

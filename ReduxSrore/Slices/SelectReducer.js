import { createSlice } from "@reduxjs/toolkit";
var id = 0;
const slice = createSlice({
  name: "Select",
  initialState: {
    currentPlanet: [],
    currentVehicle: [],
    planet: {},
    vehicle: {},
    id: 0,
    voyage: {
      planet: false,
      vehicle: false,
    },
  },
  reducers: {
    Planet: (initialState, actions) => {
      initialState.currentPlanet = Object.values(actions.payload)[0][0];

      initialState.planet[initialState.id] = Object.values(
        actions.payload
      )[0][0];
      return initialState;
    },
    modVoyage: (initialState, actions) => {
      initialState.voyage[actions.payload] = true;
      const { voyage } = initialState;
      var { planet, vehicle } = voyage;

      if (planet && vehicle) {
        initialState.id++;
        voyage.planet = false;
        voyage.vehicle = false;

        initialState.currentPlanet = [];
        initialState.currentVehicle = [];
      }
    },
    resetSelect: (initialState, actions) => {
      initialState.currentPlanet = [];
      initialState.currentVehicle = [];
      initialState.planet = {};
      initialState.vehicle = {};
      initialState.id = 0;
      initialState.voyage = {
        planet: false,
        vehicle: false,
      };
    },
    Vehicle: (initialState, actions) => {
      initialState.currentVehicle = Object.values(actions.payload)[0][0];

      initialState.vehicle[initialState.id] = Object.values(
        actions.payload
      )[0][0];
    },
  },
});

export const { Planet, Vehicle, modVoyage, resetSelect } = slice.actions;
export default slice.reducer;

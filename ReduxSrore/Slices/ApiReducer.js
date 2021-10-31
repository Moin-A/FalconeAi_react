import { createSlice } from "@reduxjs/toolkit";
let lastid = 0;
const slice = createSlice({
  name: "api",
  initialState: { planetList: [], vehiclesList: [] },
  reducers: {
    loadapi: (api, actions) => {
      api.planetList = actions.payload.posts.posts1;
      api.vehiclesList = actions.payload.posts.posts2;
    },
    dummy: (api, actions) => {
      api.planetList = [1, 3];
      api.vehiclesList = [1, 3];
    },
  },
});

export const { loadapi } = slice.actions;
export default slice.reducer;

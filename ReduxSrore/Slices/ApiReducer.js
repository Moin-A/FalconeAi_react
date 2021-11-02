import { createSlice } from "@reduxjs/toolkit";
var current = 0;
const slice = createSlice({
  name: "api",
  initialState: { planetList: [], vehiclesList: [], id: 0 },
  reducers: {
    loadapi: (api, actions) => {
      api.planetList = actions.payload.posts.posts1;
      api.vehiclesList = actions.payload.posts.posts2;
    },
    modVehicleCount: (api, { payload }) => {
      if (payload.data.name !== id) {
        api.vehiclesList = api.vehiclesList.map((x) => {
          if (x.name == current) {
            x.total_no++;
            return x;
          }
          return x;
        });
      }
      var item = { ...payload.data };
      item["total_no"]--;
      api.vehiclesList = api.vehiclesList.map((x) => {
        if (x.name == payload.data.name) {
          return item;
        }
        return x;
      });
      current = payload.data.name;
    },
  },
});

export const { loadapi, modVehicleCount } = slice.actions;
export default slice.reducer;

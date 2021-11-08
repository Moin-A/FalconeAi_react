import { createSlice } from "@reduxjs/toolkit";
var current = 0;
var id;
const slice = createSlice({
  name: "api",
  initialState: {
    planetList: [],
    vehiclesList: [],
    id: 0,
    List: { veh: [], pla: [] },
  },
  reducers: {
    loadapi: (api, actions) => {
      api.planetList = actions.payload.posts.posts1;
      api.vehiclesList = actions.payload.posts.posts2;
      api.List = {
        veh: actions.payload.posts.posts2,
        pla: actions.payload.posts.posts1,
      };
    },
    resetApi: (api, actions) => {
      api.planetList = api.List.pla;
      api.vehicletList = api.List.veh;
    },
    modVehicleCount: (api, { payload }) => {
      if (payload.data.name !== current && id == payload.id) {
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
      id = payload.id;
    },
  },
});

export const { loadapi, modVehicleCount, resetApi } = slice.actions;
export default slice.reducer;

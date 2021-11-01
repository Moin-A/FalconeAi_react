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
    modCount: (api, { payload }) => {
      debugger;
      var item = { ...payload };
      item["total_no"]--;
      api.vehiclesList = api.vehiclesList.map((x) => {
        if (x.name == payload.name) {
          return item;
        }
        return x;
      });
    },
  },
});

export const { loadapi, modCount } = slice.actions;
export default slice.reducer;

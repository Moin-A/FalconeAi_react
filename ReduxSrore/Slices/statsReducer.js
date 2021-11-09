//Game Staes -Success or Failure
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "OutCome",
  initialState: { Result: "", Planet_found: "", Total_hrs: 0 },
  reducers: {
    initSuccess: (stats, actions) => {
      const { result, planetList, vehicleList } = actions.payload;

      let totaltimearray = Object.values(planetList[0]).map((el, index) => {
        return el.distance / Object.values(vehicleList)[0][index].speed;
      });
      const totaltime = totaltimearray.reduce(
        (acc, current) => acc + current,
        0
      );
      return {
        Result: "SUCCESS",
        Planet_found: [actions.payload.result.planet_name],
        Total_hrs: totaltime,
      };
    },
    initFailure: (stats, actions) => {
      return {
        Result: "FAILURE",
        Planet_found: "NA",
      };
    },
  },
});
export const { initFailure, initSuccess } = slice.actions;
export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";
let lastid = 0;
const slice = createSlice({
  name: "User",
  initialState: {},
  reducers: {
    bugsAdded: (bugs, actions) => {
      bugs.push({
        id: lastid++,
        description: actions.payload.description,
      });
    },
    bugsRemoved: (bugs, actions) => {
      debugger;
      bugs.push({
        id: lastid++,
        description: actions.payload.description,
      });
    },
    error: (error, actions) => {
      console.log("An error occured");
    },
    loadapi: (User, actions) => {
      User.List = actions.payload.posts;
    },
  },
});

export const { bugsAdded, bugsRemoved, error, loadapi } = slice.actions;
export default slice.reducer;

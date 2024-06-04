import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    deleteUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, deleteUser } = user.actions;
export default user.reducer;

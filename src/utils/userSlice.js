import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    deleteUser: (state) => {
      return null;
    },
  },
});
console.log("userRed", user);
console.log(user.actions);
console.log(user.reducer);

export const { addUser, deleteUser } = user.actions;
export default user.reducer;

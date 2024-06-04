import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailorVideo: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
  },
});
export const { addNowPlaying, addTrailorVideo } = moviesSlice.actions;
export default moviesSlice.reducer;

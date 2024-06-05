import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailorVideo: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});
export const { addNowPlaying, addTrailorVideo, addPopularMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;

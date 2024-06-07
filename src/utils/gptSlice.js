import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    searchMovieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      console.log("action", action.payload);
      const { movieNames, searchMovieResults } = action.payload;
      state.movieNames = movieNames;
      state.searchMovieResults = searchMovieResults;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import logger from "redux-logger";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSearch: gptReducer,
    config: configReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default appStore;

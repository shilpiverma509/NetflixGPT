import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import logger from "redux-logger";
import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default appStore;

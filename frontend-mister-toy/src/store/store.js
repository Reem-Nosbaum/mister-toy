import { configureStore } from "@reduxjs/toolkit";
import PopReducer from "../services/PopSlice.js";

const store = configureStore({
  reducer: {
    Pops: PopReducer,
  },
});

export default store;

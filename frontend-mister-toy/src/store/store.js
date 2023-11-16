import { configureStore } from "@reduxjs/toolkit";
import popSlice from "./popSlice";
import slideSlice from "./slideSlice";

export const store = configureStore({
  reducer: {
    pop: popSlice,
    slide: slideSlice,
  },
});

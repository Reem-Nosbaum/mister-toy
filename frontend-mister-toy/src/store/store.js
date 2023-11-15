import { configureStore } from "@reduxjs/toolkit";
import popSlice from "./popSlice";

export const store = configureStore({
  reducer: {
    pop: popSlice,
  },
});

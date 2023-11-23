import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pops: [],
  loading: false,
  error: null,
};

export const popSlice = createSlice({
  name: "pop",
  initialState,
  reducers: {
    popsSuccess: (state, action) => {
      state.pops = action.payload;
      state.loading = false;
      state.error = null;
    },
    popsLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    popsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { popsSuccess, popsLoading, popsError } = popSlice.actions;

export default popSlice.reducer;

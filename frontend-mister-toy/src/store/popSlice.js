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
    addPopSuccess: (state, action) => {
      state.pops.push(action.payload);
      state.loading = false;
    },
    removePopSuccess: (state, action) => {
      state.pops = state.pops.filter((pop) => pop.id !== action.payload);
      state.loading = false;
    },
    updatePopSuccess: (state, action) => {
      const { product } = action.payload;

      const index = state.pops.findIndex((pop) => pop.id === product.id);
      if (index !== -1) {
        state.pops[index] = product;
      }

      state.pops = [...state.pops];
      state.loading = false;
    },
  },
});

export const {
  popsSuccess,
  popsLoading,
  popsError,
  addPopSuccess,
  removePopSuccess,
  updatePopSuccess,
} = popSlice.actions;

export default popSlice.reducer;

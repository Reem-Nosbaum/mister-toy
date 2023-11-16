import { createSlice } from "@reduxjs/toolkit";
import { popService } from "../services/pop.service";

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

// Thunk for fetching pops
export const fetchPops = () => async (dispatch) => {
  try {
    dispatch(popsLoading());
    const data = await popService.getPops();
    dispatch(popsSuccess(data));
  } catch (error) {
    dispatch(popsError(error.message));
  }
};

export default popSlice.reducer;

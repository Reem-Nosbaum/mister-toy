import { createSlice } from "@reduxjs/toolkit";
import { popService } from "../services/pop.service";

const initialState = {
  slides: [],
  loading: false,
  error: null,
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    slidesSuccess: (state, action) => {
      state.slides = action.payload;
      state.loading = false;
      state.error = null;
    },
    slidesLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    slidesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { slidesSuccess, slidesLoading, slidesError } = slideSlice.actions;

// Thunk for fetching slides
export const fetchSlides = () => async (dispatch) => {
  try {
    dispatch(slidesLoading());
    const data = await popService.getSlides();
    dispatch(slidesSuccess(data));
  } catch (error) {
    dispatch(slidesError(error.message));
  }
};

export default slideSlice.reducer;

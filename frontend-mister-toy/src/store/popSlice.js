import { createSlice } from "@reduxjs/toolkit";
import { popService } from "../services/pop.service";

const initialState = {
  value: null,
};

export const popSlice = createSlice({
  name: "pop",
  initialState,
  reducers: {
    popList: (state) => {
      popService.getPops();
    },
  },
});

// Action creators are generated for each case reducer function
export const { popList } = popSlice.actions;

export default popSlice.reducer;

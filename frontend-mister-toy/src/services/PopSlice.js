import { createSlice } from "@reduxjs/toolkit";

const PopSlice = createSlice({
  name: "Pops",
  initialState: [],
  reducers: {
    setPops: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPops } = PopSlice.actions;
export default PopSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
  name: "incdec",
  initialState: 0,
  reducers: {
    Inc: (state) => {
      return (state += 1);
    },
    Dec: (state) => {
      return (state -= 1);
    },
  },
});

export const { Inc, Dec } = incdecSlice.actions;
export default incdecSlice.reducer;

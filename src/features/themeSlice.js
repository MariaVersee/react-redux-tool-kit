import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toggle: (state) => !state,
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;

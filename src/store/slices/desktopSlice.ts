import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const desktopSlice = createSlice({
  name: "desktop",
  initialState,
  reducers: {
    toggleDesktopMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleDesktopMenu } = desktopSlice.actions;

export default desktopSlice.reducer;

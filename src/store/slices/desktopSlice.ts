import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  search: "",
};

export const desktopSlice = createSlice({
  name: "desktop",
  initialState,
  reducers: {
    toggleDesktopMenu: (state) => {
      state.isOpen = !state.isOpen;
      if (!state.isOpen) {
        state.search = "";
      }
    },

    updateSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { toggleDesktopMenu, updateSearch } = desktopSlice.actions;

export default desktopSlice.reducer;

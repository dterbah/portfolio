import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTheme } from "../../theme/storeTheme";
import ThemeMode from "../../theme/ThemeMode";

const initialState = {
  theme: getTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

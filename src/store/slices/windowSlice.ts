import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type WindowScreen = "exiting" | "running" | "loading";

const initialState = {
  screen: "loading" as WindowScreen,
};

export const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    changeScreen: (state, action: PayloadAction<WindowScreen>) => {
      state.screen = action.payload;
    },
  },
});

export const { changeScreen } = windowSlice.actions;

export default windowSlice.reducer;

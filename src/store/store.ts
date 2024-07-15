import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import appReducer from "./slices/appSlice";
import desktopMenuReducer from "./slices/desktopSlice";
import windowReducer from "./slices/windowSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    desktopMenu: desktopMenuReducer,
    apps: appReducer,
    window: windowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

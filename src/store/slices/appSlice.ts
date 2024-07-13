import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import DesktopApplication from "../../types/application";
import createPID from "../../utils/pid";

type ApplicationInstanceState = {
  pid: string;
  isOpen: boolean;
  appType: DesktopApplication;
};

const initialState = {
  apps: Array<ApplicationInstanceState>(),
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    createApp: (state, action: PayloadAction<DesktopApplication>) => {
      const pid = createPID();
      state.apps.push({
        pid,
        isOpen: true,
        appType: action.payload,
      });
    },
    closeApp: (state, action: PayloadAction<string>) => {
      const pid = action.payload;
      state.apps = state.apps.filter((app) => app.pid !== pid);
    },
    minimizeApp: (state, action: PayloadAction<string>) => {
      const pid = action.payload;
      const index = state.apps.findIndex((app) => app.pid === pid);
      const app = state.apps[index];
      state.apps[index] = { ...app, isOpen: false };
    },

    toggleAppOpen: (state, action: PayloadAction<string>) => {
      const pid = action.payload;
      const index = state.apps.findIndex((app) => app.pid === pid);
      const app = state.apps[index];
      state.apps[index] = { ...app, isOpen: !app.isOpen };
    },
  },
});

export const { createApp, closeApp, minimizeApp, toggleAppOpen } =
  appSlice.actions;

export default appSlice.reducer;

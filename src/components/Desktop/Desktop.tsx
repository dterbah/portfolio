import { Box, styled } from "@mui/material";

import wallpaperPath from "../../assets/pxfuel.jpg";
import DesktopApplication from "./DesktopApplication";
import getDesktopConfig from "./desktop-config";
import DesktopFooter from "./Footer/DesktopFooter";
import { useState } from "react";
import { DesktopApplication as DesktopApplicationType } from "../../types/application";
import DesktopApplicationInstance from "./Application/DesktopApplicationInstance";
import createPID from "../../utils/pid";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { closeApp, createApp } from "../../store/slices/appSlice";

const BoxDesktop = styled(Box)({
  backgroundImage: `url(${wallpaperPath})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const BoxApplication = styled(Box)({
  display: "flex",
  width: "8%",
  flexDirection: "column",
  paddingTop: "5%",
  height: "90%",
  paddingLeft: "2%",
});

const Desktop = () => {
  const desktopApplications = useAppSelector((state) => state.apps.apps);
  const openApplications = desktopApplications.filter((app) => app.isOpen);
  const dispatch = useAppDispatch();
  const config = getDesktopConfig();
  const applications = Object.entries(config);

  const onApplicationClick = (appType: DesktopApplicationType) => {
    dispatch(createApp(appType));
  };

  const onApplicationClosed = (pid: string) => {
    dispatch(closeApp(pid));
  };

  return (
    <BoxDesktop>
      <BoxApplication>
        {applications.map((application, index) => {
          return (
            <DesktopApplication
              appType={application[0] as DesktopApplicationType}
              key={index}
              {...application[1]}
              onApplicationClick={onApplicationClick}
            />
          );
        })}
      </BoxApplication>
      <Box>
        <DesktopFooter />
      </Box>
      <Box sx={{ position: "absolute", zIndex: "1" }}>
        {openApplications.map((app, index) => {
          return (
            <DesktopApplicationInstance
              pid={app.pid}
              appType={app.appType}
              key={index}
              onClose={onApplicationClosed}
            />
          );
        })}
      </Box>
    </BoxDesktop>
  );
};

export default Desktop;

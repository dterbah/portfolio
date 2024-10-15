import { Box, Stack, styled } from "@mui/material";

import wallpaperPath from "../../assets/bg.jpeg";
import DesktopApplication from "./DesktopApplication";
import getDesktopConfig from "./desktop-config";
import DesktopFooter from "./Footer/DesktopFooter";
import { DesktopApplication as DesktopApplicationType } from "../../types/application";
import DesktopApplicationInstance from "./Application/DesktopApplicationInstance";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { closeApp, createApp } from "../../store/slices/appSlice";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

const BoxDesktop = styled(Box)({
  backgroundImage: `url(${wallpaperPath})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const BoxApplication = styled(Box)({
  display: "flex",
  width: "8%",
  flexDirection: "column",
  paddingTop: 10,
  height: "50%",
  paddingLeft: "2%",
});

const Desktop = () => {
  const desktopApplications = useAppSelector((state) => state.apps.apps);
  const openApplications = desktopApplications.filter((app) => app.isOpen);
  const isDesktopMenuOpen = useAppSelector((state) => state.desktopMenu.isOpen);
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
      <Stack
        direction="column"
        sx={{
          height: "100%",
          display: "flex",
        }}
      >
        {isDesktopMenuOpen && (
          <Box
            sx={{
              height: "60%",
              flex: "10 1 auto",
              width: "100%",
            }}
          >
            <DesktopMenu />
          </Box>
        )}

        <Box
          sx={{
            flex: "1 1 auto",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginTop: "auto",
          }}
        >
          <DesktopFooter />
        </Box>
      </Stack>
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

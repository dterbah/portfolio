import { Box, styled } from "@mui/material";

import wallpaperPath from "../../assets/pxfuel.jpg";
import DesktopApplication from "./DesktopApplication";
import getDesktopConfig from "./desktop-config";
import DesktopFooter from "./Footer/DesktopFooter";
import { useState } from "react";
import { DesktopApplication as DesktopApplicationType } from "../../types/application";
import DesktopApplicationInstance from "./Application/DesktopApplicationInstance";
import createPID from "../../utils/pid";

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
  const config = getDesktopConfig();
  const applications = Object.entries(config);

  const onApplicationClick = (app: DesktopApplicationType) => {
    setDesktopApplications([
      ...desktopApplications,
      { appType: app, pid: createPID() },
    ]);
  };

  const [desktopApplications, setDesktopApplications] = useState<
    { pid: string; appType: DesktopApplicationType }[]
  >([]);

  const closeApp = (pid: string) => {
    console.log("close app", pid);
    setDesktopApplications(
      desktopApplications.filter((app) => app.pid !== pid)
    );
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
        {desktopApplications.map((app, index) => {
          return (
            <DesktopApplicationInstance
              pid={app.pid}
              appType={app.appType}
              key={index}
              onClose={closeApp}
            />
          );
        })}
      </Box>
    </BoxDesktop>
  );
};

export default Desktop;

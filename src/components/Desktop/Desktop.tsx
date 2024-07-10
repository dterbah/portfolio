import { Box, styled } from "@mui/material";

import wallpaperPath from "../../assets/desktop-wallpaper.jpg";
import DesktopApplication from "../DesktopApplication/DesktopApplication";
import getDesktopConfig from "./desktop-config";

const BoxDesktop = styled(Box)({
  backgroundImage: `url(${wallpaperPath})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
});

const BoxApplication = styled(Box)({
  display: "flex",
  width: "10%",
  flexDirection: "column",
  paddingTop: "5%",
});

const Desktop = () => {
  const config = getDesktopConfig();
  const applications = Object.values(config);

  return (
    <BoxDesktop>
      <BoxApplication>
        {applications.map((application, index) => {
          return <DesktopApplication key={index} {...application} />;
        })}
      </BoxApplication>
    </BoxDesktop>
  );
};

export default Desktop;

import { Box, styled } from "@mui/material";

import wallpaperPath from "../../assets/pxfuel.jpg";
import startingMusic from "@/assets/music/start.mp3";
import DesktopApplication from "./DesktopApplication";
import getDesktopConfig from "./desktop-config";
import DesktopFooter from "./DesktopFooter";
import { useEffect, useRef } from "react";

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
  width: "10%",
  flexDirection: "column",
  paddingTop: "5%",
  height: "90%",
  paddingLeft: "2%",
});

const Desktop = () => {
  const config = getDesktopConfig();
  const applications = Object.values(config);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // audioRef.current?.play().catch((err) => {
    //   document.addEventListener(
    //     "click",
    //     () => {
    //       //audioRef.current?.play();
    //     },
    //     { once: true }
    //   );
    // });
  }, []);

  return (
    <BoxDesktop>
      <audio src={startingMusic} ref={audioRef} />
      <BoxApplication>
        {applications.map((application, index) => {
          return <DesktopApplication key={index} {...application} />;
        })}
      </BoxApplication>
      <Box>
        <DesktopFooter />
      </Box>
    </BoxDesktop>
  );
};

export default Desktop;

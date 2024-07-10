import { Box } from "@mui/material";

import wallpaperPath from "../assets/desktop-wallpaper.jpg";

const Desktop = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${wallpaperPath})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <p>test</p>
    </Box>
  );
};

export default Desktop;

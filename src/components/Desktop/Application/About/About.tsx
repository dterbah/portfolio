import { Box } from "@mui/material";
import AboutBody from "./AboutBody";

import "./About.css";

const About = () => {
  return (
    <Box
      component="main"
      id="about"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: 8,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <AboutBody />
    </Box>
  );
};

export default About;

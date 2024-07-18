import { Box, Typography } from "@mui/material";
import AboutStudiesTimeline from "./AboutStudiesTimeline";
import { useTranslation } from "react-i18next";

const AboutBody = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "80%",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <Typography>{t("about.introduction")}</Typography>
      <AboutStudiesTimeline />
    </Box>
  );
};

export default AboutBody;

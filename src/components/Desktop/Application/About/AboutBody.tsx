import { Box, Typography } from "@mui/material";
import AboutStudiesTimeline from "./AboutStudiesTimeline";
import { useTranslation } from "react-i18next";

const AboutBody = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "80%",
      }}
    >
      <Typography fontFamily="Montserrat, sans-serif">
        {t("about.introduction")}
      </Typography>
      <AboutStudiesTimeline />
    </Box>
  );
};

export default AboutBody;

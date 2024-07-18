import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useReward } from "react-rewards";

const MemoryEndGame = () => {
  const { reward } = useReward("rewardId", "balloons");
  const { t } = useTranslation();

  useEffect(() => {
    reward();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box id="rewardId"></Box>
      <Typography>{t("memory.endGameMessage")}</Typography>
    </Box>
  );
};

export default MemoryEndGame;

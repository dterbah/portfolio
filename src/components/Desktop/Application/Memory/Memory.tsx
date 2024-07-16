import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MemoryBoard from "./MemoryBoard";

const Memory = () => {
  const { t } = useTranslation();
  const [gameBegin, setGameBegin] = useState(false);

  return (
    <Box
      component="main"
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
      <Typography variant="h4">{t("memory.title")}</Typography>
      <Button
        variant="contained"
        endIcon={<SportsEsportsIcon />}
        onClick={() => setGameBegin(true)}
      >
        {t("memory.startGame")}
      </Button>

      {gameBegin && <MemoryBoard />}
    </Box>
  );
};

export default Memory;

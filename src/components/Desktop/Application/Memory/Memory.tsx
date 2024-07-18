import { Box, Button, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MemoryBoard from "./MemoryBoard";

const Memory = () => {
  const { t } = useTranslation();
  const [gameBegin, setGameBegin] = useState(false);
  const firstTime = useRef<boolean>(true);

  const onGameFinished = () => {
    setGameBegin(false);
  };

  const onGameStart = () => {
    setGameBegin(true);
    firstTime.current = false;
  };

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
        onClick={onGameStart}
        disabled={gameBegin}
      >
        {firstTime.current ? t("memory.startGame") : t("memory.restartGame")}
      </Button>

      {!firstTime.current && (
        <MemoryBoard onGameFinished={onGameFinished} refresh={gameBegin} />
      )}
    </Box>
  );
};

export default Memory;

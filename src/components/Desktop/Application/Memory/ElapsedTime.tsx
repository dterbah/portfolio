import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ElapsedTimeProps {
  isStop: boolean;
}

const ElapsedTime = ({ isStop }: ElapsedTimeProps) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    const id = setInterval(() => {
      setElapsedTime((e) => e + 1);
    }, 1000);
    setTimer(id);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (isStop) {
      clearInterval(timer);
    }
  }, [isStop]);

  const { t } = useTranslation();
  return (
    <Typography variant="body2">
      {t("memory.elapsedTime") + elapsedTime + "s"}
    </Typography>
  );
};

export default ElapsedTime;

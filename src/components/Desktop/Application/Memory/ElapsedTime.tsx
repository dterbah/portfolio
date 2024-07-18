import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ElapsedTimeProps {
  isStop: boolean;
}

const ElapsedTime = ({ isStop }: ElapsedTimeProps) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isStop) {
      clearInterval(timer!);
    } else {
      setElapsedTime(0);
      timer = setInterval(() => {
        setElapsedTime((e) => e + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isStop]);

  return (
    <Typography variant="body2">
      {t("memory.elapsedTime") + elapsedTime + "s"}
    </Typography>
  );
};

export default ElapsedTime;

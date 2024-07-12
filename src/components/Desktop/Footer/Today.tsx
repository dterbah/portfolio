import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import WhiteTypography from "../../utils/WhiteTypography";

const getCurrentDate = (): string => {
  const currentDate = new Date();

  // Récupérer les composants de la date
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
  const year = currentDate.getFullYear();

  // Formater les composants pour obtenir le format dd/mm/yyyy
  const formattedDay = day < 10 ? `0${day}` : day.toString(); // Ajoute un zéro devant si le jour est inférieur à 10
  const formattedMonth = month < 10 ? `0${month}` : month.toString(); // Ajoute un zéro devant si le mois est inférieur à 10

  // Assembler la date dans le format dd/mm/yyyy
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  return formattedDate;
};

const getFormattedTime = (
  hours: number,
  mins: number,
  seconds: number
): string => {
  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  const minsStr = mins < 10 ? `0${mins}` : `${mins}`;
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${hoursStr}:${minsStr}:${secondsStr}`;
};

const Today = () => {
  const today = getCurrentDate();
  const [time, setTime] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const mins = now.getMinutes();
      const seconds = now.getSeconds();

      setTime(getFormattedTime(hours, mins, seconds));
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Stack>
      <WhiteTypography variant="body1">{today}</WhiteTypography>
      <WhiteTypography variant="body1" sx={{ textAlign: "right" }}>
        {time}
      </WhiteTypography>
    </Stack>
  );
};

export default Today;

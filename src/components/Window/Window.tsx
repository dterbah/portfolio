import { Stack, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import windowsLogo from "@/assets/windows.svg";
import { WindowScreen } from "../../store/slices/windowSlice";

interface WindowProps {
  type: WindowScreen;
}

const WindowBox = styled(Stack)({
  margin: 0,
  height: "100vh",
  backgroundColor: "#0078d7",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const WindowComponent = ({ type }: WindowProps) => {
  const { t } = useTranslation();
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const id = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? "." : `${prevDots}.`));
    }, 500);

    let idTimeout: NodeJS.Timeout;
    if (type === "exiting") {
      idTimeout = setTimeout(() => {
        window.close();
      }, 3500);
    }

    return () => {
      clearInterval(id);
      if (idTimeout) clearTimeout(idTimeout);
    };
  }, [type]);

  return (
    <WindowBox spacing={3}>
      <img src={windowsLogo} width={100} height={100} />
      <Typography variant="h4" color={"white"}>
        {type === "loading" ? t("loading") : t("exiting")} {dots}
      </Typography>
    </WindowBox>
  );
};

export default WindowComponent;

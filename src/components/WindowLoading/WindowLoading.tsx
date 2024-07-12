import { Stack, styled, Typography } from "@mui/material";
import { SyncLoader } from "react-spinners";

import windowsLogo from "@/assets/windows.svg";
import { useEffect, useState } from "react";

const WindowLoadingBox = styled(Stack)({
  margin: 0,
  height: "100vh",
  backgroundColor: "#0078d7",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const WindowsLoading = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const id = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? "." : `${prevDots}.`));
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <WindowLoadingBox spacing={3}>
      <img src={windowsLogo} width={100} height={100} />
      <SyncLoader />
      <Typography variant="h6">
        Chargement du portfolio de Dorian TERBAH {dots}
      </Typography>
    </WindowLoadingBox>
  );
};

export default WindowsLoading;

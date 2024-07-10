import Desktop from "./components/Desktop/Desktop";
import "./App.css";
import { useEffect, useState } from "react";
import i18n from "./i18n";
import cursor from "@/assets/cursor.png";
import { Box } from "@mui/material";

const App = () => {
  const [i18NInit, setI18nInit] = useState<boolean>(false);

  useEffect(() => {
    const handleInitialized = () => {
      setI18nInit(true);
    };

    i18n.on("initialized", handleInitialized);

    return () => {
      i18n.off("initialized", handleInitialized);
    };
  }, []);

  return (
    <>
      {i18NInit && (
        <Box
          sx={{
            cursor: `url(${cursor}), auto`,
            height: "100%",
          }}
        >
          <Desktop />
        </Box>
      )}
    </>
  );
};

export default App;

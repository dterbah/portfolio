import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import DesktopMenuFooter from "./DesktopMenuFooter";
import DesktopMenuHeader from "./DesktopMenuHeader";
import DesktopMenuContent from "./DesktopMenuContent";
import "./DesktopMenu.css";

const DesktopMenu = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition in={inProp} timeout={500} classNames="menu" unmountOnExit>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#080D11",
            width: "50%",
            height: "100%",
            margin: "auto",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <DesktopMenuHeader />
          <DesktopMenuContent />
          <DesktopMenuFooter />
        </Box>
      </Box>
    </CSSTransition>
  );
};

export default DesktopMenu;

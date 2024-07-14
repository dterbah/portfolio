import { Box } from "@mui/material";
import DesktopMenuFooter from "./DesktopMenuFooter";
import DesktopMenuHeader from "./DesktopMenuHeader";

const DesktopMenu = () => {
  return (
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
        }}
      >
        <DesktopMenuHeader />
        <Box
          sx={{
            height: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
        <DesktopMenuFooter />
      </Box>
    </Box>
  );
};

export default DesktopMenu;

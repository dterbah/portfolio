import { Box, Button, IconButton } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

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
        <Box
          sx={{
            height: "75%",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
        <Box
          sx={{
            height: "25%",
            width: "90%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span></span>
          <IconButton sx={{ color: "white" }} size="large">
            <PowerSettingsNewIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopMenu;

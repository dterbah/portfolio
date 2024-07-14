import { Box, IconButton } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const DesktopMenuFooter = () => {
  return (
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
  );
};

export default DesktopMenuFooter;

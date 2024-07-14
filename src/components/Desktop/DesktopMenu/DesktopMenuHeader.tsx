import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DesktopMenuHeader = () => {
  return (
    <Box
      sx={{
        height: "15%",
        width: "90%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span></span>
      <IconButton sx={{ color: "white" }} size="large">
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default DesktopMenuHeader;

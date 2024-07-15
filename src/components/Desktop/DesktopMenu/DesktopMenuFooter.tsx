import { Box, IconButton } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useAppDispatch } from "../../../store/store";
import { changeScreen } from "../../../store/slices/windowSlice";

const DesktopMenuFooter = () => {
  const dispatch = useAppDispatch();

  const handleOnClose = () => {
    dispatch(changeScreen("exiting"));
  };

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
      <IconButton sx={{ color: "white" }} size="large" onClick={handleOnClose}>
        <PowerSettingsNewIcon />
      </IconButton>
    </Box>
  );
};

export default DesktopMenuFooter;

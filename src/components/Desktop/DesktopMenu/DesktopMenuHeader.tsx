import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../../store/store";
import { toggleDesktopMenu } from "../../../store/slices/desktopSlice";

const DesktopMenuHeader = () => {
  const dispatch = useAppDispatch();

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
      <IconButton
        sx={{ color: "white" }}
        size="large"
        onClick={() => dispatch(toggleDesktopMenu())}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default DesktopMenuHeader;

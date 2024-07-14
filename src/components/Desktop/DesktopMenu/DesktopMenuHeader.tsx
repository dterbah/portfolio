import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../../store/store";
import { toggleDesktopMenu } from "../../../store/slices/desktopSlice";
import SearchTextField from "../../utils/SearchTextField";

const DesktopMenuHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        height: "10%",
        pt: 2,
        width: "90%",
        margin: "auto",
        justifyContent: "space-between",
        display: "flex",
        pb: 2,
      }}
    >
      <SearchTextField width="90%" />
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

import { IconButton } from "@mui/material";

import cursor from "@/assets/hover-cursor.png";
import WindowIcon from "@mui/icons-material/Window";
import { useAppDispatch } from "../../../store/store";
import { toggleDesktopMenu } from "../../../store/slices/desktopSlice";
import SearchTextField from "../../utils/SearchTextField";

const SearchSection = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleDesktopMenu());
  };

  return (
    <>
      <IconButton
        size="medium"
        sx={{
          "&:hover": {
            cursor: `url(${cursor}), auto`,
          },
        }}
        onClick={handleClick}
      >
        <WindowIcon
          sx={{
            color: "#0078d7",
            width: "30px",
            height: "30px",
          }}
        />
      </IconButton>

      <SearchTextField width="50%" />
    </>
  );
};

export default SearchSection;

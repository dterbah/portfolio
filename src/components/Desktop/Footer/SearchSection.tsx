import { IconButton, TextField } from "@mui/material";

import cursor from "@/assets/hover-cursor.png";
import { useTranslation } from "react-i18next";
import { Search } from "@mui/icons-material";
import WindowIcon from "@mui/icons-material/Window";
import { useAppDispatch } from "../../../store/store";
import { toggleDesktopMenu } from "../../../store/slices/desktopSlice";

const SearchSection = () => {
  const { t } = useTranslation();
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

      <TextField
        InputProps={{
          startAdornment: <Search sx={{ color: "white" }} />,
        }}
        hiddenLabel
        sx={{
          backgroundColor: "#39373a",
          borderRadius: "15px",
          input: {
            color: "white",
          },
        }}
        variant="filled"
        placeholder={t("desktop.footer.searchPlaceholder")}
      />
    </>
  );
};

export default SearchSection;

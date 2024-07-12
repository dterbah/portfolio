import { IconButton, Menu, MenuItem, TextField } from "@mui/material";

import cursor from "@/assets/hover-cursor.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "@mui/icons-material";
import WindowIcon from "@mui/icons-material/Window";

const SearchSection = () => {
  const [anchorWindows, setAnchorWindows] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const open = Boolean(anchorWindows);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorWindows(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorWindows(null);
  };

  const shutdown = () => {
    window.close();
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

      <Menu
        id="menu-windows"
        anchorEl={anchorWindows}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#2D2D2D",
            color: "white",
          },
        }}
      >
        <MenuItem onClick={shutdown}>{t("desktop.footer.shutdown")}</MenuItem>
      </Menu>
    </>
  );
};

export default SearchSection;

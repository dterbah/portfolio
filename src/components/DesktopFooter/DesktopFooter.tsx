import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  styled,
  TextField,
} from "@mui/material";
import WindowIcon from "@mui/icons-material/Window";
import cursor from "@/assets/hover-cursor.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const BoxFooter = styled(Box)({
  backgroundColor: "#080D11",
  paddingLeft: "2%",
  display: "flex",
  columnGap: "2%",
  paddingTop: "0.5%",
  paddingBttom: "0.5%",
});

const DesktopFooter = () => {
  const { t } = useTranslation();
  const [anchorWindows, setAnchorWindows] = useState<null | HTMLElement>(null);
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
    <BoxFooter>
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
            color: "white",
          }}
        />
      </IconButton>

      <TextField
        hiddenLabel
        sx={{
          backgroundColor: "#39373a",
          input: {
            color: "white",
          },
        }}
        variant="filled"
        placeholder={t("desktop.menu.searchPlaceholder")}
        size="small"
      />

      <Menu
        id="menu-windows"
        anchorEl={anchorWindows}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={shutdown}>{t("desktop.menu.shutdown")}</MenuItem>
      </Menu>
    </BoxFooter>
  );
};

export default DesktopFooter;

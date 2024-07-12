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
import Weather from "./Weather";
import { Search } from "@mui/icons-material";
import Today from "./Today";

const BoxFooter = styled(Box)({
  backgroundColor: "#080D11",
  display: "flex",
  columnGap: "2%",
  paddingTop: "0.5%",
  paddingBottom: "0.5%",
  alignItems: "center",
  width: "100%",
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
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Weather />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
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
          placeholder={t("desktop.menu.searchPlaceholder")}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
          marginRight: 2,
        }}
      >
        <Today />
      </Box>

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
        <MenuItem onClick={shutdown}>{t("desktop.menu.shutdown")}</MenuItem>
      </Menu>
    </BoxFooter>
  );
};

export default DesktopFooter;

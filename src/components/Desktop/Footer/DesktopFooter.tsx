import { Box, IconButton, styled } from "@mui/material";
import Weather from "./Weather";
import SearchSection from "./SearchSection";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useState } from "react";
import Today from "./Today";
import { setTheme } from "../../../store/slices/themeSlice";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WhiteTypography from "../../utils/WhiteTypography";
import getDesktopConfig from "../desktop-config";
import cursor from "@/assets/hover-cursor.png";
import { toggleAppOpen } from "../../../store/slices/appSlice";

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
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const applications = useAppSelector((state) => state.apps.apps);
  const [darkMode, setDarkMode] = useState(theme === "dark");
  const config = getDesktopConfig();

  const switchTheme = () => {
    setDarkMode(!darkMode);
    dispatch(setTheme(!darkMode ? "dark" : "light"));
  };

  const toggleApp = (pid: string) => {
    dispatch(toggleAppOpen(pid));
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
          gap: 1,
        }}
      >
        <SearchSection />
        <Box display="flex">
          {applications.map((app, index) => {
            const { path, name } = config[app.appType];
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                  padding: 1,
                  backgroundColor: app.isOpen
                    ? "rgba(255, 255, 255, 0.2)"
                    : "none",
                  "&:hover": {
                    cursor: `url(${cursor}), auto`,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
                onClick={() => toggleApp(app.pid)}
              >
                <img src={path} width={35} />
                <WhiteTypography variant="caption">{name}</WhiteTypography>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
          marginRight: 2,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <IconButton onClick={() => switchTheme()}>
            {darkMode && (
              <LightModeIcon
                sx={(theme) => ({ color: theme.palette.primary.main })}
              />
            )}
            {!darkMode && (
              <DarkModeIcon
                sx={(theme) => ({ color: theme.palette.primary.main })}
              />
            )}
          </IconButton>
          <Today />
        </Box>
      </Box>
    </BoxFooter>
  );
};

export default DesktopFooter;

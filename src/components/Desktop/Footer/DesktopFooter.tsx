import { Box, IconButton, styled } from "@mui/material";
import Weather from "./Weather";
import SearchSection from "./SearchSection";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useState } from "react";
import Today from "./Today";
import { setTheme } from "../../../store/slices/themeSlice";
import ApplicationSection from "./ApplicationSection";
import HighlightIcon from "@mui/icons-material/Highlight";
import FlashlightOffIcon from "@mui/icons-material/FlashlightOff";

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
  const [darkMode, setDarkMode] = useState(theme === "dark");

  const switchTheme = () => {
    setDarkMode(!darkMode);
    dispatch(setTheme(!darkMode ? "dark" : "light"));
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
        <ApplicationSection />
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
              <HighlightIcon
                sx={(theme) => ({ color: theme.palette.primary.main })}
              />
            )}
            {!darkMode && (
              <FlashlightOffIcon
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

import CssBaseline from "@mui/material/CssBaseline";
import Desktop from "./components/Desktop/Desktop";
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import i18n from "./i18n";
import cursor from "@/assets/cursor.png";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WindowsLoading from "./components/WindowLoading/WindowLoading";
import { Provider } from "react-redux";
import { store, useAppSelector } from "./store/store";

const IntermediateComponent = () => <div className="intermediate"></div>;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  const [i18NInit, setI18nInit] = useState<boolean>(false);
  const [currentElement, setCurrentElement] = useState(<WindowsLoading />);
  const [showIntermediate, setShowIntermediate] = useState(false);

  const themeMode = useAppSelector((state) => state.theme.theme);

  const theme = useMemo(() => {
    return themeMode === "light" ? lightTheme : darkTheme;
  }, [themeMode]);

  useEffect(() => {
    const handleInitialized = () => {
      setI18nInit(true);
    };

    i18n.on("initialized", handleInitialized);

    // Show the intermediate component before switching to Desktop
    const intermediateTimeout = setTimeout(() => {
      setShowIntermediate(true);
    }, 2500); // Show intermediate component just before transition

    const id = setTimeout(() => {
      setCurrentElement(<Desktop />);
      setShowIntermediate(false);
    }, 3000);

    return () => {
      i18n.off("initialized", handleInitialized);
      clearTimeout(id);
      clearTimeout(intermediateTimeout);
    };
  }, []);

  return (
    <>
      {i18NInit && (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <Box
              sx={{
                cursor: `url(${cursor}), auto`,
                height: "100vh",
                overflow: "hidden", // To ensure no scrollbar appears during transition
                backgroundColor: "#0078d7", // Same as your background color
              }}
            >
              <TransitionGroup style={{ height: "100%" }}>
                <CSSTransition
                  key={
                    showIntermediate ? "intermediate" : currentElement.type.name
                  }
                  timeout={500}
                  classNames="win10"
                >
                  {showIntermediate ? (
                    <IntermediateComponent />
                  ) : (
                    currentElement
                  )}
                </CSSTransition>
              </TransitionGroup>
            </Box>
          </Provider>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;

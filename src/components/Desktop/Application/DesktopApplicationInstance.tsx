import React, { ElementType, useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import DesktopApplication from "../../../types/application";
import getDesktopConfig from "../desktop-config";
import { Box } from "@mui/material";
import Draggable from "react-draggable";
import { CSSTransition } from "react-transition-group";

// Content components
import CV from "./CV/CV";
import About from "./About/About";
import Contact from "./Contact/Contact";
import ProjectsView from "./Projects/ProjectsView";
import { useAppDispatch } from "../../../store/store";
import { minimizeApp } from "../../../store/slices/appSlice";

import "./DesktopApplicationInstance.css";

interface WindowsAppProps {
  appType: DesktopApplication;
  pid: string;
  onClose: (pid: string) => void;
}

const contentMap: { [key in DesktopApplication]: ElementType } = {
  about: About,
  cv: CV,
  contact: Contact,
  projects: ProjectsView,
};

const DesktopApplicationInstance: React.FC<WindowsAppProps> = ({
  appType,
  pid,
  onClose,
}) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [inProp, setInProp] = useState(false);
  const [defaultPosition, setDefaultPosition] = useState({ x: 0, y: 0 });
  const dispatch = useAppDispatch();
  const applicationConfig = getDesktopConfig()[appType];
  const Content = contentMap[appType];
  const paperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateDefaultPosition = () => {
      if (paperRef.current) {
        const { innerWidth, innerHeight } = window;
        const { offsetWidth, offsetHeight } = paperRef.current;
        setDefaultPosition({
          x: (innerWidth - offsetWidth) / 2,
          y: (innerHeight - offsetHeight) / 2,
        });
      }
    };

    updateDefaultPosition();
    window.addEventListener("resize", updateDefaultPosition);
    return () => {
      window.removeEventListener("resize", updateDefaultPosition);
    };
  }, [fullscreen]);

  useEffect(() => {
    setInProp(true);
  }, []);

  const minimize = () => {
    dispatch(minimizeApp(pid));
  };

  return (
    <CSSTransition in={inProp} timeout={500} classNames="app" unmountOnExit>
      <Draggable defaultPosition={defaultPosition} handle=".draggable-handle">
        <Paper
          ref={paperRef}
          sx={(theme) => ({
            width: fullscreen ? "100vw" : 1200,
            height: fullscreen ? "100vh" : 800,
            position: fullscreen ? "fixed" : "relative",
            top: fullscreen ? 0 : "auto",
            left: fullscreen ? 0 : "auto",
            margin: fullscreen ? 0 : "50px auto",
            overflow: "hidden",
            boxShadow: theme.shadows[5],
          })}
        >
          <AppBar
            position="static"
            sx={(theme) => ({
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            })}
          >
            <Toolbar className="draggable-handle">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {applicationConfig.name}
              </Typography>
              <Box sx={{ marginLeft: "auto" }}>
                <IconButton
                  sx={(theme) => ({
                    color: theme.palette.primary.contrastText,
                  })}
                  onClick={() => minimize()}
                >
                  <MinimizeIcon />
                </IconButton>
                <IconButton
                  sx={(theme) => ({
                    color: theme.palette.primary.contrastText,
                  })}
                  onClick={() => setFullscreen(!fullscreen)}
                >
                  {fullscreen ? <FilterNoneIcon /> : <CropSquareIcon />}
                </IconButton>
                <IconButton
                  sx={(theme) => ({
                    color: theme.palette.primary.contrastText,
                  })}
                  onClick={() => onClose(pid)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              height: "calc(100% - 56px)",
              overflowY: "auto",
            }}
          >
            <Content />
          </Box>
        </Paper>
      </Draggable>
    </CSSTransition>
  );
};

export default DesktopApplicationInstance;

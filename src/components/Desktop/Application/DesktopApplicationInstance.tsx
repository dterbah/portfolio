import React, { ElementType, useState } from "react";
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

// Content components
import CV from "./CV/CV";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

interface WindowsAppProps {
  appType: DesktopApplication;
  pid: string;
  onClose: (pid: string) => void;
}

const contentMap: { [key in DesktopApplication]: ElementType } = {
  about: About,
  cv: CV,
  contact: Contact,
  projects: Projects,
};

const DesktopApplicationInstance: React.FC<WindowsAppProps> = ({
  appType,
  pid,
  onClose,
}) => {
  const [fullscreen, setFullscreen] = useState(false);

  const applicationConfig = getDesktopConfig()[appType];
  const Content = contentMap[appType];
  return (
    <Draggable
      defaultPosition={{
        x: 200,
        y: 200,
      }}
    >
      <Paper
        sx={(theme) => ({
          width: fullscreen ? "100vh" : 800,
          height: fullscreen ? "100vh" : 600,
          position: "relative",
          margin: "50px auto",
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
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {applicationConfig.name}
            </Typography>
            <Box sx={{ marginLeft: "auto" }}>
              <IconButton
                sx={(theme) => ({ color: theme.palette.primary.contrastText })}
              >
                <MinimizeIcon />
              </IconButton>
              <IconButton
                sx={(theme) => ({ color: theme.palette.primary.contrastText })}
                onClick={() => setFullscreen(!fullscreen)}
              >
                {fullscreen ? <FilterNoneIcon /> : <CropSquareIcon />}
              </IconButton>
              <IconButton
                sx={(theme) => ({ color: theme.palette.primary.contrastText })}
                onClick={() => onClose(pid)}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={(theme) => ({
            height: "calc(100% - 56px)",
            overflowY: "auto",
          })}
        >
          <Content />
        </Box>
      </Paper>
    </Draggable>
  );
};

export default DesktopApplicationInstance;

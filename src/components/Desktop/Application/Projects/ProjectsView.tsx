import { Box } from "@mui/material";
import ProjectsDrawer from "./ProjectsDrawer";
import { useState } from "react";

import ProjectsWrapper from "./ProjectsWrapper";

type ProjectSectionType = "pro" | "perso";

const Projects = () => {
  const [section, setSection] = useState<ProjectSectionType>("perso");

  return (
    <Box
      display="flex"
      sx={{
        height: "100vh",
      }}
    >
      <ProjectsDrawer section={section} onSectionChanged={setSection} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
        <ProjectsWrapper section={section} />
      </Box>
    </Box>
  );
};

export default Projects;

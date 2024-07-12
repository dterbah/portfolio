import { Box } from "@mui/material";
import ProjectsDrawer from "./ProjectsDrawer";
import { useState } from "react";
import ProjectsWrapper from "./ProjectsWrapper";

type ProjectSectionType = "pro" | "perso";

const Projects = () => {
  const [section, setSection] = useState<ProjectSectionType>("perso");

  return (
    <Box display="flex">
      <ProjectsDrawer section={section} onSectionChanged={setSection} />
      <ProjectsWrapper section={section} />
    </Box>
  );
};

export default Projects;

import { Box } from "@mui/material";
import ProjectsDrawer from "./ProjectsDrawer";
import { useState } from "react";

type ProjectSectionType = "pro" | "perso";

const Projects = () => {
  const [section, setSection] = useState<ProjectSectionType>("perso");

  return (
    <Box>
      <ProjectsDrawer section={section} onSectionChanged={setSection} />
    </Box>
  );
};

export default Projects;

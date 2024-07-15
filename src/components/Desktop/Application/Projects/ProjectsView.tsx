import { Box } from "@mui/material";
import ProjectsDrawer from "./ProjectsDrawer/ProjectsDrawer";
import { useState } from "react";

import ProjectsWrapper from "./ProjectsWrapper";

type ProjectSectionType = "pro" | "perso";

const Projects = () => {
  const [section, setSection] = useState<ProjectSectionType>("perso");

  const [skills, setSkills] = useState<string[]>([]);

  return (
    <Box
      display="flex"
      sx={{
        height: "100vh",
      }}
    >
      <ProjectsDrawer
        section={section}
        onSectionChanged={setSection}
        skills={skills}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
        <ProjectsWrapper section={section} setSkills={setSkills} />
      </Box>
    </Box>
  );
};

export default Projects;

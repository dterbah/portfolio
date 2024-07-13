import { Box } from "@mui/material";
import ProjectsDrawer from "./ProjectsDrawer";
import { useRef, useState } from "react";
import ProjectsWrapper from "./ProjectsWrapper";

type ProjectSectionType = "pro" | "perso";

const Projects = () => {
  const [section, setSection] = useState<ProjectSectionType>("perso");
  const ref = useRef();

  return (
    <Box display="flex" ref={ref}>
      <ProjectsDrawer section={section} onSectionChanged={setSection} />
      <Box
        sx={{
          ml: 2,
        }}
      >
        <ProjectsWrapper section={section} />
      </Box>
    </Box>
  );
};

export default Projects;

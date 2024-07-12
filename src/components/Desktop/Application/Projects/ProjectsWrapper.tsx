import { Box, Tab, Tabs } from "@mui/material";
import ProjectionSectionType from "../../../../types/Project/ProjectSectionType";

import persoProjects from "./data/perso.json";
import proProjects from "./data/pro.json";
import { useMemo, useState } from "react";

interface ProjectsWrapperProps {
  section: ProjectionSectionType;
}

const ProjectsWrapper = ({ section }: ProjectsWrapperProps) => {
  const projects = useMemo(() => {
    return section === "pro" ? proProjects : persoProjects;
  }, [section]);

  const projectCategories = Object.keys(projects);

  const [tab, setTab] = useState(0);

  const handleTabChanged = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box>
      <Tabs value={tab} onChange={handleTabChanged}>
        {projectCategories.map((projectCategory, index) => (
          <Tab label={projectCategory} key={index} />
        ))}
      </Tabs>
    </Box>
  );
};

export default ProjectsWrapper;

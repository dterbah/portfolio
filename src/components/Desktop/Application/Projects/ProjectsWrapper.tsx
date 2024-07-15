import { Box, Grid, Tab, Tabs } from "@mui/material";
import ProjectionSectionType from "../../../../types/Project/ProjectSectionType";

import persoProjects from "./data/perso.json";
import proProjects from "./data/pro.json";
import { useMemo, useState } from "react";
import ProjectContent from "./ProjectContent";
import Project from "../../../../types/Project/Project";

interface ProjectsWrapperProps {
  section: ProjectionSectionType;
}

const ProjectsWrapper = ({ section }: ProjectsWrapperProps) => {
  const projects = useMemo(() => {
    return (section === "pro" ? proProjects : persoProjects) as any;
  }, [section]);

  const projectCategories = Object.keys(projects);
  const [tab, setTab] = useState(0);

  const selectedProjects = useMemo(() => {
    const category = projectCategories[tab];
    return projects[category];
  }, [tab]);

  const handleTabChanged = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      <Tabs value={tab} onChange={handleTabChanged}>
        {projectCategories.map((projectCategory, index) => (
          <Tab label={projectCategory} key={index} />
        ))}
      </Tabs>
      <Box>
        <Grid container spacing={2}>
          {selectedProjects.map((project: Project, index: number) => (
            <Grid item xs={5.9} key={index}>
              <ProjectContent {...project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProjectsWrapper;

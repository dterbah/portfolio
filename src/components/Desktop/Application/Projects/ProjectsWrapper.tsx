import { Box, Grid, Tab, Tabs } from "@mui/material";
import ProjectionSectionType from "../../../../types/Project/ProjectSectionType";

import persoProjects from "./data/perso.json";
import proProjects from "./data/pro.json";
import { useEffect, useMemo, useState } from "react";
import ProjectContent from "./ProjectContent";
import Project from "../../../../types/Project/Project";

interface ProjectsWrapperProps {
  section: ProjectionSectionType;
  setSkills: (skills: string[]) => void;
}

const ProjectsWrapper = ({ section, setSkills }: ProjectsWrapperProps) => {
  const projects = useMemo(() => {
    return (section === "pro" ? proProjects : persoProjects) as any;
  }, [section]);

  const projectCategories = Object.keys(projects);
  const [tab, setTab] = useState(0);

  const selectedProjects = useMemo(() => {
    const category =
      tab > projectCategories.length
        ? projectCategories[0]
        : projectCategories[tab];
    return projects[category];
  }, [tab, section]);

  const handleTabChanged = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    setTab(0);
  }, [section]);

  useEffect(() => {
    const getSkills = () => {
      const currentSkills: string[] = selectedProjects
        .map((project: Project) => project.skills)
        .flat();

      return [...new Set<string>(currentSkills)];
    };

    const skills = selectedProjects ? getSkills() : [];

    setSkills(skills);
  }, [section, tab]);

  return (
    <>
      {selectedProjects && (
        <>
          <Tabs value={tab} onChange={handleTabChanged}>
            {projectCategories.map((projectCategory, index) => (
              <Tab label={projectCategory} key={index} />
            ))}
          </Tabs>
          <Box>
            <Grid container spacing={2}>
              {selectedProjects.map((project: Project, index: number) => (
                <Grid item xs={6} key={index}>
                  <ProjectContent {...project} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default ProjectsWrapper;

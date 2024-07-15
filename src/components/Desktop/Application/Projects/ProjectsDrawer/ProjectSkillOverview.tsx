import { Box } from "@mui/material";
import Skill from "../Skill/Skill";

interface ProjectSkillOverviewProps {
  skills: string[];
}

const ProjectSkillOverview = ({ skills }: ProjectSkillOverviewProps) => {
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      {skills.map((skill, index) => {
        return <Skill skill={skill} key={index} />;
      })}
    </Box>
  );
};

export default ProjectSkillOverview;

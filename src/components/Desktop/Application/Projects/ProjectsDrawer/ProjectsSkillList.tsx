import { Box } from "@mui/material";
import Skill from "../Skill/Skill";

interface ProjectsSkillListProps {
  skills: string[];
}

const ProjectsSkillList = ({ skills }: ProjectsSkillListProps) => {
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      {skills.map((skill, index) => {
        return <Skill skill={skill} />;
      })}
    </Box>
  );
};

export default ProjectsSkillList;

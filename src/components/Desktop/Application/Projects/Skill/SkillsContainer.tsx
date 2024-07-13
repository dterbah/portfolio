import { Stack } from "@mui/material";
import Skill from "./Skill";

interface SkillsContainerProps {
  skills: string[];
}

const SkillsContainer = ({ skills }: SkillsContainerProps) => {
  return (
    <Stack direction="row" columnGap={1}>
      {skills.map((skill, index) => {
        return <Skill key={index} skill={skill} />;
      })}
    </Stack>
  );
};

export default SkillsContainer;

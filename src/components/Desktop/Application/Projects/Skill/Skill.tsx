import { Chip } from "@mui/material";
import getSkillColor from "./getSkillColor";

interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <Chip
      label={skill}
      sx={(theme) => ({
        backgroundColor: getSkillColor(skill, theme),
        color: "white",
      })}
    />
  );
};

export default Skill;

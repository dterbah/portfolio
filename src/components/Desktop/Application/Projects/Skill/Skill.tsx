import { Chip } from "@mui/material";
import getSkillColor, { Skill as ISkill } from "./getSkillColor";

interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <Chip
      label={skill}
      sx={(theme) => ({
        backgroundColor: getSkillColor(skill as ISkill, theme),
        color: "white",
        m: 0.25,
      })}
    />
  );
};

export default Skill;

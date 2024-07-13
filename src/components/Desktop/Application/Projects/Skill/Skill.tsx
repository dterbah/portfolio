import { Chip, Theme } from "@mui/material";

interface SkillProps {
  skill: string;
}

const getChipBg = (theme: Theme, skill: string) => {
  if (skill === "Go") {
    return theme.palette.primary.light;
  } else if (skill === "Typescript") {
    return theme.palette.primary.main;
  } else if (skill === "VueJS") {
    return theme.palette.success.light;
  } else if (skill === "Python") {
    return "#ffcb3a";
  } else if (skill === "Flask") {
    return "black";
  } else if (skill === "Javascript") {
    return "#f0db50";
  }

  return "orange";
};

const Skill = ({ skill }: SkillProps) => {
  return (
    <Chip
      label={skill}
      sx={(theme) => ({
        backgroundColor: getChipBg(theme, skill),
        color: "white",
      })}
    />
  );
};

export default Skill;

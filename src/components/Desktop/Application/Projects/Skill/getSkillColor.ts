import { Theme } from "@mui/material";

const getSkillColor = (skill: string, theme: Theme) => {
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
  } else if (skill === "React") {
    return "#61dbfc";
  } else if (skill === "PostgreSQL") {
    return "#32648d";
  } else if (skill === "Rest") {
    return "#9fdfab";
  } else if (skill === "Redux") {
    return "#8c67c5";
  } else if (skill === "minio") {
    return "red";
  } else if (skill === "FastAPI") {
    return "#059587";
  } else if (skill === "Java") {
    return "#d63435";
  } else if (skill === "C") {
    return "#00427e";
  } else if (skill === "Angular") {
    return "#bd002d";
  } else if (skill === "Node") {
    return "#3e863d";
  }

  return "orange";
};

export default getSkillColor;

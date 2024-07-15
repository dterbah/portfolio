import { Theme } from "@mui/material";

export type Skill =
  | "Go"
  | "Typescript"
  | "VueJS"
  | "Python"
  | "Flask"
  | "Javascript"
  | "React"
  | "PostgreSQL"
  | "Rest"
  | "Redux"
  | "minio"
  | "FastAPI"
  | "Java"
  | "C"
  | "Angular"
  | "Node"
  | "CI/CD";

const skillColors = {
  Go: (theme: Theme) => theme.palette.primary.light,
  Typescript: (theme: Theme) => theme.palette.primary.main,
  VueJS: (theme: Theme) => theme.palette.success.light,
  Python: "#ffcb3a",
  Flask: "black",
  Javascript: "#f0db50",
  React: "#61dbfc",
  PostgreSQL: "#32648d",
  Rest: "#9fdfab",
  Redux: "#8c67c5",
  minio: "red",
  FastAPI: "#059587",
  Java: "#d63435",
  C: "#00427e",
  Angular: "#bd002d",
  Node: "#3e863d",
  "CI/CD": "#e34a32",
};

const getSkillColor = (skill: Skill, theme: Theme) => {
  const color = skillColors[skill];
  return typeof color === "function" ? color(theme) : color || "orange";
};

export default getSkillColor;

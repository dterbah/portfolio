import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  Stack,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import CodeIcon from "@mui/icons-material/Code";
import BusinessIcon from "@mui/icons-material/Business";
import { ReactNode } from "react";
import ProjectionSectionType from "../../../../types/Project/ProjectSectionType";

interface ProjectsDrawerProps {
  section: ProjectionSectionType;
  onSectionChanged: (newSection: ProjectionSectionType) => void;
}

const ProjectsDrawer = ({ section, onSectionChanged }: ProjectsDrawerProps) => {
  const { t } = useTranslation();

  const drawerSections: Array<{
    name: string;
    section: ProjectionSectionType;
    icon: ReactNode;
  }> = [
    {
      name: t("projects.sections.perso.title"),
      section: "perso",
      icon: <CodeIcon />,
    },
    {
      name: t("projects.sections.pro.title"),
      section: "pro",
      icon: <BusinessIcon />,
    },
  ];

  return (
    <Stack
      sx={(theme) => ({
        width: "25%",
        height: "100vh",
        borderRight: `1px solid ${theme.palette.grey[400]}`,
      })}
    >
      {drawerSections.map((drawerSection, index) => (
        <ListItem
          key={index}
          disablePadding
          sx={(theme) => ({
            color:
              section === drawerSection.section
                ? theme.palette.primary.main
                : "",
          })}
        >
          <ListItemButton
            onClick={() => onSectionChanged(drawerSection.section)}
          >
            <ListItemIcon
              sx={(theme) => ({
                color:
                  section === drawerSection.section
                    ? theme.palette.primary.main
                    : "",
              })}
            >
              {drawerSection.icon}
            </ListItemIcon>
            <ListItemText primary={drawerSection.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </Stack>
  );
};

export default ProjectsDrawer;

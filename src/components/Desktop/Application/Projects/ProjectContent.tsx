import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";
import { useTranslation } from "react-i18next";
import SkillsContainer from "./Skill/SkillsContainer";

import osirisLogo from "@/assets/projects/logo/osiris.svg";
import hevaLogo from "@/assets/projects/logo/heva.svg";
import apolloLogo from "@/assets/projects/logo/apollo.png";
import placeholderLogo from "@/assets/projects/logo/placeholder.svg";

const logoMaps = new Map<string, string>([
  ["osiris", osirisLogo],
  ["heva", hevaLogo],
  ["apollo", apolloLogo],
  ["placeholder", placeholderLogo],
]);
interface ProjectContentProps {
  title: string;
  content: string;
  link?: string;
  imageLink: string;
  date: string;
  skills: string[];
  webLink?: string;
}

const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const ProjectContent = ({
  title,
  content,
  link,
  date,
  imageLink,
  skills,
  webLink,
}: ProjectContentProps) => {
  const { t } = useTranslation();

  const computedImageLink = logoMaps.has(imageLink)
    ? logoMaps.get(imageLink)
    : imageLink;

  return (
    <StyledCard>
      <CardHeader title={title} subheader={date} />
      <CardMedia
        component="img"
        image={computedImageLink}
        sx={{
          height: 400,
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <StyledCardContent>
        <Typography variant="body1">{content}</Typography>
      </StyledCardContent>
      <CardActions disableSpacing>
        <Stack direction="column">
          <SkillsContainer skills={skills} />
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {link && (
              <IconButton
                aria-label="share"
                onClick={() => window.open(link, "_blank")?.focus()}
              >
                <CodeIcon />
                <Typography variant="body1">{t("projects.seeCode")}</Typography>
              </IconButton>
            )}
            {webLink && (
              <IconButton
                aria-label="share"
                onClick={() => window.open(webLink, "_blank")?.focus()}
              >
                <LinkIcon />
                <Typography variant="body1">{t("projects.seeApp")}</Typography>
              </IconButton>
            )}
          </Box>
        </Stack>
      </CardActions>
    </StyledCard>
  );
};

export default ProjectContent;

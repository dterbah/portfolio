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
  return (
    <StyledCard>
      <CardHeader title={title} subheader={date} />
      <CardMedia
        component="img"
        image={imageLink}
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
                onClick={() =>
                  window.open(link, "_blank", "rel=noopener noreferrer")
                }
              >
                <CodeIcon />
                <Typography variant="body1">{t("projects.seeCode")}</Typography>
              </IconButton>
            )}
            {webLink && (
              <IconButton
                aria-label="share"
                onClick={() =>
                  window.open(webLink, "_blank").focus()
                }
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

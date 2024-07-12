import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  styled,
} from "@mui/material";

import LinkIcon from "@mui/icons-material/Link";

interface ProjectContentProps {
  title: string;
  content: string;
  link?: string;
  imageLink: string;
  date: string;
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
}: ProjectContentProps) => {
  return (
    <StyledCard>
      <CardHeader title={title} subheader={date} />
      <CardMedia
        component="img"
        image={imageLink}
        sx={{
          height: 194,
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <StyledCardContent>{content}</StyledCardContent>
      <CardActions disableSpacing>
        {link && (
          <IconButton
            aria-label="share"
            onClick={() =>
              window.open(link, "_blank", "rel=noopener noreferrer")
            }
          >
            <LinkIcon />
          </IconButton>
        )}
      </CardActions>
    </StyledCard>
  );
};

export default ProjectContent;

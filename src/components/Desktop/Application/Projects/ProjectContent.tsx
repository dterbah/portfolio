import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";

import LinkIcon from "@mui/icons-material/Link";

interface ProjectContentProps {
  title: string;
  content: string;
  link?: string;
  imageLink: string;
  date: string;
}

const ProjectContent = ({
  title,
  content,
  link,
  date,
  imageLink,
}: ProjectContentProps) => {
  return (
    <Card>
      <CardHeader title={title} subheader={date} />
      <CardMedia component="img" height="194" image={imageLink} />
      <CardContent>{content}</CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <LinkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectContent;

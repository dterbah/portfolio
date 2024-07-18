import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";

import LaptopIcon from "@mui/icons-material/Laptop";
import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { useTranslation } from "react-i18next";

const timelineData = {
  highSchool: <SchoolIcon />,
  dut: <LaptopIcon />,
  insa: <EngineeringIcon />,
};

const AboutStudiesTimeline = () => {
  const { t } = useTranslation();
  return (
    <Timeline position="left">
      {Object.entries(timelineData).map((entry, index) => {
        const [key, icon] = entry;
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              <Typography>{t(`about.timeline.${key}.content`)}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>{icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                {t(`about.timeline.${key}.title`)}
              </Typography>
              <Typography>{t(`about.timeline.${key}.date`)}</Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default AboutStudiesTimeline;

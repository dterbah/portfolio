import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import LaptopIcon from "@mui/icons-material/Laptop";
import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import { useTranslation } from "react-i18next";
import { ReactNode } from "react";

interface TimelineStep {
  icon: ReactNode;
  bg?: string;
}

type TimelineData = {
  highSchool: TimelineStep;
  dut: TimelineStep;
  insead: TimelineStep;
  insa: TimelineStep;
};

const timelineData: TimelineData = {
  highSchool: { icon: <SchoolIcon />, bg: "#3498db" },
  dut: { icon: <LaptopIcon />, bg: "#e67e22" },
  insead: { icon: <BusinessCenterIcon />, bg: "#015e4a" },
  insa: { icon: <EngineeringIcon />, bg: "#27ae60" },
};

const AboutStudiesTimeline = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" textAlign="center">
        {t("about.timeline.title")}
      </Typography>
      <Timeline position="left">
        {Object.entries(timelineData).map((entry, index) => {
          const [key, config] = entry;
          const bgSx = config.bg ? { backgroundColor: config.bg } : {};
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <Typography fontFamily="Montserrat, sans-serif">
                  {t(`about.timeline.${key}.content`)}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ ...bgSx }}>{config.icon}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  fontFamily="Montserrat, sans-serif"
                >
                  {t(`about.timeline.${key}.title`)}
                </Typography>
                <Typography fontFamily="Montserrat, sans-serif">
                  {t(`about.timeline.${key}.date`)}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </>
  );
};

export default AboutStudiesTimeline;

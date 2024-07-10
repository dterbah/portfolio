import { Box, SvgIcon, Typography } from "@mui/material";
import { ElementType } from "react";
import cursor from "@/assets/hover-cursor.png";

interface DesktopApplicationProps {
  name: string;
  icon: ElementType;
  color: string;
}

const DesktopApplication = ({
  name,
  icon: IconComponent,
  color,
}: DesktopApplicationProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        paddingTop: "10%",
        paddingBottom: "10%",

        transition: "background-color 0.5s ease",
        "&:hover": {
          cursor: `url(${cursor}), auto`,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <SvgIcon
        sx={{
          color,
        }}
        component={IconComponent}
      />
      <Typography
        variant="body2"
        sx={{
          color: "white",
          marginTop: "8px", // Adjust spacing as needed
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default DesktopApplication;

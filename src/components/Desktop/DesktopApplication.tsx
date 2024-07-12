import { Box, Typography } from "@mui/material";
import cursor from "@/assets/hover-cursor.png";
import { DesktopApplication as DesktopApplicationType } from "../../types/application";

interface DesktopApplicationProps {
  name: string;
  path: string;
  onApplicationClick: (app: DesktopApplicationType) => void;
  appType: DesktopApplicationType;
}

const DesktopApplication = ({
  name,
  path,
  onApplicationClick,
  appType,
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
        marginBottom: "10%",
        transition: "background-color 0.5s ease",
        "&:hover": {
          cursor: `url(${cursor}), auto`,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      }}
      onClick={() => onApplicationClick(appType)}
    >
      <img src={path} width={50} />
      <Typography
        variant="body2"
        sx={{
          color: "white",
          marginTop: "8px",
          userSelect: "none",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default DesktopApplication;

import { Box } from "@mui/material";
import cursor from "@/assets/hover-cursor.png";
import WhiteTypography from "../utils/WhiteTypography";
import { Variant } from "@mui/material/styles/createTypography";

interface ApplicationShortcutProps {
  path: string;
  name: string;
  onClick: () => void;
  imgWidth: number;
  variant: Variant;
  pb?: string;
  pt?: string;
  mb?: string;
  pl?: string;
  pr?: string;
}

const ApplicationShortcut = ({
  path,
  name,
  onClick,
  imgWidth,
  variant,
  pb,
  pt,
  mb,
  pl,
  pr,
}: ApplicationShortcutProps) => {
  return (
    <Box
      sx={{
        userSelect: "none",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        paddingBottom: pb,
        paddingTop: pt,
        pl,
        pr,
        mb,
        "&:hover": {
          cursor: `url(${cursor}), auto`,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      }}
      onClick={() => onClick()}
    >
      <img src={path} width={imgWidth} />
      <WhiteTypography variant={variant} sx={{ mt: 1 }}>
        {name}
      </WhiteTypography>
    </Box>
  );
};

export default ApplicationShortcut;

import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import cursor from "@/assets/hover-cursor.png";
import getDesktopConfig from "../desktop-config";
import WhiteTypography from "../../utils/WhiteTypography";
import { toggleAppOpen } from "../../../store/slices/appSlice";

const ApplicationSection = () => {
  const applications = useAppSelector((state) => state.apps.apps);
  const config = getDesktopConfig();
  const dispatch = useAppDispatch();

  const toggleApp = (pid: string) => {
    dispatch(toggleAppOpen(pid));
  };

  return (
    <Box display="flex">
      {applications.map((app, index) => {
        const { path, name } = config[app.appType];
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              padding: 1,
              backgroundColor: app.isOpen ? "rgba(255, 255, 255, 0.2)" : "none",
              "&:hover": {
                cursor: `url(${cursor}), auto`,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            onClick={() => toggleApp(app.pid)}
          >
            <img src={path} width={25} />
            <WhiteTypography variant="caption">{name}</WhiteTypography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ApplicationSection;

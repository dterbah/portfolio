import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import getDesktopConfig from "../desktop-config";
import { toggleAppOpen } from "../../../store/slices/appSlice";
import ApplicationShortcut from "../ApplicationShortcut";

const ApplicationSection = () => {
  const applications = useAppSelector((state) => state.apps.apps);
  const config = getDesktopConfig();
  const dispatch = useAppDispatch();

  const toggleApp = (pid: string) => {
    dispatch(toggleAppOpen(pid));
  };

  return (
    <Box
      display="flex"
      sx={{
        gap: 2,
      }}
    >
      {applications.map((app, index) => {
        const { path, name } = config[app.appType];
        return (
          <ApplicationShortcut
            key={index}
            imgWidth={25}
            name={name}
            variant="caption"
            path={path}
            onClick={() => toggleApp(app.pid)}
          />
        );
      })}
    </Box>
  );
};

export default ApplicationSection;

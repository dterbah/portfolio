import { Box, Stack } from "@mui/material";
import getDesktopConfig from "../desktop-config";
import ApplicationShortcut from "../ApplicationShortcut";
import { useAppDispatch } from "../../../store/store";
import { createApp } from "../../../store/slices/appSlice";
import DesktopApplication from "../../../types/application";
import WhiteTypography from "../../utils/WhiteTypography";
import { useTranslation } from "react-i18next";
import { toggleDesktopMenu } from "../../../store/slices/desktopSlice";

const DesktopMenuContent = () => {
  const { t } = useTranslation();
  const applications = Object.entries(getDesktopConfig());
  const dispatch = useAppDispatch();

  const onApplicationSelected = (appType: DesktopApplication) => {
    dispatch(createApp(appType));
    dispatch(toggleDesktopMenu());
  };

  return (
    <Box
      sx={{
        height: "60%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
        }}
        spacing={4}
      >
        <WhiteTypography variant="h6">
          {t("desktop.menu.applications")}
        </WhiteTypography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {applications.map((app, index) => {
            const { name, path } = app[1];
            const appType = app[0] as DesktopApplication;
            return (
              <ApplicationShortcut
                key={index}
                variant="body2"
                name={name}
                path={path}
                imgWidth={30}
                onClick={() => onApplicationSelected(appType)}
              />
            );
          })}
        </Box>
      </Stack>
    </Box>
  );
};

export default DesktopMenuContent;

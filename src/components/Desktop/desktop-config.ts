import DesktopApplication from "../../types/application";
import i18n from "../../i18n";
import { ElementType } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EngineeringIcon from "@mui/icons-material/Engineering";

type DesktopConfig = {
  [app in DesktopApplication]: {
    name: string;
    icon: ElementType;
    color: string;
  };
};

const getDesktopConfig = () => {
  const config: DesktopConfig = {
    about: {
      name: i18n.t("desktop.applications.about"),
      icon: InfoIcon,
      color: "orange",
    },
    contact: {
      name: i18n.t("desktop.applications.contact"),
      icon: CallIcon,
      color: "orange",
    },
    cv: {
      name: i18n.t("desktop.applications.cv"),
      icon: PictureAsPdfIcon,
      color: "orange",
    },
    projects: {
      name: i18n.t("desktop.applications.projects"),
      icon: EngineeringIcon,
      color: "orange",
    },
  };

  return config;
};

export default getDesktopConfig;

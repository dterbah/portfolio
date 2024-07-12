import DesktopApplication from "../../types/application";
import i18n from "../../i18n";

import myProjectPath from "@/assets/applications/my-projects.jpeg";
import contactPath from "@/assets/applications/contact.webp";
import cvPath from "@/assets/applications/cv.png";
import aboutPath from "@/assets/applications/about.jpeg";

type DesktopConfig = {
  [app in DesktopApplication]: {
    name: string;
    path: string;
  };
};

const getDesktopConfig = () => {
  const config: DesktopConfig = {
    about: {
      name: i18n.t("desktop.applications.about"),
      path: aboutPath,
    },
    contact: {
      name: i18n.t("desktop.applications.contact"),
      path: contactPath,
    },
    cv: {
      name: i18n.t("desktop.applications.cv"),
      path: cvPath,
    },
    projects: {
      name: i18n.t("desktop.applications.projects"),
      path: myProjectPath,
    },
  };

  return config;
};

export default getDesktopConfig;

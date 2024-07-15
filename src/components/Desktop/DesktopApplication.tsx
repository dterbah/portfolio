import { DesktopApplication as DesktopApplicationType } from "../../types/application";
import ApplicationShortcut from "./ApplicationShortcut";

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
    <ApplicationShortcut
      name={name}
      path={path}
      imgWidth={50}
      onClick={() => onApplicationClick(appType)}
      variant="body2"
      pt="10%"
      pb="10%"
      mb="10%"
    />
  );
};

export default DesktopApplication;

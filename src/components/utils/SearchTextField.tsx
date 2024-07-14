import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SearchTextFieldProps {
  width?: string;
}

const SearchTextField = ({ width }: SearchTextFieldProps) => {
  const { t } = useTranslation();
  return (
    <TextField
      InputProps={{
        startAdornment: <Search sx={{ color: "white" }} />,
      }}
      hiddenLabel
      sx={{
        backgroundColor: "#39373a",
        borderRadius: "15px",
        input: {
          color: "white",
        },
        width: width || "90%",
      }}
      placeholder={t("desktop.footer.searchPlaceholder")}
    />
  );
};

export default SearchTextField;
